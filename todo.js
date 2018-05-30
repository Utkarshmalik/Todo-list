let notes=[];
notes=getSavedNotes();
let filter={searchText:"",sortBy:""};
renderNotes(notes,filter);
let textfield=document.querySelector(".text-field");
let button = document.querySelector(".btn");

// every time input is changed in text field our lidt gets rendered
textfield.addEventListener("input",()=>
{
    filter.searchText=textfield.value;
    renderNotes(notes,filter);
})


//add new button is pressed
button.addEventListener("click",function()
{
    let note = generateObject();
    notes.push(note);
    saveNotes(notes);
    location.assign(`index.html#${note.id}`);


}
)

















