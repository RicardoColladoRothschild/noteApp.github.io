

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

    mainContainer.append(mainNoteContainer);
}

