const allBtn = document.getElementsByClassName("add-btn");
for( const btn of allBtn){
    btn.addEventListener("click",function(event){
       
        const task = document.getElementById("task").innerText;
        const convertedTask = parseInt(task)
        const addpoint = document.getElementById("addpoint").innerText;
        const convertedAddpoint = parseInt(addpoint)
        if(convertedTask >0){

            const sum = convertedTask-1
            const added = convertedAddpoint + 1
            document.getElementById("task").innerText="0"+sum
            document.getElementById("addpoint").innerText=added

            event.target.setAttribute("disabled", false);
            event.target.parentNode.style.backgroundColour = "gray";
         
            const complet = event.target.parentNode.parentNode.childNodes[3].innerText
            console.log(complet);

            const history = document.getElementById("history");
            const addHistory = document.createElement("div")
            addHistory.innerHTML = `
               <div id="clr" class="h-fit w-80 rounded-md p-2 bg-blue-100">
            You have Complete The Task ${complet} at 12:48:15 PM
        </div>
            
            
            
            `
            history.appendChild(addHistory)





const clock = document.getElementById("clock");
console.log(clock);



















            // --------------
             



        }
        

   else{
    window.alert("no more")
 
   }

        










// end

    })
}