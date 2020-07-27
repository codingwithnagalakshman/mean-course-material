export default class Contactus {
    public firstName: string;
    public lastName: string;
    public email: string;
    public subject: string;
    public description: string;

    constructor(firstName: string, lastName: string, email: string,
                subject: string, description: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.description = description;
    }

}