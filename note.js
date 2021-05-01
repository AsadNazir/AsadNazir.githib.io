
let btn = document.querySelector('.btn');
let note_no = 1;
let text;
let new_note;
let obj;
let del_all = document.querySelector('.Del_all');
show_note();
btn.addEventListener('click', function () {

    let local = localStorage.getItem('notes');
    let textarea = document.querySelector('#text')
    let head = document.querySelector('#head');
    if (local == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(local);
    }
    obj = {
        title: head.value,
        text: textarea.value,
        state: false,
    }
    notesObj.push(obj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    textarea.value = "";
    head.value = "";
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
            if (ele.state == true) {
                html += ` <div class="card btn-border border">
                <h3>${ele.title}</h3>
                <div class="text">
                    <p id="note">${ele.text}</p>
                </div>
                <div class="btn-class">
                <button class="btn btn-red" id="${index}" onclick="delet_btn(this.id)">Delete</button>
                <button class="btn btn-yellow" id="${index}" onclick="unmark_btn(this.id)">Unmark</button>
                </div>
            </div>`;

            }
            else {

                html += ` <div class="card border">
                  <h3>${ele.title}</h3>
                  <div class="text">
                <p id="note">${ele.text}</p>
               </div>
               <div class="btn-class">
                <button class="btn btn-red" id="${index}" onclick="delet_btn(this.id)">Delete</button>
                <button class="btn btn-yellow" id="${index}" onclick="mark_btn(this.id)">Mark</button>
                </div>
                </div>`;
            }
        }
        )
    }
    else /*(notesObj.length != 0)*/ {
        html = `<div class="card border" style="text-align:center;">
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
    if (local != null) {
        localStorage.clear();
    }
    notesObj = [];
    show_note();// changes

}
)




// function show_empty() {
//     let cont = document.querySelector('.cont2')
//     cont.innerHTML = `<div class="card" style="text-align:center;">
//     <h1>Add a Note here !</h1>
//     <div class="text">
//         <p>No note to display here</p>
//     </div>
// </div>`
// }


//-------------------------------------------------
// Delete btn
function delet_btn(index) {
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
//------------------------------------------------------
// serching elememt in the note app
let serach = document.querySelector('#search');
search.addEventListener('input', function () {

    let txt = serach.value;
    let notecrads = document.querySelectorAll(".card");
    Array.from(notecrads).forEach(function (ele) {
        let cardtxt = ele.getElementsByTagName("p")[0].innerText;

        if (cardtxt.includes(txt)) {
            ele.style.display = "";

        }
        else {

            ele.style.display = "none";
        }
    }

    )

})
//------------------------------------------------
//mark_btn function
function mark_btn(index) {
    // console.log(notesObj[index]);
    let newobj = notesObj[index];
    newobj.state = true;
    notesObj[index] = newobj;
    localStorage.setItem('notes', JSON.stringify(notesObj));
    show_note();
   
}

// unmark_btn function
function unmark_btn(index){
    // console.log(notesObj[index]);
    let newobj = notesObj[index];
    newobj.state = false;
    notesObj[index] = newobj;
    localStorage.setItem('notes', JSON.stringify(notesObj));
    show_note();
}