import { store } from './store.js'

const messageContainer = document.querySelector('#message-container')

//auth constants
const signUpContainer = document.querySelector('#signUp')
const signInContainer = document.querySelector('#signIn')
//customer constants
const showCustomerContainer = document.querySelector('#show-customer-container')
const indexCustomersContainer = document.querySelector('#index-customer-container')
//
const addCustomerButton = document.querySelector('#add-customer')
const addCustomerform = document.querySelector('#add-customer-form')
const unfinishedPrintsCont = document.querySelector('#index-incomplete-prints')
const finishedPrintsCont = document.querySelector('#index-finished-prints')
const selectDropdown = document.querySelector('#select-dropdown')
const createPrintContainer = document.querySelector('#create-print-conatiner')
const addPrintButton = document.querySelector('#addPrint')
const navItems = document.getElementById('sneaky')

//global on failure
export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}
//on signup success
export const onSignUpSuccess = () => {
    messageContainer.innerHTML = '<h5>You just signed up! now Sign In</h5>'
    signUpContainer.style.display = 'none'
    console.log('worked')
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = '<h5 class="mt-3 mb-3">Successful Sign-In!</h5>'
    signInContainer.classList.add('hide')
    signUpContainer.classList.add('hide')
    addCustomerButton.classList.remove('hide')
    addCustomerButton.classList.add('btn', 'btn-primary')
    addPrintButton.classList.add('hide')
    unfinishedPrintsCont.classList.add('hide')
    finishedPrintsCont.classList.add('hide')
    navItems.classList.remove('hide')
    store.userToken = userToken
}
//customer actions
export const onAllPrintsNavClick = () => {
   console.log('click')
   indexCustomersContainer.classList.add('hide')
   addCustomerButton.classList.add('hide')
   addPrintButton.classList.remove('hide')
   addPrintButton.classList.add('btn', 'btn-primary')
   unfinishedPrintsCont.classList.remove('hide')
   finishedPrintsCont.classList.remove('hide')
   
}

export const indexCustomersAfterSignIn = (userCustomers) => {
    userCustomers.customers.forEach((customer) => {
        
        console.log(customer.prints.isDone)
        const div = document.createElement('div')
        div.classList.add('container-sm', `${customer.firstname}`, 'mt-3', 'pt-2','pb-4', 'px-3', 'py-2', 'rounded-2', 'border', 'shadow-sm')
        div.innerHTML = `
            <h4 class="mt-3 mb-3">${customer.firstName} ${customer.lastName}</h4>
            <h6 class="mt-3 mb-3">Prints available: ${customer.prints.length}</h6>
            <button class="btn btn-primary" data-id="${customer._id}">Show Customer</button>
        `
        const option = document.createElement('option')
        option.setAttribute('value', `${customer._id}`)
        option.setAttribute('id', `${customer._id}`)
        option.innerText = `${customer.firstName} ${customer.lastName}`
        selectDropdown.appendChild(option)
        indexCustomersContainer.appendChild(div)
    })
}

export const onShowCustomerSuccess = (customer) => {
    const div = document.createElement('div')
    div.classList.add('container')
    div.setAttribute('id', 'updateCustomer')
    div.innerHTML = `
            <p>${customer.firstName} ${customer.lastName}</p>
            <p>${customer.contact}</p>
            <p>${customer.description}</p>
            <button class="btn btn-danger mb-2"data-id="${customer._id}">Delete Customer</button>
            <form data-id="${customer._id}">
                <input class="form-control my-2" type="text" name="firstName" value="${customer.firstName}">
                <input class="form-control my-2" type="text" name="lastName" value="${customer.lastName}">
                <input class="form-control my-2" type="text" name="contact" value="${customer.contact}">
                <input class="form-control my-2" type="text" name="description" value="${customer.description}">
                <input class="btn btn-primary mt-2" type="submit" value="Update Customer">
            </form>

           
    `
    showCustomerContainer.appendChild(div)
}

export const indexAllPrints = (userCustomers) => {
    // updateUnfinishedPrintsCont(unfinishedPrintsCont)
    userCustomers.customers.forEach((customer) => {
        let printsArr = customer.prints
        printsArr.forEach((print) => {
            const div = document.createElement('div')
            div.classList.add('container-sm','text-center','pt-3', 'px-3', 'py-2', 'rounded-2', 'border','mt-4')
            div.innerHTML = `
                <h6 class="mt-3">${customer.firstName} ${customer.lastName}</h6>
                <p class="mt-3">Estimated weight of the part when completed: ${print.weight} grams</p>
                <p class="mt-3">Estimated print time for the part: ${print.hoursToPrint} hours</p>
                <p class="mt-3">Is the print complete: ${print.isDone}</p>
                <p>Notes:</p>
                <p>${print.description}</p>
                <button class="btn btn-danger col mb-4 removePrint" id="${customer._id}" data-id="${print._id}">Delete Print</button>
           
                <form class="update-print col" data-id=${customer._id} id="${print._id}">
                    <input type="text" class="pt-3 mb-2 form-control" name="weight" placeholder="weight of print" value="weight"/>
                    <input type="text" class="pt-3 mb-2 form-control" name="hoursToPrint" placeholder="hours to print" value="hoursToPrint"/>
                    <input type="text" class="pt-3 mb-2 form-control" name="description" placeholder="description" value="description"/>
                    <input type="text" class="pt-3 mb-2 form-control" name="isDone" placeholder="type true or false" value="false"/>
                    <input class="btn btn-primary update-print" ${customer._id} type="submit"/>
                </form>
               
            `
            if(print.isDone === true){
                finishedPrintsCont.appendChild(div)
            } else {
                unfinishedPrintsCont.appendChild(div)
            } 
        })
    })
}


export const updateShowElementsAfterChange = () => {
    while(showCustomerContainer.firstChild) {
        showCustomerContainer.children[0].remove()
    }
}

export const updateCustomerIndexAfterChange = () => {
    while(indexCustomersContainer.firstChild) {
        indexCustomersContainer.children[0].remove() 
    }
}

export const updateUnfinishedPrintsCont = (container) => {
        while(container.lastElementChild){
            container.removeChild(container.lastElementChild)
    }
}

export const onAddCustomerClick = () => {
    addCustomerform.classList.remove('hide')
}

export const onCreateCustomerSuccess = () => {
    addCustomerform.classList.add('hide')
    messageContainer.innerHTML= 'customer Created Successfully'
}
//on update customer success
export const onUpdateCustomerSuccess = () => {
    messageContainer.innerHTML = `customer updated successfully`
}
//on delete customer success
export const onDeleteCustomerSuccess = () => {
    messageContainer.innerHTML = `customer deleted successfully`
}

export const onAddPrintClick = () => {
    createPrintContainer.classList.remove('hide')
}
//on create print success
export const onCreatePrintSuccess = () => {
    messageContainer.innerHTML = 'print created successfully'
    createPrintContainer.classList.add('hide')
}
//on delete print success
export const onDeletePrintSuccess = () => {
    messageContainer.innerHTML = '<p>print deleted successfully</p>'
    console.log("deleted")
}
export const onUpdatePrintSuccess = () => {
    messageContainer.innerHTML = '<p>print updated successfully</p>'
}

export const clickCustomerTab = () => {
    unfinishedPrintsCont.classList.add('hide')
    finishedPrintsCont.classList.add('hide')
    addPrintButton.classList.add('hide')
    addCustomerButton.classList.remove('hide')
    indexCustomersContainer.classList.remove('hide')
    console.log('click')
}

export const clickIncompleteTab = () => {
    finishedPrintsCont.classList.add('hide')
    unfinishedPrintsCont.classList.remove('hide')
    addPrintButton.classList.remove('hide')
    addCustomerButton.classList.add('hide')
    indexCustomersContainer.classList.add('hide')
}

export const clickCompleteTab = () => {
    finishedPrintsCont.classList.remove('hide')
    unfinishedPrintsCont.classList.add('hide')
    addPrintButton.classList.remove('hide')
    addCustomerButton.classList.add('hide')
    indexCustomersContainer.classList.add('hide')
}

export const navItemsAtSignInScreen = () => {
    navItems.classList.add('hide')
}