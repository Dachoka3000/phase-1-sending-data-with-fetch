// Add your code here
let newUser = {
    name: "Daisy",
    email: "daisy@email.com"
}

function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email
        }),
    })
    .then(response => response.json())
    .then(data => {
        const work = data.id
        document.body.append(work)
    })
    .catch(error=>{
        const newError = error.message
        document.body.append(newError)
    })
}