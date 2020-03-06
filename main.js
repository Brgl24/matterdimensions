var matter = 10;
var maker1amount = 0;
var maker1pricemultiplier = 1;
var maker1purchased = 1;
var maker2amount = 0;
var maker2pricemultiplier = 1;
var maker2purchased = 1;
var maker3 = 0;
var fuel1 = 0;
var fuel2 = 0;
var fuel3 = 0;
var matterpersecond = 0;

setInterval(function(){
    updatematter()
    updateMakers();
    updateMatterPerSecond()
}, 1000);

function buyMaker1() {

    if(matter >= (10 * maker1pricemultiplier)) {
        matter = matter - ( 10 * maker1pricemultiplier );
        maker1pricemultiplier = maker1pricemultiplier + (0.1 + maker1purchased/10);
        maker1amount += 1;
        maker1purchased += 1;
    }
}
function buyMaker2() {

    if(matter >= (100 * maker2pricemultiplier)) {
        matter = matter - ( 10 * maker2pricemultiplier );
        maker2pricemultiplier = maker2pricemultiplier + (0.1 + maker2purchased/10);
        maker2amount += 1;
        maker2purchased += 1;
    }
}
function updateMakers() {

    //updates matter text in index
    document.getElementById("matter").innerHTML = matter + " Matter";

    //updates maker1 stuff
    document.getElementById("maker1").innerHTML = "----- " + (maker1amount + 1) + " Tier One Makers Each Making 1 Matter Per Second";
    document.getElementById("buyMaker1button").innerHTML = "Buy T1 Maker | Cost: " + (10 * maker1pricemultiplier) + " Matter";

    //updates maker2 stuff
    maker1amount = maker1amount + (maker2amount);
    document.getElementById("maker2").innerHTML = "----- " + maker2amount + " Tier Two Makers Each Making 1 T1 Maker Per Second"; 
    document.getElementById("buyMaker2button").innerHTML = "Buy T2 Maker | Cost: " + (100 * maker2pricemultiplier) + " Matter";
}

function updateMatterPerSecond() {

    //updates matterpersecond
    matterpersecond = 1 * maker1amount;

    //updates matterpersecond text in index
    document.getElementById("matterpersecond").innerHTML = matterpersecond + " Matter Per Second";
}

function updatematter() {
    
    //updates matter amount
    matter = matter + (maker1amount);

}