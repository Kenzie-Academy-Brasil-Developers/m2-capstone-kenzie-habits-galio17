class User {
    static base_url = 'https://habits-kenzie.herokuapp.com/api/user/profile'
    static headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('@kenzie-habits:token')}`
    }
        static async updateProfile(dataUpdate){ 
            return await fetch(this.base_url, {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(dataUpdate)
            })
            .then(res => res.json())
            .then((response) => {
                console.log(response)
                return response
            })

            .catch(err => console.log(err))
        }

}

export { User }