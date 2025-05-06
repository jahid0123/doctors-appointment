export class LoginDTO{
    constructor(email: string, password: string){
    }  
}

export class RegisterDTO{

    public  email: string;
    public  password: string;
    public  name: string;

    constructor(email: string, password: string, name: string){
        this.email = email;
        this.name = name;
        this.password = password;
    }

}

export class User{
    public name: string;
    public email: string;
    public password: string;
    public role: string;
    public phone: string;
    public creditBalance: number;
    public createAt: Date;

    constructor(name: string, email: string, password: string, role: string, phone: string, creditBalance: number, createAt: Date){
        this.name = name;
     this.email= email;
     this.password = password;
     this.role =  role;
     this.phone = phone;
     this.creditBalance = creditBalance;
     this.createAt = createAt;
    }
}

