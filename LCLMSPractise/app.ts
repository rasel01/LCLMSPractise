module app {
    export class Student {
        Name: string;
        phone: string;


        GetInfo(): string {
            return "Student Name : " + this.Name + " and phone is " + this.phone;
        }

    }



    let std = new Student();
    std.Name = "test";
    std.phone = "123";


    std.GetInfo();

    console.log(std.GetInfo());


}