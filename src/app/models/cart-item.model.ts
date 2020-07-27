export class CartItem {

    public id: number;
    public name: string;
    public itemPrice: number;
    public noOfItems: number;
    public totalPrice: number;

    constructor(id: number, name: string, itemPrice: number, noOfItems: number, totalPrice: number) {
        this.id = id;
        this.name = name;
        this.itemPrice = itemPrice;
        this.noOfItems = noOfItems;
        this.totalPrice = totalPrice;
    }

}