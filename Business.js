const Database = require("../Database");

class Business {
    id = 0;
    name = "";
    mobileno = "";
    email = "";
    cityid = "";
    pincode = "";
    password = "";
    title = "";
    description = "";
    status = "";

    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.name = "";
        this.mobileno = "";
        this.email = "";
        this.cityid = "";
        this.pincode = "";
        this.password = "";
        this.title = "";
        this.description = "";
        this.status = "";
    }

    save = () => {
        
        if (this.id == 0) {
            this.query = "INSERT INTO businesses(name,mobileno,email,cityid, pincode, password, title,  description, status) ";
            this.query += "VALUES('" + this.name + "','" + this.mobileno + "','" + this.email + "', ";
            this.query += " '" + this.cityid + "', '" + this.pincode + "','" + this.password + "', ";
            this.query += "'" + this.title + "', '" + this.description + "', 'active')";
        
        }
        else {
            this.query = "UPDATE businesses SET  name = '" + this.name + "', ";
            this.query += "mobileno = '" + this.mobileno + "', ";
            this.query += "email = '" + this.email + "', ";
            this.query += "cityid = '" + this.cityid+ "', ";
            this.query += "pincode = '" + this.pincode + "', ";
            this.query += "password = '" + this.password + "', ";
            this.query += "title = '" + this.title + "', ";
            this.query += "description = '" + this.description + "', ";
            this.query += "status = '" + this.status + "' ";
            this.query += "WHERE id =" + this.id;
        }

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err)
                }
                resolve(result);
            });
        });
    }

    get=()=>{
        this.query = "SELECT * FROM businesses WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });  
    }

    list = () => {
        this.query = "SELECT * FROM businesses ORDER BY name";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    delete = ()=>{
        this.query = "DELETE FROM businesses WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });         
    }

    changestatus = ()=>{
        this.query = "UPDATE businesses SET status = '" + this.status + "' WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });         
    }
}
module.exports = {
    Business: Business
}