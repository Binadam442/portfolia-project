
const API_URL = "http://localhost:5000"
const AuthService  = {
    login: async (username, password)=>{
        const response = await fetch(`${API_URL}/users?username=${username}&password=${password}`)
        const users = await response.json()
    
        if(users.length > 0){
            
            return users[0]

        }
        return null

    },
    logout : ()=>{

    }
    ,
    getCurrentUser: async()=>{

    },
    register: async (username, password,name)=>{

        const response = await fetch(`${API_URL}/users`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                name,
            }),
        });
    }
};


export default AuthService