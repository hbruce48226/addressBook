const contactList = document.getElementById('contactList'); //div
const addressBook = document.getElementById('addressBookSection'); //div

const addName = document.getElementById('contactName'); //input
const addEmail = document.getElementById('contactEmail'); //input
const addPhoneNumber = document.getElementById('contactPhoneNumber');
const addRelation = document.getElementById('contactRelation');
const addButton = document.getElementById('addButton'); //button

let contactListFullArray = [];

addButton.addEventListener('click', () => {

    let contactInfoArray = [addName.value,addEmail.value,addPhoneNumber.value,addRelation.value];

    let newContact = document.createElement('ul'); 
    let miniArray = [];
    for (item in contactInfoArray) {
        let thisItem = document.createElement('li');
        thisItem.innerHTML = `<li> ${contactInfoArray[item]} </li>`;
        newContact.append(thisItem);
        
        miniArray[item] = contactInfoArray[item]; 
    }

    contactListFullArray[contactListFullArray.length] = miniArray;

    addName.value='';
    addEmail.value='';
    addPhoneNumber.value='';
    addRelation.value='';

    newContact.classList.add('contact')
    
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    newContact.append(deleteButton);
    contactList.append(newContact);

    deleteButton.addEventListener('click', () => {
        newContact.remove();
    });

    addressBook.appendChild(newContact);
});