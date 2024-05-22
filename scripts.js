// 1 - Imprimir por consola la lista de usuarios.
// 2 - Imprimir por consola solo el nombre de los usuarios.
// 3 -Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)
// 4 Crea una función que muestre por consola la variable global que habías creado
// 5 Crea un botón que cuando lo cliques ejecute la función que habías creado
// 6 Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)
  
const showUserBtn = document.getElementById('showUserBtn')
const userList = document.getElementById('userList')

let usersGlobal = []

axios.get ('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        const {data} = response
        console.log (data)

    usersGlobal = data
})
.catch((error) => console.error(error))


const usersData = () => {
    usersGlobal.forEach((user)=> {
    userList.innerHTML +=
    `<p>${user.name}</p>`
    })
}

showUserBtn.addEventListener('click', usersData)
