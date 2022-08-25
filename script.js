// Product Dropdown Toggle

const proBtn = document.querySelector('.product-btn');
const proDrop = document.querySelector('#product-dropdown');
const closeBtn = document.querySelector('.close-btn');
const hamBtn = document.querySelector('.navbar-toggler');

proBtn.addEventListener('click', () => {
    proDrop.classList.toggle('hide');
})

closeBtn.addEventListener('click', () => {
    proDrop.classList.toggle('hide');
})

hamBtn.addEventListener('click', () => {
    proDrop.classList.add('hide');
})

// Accordion Toggle Function

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.remove('fa-angle-right');
            icons[i].classList.add('fa-angle-down');
        }
        else{
            contentDiv[i].style.height = "0px";
            icons[i].classList.remove('fa-angle-down');
            icons[i].classList.add('fa-angle-right');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                icons[j].classList.remove('fa-angle-down');
                icons[j].classList.add('fa-angle-right');
            }
        }
    });
}

// Forms Tab Switching

$(document).ready(function(){
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab("show");
    });
});

// Google Map Function

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}