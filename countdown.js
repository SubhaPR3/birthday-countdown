(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date();
    
    // In JavaScript, months are 0-indexed! (0 = Jan, 1 = Feb ... 4 = May)
    const targetMonth = 4; // May
    const targetDay = 4;   // 4th
    
    // Create a date object for May 4th of the current year
    let birthday = new Date(today.getFullYear(), targetMonth, targetDay);

    // If today's date is past May 4th, push the target to next year
    if (today.getTime() > birthday.getTime()) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }

    const countDown = birthday.getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("days").innerText = Math.floor(distance / day)),
            (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)),
            (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
            (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));

            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 1000);
})();
