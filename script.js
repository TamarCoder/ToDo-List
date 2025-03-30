const addBtn = document.getElementById('add-btn');
const input = document.getElementById('input');
const lists = document.getElementById('lists')

function addButton(e) {
    let inputValue = input.value.trim();
    if (inputValue === "") return;  
    //  შევქმენი list -  დივი. 
    let taskDiv = document.createElement('div');
    taskDiv.className = 'list';

    // შევქმნეი  პირველ  დივი ტექტისთვის 
    let textDiv = document.createElement('div');
    textDiv.className = 'texts';
    // შევქმნათ p თეგი სადაც ტექტსში შევიტანთ
    let text =  document.createElement('li')
    text.className = 'text'
    text.textContent = inputValue;
    //  მეორე დივი აიქონებისთვის 
    let actionsDiv = document.createElement('div');
    actionsDiv.className = 'icons';
    //  შევქმნათ პირველი აიქონი
    let edit =   document.createElement('i');
    edit.className = 'bi bi-check-circle  edit';
    // შევქმნათ მეორე აიქონი
    let deleteIcon =   document.createElement('i');
    deleteIcon.className = 'bi bi-x delete';

    //   ახალი დივები დავამატო list - დივში
    taskDiv.appendChild(textDiv);
    taskDiv.appendChild(actionsDiv);
    textDiv.appendChild(text);
    actionsDiv.appendChild(edit)
    actionsDiv.appendChild(deleteIcon)
    //  ყოველი თასქი ემატება - მთავარ lists.
     
    function deleteTask(){
        taskDiv.remove()
    }
    deleteIcon.addEventListener('click', deleteTask)

   function textChange() {
        text.style.color = 'rgb(222, 118, 8)'; // text-ი შეიცვლის ფერს
    }

    textDiv.addEventListener('click', textChange  => {
        if (e.target !== text) {   
            text.style.color = 'rgb(222, 118, 8)';  
        }
    });


    function checkTask (){
        text.style.textDecoration = 'line-through';
        text.style.color = 'green';

         // აქ ბაგი მაქვს და ვერ  ვერ ვაგვარებ
    }

    edit.addEventListener('click', checkTask);
 
    lists.appendChild(taskDiv);
    input.value = '';
}


addBtn.addEventListener('click', addButton);