let date = document.getElementById('date')
let calculate = document.getElementById('calculate')
let result = document.getElementById('result')
const reset = document.getElementById('reset')

// Max for today's date
date.max = new Date().toISOString().split('T')[0];

// Function to calculate Age
function calculateAge() {
    let today = new Date();
    let birthDate = new Date(date.value)

    // Get years
    let years;
    if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
        years = today.getFullYear() - birthDate.getFullYear();
    } else {
        years = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    // Get months
    let months;
    if (today.getDate() >= birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth();
    } else if (today.getDate() < birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth() - 1;
    }

    months = months < 0 ? months + 12 : months;

    // Get Days
    let day;
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (today.getDate() >= birthDate.getDate()) {
        day = today.getDate() - birthDate.getDate()
    } else {
        day = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
    }

    if(date.value == '') {
        result.innerHTML = "Please Enter Valid Date!!!!"
    }

    // Printing result of days
    result.innerHTML = `<p class="birthdate">You were born on ${birthDate.toDateString()}</p>`
    result.innerHTML += `<p class="date">You are ${years} years, ${months} months and ${day} days old</p>`

    // If today's date is equal to birth date
    if (months == 0 && day == 0) {
        result.innerHTML = `<p class="birthday">Happy BirthDay!!!!</p>`
        result.innerHTML += `<p class="birth"> You are now ${years} years old.</p>`
    }
}

//Reset button

reset.addEventListener('click', () => {
    result.innerHTML = '';
    date.value = '';
})

// Event Listeners
calculate.addEventListener('click', () => {
    calculateAge();
    reset.classList.toggle('active');
})


document.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        calculate.click();
    }
})

// Focus on date section every time when page reload.
date.focus()