

function getAdmin(map){
    let admins = []
    for([key, value] of map) {
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Eduardo', 'Admin');
usuarios.set('Ricardo', 'User');
usuarios.set('Monyki', 'Admin');


console.log(getAdmin(usuarios));