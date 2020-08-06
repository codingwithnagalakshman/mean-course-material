import { Product } from './product.model';
import ShippingAddress from './shipping-address.model';
import { Payment } from './payment.model';
import { CartItem } from './cart-item.model';

export class Order {
    
    public cartItems: CartItem[];
    public shippingAddress: ShippingAddress;
    public payment: string;
    public totalAmount: number;

    constructor(cartItems: CartItem[], shippingAddress: ShippingAddress,
                payment: string, totalAmount: number) {
        this.cartItems = cartItems;
        this.shippingAddress = shippingAddress;
        this.payment = payment;
        this.totalAmount = totalAmount;
    }
}