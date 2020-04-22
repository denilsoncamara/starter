class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }

}

const user = new Usuario('any_mail', 'any_password');
const admin = new Admin('any_mail', 'any_password');

console.log(user.isAdmin());
console.log(admin.isAdmin());