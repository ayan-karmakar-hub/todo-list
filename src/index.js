
import itemDetails from "./details.js"

// factory function for a todo item
let todoItem = (name, id) => {
    let details = "";
    let done = false;
    return {name, id, details, done}
}

// create item list with initial sample item
let itemList = [];
itemList.push(createSampleItem());

// default item when pages loads for the first time
function createSampleItem(){
    let item = todoItem("Sample Item", 0)
    item.details = "Sample Description";
    return item;
}

// overview page functionality implementation
(() => {

    // create item when user clicks add item
    function addItem(){
        let input = document.querySelector("#item-name");
        let inputText = input.value;
        if(inputText != ""){
            let item = todoItem(inputText, itemList.length);
            itemList.push(item);
            render();
            input.value = "";
        }
    }

    // remove item corresponding to the remove
    // button the user clicks
    function removeItem(){
        let itemID = this.id.slice(this.id.length-1);
        itemList = itemList.filter((item) => item.id !== Number(itemID));
        render();
    }

    // strike-through item corresponding to the
    // complete button the user clicks
    function completeItem(){
        let itemID = this.id.slice(this.id.length-1);
        let thisItem  = itemList.find((item) => item.id === Number(itemID));
        let itemElement = document.querySelector(`#item${itemID}`);

        let inputCss = "text-decoration: line-none;"
        if(!thisItem.done){
            inputCss = "text-decoration: line-through;";
        }

        itemElement.style.cssText = inputCss;
        thisItem.done = !thisItem.done;
    }

    // update the overview page
    function render(){
        clearContents();
        createHeadings();
        createContainer();
        createForm();
        createContent();  
    }

    // clear everything on the page
    function clearContents(){
        let body = document.querySelector("body");
        while(body.lastChild){
            body.removeChild(body.lastChild);
        }
    }

    // add in the overview headings
    function createHeadings(){
        let body = document.querySelector('body');
        let heading1 = document.createElement('h1');
        let heading2 = document.createElement('h2');

        heading1.innerText = "To-Do List";
        heading2.id= "task-header";
        heading2.innerText = "Remaining Tasks";

        body.appendChild(heading1);
        body.appendChild(heading2);
    }

    // add in the container for the add-item form
    // and the current list of tasks
    function createContainer(){
        let body = document.querySelector('body');
        console.log(body);
        let container = document.createElement('div');
        container.id = "container";
        body.appendChild(container);
    }

    // create the form that lets the user add items
    // to the list
    function createForm(){
        let container = document.querySelector("#container");
        let form = document.createElement("form");
        form.id = "form";

        let formTitle = document.createElement("p");
        let formLabel = document.createElement("label");
        let formInput = document.createElement("input");
        let formButton = document.createElement("button");

        formTitle.innerText = "Add a New Task";
        formTitle.id = "form-title";

        formLabel.innerText = "Task Name:";
        formLabel.id = "name-label";
        formLabel.for = "name";
        
        formInput.type = "text";
        formInput.id= "item-name";
        formInput.name = "name";

        formButton.innerText = "Add Item";
        formButton.id = "add-button";
        formButton.type = "button";
        formButton.addEventListener('click',addItem);

        form.appendChild(formTitle);
        form.appendChild(formLabel);
        form.appendChild(formInput);
        form.appendChild(formButton);
        
        container.appendChild(form);
    }

    // create the list that displays all the items 
    // the user currently has left to complete
    function createContent(){
        let container = document.querySelector("#container");
        let content = document.createElement("div");
        content.id = "content";
        container.appendChild(content);
        
        // append all the items in the todo list
        // to the list of items that are displayed
        for(let i = 0; i < itemList.length; i++){
            appendItem(i,itemList[i]);
        }
    }

    // append the given item in the user's todo 
    // list to the displayed task list
    function appendItem(itemID,todoItem){
        todoItem.id = itemID;

        let content = document.querySelector("#content");
        let newDetail = document.createElement("button");
        let newItem = document.createElement("div");
        let newComplete = document.createElement("button");
        let newRemove = document.createElement("button");

        newDetail.id = `detail${itemID}`;
        newItem.id = `item${itemID}`;
        newComplete.id = `complete${itemID}`;
        newRemove.id = `remove${itemID}`;

        newDetail.classList = "detail"
        newItem.classList = "item"
        newComplete.classList = "complete"
        newRemove.classList = "remove"

        newDetail.innerText = "Add Details:";
        newItem.innerText = todoItem.name;
        newComplete.innerText = "Complete";
        newRemove.innerText = "Remove";

        newDetail.addEventListener('click',switchToDetails);
        newComplete.addEventListener('click',completeItem);
        newRemove.addEventListener('click',removeItem);

        if(todoItem.done){
            newItem.style.cssText = "text-decoration: line-through;";
        }

        content.appendChild(newDetail);
        content.appendChild(newItem);
        content.appendChild(newComplete);
        content.appendChild(newRemove);
    }

    // switch to the details page of the given item
    function switchToDetails(){
        let itemID = this.id.slice(this.id.length-1);
        let thisItem  = itemList.find((item) => item.id === Number(itemID));

        clearContents();

        let details = itemDetails(thisItem);
        details.updateHeadings();
        details.createDetails();
        details.switchButton.addEventListener('click',render);
    }
    
    //initial render
    render();  
})();