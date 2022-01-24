const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },

    {
        "titel":"Zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },
    {
        "titel":"Herfst",
        "image":"img/autumn.jpg",
        "backGround":"red"
    },
    {
        "titel":"Winter",
        "image":"img/winter.jpg",
        "backGround":"aqua"
    },



];

function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}

