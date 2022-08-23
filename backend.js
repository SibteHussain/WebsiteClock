function showtime(){
    const d=new Date();
year=d.getFullYear();
date=d.getDate();
day=d.getDay();
month=d.toLocaleString('default', { month: 'long' });
hour=d.getHours();
minutes=d.getMinutes();
seconds=d.getSeconds();
document.getElementById("date").innerHTML= `Today\'s date is ${date}` + " " + month + " " + year;
document.getElementById("time").innerHTML=hour + ': ' + minutes + ': ' +seconds;
console.log(hours);
}setInterval(showtime, 1000);