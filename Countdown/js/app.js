const endDate = "7 July 2023 12:00 AM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate);
    const now = new Date(); 
    const diff = (end - now) / 1000;

    //stop clock from going to negative value
    if(diff<0) {
        return
    }

    //Convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    //Convert into hours
    inputs[1].value = Math.floor((diff / 3600) % 24);

    //Convert into minutes
    inputs[2].value = Math.floor((diff / 60) % 60);

    //Convert into seconds
    inputs[3].value = Math.floor(diff % 60);
}

clock()

setInterval( () => {
    clock()
}, 1000
)
/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 secs
 */