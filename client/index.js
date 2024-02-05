const form = document.getElementById('submit-form');
const userName = document.getElementById('userName');
const phoneNum = document.getElementById('phoneNum');
const email = document.getElementById('email');
const userList = document.getElementById('userList');



//Posting form data from html form to locale node

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user_name = userName.value;
    const phone = phoneNum.value;
    const userEmail = email.value;
    const obj = {
        user_name,
        phone,
        userEmail,
    }
    try {
        const { data } = await axios.post('http://localhost:3000/post', obj);
        console.log(data)
        createList(data);

    }
    catch (err) {
        console.log(err);
    }
})



function createList(data) {
    const tr = document.createElement('tr');
    tr.setAttribute('id', `user${data.id}`);
    tr.innerHTML = `
    <th>*</th>
    <td id='nameText'>${data.name}</td>
    <td id='phoneText'>${data.phone}</td>
    <td id='emailText'>${data.email}</td>
    <td><button id="${data.id}" class="removeBtn">Remove</button></td>
    <td><button id="${data.id}" class="editBtn">Edit</button></td>
    `;
    userList.append(tr);
    userName.value = '';
    phoneNum.value = '';
    email.value = '';
}


// getting Element from the userList when i click on the remove Button 
userList.addEventListener('click', function (event) {
    if (event.target.classList.contains('removeBtn')) {
        const id = event.target.getAttribute('id');
        removeListItem(id)
    }
});


// removeing list item from the UI and sending the id  to the backend
async function removeListItem(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/user/delete/${id}`);
        if (response.status === 200) {
            const listItem = document.getElementById(`user${id}`);
            listItem.remove()
        }
    }
    catch (error) {
        console.log(error)
    }
}


// getting Element from the userList when i click on the Edit Button 
userList.addEventListener('click', function (event) {
    if (event.target.classList.contains('editBtn')) {
        const id = event.target.getAttribute('id');
        editListItem(id)
    }
});

// removeing list item from the UI and sending the id  to the backend
async function editListItem(id) {
    const listItem = document.getElementById(`user${id}`);
    const nameText = document.getElementById('nameText').textContent;
    const phoneText = document.getElementById('phoneText').textContent;
    const emailText = document.getElementById('emailText').textContent;
    userName.value = nameText;
    phoneNum.value = phoneText;
    email.value = emailText;
    removeListItem(id)
}


// getting all use List Data from backend

window.addEventListener('DOMContentLoaded', async function () {
    try {
        const { data } = await axios.get('http://localhost:3000/user/user-get');
        for (let i = 0; i < data.length; i++) {
            createList(data[i])
        }
    }
    catch (error) {
        console.log(error)
    }
})
