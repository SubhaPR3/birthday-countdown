(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date();
    
    // Set the exact target: May 4th. 
    // In JavaScript, months are 0-indexed (Jan = 0, Feb = 1, Mar = 2, Apr = 3, May = 4)
    let birthday = new Date(today.getFullYear(), 4, 4); 

    // If today is past May 4th, push the target to May 4th of next year
    if (today.getTime() > birthday.getTime()) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }

    const countDown = birthday.getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / day);
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

            if (distance < 0) {
                // Customizing the headline based on your text
                document.getElementById("headline").innerText = "It's Koli's birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 1000);
})();
