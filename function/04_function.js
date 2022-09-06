function getUserRole(name,role){
    switch(role){
        case "admin" :
            return `${name} is an admin`
            break
        case "subadmin" :
            return `${name} is an subadmin`
            break
        case "user" :
            return `${name} is an user`
            break
    }
}

 let getrole = getUserRole("Abhishek","user")
 console.log(getrole)