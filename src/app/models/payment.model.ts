export class Payment {

    public name: string;
    public cardnumber: string;
    public expiry: string;
    public cvv: string;

    constructor(name: string, cardnumber: string, expiry: string, cvv: string) {
        this.name = name;
        this.cardnumber = cardnumber;
        this.expiry = expiry;
        this.cvv = cvv;
    }

}