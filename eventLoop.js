const countdownTimer = document.getElementById('countdown')

function countdown() {
    const countdownDate = new Date("January 1, 2024 00:00:00").getTime();
    
    const now = new Date().getTime();

    const difference = countdownDate - now;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
 
    countdownTimer.innerHTML = `${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд `
   
    if (difference < 0) {
        countdownTimer.innerHTML = 'З Новим Роком!'
    }
  }
 setInterval(countdown, 1000);