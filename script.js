document.getElementById("sbutton").addEventListener("click", function(){
    const name = document.getElementById("Pname").value.trim();
    const gender = document.getElementsByName("gender");
    let selectedgender = "";
    for(let option of gender){
        if(option.checked){
            selectedgender = option.value;
            break;
        }
    }
    if(!name || !selectedgender){
          alert("Enter Your Details!");
    }
else{
    alert(`HI ${name}, Your Selected Gender is ${selectedgender}.`);
    }
});
document.getElementById("cbutton").addEventListener("click",function(){
    document.getElementById("Pname").value = "";
    const selectedgender = document.getElementsByName("gender");
    for(let option of selectedgender){
        option.checked = false;
    }
});
