class Login {
    static base_url = 'https://habits-kenzie.herokuapp.com/api/userLogin'
    static statusRequisicao

    static async logar(dataLogin){ 
        return await fetch(this.base_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataLogin)
        })
        .then(res => {
            this.statusRequisicao = res.status
            return res.json()})
        .then((response) => {
            localStorage.setItem('@kenzie-habits:user_name', response.response.usr_name)
            localStorage.setItem('@kenzie-habits:user_email', response.response.usr_email)
            localStorage.setItem('@kenzie-habits:user_img', response.response.usr_image)
            localStorage.setItem('@kenzie-habits:token', response.token)
            return response
        })

        .catch(err => console.log(err))
    }

}

export { Login }