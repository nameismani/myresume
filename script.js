let  maniContainer = document.getElementById("maincontainer");
let div = document.createElement("div");
let para = document.createElement("p");
let text = document.createTextNode('This is a seperate div that is created in JS. The left-side button is used to print this website and righ-side button is used to hide or show this div')
let button = document.createElement("button");
let btn = document.createElement("button");
button.innerText = 'Click Here';
btn.textContent = "Hide Div";
// button.setAttribute("onclick", "click(event)")
button.addEventListener("click", () =>{
    window.print()
})
btn.addEventListener("click",() =>{
    if(div.style.display === 'none'){
        btn.textContent = "Hide div";
        div.style.display = "block";
    }
    else{
        btn.textContent = 'show Div';
        div.style.display = "none";
    }
} )
div.style.backgroundColor = '#079992';
para.style.padding = '3px';
para.style.paddingTop = "15px"
para.style.color = "#fff";
para.append(text);
div.append(para);
maniContainer.append(button);
maniContainer.append(btn);
button.style.cssText = "background-color:red; color:#fff; padding:6px; margin:5px; border-radius:5px; border:1px solid grey; cursor:pointer";
btn.style.cssText = "background-color:#0c2461; color:#fff; padding:6px; margin:5px;  border-radius:5px; border:1px solid grey; cursor:pointer;float:right";
div.style.textAlign = "center";
div.style.verticalAlign = "middle";
div.style.height = "50px";

maniContainer.append(div)


// function click(event){
//   console.log(event)
// }
