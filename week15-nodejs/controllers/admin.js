let admins = []

class AdminController {
    static register(req, res) {
        const { password, email, name } = req.body
        const index = admins.findIndex(admin => admin.email == email)
        if (index != -1) res.status(400).send({ message: 'Account already available!' })
        else {
            let new_admin = {
                email, name, password, id: admins.length + 1
            }
            admins.push(new_admin)
            res.send({ message: 'Account successfully registered!' })
        }
    }

    static login(req, res) {
        const { email, password } = req.body
        const index = admins.findIndex(admin => admin.email == email)
        if (index == -1) res.status(400).send({ message: 'Account not found!' })
        else if (admins[index].password != password) res.status(400).send({ message: 'Account not found!' })
        else {
            res.send({ message: 'You Logged In!', data: admins[index] })
        }
    }

    static updateInfo(req, res) {
        const { id } = req.params
        const index = admins.findIndex(admin => admin.id == id)
        if (index == -1) res.status(400).send({ message: 'Account not found!' })
        else {
            admins[index] = {
                ...admins[index], ...req.body
            }
            res.send({ message: 'Your account info updated!' })
        }
    }

    static getAdminData(req, res) {
        const { id } = req.params
        const index = admins.findIndex(admin => admin.id == id)
        if (index == -1) res.status(400).send({ message: 'Account not found!' })
        else {
            res.send({ data: admins[index] })
        }
    }

    static deleteAccount(req, res) {
        const { id } = req.params
        const index = admins.findIndex(admin => admin.id == id)
        if (index == -1) res.status(400).send({ message: 'Account not found!' })
        else {
            let newAdmins = []
            admins.forEach(admin => {
                if (admin.id != id) newAdmins.push(admin)
            })
            admins = newAdmins
            res.send({ message: 'Account Deleted!' })
        }
    }

}

module.exports = AdminController