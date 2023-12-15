let hour = document.getElementById("hrs")
let min = document.getElementById("min")
let second = document.getElementById("sec")
setInterval(()=>{
    let date = new Date ();
    hour.innerHTML = (date.getHours()<10?"0":"")+date.getHours();
    min.innerHTML = (date.getMinutes()<10?"0":"")+date.getMinutes();
    second.innerHTML = (date.getSeconds()<10?"0":"")+date.getSeconds();
},1000)