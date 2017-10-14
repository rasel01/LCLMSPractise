module App {

    //class home {
    //    now: string;
    //}

    class HomeController {
        now: string;
        constructor() {
            console.log("I am in home controller");
            this.now = new Date().toString();
        }
        
    }
}