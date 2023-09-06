

const mainContainer = document.querySelector('.main-container');
//boton section
const btnAdd = document.querySelector('.button-addNew');

btnAdd.addEventListener('click',(event)=>{
    event.preventDefault();
    addNewNote();
});




function addNewNote(){
    const mainNoteContainer = document.createElement('div');
    mainNoteContainer.classList.add('main-note--container');

    mainNoteContainer.innerHTML = `
    <div class="note-container--tools">
    <button class="tools--edit"></button>
    <button class="tools--delete"></button>
    </div>
    <textarea class="note-container--textArea"></textarea>
    `;

        const deleteBtn = mainNoteContainer.querySelector('.tools--delete');
        deleteBtn.addEventListener('click',()=>{
            deleteANote(mainNoteContainer);
        });

        const editBtn = mainNoteContainer.querySelector('.tools--edit');
        editBtn.addEventListener('click',()=>{
            const textArea = mainNoteContainer.querySelector('.note-container--textArea');
            
                let flag = textArea.hasAttribute('disabled');
                console.log(flag);
                if(flag){
                    textArea.removeAttribute('disabled');
                }else{
                    textArea.setAttribute('disabled','disabled');
                }
       
        });

    mainContainer.append(mainNoteContainer);
}



function deleteANote(note){
    note.remove();
}