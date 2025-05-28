let display;

function updateClock()
 {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  document.querySelector('#display .one').textContent = hours;
  document.querySelector('#display .two').textContent = minutes;
  document.querySelector('#display .three').textContent = seconds;

}

function clockstart() 
{
    display = setInterval(updateClock, 1000);
}

function clockstop()
 {
  clearInterval(display);
}

function clockreset()
{
  document.querySelector('#display .one').textContent = "00";
  document.querySelector('#display .two').textContent = "00";
  document.querySelector('#display .three').textContent = "00";

}