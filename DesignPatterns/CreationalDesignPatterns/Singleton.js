class Database{
    constructor(){
        if(Database.instance){
            return Database.instance;
        }
        this.connection = "DB Connected";
        Database.instance = this;
        console.log("OB1")
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2);
