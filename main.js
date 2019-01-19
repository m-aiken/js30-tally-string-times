// Array of all elements containing data-time attribute
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
        
const seconds = timeNodes
    // Extract values associated with data-time
    .map(node => node.dataset.time)
    .map(timeCode => {
        // Split strings (ie. "2:34") into mins/secs numbers (ie. 2 34)
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        // Combine into total seconds
        // 2 34 becomes 120 + 34 = 154 total
        return (mins * 60) + secs;
    })
    // Add all seconds together
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
// Math.floor() to round down to nearest whole number
const hours = Math.floor(secondsLeft / 3600);
// % to update secondsLeft with remainder
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);