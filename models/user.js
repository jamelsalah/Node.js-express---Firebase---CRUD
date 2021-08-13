function user(id, name, login, password, email) {
    return {
        id: id,
        name: name,
        login: login,
        password: password ,
        email: email, 
    }
}

module.exports = user;