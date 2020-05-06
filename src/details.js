let itemDetails = (item)=>{
    let todoItem = item;
    let switchButton = document.createElement("button");

    // replace the overview headings with the
    // detail page headings for the current item
    let updateHeadings = () => {
        let body = document.querySelector("body");
        let header = document.createElement('h1');
        let taskHeader = document.createElement('h2');

        header.innerText = "Details Page";
        taskHeader.id = "task-header";

        taskHeader.innerText = todoItem.name;
        body.appendChild(header);
        body.appendChild(taskHeader);

    };

    // create the form that will be used to update
    // item details and return to the overview page
    let createDetails = () => { 
        let body = document.querySelector("body");
        let container = document.createElement("div");
        let detailsLabel = document.createElement("label");
        let details = document.createElement("textarea");
        let detailsButton = document.createElement("button");

        container.id="detail-container";

        detailsLabel.innerText = "Details:";
        detailsLabel.id = "detail-label";
        detailsLabel.for = "details";

        details.id = "details-input";
        details.name = "details";
        details.rows = "5";
        details.defaultValue = todoItem.details;

        detailsButton.innerText = "Save Changes";
        detailsButton.id = "details-button";
        detailsButton.type = "button";
        detailsButton.addEventListener('click',saveDetails);

        switchButton.innerText = "Back to Overview";
        switchButton.id = "switch-button";
        switchButton.type = "button";
        
        container.appendChild(detailsLabel);
        container.appendChild(details);
        container.appendChild(detailsButton);
        container.appendChild(switchButton);

        body.appendChild(container);
    };

    // save current item details
    let saveDetails = () => {
        let details = document.querySelector("#details-input");
        todoItem.details = details.value;
    }
    
    return {updateHeadings, createDetails, switchButton}
};

export default itemDetails;