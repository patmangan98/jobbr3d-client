// import the token
import { store }  from "./store.js"

//User Actions

//Sign Up
export const signUp = (data) => {
    return fetch('http://localhost:3000/sign-up', {
        method: 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}


//sign In
export const signIn = (data) => {
    return fetch('http://localhost:3000/sign-in', {
        method: 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

// index
export const indexCustomers = () => {
	return fetch(`http://localhost:3000/customers`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
		
}

//show
export const showCustomer = (id) => {
	return fetch(`http://localhost:3000/customers/${id}`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

//update 
export const updateCustomer = (data, id) => {
	return fetch(`http://localhost:3000/customers/${id}`, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const createCustomer = (data) => {
	return fetch(`http://localhost:3000/customers`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

//delete
export const deleteCustomer = (id) => {
	return fetch(`http://localhost:3000/customers/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

//print actions 
//create

export const createPrint = (data) => {
	return fetch(`http://localhost:3000/prints`, {
		method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const deletePrint = (id) => {
	return fetch(`http://localhost:3000/prints/${id}`, {
		method: 'delete',
		headers: {
			Authorization: `Bearer ${store.userToken}`
		}
	})
}
//index incomplete

//index index complete

//update

//delete