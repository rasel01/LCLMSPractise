module App {

    //class home {
    //    now: string;
    //}

    class HomeController {
        
        constructor() {
            console.log("I am in home controller");
            this.now = new Date().toString();
        }
        now: string;
    }
}