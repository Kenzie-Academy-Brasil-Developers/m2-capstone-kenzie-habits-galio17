class Habits {
    static base_url = 'https://habits-kenzie.herokuapp.com/api/habits/'

    static headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('@kenzie-habits:token')}`
    }

    static async CreateHabit(data){
        return await fetch(this.base_url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })
        
        .catch(err => console.log(err))
    }

    static async ReadAll(){
        return await fetch(this.base_url, {
            method: 'GET',
            headers: this.headers,
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })

        .catch(err => console.log(err))
    }

    static async ReadByCategory(category){
        return await fetch(`${this.base_url}category/${category}`, {
            method: 'GET',
            headers: this.headers,
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })

        .catch(err => console.log(err))
    }

    static async UpdateHabit(id, data){
        return await fetch(`${this.base_url}${id}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })

        .catch(err => console.log(err))
    }

    static async CompleteHabit(id){
        return await fetch(`${this.base_url}complete/${id}`, {
            method: 'PATCH',
            headers: this.headers,
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })

        .catch(err => console.log(err))
    }

    static async DeleteHabit(id){
        return await fetch(`${this.base_url}${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })

        .catch(err => console.log(err))
    }
}

export { Habits }