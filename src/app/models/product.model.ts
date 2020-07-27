export class Product {
    
    public _id: string;
    public productId: number;
    public title: string;
    public price: number;
    public createdAt: string;
    public updatedAt: string;

    constructor(_id: string, productId: number, title: string, 
                price: number, createdAt: string, updatedAt: string) {
        this._id = _id;
        this.productId = productId;
        this.price = price;
        this.title = title;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}