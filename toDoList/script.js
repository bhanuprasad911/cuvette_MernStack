console.log("running");
const addNew = document.getElementById("addnew");
const newInput = document.getElementById("input");
const list = document.getElementById("mainList");
const newItem = document.getElementById("new");
const newItemAddButton = document.getElementById("additem");
addNew.addEventListener("click",()=>{
    if(newInput.style.display==="block"){
        newInput.style.display="none";
    }
    else{
        newInput.style.display="block";
    }
})
newItemAddButton.addEventListener("click",()=>{
    const itemList = [];
    
    const listItems = document.querySelectorAll("li");
    listItems.forEach(element => {
        itemList.push(element.textContent)
    });
    const newMessasgeItem = newItem.value.trim();
    const checkMessage = newMessasgeItem+"Delete";
    // console.log(checkMessage)
    if (newMessasgeItem === ""){
        alert("Cannot add empty messasge");
    }
    else if(itemList.includes(checkMessage)){
        alert("Message already exists");
    }
    else{
        const item = document.createElement("li")
        const rm = document.createElement("button");
        rm.style.display="none";
        rm.className="remove-btn";
        rm.textContent="Delete";
        item.textContent=newMessasgeItem.charAt(0).toUpperCase() + newMessasgeItem.slice(1).toLowerCase();;
        item.appendChild(rm)
        list.appendChild(item);
        // console.log(item);
        newItem.value = ""
        item.addEventListener("mouseover", ()=>{
            rm.style.display="inline";
        })
        item.addEventListener("mouseout", ()=>{
            rm.style.display="none";
        })
        item.addEventListener("click",()=>{
            if (rm.style.display==="none"){
                rm.style.display="inline"
            }
            else{
                rm.style.display="none"
            }
        })
        
        rm.addEventListener("click",()=>{
            list.removeChild(item)
        })
    }
});
