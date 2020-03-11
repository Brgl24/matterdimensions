var matter = 10;

setInterval(function(){
    gameincrement()
    updateallhtml()
}, 1000);

class Maker {
    constructor(c) {
        this.cost = c
        this.amount = 0
        this.costmult = 1
        this.purchased = 1
        this.truecost = 0
    }

    getCost() {
        this.truecost = this.cost * this.costmult
    }

    purchaseIncrement() {
        this.costmult = this.costmult * 1.5;
        this.amount += 1;
        this.purchased += 1;
    }
}

var makers = [];
for (i = 0; i < 9; i++) {
    makers[i] = new Maker((Math.pow(10, (i + 1))));
} 

function buymaker(x) {
    for (i = 0; i < 9; i++) {
        if (i == (x - 1)) {
            if(matter >= makers[i].cost * makers[i].costmult) {
                matter = matter - (makers[i].cost * makers[i].costmult);
                makers[i].purchaseIncrement();
                console.log("uh")
            }
        }
    }
}

function gameincrement() {
    for (i = 0; i < 9; i++) {
        if (i >= 1) {    
            makers[i - 1].amount = makers[i - 1].amount + (makers[i].amount);
        }else {
            matter = matter + makers[i].amount 
        }
    }
}

function updateallhtml() {
    for (i = 0; i < 9; i++) {
        let idhelper = (i + 1);
        let tempcost = makers[i].cost * makers[i].costmult
        let precision1 = makers[i].amount
        let precision2 = matter
        let precision3 = tempcost
        precision1 = makesmallnumbersprecise(precision1);
        precision2 = makesmallnumbersprecise(precision2);
        precision3 = makesmallnumbersprecise(precision3);
        document.getElementById("maker" + idhelper).innerHTML = "----- " + precision1 + " T" + idhelper + " Makers Each Making 1 T" + idhelper + " Maker Per Second"; 
        document.getElementById("buyMaker" + idhelper + "button").innerHTML = "Buy T" + idhelper + " Maker | Cost: " + precision3 + " Matter";
        document.getElementById("matterpersecond").innerHTML = "@ " + makers[0].amount + " Matter Per Second";
        document.getElementById("matter").innerHTML = precision2 + " Matter";
    } 
}

function makesmallnumbersprecise(precision) {
    if (precision < 10) {
        return precision = precision.toPrecision(1);
    } else if (precision < 100 && precision >= 10) {
        return precision = precision.toPrecision(2);
    } else {
        return precision = precision.toPrecision(3);
    }
}





// document.getElementById("maker2").innerHTML = "----- " + maker2amount + " Tier Two Makers Each Making 1 T1 Maker Per Second"; 
// document.getElementById("buyMaker2button").innerHTML = "Buy T2 Maker | Cost: " + (maker2costreal) + " Matter";











// var matter = 10;
// var maker1amount = 0;
// var maker1pricemultiplier = 1;
// var maker1purchased = 1;
// var maker2amount = 0;
// var maker2pricemultiplier = 1;
// var maker2purchased = 1;
// var maker3amount = 0;
// var maker3pricemultiplier = 1;
// var maker3purchased = 1;    
// var maker4amount = 0;
// var maker4pricemultiplier = 1;
// var maker4purchased = 1;
// var maker5amount = 0;
// var maker5pricemultiplier = 1;
// var maker5purchased = 1;
// var maker6amount = 0;
// var maker6pricemultiplier = 1;
// var maker6purchased = 1;
// var maker7amount = 0;
// var maker7pricemultiplier = 1;
// var maker7purchased = 1;
// var maker8amount = 0;
// var maker8pricemultiplier = 1;
// var maker8purchased = 1;
// var maker9amount = 0;
// var maker9pricemultiplier = 1;
// var maker9purchased = 1;
// var fuel1 = 0;
// var fuel2 = 0;
// var fuel3 = 0;
// var matterpersecond = 0;
// var tickmult = 0.05;
// var maker1cost = 10;
// var maker2cost = 100;
// var maker3cost = 1000;
// var maker4cost = 1e4;
// var maker5cost = 1e5;
// var maker6cost = 1e6;
// var maker7cost = 1e7;
// var maker8cost = 1e8;
// var maker9cost = 1e9;


// setInterval(function(){
//     updatematter();
//     updateMatterPerSecond();
// }, 1000/20);

// setInterval(function(){
//     updateMakers();
// }, 1000)

// function buyMaker1() {

//     if(matter >= (10 * maker1pricemultiplier)) {
//         matter = matter - ( 10 * maker1pricemultiplier );
//         maker1pricemultiplier = maker1pricemultiplier + (0.1 + maker1purchased/10);
//         maker1amount += 1;
//         maker1purchased += 1;
//     }
// }

// function buyMaker2() {

//     if(matter >= (100 * maker2pricemultiplier)) {
//         matter = matter - ( 100 * maker2pricemultiplier );
//         maker2pricemultiplier = maker2pricemultiplier + (0.1 + maker2purchased/10);
//         maker2amount += 1;
//         maker2purchased += 1;
//     }
// }

// function buyMaker3() {

//     if(matter >= (1000 * maker3pricemultiplier)) {
//         matter = matter - ( 1000 * maker3pricemultiplier );
//         maker3pricemultiplier = maker3pricemultiplier + (0.1 + maker3purchased/10);
//         maker3amount += 1;
//         maker3purchased += 1;
//     }
// }

// function buyMaker4() {

//     if(matter >= (1e4 * maker4pricemultiplier)) {
//         matter = matter - ( 1e4 * maker4pricemultiplier );
//         maker4pricemultiplier = maker4pricemultiplier + (0.1 + maker4purchased/10);
//         maker4amount += 1;
//         maker4purchased += 1;
//     }
// }

// function buyMaker5() {

//     if(matter >= (1e5 * maker5pricemultiplier)) {
//         matter = matter - ( 1e5 * maker5pricemultiplier );
//         maker5pricemultiplier = maker5pricemultiplier + (0.1 + maker5purchased/10);
//         maker5amount += 1;
//         maker5purchased += 1;
//     }
// }

// function buyMaker6() {

//     if(matter >= (1e6 * maker6pricemultiplier)) {
//         matter = matter - ( 1e6 * maker6pricemultiplier );
//         maker6pricemultiplier = maker6pricemultiplier + (0.1 + maker6purchased/10);
//         maker6amount += 1;
//         maker6purchased += 1;
//     }
// }

// function buyMaker7() {

//     if(matter >= (1e7 * maker7pricemultiplier)) {
//         matter = matter - ( 1e7 * maker7pricemultiplier );
//         maker7pricemultiplier = maker7pricemultiplier + (0.1 + maker7purchased/10);
//         maker7amount += 1;
//         maker7purchased += 1;
//     }
// }

// function buyMaker8() {

//     if(matter >= (1e8 * maker8pricemultiplier)) {
//         matter = matter - ( 1e8 * maker8pricemultiplier );
//         maker8pricemultiplier = maker8pricemultiplier + (0.1 + maker8purchased/10);
//         maker8amount += 1;
//         maker8purchased += 1;
//     }
// }

// function buyMaker9() {

//     if(matter >= (1e9 * maker9pricemultiplier)) {
//         matter = matter - ( 1e9 * maker9pricemultiplier );
//         maker9pricemultiplier = maker9pricemultiplier + (0.1 + maker9purchased/10);
//         maker9amount += 1;
//         maker9purchased += 1;
//     }
// }

// function updateMakers() {

//     maker1cost = 10 * maker1pricemultiplier
//     maker2cost = 100 * maker2pricemultiplier
//     maker3cost = 1000 * maker3pricemultiplier
//     maker4cost = 1e4 * maker4pricemultiplier
//     maker5cost = 1e5 * maker5pricemultiplier
//     maker6cost = 1e6 * maker6pricemultiplier
//     maker7cost = 1e7 * maker7pricemultiplier
//     maker8cost = 1e8 * maker8pricemultiplier
//     maker9cost = 1e9 * maker9pricemultiplier

//     var maker1costreal = maker1cost.toPrecision(3);
//     var maker2costreal = maker2cost.toPrecision(3);
//     var maker3costreal = maker3cost.toPrecision(3);
//     var maker4costreal = maker4cost.toPrecision(3);
//     var maker5costreal = maker5cost.toPrecision(3);
//     var maker6costreal = maker6cost.toPrecision(3);
//     var maker7costreal = maker7cost.toPrecision(3);
//     var maker8costreal = maker8cost.toPrecision(3);
//     var maker9costreal = maker9cost.toPrecision(3);

//     //updates maker1 stuff
//     document.getElementById("maker1").innerHTML = "----- " + (maker1amount + 1) + " Tier One Makers Each Making 1 Matter Per Second";
//     document.getElementById("buyMaker1button").innerHTML = "Buy T1 Maker | Cost: " + (maker1costreal) + " Matter";

//     //updates maker2 stuff
//     maker1amount = maker1amount + (maker2amount);
//     document.getElementById("maker2").innerHTML = "----- " + maker2amount + " Tier Two Makers Each Making 1 T1 Maker Per Second"; 
//     document.getElementById("buyMaker2button").innerHTML = "Buy T2 Maker | Cost: " + (maker2costreal) + " Matter";

//     //updates maker3 stuff
//     maker2amount = maker2amount + (maker3amount);
//     document.getElementById("maker3").innerHTML = "----- " + maker3amount + " Tier Three Makers Each Making 1 T2 Maker Per Second"; 
//     document.getElementById("buyMaker3button").innerHTML = "Buy T3 Maker | Cost: " + (maker3costreal) + " Matter";

//     //updates maker4 stuff
//     maker3amount = maker3amount + (maker4amount);
//     document.getElementById("maker4").innerHTML = "----- " + maker4amount + " Tier Four Makers Each Making 1 T3 Maker Per Second"; 
//     document.getElementById("buyMaker4button").innerHTML = "Buy T4 Maker | Cost: " + (maker4costreal) + " Matter";

//     //updates maker5 stuff
//     maker4amount = maker4amount + (maker5amount);
//     document.getElementById("maker5").innerHTML = "----- " + maker5amount + " Tier Five Makers Each Making 1 T4 Maker Per Second"; 
//     document.getElementById("buyMaker5button").innerHTML = "Buy T5 Maker | Cost: " + (maker5costreal) + " Matter";

//     //updates maker6 stuff
//     maker5amount = maker5amount + (maker6amount);
//     document.getElementById("maker6").innerHTML = "----- " + maker6amount + " Tier Six Makers Each Making 1 T5 Maker Per Second"; 
//     document.getElementById("buyMaker6button").innerHTML = "Buy T6 Maker | Cost: " + (maker6costreal) + " Matter";

//     //updates maker7 stuff
//     maker6amount = maker6amount + (maker7amount);
//     document.getElementById("maker7").innerHTML = "----- " + maker7amount + " Tier Seven Makers Each Making 1 T6 Maker Per Second"; 
//     document.getElementById("buyMaker7button").innerHTML = "Buy T7 Maker | Cost: " + (maker7costreal) + " Matter";

//     //updates maker8 stuff
//     maker7amount = maker7amount + (maker8amount);
//     document.getElementById("maker8").innerHTML = "----- " + maker8amount + " Tier Eight Makers Each Making 1 T7 Maker Per Second"; 
//     document.getElementById("buyMaker8button").innerHTML = "Buy T8 Maker | Cost: " + (maker8costreal) + " Matter";

//     //updates maker9 stuff
//     maker8amount = maker8amount + (maker9amount);
//     document.getElementById("maker9").innerHTML = "----- " + maker9amount + " Tier Nine Makers Each Making 1 T8 Maker Per Second"; 
//     document.getElementById("buyMaker9button").innerHTML = "Buy T9 Maker | Cost: " + (maker9costreal) + " Matter";
// }

// function updateMatterPerSecond() {

//     //updates matterpersecond
//     matterpersecond = (1 * maker1amount) - maker2amount;

//     //updates matterpersecond text in index
//     document.getElementById("matterpersecond").innerHTML = matterpersecond + " Matter Per Second";
// }

// function updatematter() {
    
//     //updates matter amount
//     matter = matter + (maker1amount * tickmult);

//     var matterReal = matter.toPrecision(3);

//     //updates matter text in index
//     document.getElementById("matter").innerHTML = matterReal + " Matter";

// }