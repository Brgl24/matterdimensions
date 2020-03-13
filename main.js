var matter = 10;

setInterval(function(){
    gameincrement()
    updateallhtml()
}, 1000/50);

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
            makers[i - 1].amount = makers[i - 1].amount + ((makers[i].amount) * 0.02);
        }else {
            matter = matter + (makers[i].amount  * 0.02)
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
        let precision4 = makers[0].amount
        let makeramount = makesmallnumbersprecise(precision1);
        let matteramount = makesmallnumbersprecise(precision2);
        let costamount = makesmallnumbersprecise(precision3);
        let maker0amount = makesmallnumbersprecise(precision4)
        document.getElementById("maker" + idhelper).innerHTML = "----- " + makeramount + " T" + idhelper + " Makers Each Making 1 T" + idhelper + " Maker Per Second"; 
        document.getElementById("buyMaker" + idhelper + "button").innerHTML = "Buy T" + idhelper + " Maker | Cost: " + costamount + " Matter";
        document.getElementById("matterpersecond").innerHTML = "@ " + maker0amount + " Matter Per Second";
        document.getElementById("matter").innerHTML = matteramount + " Matter";
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