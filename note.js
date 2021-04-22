
let btn = document.querySelector('.btn');
let note_no = 1;
let text;
let new_note;
show_note();
btn.addEventListener('click', function () {

    let local = localStorage.getItem('notes');
    let textarea = document.querySelector('#text')

    if (local == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(local);
    }
    notesObj.push(textarea.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    textarea.value = "";
    show_note();

})
function show_note() {
    let local = localStorage.getItem('notes');
    if (local == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(local);
    }
    let html = '';
    notesObj.forEach(function (ele, index) {


        html += ` <div class="card">
        <h1>Note ${index}</h1>
        <div class="text">
            <p id="note">${ele}</p>
        </div>
        <button class="btn">Delete</button>
    </div>`

    })
    let cont = document.querySelector('.cont2')
   
    if (notesObj.length!=0){
        cont.innerHTML =html;
    }

}

