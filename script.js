document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Simple login check
    if (username === 'sajidariffrafikyuf' && password === '123') {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('profile-page').style.display = 'block';
        document.getElementById('profile-username').textContent = username;
    } else {
        alert('Invalid username or password');
    }
});

function saveSettings() {
    let newUsername = document.getElementById('new-username').value;
    let newPassword = document.getElementById('new-password').value;
    
    if (newUsername) {
        document.getElementById('profile-username').textContent = newUsername;
    }

    alert('Changes saved!');
    closeSettings();
}

function closeSettings() {
    document.getElementById('settings').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';
}

function closeSearch() {
    document.getElementById('search').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';
}

function closeAlertReminders() {
    document.getElementById('alert-reminders').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';
}

function closeSupport() {
    document.getElementById('support').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';
}

function closeWasteManagement() {
    document.getElementById('waste-management').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';
}

function closeStats() {
    document.getElementById('stats').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';
}

document.getElementById('settings-button').addEventListener('click', function () {
    document.getElementById('settings').style.display = 'block';
    document.getElementById('profile-page').style.display = 'none';
});

document.getElementById('search-button').addEventListener('click', function () {
    document.getElementById('search').style.display = 'block';
    document.getElementById('profile-page').style.display = 'none';
});

document.getElementById('alert-button').addEventListener('click', function () {
    document.getElementById('alert-reminders').style.display = 'block';
    document.getElementById('profile-page').style.display = 'none';
});

document.getElementById('support-button').addEventListener('click', function () {
    document.getElementById('support').style.display = 'block';
    document.getElementById('profile-page').style.display = 'none';
});

document.getElementById('waste-button').addEventListener('click', function () {
    document.getElementById('waste-management').style.display = 'block';
    document.getElementById('profile-page').style.display = 'none';
});

document.getElementById('stats-button').addEventListener('click', function () {
    document.getElementById('stats').style.display = 'block';
    document.getElementById('profile-page').style.display = 'none';

    // Create a Pie Chart for Waste Exposure Stats
    var ctx = document.getElementById('waste-pie-chart').getContext('2d');
    var wastePieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Biodegradable', 'Non-Biodegradable', 'Exposed Waste'],
            datasets: [{
                label: 'Waste Exposure Stats',
                data: [60, 30, 10], // Example data: 60% biodegradable, 30% non-biodegradable, 10% exposed
                backgroundColor: ['#FFDDC1', '#D1E8E2', '#FFABAB'],
                borderColor: ['#FF9A8B', '#B4D9D9', '#FF7A7A'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
});

// Logout functionality
function logout() {
    document.getElementById('profile-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}