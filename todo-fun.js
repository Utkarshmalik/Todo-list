//extracting saved notes
let getSavedNotes = () =>
{
    let note= localStorage.getItem("notes");
    console.log(note);
    let notearray= JSON.parse(note);
    if(note===null)
    {
        return [];
    }

    else
    {
    return notearray;
    }
}


//sort funnction

let sort= (array,value) =>
{
    switch(value)
    {
        case('1'):
        array.sort((a,b) =>
        {
            if(a.createdAt < b.createdAt )
            return -1;

            else
            return 1;
        })

        break;
        case('2'):

        array.sort((a,b) =>
        {
            if(a.updatedAt < b.updatedAt )
            return 1;

            else
            return -1;
        })



        break;
        case('3'):

        array.sort((a,b) =>
        {
            if(a.title < b.title)
            return -1;

            else
            return 1;
        })



        break;
        case('4'):

        array.sort((a,b) =>
        {
            if( !a.completed && b.completed)
            return -1;

            else
            return 1;
        })


        break;

    }


}


//generating a object template
let generateObject = function()
{
    let now= moment();

    let obj =  { title:"",id:uuidv4(), createdAt:now.valueOf(),updatedAt:now.valueOf(), completed:false};
    return obj;
}






//saving notes

let saveNotes= (notes) =>
{
    let strnotes=JSON.stringify(notes);
    localStorage.setItem("notes",strnotes);
}

//rendering of notes
let renderNotes = (notes,filters) =>
{

    let array= notes.filter( function(note) {

        return note.title.includes(filters.searchText);
    }
)
let dropdown= document.querySelector(".dropdown");
let select_value=  dropdown.options[dropdown.selectedIndex].value;
sort(array,select_value);


//adding function when sorting technique is changed

dropdown.addEventListener("change",function()
{
    renderNotes(notes,filters);
})


console.log(array);
let list=document.querySelector("ul");
list.innerHTML="";
array.forEach( function(note)
{
    
    let item =document.createElement("li");
    let element=document.createElement("a");
    element.setAttribute("href",`index.html#${note.id}`);
    element.textContent= note.title;
    element.setAttribute("class","list-text");
    item.appendChild(element);
    let checkbox= document.createElement("input");

    checkbox.setAttribute("type","checkbox");

    checkbox.checked=note.completed;


    checkbox.addEventListener("change",function()
    {
        note.completed=checkbox.checked;
        saveNotes(notes);
    
    })

    item.appendChild(checkbox);
    list.appendChild(item);


})

}