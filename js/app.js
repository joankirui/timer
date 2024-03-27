const endDate = '27 MARCH 2024 2:00 AM'

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000

    if(diff = 0) return;
    // convert to days
    inputs[0].value = Math.floor(diff / 3600 / 24)
    // This line calculates the number of whole hours represented by the remaining time after converting days.
    inputs[1].value = Math.floor(diff / 3600) % 24
    // This line calculates the number of whole minutes represented by the remaining time after converting days and hours
    inputs[2].value = Math.floor(diff / 60) % 60
    // This line calculates the number of whole seconds represented by the remaining time after converting days, hours, and minutes
    inputs[3].value = Math.floor(diff) % 60
}

// initial call
clock()

// 1 day = 24 Hrs 
// 1 hr = 60 mins 
// 1 min = 60 sec
// 60 mins = 3600 sec

setInterval(
    () => {
        clock()
    },
    1000
)