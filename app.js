class Nokta {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Ucgen {
    constructor(nokta1, nokta2, nokta3) {
        this.nokta1 = nokta1;
        this.nokta2 = nokta2;
        this.nokta3 = nokta3;
    }

    cevreHesap = () => {
        const kenar1 = Math.sqrt(Math.pow((this.nokta2.x - this.nokta1.x), 2) + (Math.pow((this.nokta2.y - this.nokta1.y), 2)));
        const kenar2 = Math.sqrt(Math.pow((this.nokta3.x - this.nokta1.x), 2) + (Math.pow((this.nokta3.y - this.nokta1.y), 2)));
        const kenar3 = Math.sqrt(Math.pow((this.nokta3.x - this.nokta2.x), 2) + (Math.pow((this.nokta3.y - this.nokta2.y), 2)));
        return kenar1 + kenar2 + kenar3
    }
    alanHesap = () => {
        const alan = 0.5 * Math.abs(this.nokta1.x * this.nokta2.y + this.nokta2.x * this.nokta3.y + this.nokta3.x * this.nokta1.y - (this.nokta1.y * this.nokta2.x + this.nokta2.y * this.nokta3.x + this.nokta3.y * this.nokta1.x));
        return alan;
    }

}


const ucgen = new Ucgen(new Nokta(1, 1), new Nokta(5, 1), new Nokta(5, 4));

console.log(ucgen.cevreHesap())
console.log(ucgen.alanHesap())
