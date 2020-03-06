var matter = 10;
var maker1amount = 0;
var maker1pricemultiplier = 1;
var maker2 = 0;
var maker3 = 0;
var fuel1 = 0;
var fuel2 = 0;
var fuel3 = 0;
var matterpersecond = 0;

setInterval(function(){
    updateMakers();
    updateMatterPerSecond()
}, 1000);

function buyMaker1() {

    if(matter >= (10 * maker1pricemultiplier)) {
        matter = matter - ( 10 * maker1pricemultiplier );
        maker1pricemultiplier = maker1pricemultiplier + (0.1 + maker1amount/10);
        maker1amount = maker1amount + 1;
    }
}
function updateMakers() {
    matter = matter + (maker1amount);
    document.getElementById("matter").innerHTML = matter + " Matter";
    document.getElementById("maker1").innerHTML = "----- " + maker1amount + " Tier One Makers Each Making 1 Matter Per Second";
    document.getElementById("buyMaker1button").innerHTML = "Buy T1 Maker | Cost: " + (10 * maker1pricemultiplier) + " Matter"
}

function updateMatterPerSecond() {
    matterpersecond = 1 * maker1amount
    document.getElementById("matterpersecond").innerHTML = matterpersecond + " Matter Per Second";
}