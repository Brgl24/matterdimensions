class maker {
    constructor(c, w) {
        cost = c
        amount = 1
        costmult = 1
        purchased = 0
        whichmaker = w
    }
    buymaker(){

    }
    updatemakeramounts(){

    }
}

var makers = [];
for (i = 0; i < 9; i++) {
    makers[i] = new Maker(10 * i)
} 

var makers = [];
for (i = 0; i < 9; i++) {
    makers[i] = new Maker(i + 1)
} 