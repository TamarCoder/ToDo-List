const form = document.getElementById('form');
const input = document.getElementById('input');
const addBtn =  document.getElementById('add-button');
const newTasks =  document.querySelector('.newTasks');
const placeholderImg = document.getElementById('placeholder-img');
const spna =  document.querySelector('.span'); 
 

// შევქმნათ ფუნქცია, რომელიც ამოიღებს შეტანილ ინფორმაციას. 
function mainInput (event) {
    if(event.key === 'Enter'){
       // თუ ინფუთზე უბრალოდ ხელს დავაწვეები და ცარიელი იქნება ამ მეჯის გამოიტანს
        if(input.value.trim() === ""){
            alert("გთხოვ შეიყვანე დავალება ✍️");
            return;  
        }
        makeLists(input.value); 
        removeplaceholder(input.value)
        input.value = '';  // სუფთავდება ინფუთი
    }  
}

// იმის გამო რომ მე არ მაქვს ბექენდი , 
// უნდა გავაკეთო ფნქცია რომელიც ამ ყველაფრს სერვერზე არ გაუშვებს
function dontSentServer(event) {
    event.preventDefault();
};
// ეს ფუნქცია უშუალოდ მუშაობს მაშინ როცა ბათნს აწვება მომხმარებელი
function addButton (event){
    if(input.value.trim() === ""){
        alert("გთხოვ შეიყვანე დავალება ✍️");
        return;  
    }
    makeLists(input.value); 
    removeplaceholder(input.value)
    countTask();
    
    input.value = "";   // სუფთავდება ინფუთი
}
// ფუნცია სადაც ვქმნი Task კლას.
function makeLists (event){
    const li =  document.createElement('li'); 
    const div =  document.createElement('div'); 
    const text = document.createElement('div');
    const deleteIcon =  document.createElement('div');
    li.className = 'task';
    div.className = 'unchek';
    text.className = 'taskText'
    deleteIcon.className ='delete'
    newTasks.appendChild(li);
    li.appendChild(div);
    li.appendChild(text)
    li.appendChild(deleteIcon);
    div.innerHTML  = '<i class="bi bi-circle"></i>'
    text.innerHTML = input.value
    deleteIcon.innerHTML = '<i class="bi bi-trash3-fill"></i>'

    // აიკონების  მომსმენი
    div.addEventListener('click', () => changeIcon(div));
    div.addEventListener('click', () => textDecoration(text))
    deleteIcon.addEventListener('click', () => removeTask(li))
}
 // ფუნცია რომელიც ცვლის აიკონს როცა თასქი შესრულება, ამ ფუნქციის მომსმენს გამოვიძაებ თასქ ფუნქციაში
function changeIcon (event) {
    const icon = event.querySelector('i');
    if (icon.classList.contains('bi-circle')) {
        icon.classList.remove('bi-circle');
        icon.classList.add('bi-check-circle-fill');  // შეცვლის აიკონს
        icon.style.color = 'green'
       
    } else {
        icon.classList.remove('bi-check-circle-fill');
        icon.classList.add('bi-circle');  // უკან დააბრუნებს
    }
}

// თასქის შესრულებისას  ტექსტი გამწვანება და გადახაზვა

function textDecoration(element) {
    if (element.style.textDecoration === 'line-through') {
        element.style.textDecoration = 'none';
        element.style.color = 'black';
    } else {
        element.style.textDecoration = 'line-through';
        element.style.color = 'green';
    }

    endTaskCount()
}
// თასქის წაშლის ფუქცია.
function removeTask(taskItem) {
    taskItem.remove()
    alert('ნამდვილად გსურთ დავალების წაშლა?');
    countTask();
    
    if (makeLists) {
        placeholderImg.style.display = 'block';  // placeholderImg ვაჩვენოთ
        spna.style.display = 'block';  // spna ვაჩვენოთ
    }
   

}
// როცა  თასქი დამეტება წაიშლაშო უკანა ფონი
function removeplaceholder() {
    if (makeLists) {
        placeholderImg.style.display = 'none';   
        spna.style.display = 'none';   
    }

}
// დავალების თვლის ფუნქცია
function countTask() {
    const tasks = document.querySelectorAll('.task');  // ვიპოვე ყველა task ელემენტი
    const taskCountDisplay = document.getElementById('taskCount-num'); // მივწვდი ცვლად სადაც დათვლილი დავალებები აისახება 
    
    let count = 0;  //ვიწყებ დათვლას 0 დან 
    
    // ციკლი ყველა 'task' ელემენტზე
    for (let i = 0; i < tasks.length; i++) {
        count++;  // ყოველ  იტერაციაზე ემატება ერთი 
    }
    
    taskCountDisplay.textContent = count;  
}


// ფორმ ლისენერი უსმენ კლავიშზე დაწერას და 
// უშვებ ფუნქციას რომელიც ამ ინფოს არ გაუშვებს სერვერსზ
form.addEventListener('submit', dontSentServer);
//ინფუთი უსმენს შეტანილ ინფორმაციას და ბეჭდავს დინამიურ ტექსტ 
input.addEventListener('keydown', mainInput);
// ადდბთნ - უსმენს კლიკს , როცა მომხამრებელი დამატების ღილაკს აწვება
addBtn.addEventListener('click', addButton);


