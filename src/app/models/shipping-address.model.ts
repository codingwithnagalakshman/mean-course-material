export default class ShippingAddress {

    public firstName: string;
    public lastName: string;
    public email: string;
    public address: string;
    public address2: string;
    public city: string;
    public state: string;
    public postalCode: string;
    public telephone: string;

    constructor(firstName: string,  lastName: string, email: string, address: string,
                address2: string, city: string, state: string, postalCode: string,
                telephone: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.telephone = telephone;
    }

}