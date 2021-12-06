
const authBtn = document.getElementById('authBtn');

authBtn.addEventListener('click',()=>{
    // console.log('hay');
    var key = prompt("Enter Secret Key : ", "");

    if(key === "abc"){
        alert("hi");
    }
    else{
        alert("Sorry Bitch ! ");
    }
});