const messageContainer = document.querySelector('#message-container')
const authContainer = document.querySelector('#auth-container')
const indexCustomers = document.querySelector('#index-customer-container')
const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')


//global on failure
export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}
//hide functions

//user actions

//on signup success

export const onSignUpSuccess = () => {
    messageContainer.innerHTML = '<p>success, now sign in<p>'
    signUpContainer.style.display = 'none'
    console.log('worked')
   

}

export const onSignInSuccess = () => {
    // authContainer.classList.add('hide')
    messageContainer.innerHTML = '<p>sign in successful</p>'
    signInContainer.style.display ='none'
    signUpContainer.style.display= 'none'
    console.log('it worked')
}
//on sign in success

// export const onSignInSuccess = (userToken) => {
//     authContainer.classList.add('hide')
    
// }

//customer actions

//on create customer success

//on update customer success

//on delete customer success

//on index customer success
// export const onIndexCustomerSuccess = (customers) => {
//     customers.forEach((customer) => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <h3>${customer.firstName} ${customer.lastName} </h3>
//         <h2>${customer.contact}</h2> 
//         <button data-id="${customer._id}">Show Customer</button>  
//         `
//         indexCustomerContainer.appendChild(div)
//     })
// }
//on show customer success

//print actions

//on create print success

//on update print success

//on delete print success

//on index finished print success

//on index incomplete print success

