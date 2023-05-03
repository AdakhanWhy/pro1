let input = document.querySelector('.inpNewCont');
let button = document.querySelector('.btnNewCont');

// let arr = localStorage.setItem('contacts', JSON.stringify([]));

// localStorage.setItem('contacts', JSON.stringify([]));

// let newArr = JSON.parse(localStorage.getItem('contacts'));


// Add block start

let newArr = [];

button.addEventListener('click', () =>{
    let obj = {name: ''};
    obj.name = input.value;
    newArr.push(obj);
    input.value = '';
    localStorage.setItem('contacts', JSON.stringify(newArr));
})

// Add block end


// Check, No Check block start

let check = document.querySelector('.checkList');
let noCheck = document.querySelector('.checkListNo');
let contactList = document.querySelector('.contactList');
let noRep = document.querySelector('.noRep');

check.addEventListener('click', () =>{
    let arr = JSON.parse(localStorage.getItem('contacts'));
    let ul = document.createElement('ul');
    noRep.innerText = '';

    arr.forEach(element => {
        let li = document.createElement('li');
        li.innerText = `Name: ${element.name}`;
        contactList.append(noRep);
        ul.append(li);
        noRep.append(ul);
    });
})

noCheck.addEventListener('click', function(){
    noRep.innerText = '';
})

// Check, No Check block end

let contactEdit = document.querySelector('.contactEdit');
let editBtn = document.querySelector('.editBtn');
let editConts = document.querySelector('.editConts');
let editUl = document.querySelector('.editConts ul');

editBtn.addEventListener('click', () =>{
    let arr = JSON.parse(localStorage.getItem('contacts'));
    arr.forEach((element, index) => {
        editUl.innerHTML += `<li><input placeholder='Edit name' class='editName'>: ${element.name}</li>`;

    });
    console.log(arr);
})


// 


















































// console.log(input, button)

// localStorage.setItem('contact', JSON.stringify([{name: ''}]));
// function addObj(){
//     let obj = {name: ''};
//     return obj
// }

// obj = JSON.parse(localStorage.getItem('contact'))
// // let arr = JSON.parse(localStorage.getItem('contact'));

// button.addEventListener('click', function(){
//     let arr = []
//     obj = addObj()
//     obj.name = input.value;
//     arr.push(obj);
//     localStorage.setItem('contact', JSON.stringify(arr))
//     input.value = '';
// })

