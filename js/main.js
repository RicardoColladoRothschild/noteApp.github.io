

const mainContainer = document.querySelector('.main-container');
//boton section
const btnAdd = document.querySelector('.button-addNew');


const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note)=>{
        addNewNote(note);
    });
}

btnAdd.addEventListener('click',(event)=>{
    event.preventDefault();
    addNewNote();
});




function addNewNote(text = ''){
    const mainNoteContainer = document.createElement('div');
    mainNoteContainer.classList.add('main-note--container');

    mainNoteContainer.innerHTML = `
    <div class="note-container--tools">
    <button class="tools--edit"></button>
    <button class="tools--delete"></button>
    </div>
    <textarea class="note-container--textArea"></textarea>
    `;

        const textArea = mainNoteContainer.querySelector('.note-container--textArea');
        textArea.value = text;
        const deleteBtn = mainNoteContainer.querySelector('.tools--delete');
        deleteBtn.addEventListener('click',()=>{
            deleteANote(mainNoteContainer);
        });

        const editBtn = mainNoteContainer.querySelector('.tools--edit');
        editBtn.addEventListener('click',()=>{
            
            
                let flag = textArea.hasAttribute('disabled');
                
                if(flag){
                    textArea.removeAttribute('disabled');
                }else{
                    textArea.setAttribute('disabled','disabled');
                }
                sendLocalStorage();
       
        });


        textArea.addEventListener('input', (e) => {
            const { value } = e.target
    
            main.innerHTML = marked(value)
    
            updateLS()
        })
        
    mainContainer.append(mainNoteContainer);
    sendLocalStorage();
}



function deleteANote(note){
    note.remove();
    sendLocalStorage();
}

/**This function takes all the "textarea" information, and then set it to an array, 
 * so we can then create a localStorage, as a JSON where "notes" IS THE KEY 
 */
function sendLocalStorage() {
    const notesText = document.querySelectorAll('textarea')

    const notes = [];

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}