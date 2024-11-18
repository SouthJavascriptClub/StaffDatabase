
class Staff{
    constructor(name, title, location, email){
        this.name = name;
        this.title = title;
        this.location = location;
        this.email = email;
    }
    viewStaff(){
        console.log(this.name);
        console.log(this.title);
        console.log(this.location);
        console.log(this.email);
        name1.textContent = this.name;
    }
}
const Jimmy = new Staff("Jimmy Wess","Principle","Big Office","ThisIsMy@gmail.com"); 
Jimmy.viewStaff();
