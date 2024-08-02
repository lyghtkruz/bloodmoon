const BLOODMOON_DAY = 7;

function calculateDaysLeft() {
    const currentDay = parseInt(document.getElementById('currentDay').value);
    if (isNaN(currentDay)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }
    
    const remainder = currentDay % BLOODMOON_DAY;
    const daysLeft = remainder === 0 ? 0 : BLOODMOON_DAY - remainder;
    const nextBloodMoon = currentDay + daysLeft;

    const result = `
        Day <strong class="red-text">${nextBloodMoon}</strong><br>
        <span class="${document.body.classList.contains('dark-mode') ? 'dark-text' : 'light-text'}">
            ${daysLeft === 0 ? 'Today' : daysLeft + ' days left'}
        </span>
    `;

    document.getElementById('result').innerHTML = result;
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        calculateDaysLeft();
    }
}

document.getElementById('themeToggle').addEventListener('change', function() {
    const logo = document.getElementById('logo');
    if (this.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        logo.src = 'images/7DAYS_LOGO_Stacked_white.png';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        logo.src = 'images/7DAYS_LOGO_Stacked_black.png';
    }
});

// Set dark mode by default because white screens are blinding!
document.body.classList.add('dark-mode');
document.getElementById('logo').src = 'images/7DAYS_LOGO_Stacked_white.png';
