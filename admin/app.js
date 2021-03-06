const userList = document.querySelector('#user-list');

// create element & render cafe
function renderuser(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let phone = document.createElement('span');
    let date = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = "name :"+doc.data().name;
    email.textContent = "email :"+doc.data().email;
     phone.textContent = "phone :"+doc.data().phone;
     date.textContent = "date :"+doc.data().date;
    

    li.appendChild(name);
    li.appendChild(email);
     li.appendChild(phone);
    li.appendChild(date);

    userList.appendChild(li);
}

// getting data
db.collection('users').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderuser(doc);
    });
});
