let save_button= document.querySelector(".save-button");
let del_button=document.querySelector(".del-button");
let text_field = document.querySelector(".text-field");
let id = location.hash.substring(1);
let notes=getSavedNotes();

let note= notes.find(function(object)
{
    return(object.id===id);
})
text_field.value= note.title;

// adding last-modified status
if(text_field.value!=="")
{
let status= document.querySelector(".status"); 
let now= moment(note.updatedAt);
status.textContent=(`Last Modified: ${now.fromNow()}`);
}




//save is clicked
save_button.addEventListener("click",function()
{
    if(text_field.value!="")
    {
    note.title=text_field.value;
    }
    else
    {
        note.title="No Name";
    }

    let now=moment();

    note.updatedAt= now.valueOf();
    
    saveNotes(notes);
    location.assign("todo.html");
})


//delete is clicked
del_button.addEventListener("click",function()
{
    notes=notes.filter( function(obj)
    {
        return(obj.id!==id);

    }

    )

    saveNotes(notes);
    location.assign("todo.html");
})

