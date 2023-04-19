// import the token
import { store }  from "./store.js"

const BASE_URL = "https://jobbr3d-server.onrender.com"
//Sign Up
export const signUp = (data) => {
    return fetch(`${BASE_URL}/sign-up`, {
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
    return fetch(`${BASE_URL}/sign-in`, {
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
	return fetch(`${BASE_URL}/customers`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
		
}

//show
export const showCustomer = (id) => {
	return fetch(`${BASE_URL}/customers/${id}`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

//update 
export const updateCustomer = (data, id) => {
	return fetch(`${BASE_URL}/customers/${id}`, {
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
	return fetch(`${BASE_URL}/customers`, {
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
	return fetch(`${BASE_URL}/customers/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}
//print actions 
//create
export const createPrint = (data) => {
	return fetch(`${BASE_URL}/prints`, {
		method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

//update
export const deletePrint = (printId, customerId) => {
	return fetch(`${BASE_URL}/prints/${printId}/${customerId}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`
		},
	})
}

//update
export const updatePrint = (data, printId) => {
	return fetch(`${BASE_URL}/prints/${printId}`, {
		method: 'PATCH',
		headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
        },
		body: JSON.stringify(data)
	})
}


