export class LoginDTO{

    private email: string;
    private password: string;

    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }

    
}

export class RegisterDTO{

    private  email: string;
    private  password: string;
    private  name: string;

    constructor(email: string, password: string, name: string){
        this.email = email;
        this.name = name;
        this.password = password;
    }

}

export class User{
    private name: string;
    private email: string;
    private password: string;
    private role: string;
    private phone: string;
    private creditBalance: number;
    private createAt: Date;

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

