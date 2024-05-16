document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const fullName = document.getElementById('fullName').value;

    // Display user data
    document.getElementById('displayFullName').textContent = fullName;
    document.getElementById('displayContact').textContent = generateRandomNumber();
    document.getElementById('displayDOB').textContent = generateRandomDate();
    document.getElementById('displayRate').textContent = generateRandomRate();
    document.getElementById('displayEmail').textContent = generateEmail(fullName);

    // Show user data
    document.getElementById('userData').classList.remove('hidden');
});

// Function to generate a random 10-digit number
function generateRandomNumber() {
    return Math.floor(Math.random() * 9000000000) + 1000000000;
}

// Function to generate a random date in the format YYYY-MM-DD
function generateRandomDate() {
    const year = Math.floor(Math.random() * (2004 - 1970 + 1)) + 1970;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; // Considering all months have 28 days for simplicity
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Function to generate a random rate from 1 to 5
function generateRandomRate() {
    return Math.floor(Math.random() * 5) + 1;
}

// Function to generate email
function generateEmail(fullName) {
    const length = fullName.split(' ').join('').length;
    return `${fullName.replace(/\s+/g, '').toLowerCase()}${length}@gmail.com`;
}
