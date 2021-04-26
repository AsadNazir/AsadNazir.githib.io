
let btn = document.querySelector('.btn');
let note_no = 1;
let text;
let new_note;
let del_all = document.querySelector('.Del_all');
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
//Show note function overhere --------------------------
function show_note() {
    let local = localStorage.getItem('notes');
    let cont = document.querySelector('.cont2');
    let html = '';
    if (local == null) {
        notesObj = [];
        // show_note();
        // return;
    }
    else {
        notesObj = JSON.parse(local);
    }
    if (notesObj.length != 0) {
        notesObj.forEach(function (ele, index) {
            html += ` <div class="card">
        <h3>Note ${index+1}</h3>
        <div class="text">
            <p id="note">${ele}</p>
        </div>
        <button class="btn btn-red id="${index}" onclick="delet_btn(this.id)">Delete</button>
    </div>`;
        }
        )
    }
    else /*(notesObj.length != 0)*/ {
        html = `<div class="card" style="text-align:center;">
            <h1>Add a Note here !</h1>
             <div class="text">
             <p>No note to display here</p>
                             </div>
                     </div>`
    }
    cont.innerHTML = html;
}
// ends here -----------------------------------------------------------------



del_all.addEventListener('click', function () {
    let local = localStorage.getItem('notes');
    if (local != null) 
    {
        localStorage.clear();
    }
    notesObj = [];
    show_note();// changes

}
)




function show_empty() {
    let cont = document.querySelector('.cont2')
    cont.innerHTML = `<div class="card" style="text-align:center;">
    <h1>Add a Note here !</h1>
    <div class="text">
        <p>No note to display here</p>
    </div>
</div>`
}



function delet_btn(index) {
    console.log("delete");
    let local = localStorage.getItem('notes');
    if (local == null) {
        notesObj = [];
        show_empty();
    }

    else {
        notesObj = JSON.parse(local);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    show_note();

}

