let btn = document.querySelectorAll("button")

let msgdiv=document.querySelector('.msgdiv')

// btn.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         console.log("click")
//     })
// })
let turn = true;

let checkwiner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
btn.forEach((button) => {

    button.addEventListener("click", () => {
        console.log("you clciked")

        if (turn == true) {
            button.innerText = "X"
            turn = false
        }
        else 
        {
            button.innerText = "O"
            turn = true
        }
        button.disabled=true;
        checkpatterns();
      

    })
})

let checkpatterns=()=>{
    for(let patterns of checkwiner){
        // console.log(patterns)
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(btn[patterns[0]],btn[patterns[1]],btn[patterns[2]]);
        // console.log(btn[patterns[0]].innerText,btn[patterns[1]].innerText,btn[patterns[2]].innerText);
        let p1=btn[patterns[0]].innerText;
        let p2=btn[patterns[1]].innerText;
        let p3=btn[patterns[2]].innerText;
        if(p1!="" && p1!="" && p1!=""){
            if(p1==p2 && p2==p3 && p3==p1){
                console.log("winner",p1)
                let messg=document.querySelector('#msg');
                messg.innerText=`congrates,winner is ${p1}`;
            msgdiv.classList.remove('hide')
            }

        }

    }
}