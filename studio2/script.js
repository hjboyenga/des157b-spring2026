/* SCRIPT.JS — Heat Calendar: Monthly Mileage
   
   Starting Goals
     1. Loads data from running.json
     2. Figures out colors based on mileage
     3. Builds the calendar grid on the page
     4. Shows a tooltip when you hover a cell

   KEY TERMS I USED
   async function → a function that can pause and wait
   await → "pause here until this finishes"
   fetch() → requests a file from the server
   .json() → converts the raw text into JS data
   Object.values() → turns {key: value} into [value, value]
   forEach() → loops over every item in an array
   querySelector() → finds an HTML element using a CSS selector
*/


/* STEP 1 — LOAD THE DATA FROM running.json*/
async function getData() {

    // Ask the server for running.json and wait for it
    const response = await fetch('running.json');
    // The response is raw text. .json() converts it
    // into a real JavaScript object I can work with.
    const jsonObject = await response.json();
    // My JSON looks like: { "point1": {...}, "point2": {...} }
    // Object.values() strips the keys ("point1" etc.) and gives me just an array of the data objects inside.
    // Result: [ {month:"May", year:2019, ...}, {month:"June"...}]
    const dataArray = Object.values(jsonObject);
    // Pass the data into each builder function below
    buildCalendar(dataArray);
    buildLegend(dataArray);
    buildStats(dataArray);

}

/*STEP 2 — FIGURE OUT WHAT COLOR A CELL SHOULD BE
This section had a lot of math so I had help from Claude.AI*/
function getColor(miles, minMiles, maxMiles) {
    // t = 0 means this is the lowest mileage month
    // t = 1 means this is the highest mileage month
    // t = 0.5 means exactly in the middle
    const t = (miles - minMiles) / (maxMiles - minMiles);
    // Each entry is: [ position on strip (0–1), [R,G,B] ]
    const colorStops = [
        [0.00, [26,15,0]],    // very dark brown (lowest miles)
        [0.20, [61,31,0]],
        [0.40, [122,61,0]],
        [0.60, [196,96,0]],
        [0.80, [252,106,0]],
        [1.00, [255,160,80]],   // bright orange (highest miles)
    ];
    // Find which two swatches our value t sits between,
    // then blend them together proportionally
    for (let i = 1; i < colorStops.length; i++) {
        if (t <= colorStops[i][0]) {
            // The two swatches we're blending between
            const positionA = colorStops[i - 1][0];
            const colorA = colorStops[i - 1][1];
            const positionB = colorStops[i][0];
            const colorB = colorStops[i][1];

            // How far between swatchA and swatchB are we? (0–1)
            const blend = (t - positionA) / (positionB - positionA);
            // Mix each channel: Red, Green, Blue
            const red   = Math.round(colorA[0] + blend * (colorB[0] - colorA[0]));
            const green = Math.round(colorA[1] + blend * (colorB[1] - colorA[1]));
            const blue  = Math.round(colorA[2] + blend * (colorB[2] - colorA[2]));

            // Return a CSS color string like "rgb(196, 96, 0)"
            return `rgb(${red}, ${green}, ${blue})`;
        }
    }
    // Safety fallback — shouldn't normally be reached
    return 'rgb(255, 160, 80)';
}


/* STEP 3 — CALCULATE PERCENTILE RANK
More math so I had some help from Claude.AI 
"Top 15% of all months" by comparing it
to every other month in the dataset.*/
function getRank(miles, allMilesArray) {
    // Sort a copy of the array from lowest to highest.
    // [...allMilesArray] to make a copy first
    // .sort() modifies the array in place, and I don't want to change the original.
    const sorted = [...allMilesArray].sort(function(a, b) {
        return a - b;
    });
    // Count how many months had fewer miles than this one
    let monthsBelowThis = 0;
    sorted.forEach(function(m) {
        if (m < miles) {
            monthsBelowThis = monthsBelowThis + 1;
        }
    });

    const rank = monthsBelowThis + 1;
    // Convert to a "top X%" figure
    // e.g. rank 80 out of 84 to top 5%
    const percentile = Math.round((1 - rank / sorted.length) * 100);

    // Avoid showing "Top 0%" for the single best month
    if (percentile === 0) {
        return 'Top 1% of all months';
    }

    return `Top ${percentile}% of all months`;
}

/* STEP 4 — BUILD THE CALENDAR GRID
   Builds one big HTML string and drops it into
   the #calendar div all at once with innerHTML.*/
function buildCalendar(dataArray) {
 
    // Short month names for the column headers
    const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun',
                    'Jul','Aug','Sep','Oct','Nov','Dec'];
 
    // Converts a full month name to a 0-11 column index
    // e.g. MONTH_INDEX['July'] = 6
    const MONTH_INDEX = {
        January:0,  February:1,  March:2,    April:3,
        May:4,      June:5,      July:6,     August:7,
        September:8, October:9, November:10, December:11
    };
 
    // Pull out just the mileage numbers to find min and max
    const allMilesArray = dataArray.map(function(entry) {
        return entry.distance_mi;
    });
 
    const maxMiles = Math.max(...allMilesArray);
    const minMiles = Math.min(...allMilesArray);
 
    // Build a lookup table so we can find any month's data
    // instantly by key instead of searching every time.
    // Key format: "2021-6" = July (index 6) of 2021
    const lookup = {};
 
    dataArray.forEach(function(entry) {
        const monthNumber = MONTH_INDEX[entry.month];
        const key = entry.year + '-' + monthNumber;
        lookup[key] = entry;
    });
 
    // Start with an empty string.
    // I will keep adding HTML to it with +=
    // until the whole calendar is written out.
    let html = '';
 
    // MONTH HEADER ROW
    // Open the header div, add a blank spacer for the
    // top-left corner, then add one label per month
    html += '<div class="month-labels">';
    html += '<div></div>';
    MONTHS.forEach(function(monthName) {
        html += '<div class="month-label">' + monthName + '</div>';
    });
    html += '</div>';
 
    // YEAR ROWS
    const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
 
    years.forEach(function(year) {
 
        html += '<div class="year-row">';
        html += '<div class="year-label">' + year + '</div>';
 
        // 12 MONTH CELLS
        for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
 
            const key = year + '-' + monthIndex;
 
            if (lookup[key]) {
                // I have data for this month
                const entry = lookup[key];
                const color = getColor(entry.distance_mi, minMiles, maxMiles);
 
                // Store the tooltip info as data- attributes on the div.
                // I can't add event listeners inside a string, so I save the data here and read it back later with dataset.
                html += '<div class="cell"'
                      + ' style="background:' + color + '"'
                      + ' data-label="' + entry.label + '"'
                      + ' data-miles="' + entry.distance_mi.toFixed(1) + '"'
                      + ' data-km="' + entry.distance_km.toFixed(1) + '"'
                      + ' data-rank="' + getRank(entry.distance_mi, allMilesArray) + '"'
                      + '></div>';
 
            } else {
                // No data for this month
                html += '<div class="cell empty"></div>';
            }
        }
 
        html += '</div>';
    });
 
    // Write the finished string into the page.
    // The browser reads the string and turns it into real HTML elements automatically.
    document.querySelector('#calendar').innerHTML = html;
 
    // ATTACH HOVER LISTENERS
    // Event listeners must be added AFTER innerHTML runs,
    // because the cells don't exist on the page until that line.
    // querySelectorAll gets every data cell (skipping empty ones)
    // as a list I can loop over.
    const dataCells = document.querySelectorAll('.cell:not(.empty)');
 
    dataCells.forEach(function(cell) {
 
        cell.addEventListener('mousemove', function(event) {
 
            const tooltip = document.querySelector('#tooltip');
 
            // Read back the data I stored in the data- attributes.
            // cell.dataset.label reads the data-label="..." attribute.
            document.querySelector('#tt-label').textContent = cell.dataset.label;
            document.querySelector('#tt-miles').textContent = cell.dataset.miles + ' mi · ' + cell.dataset.km + ' km';
            document.querySelector('#tt-rank').textContent  = cell.dataset.rank;
 
            tooltip.classList.add('visible');
 
            // Position the tooltip near the mouse cursor
            tooltip.style.left = (event.clientX + 16) + 'px';
            tooltip.style.top  = (event.clientY - 10) + 'px';
 
        });
 
        cell.addEventListener('mouseleave', function() {
            document.querySelector('#tooltip').classList.remove('visible');
        });
 
    });
 
}
 
 
/* STEP 5 — BUILD THE LEGEND
   Creates 8 colored boxes showing the color scale
   from lowest to highest mileage. */
function buildLegend(dataArray) {
 
    const allMilesArray = dataArray.map(function(entry) {
        return entry.distance_mi;
    });
 
    const maxMiles = Math.max(...allMilesArray);
    const minMiles = Math.min(...allMilesArray);
 
    const numberOfBoxes = 8;
    let html = '';
 
    for (let i = 0; i < numberOfBoxes; i++) {
 
        // t goes from 0.0 to 1.0 evenly across all boxes
        const t = i / (numberOfBoxes - 1);
 
        // What mileage does this step on the scale represent?
        const milesAtThisStep = minMiles + t * (maxMiles - minMiles);
        const color = getColor(milesAtThisStep, minMiles, maxMiles);
 
        html += '<div class="legend-cell" style="background:' + color + '"></div>';
    }
 
    // Write all 8 boxes into the page at once
    document.querySelector('#legend-cells').innerHTML = html;
 
}
 

/* STEP 6 — BUILD THE STATS BAR
Calculate a Summary of the Data, which meant more math. So I used some Claude to figure out the right equations*/
function buildStats(dataArray) {
    const allMilesArray = dataArray.map(function(entry) {
        return entry.distance_mi;
    });

    // Add up every value in the array to get total miles
    let totalMiles = 0;
    allMilesArray.forEach(function(miles) {
        totalMiles = totalMiles + miles;
    });

    // Average = total ÷ number of months
    const avgMiles = totalMiles / allMilesArray.length;

    // Find the entry with the highest mileage.
    // We start by assuming the first entry is the peak, then replace it whenever we find something higher.
    let peakEntry = dataArray[0];
    dataArray.forEach(function(entry) {
        if (entry.distance_mi > peakEntry.distance_mi) {
            peakEntry = entry;
        }
    });

    // The four numbers to display
    const statsToShow = [
        { value: Math.round(totalMiles).toLocaleString(), label: 'Total Miles'},
        { value: Math.round(avgMiles), label: 'Avg / Month'},
        { value: peakEntry.distance_mi.toFixed(0), label: 'Peak (' + peakEntry.label + ')'},
        { value: allMilesArray.length, label: 'Months Tracked'},
    ];

    const statsContainer = document.querySelector('#stats');
    statsToShow.forEach(function(stat) {
        const item = document.createElement('div');
        item.className = 'stat-item';

        // innerHTML lets us set HTML content as a string.
        // Template literals (backtick strings) make it easy to drop variable values into the string with ${}
        item.innerHTML = `
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>`;
        statsContainer.appendChild(item);
    });

}
/*Time to enter the Matrix - Start*/
getData();