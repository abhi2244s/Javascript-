let myDetails= {
    name : "Abhishek Singh",
    email : "abhisheksingh16102000@gmail.com",
    username: "abhi2244",
    dob : "16/10/2003",
    fullname : function(){
        return this.email + " and my dob is " + this.dob;
    }
}

let newvalue = myDetails.fullname()

console.log(newvalue)