var myArray = document.getElementsByClassName("products");
function searchFunction(){
    let filter = document.getElementById("search").value.toUpperCase();
    let data = document.getElementsByClassName("products");
    for(var i = 0 ; i<data.length;i++){
        let x = data[i].getElementsByClassName("header")[0];
        let y = data[i].getElementsByClassName("description")[0];
        if(x){
            var textvalue1 = x.textContent || x.innerHTML;
            var textvalue2 = y.textContent || y.innerHTML;
            if(textvalue1.toUpperCase().indexOf(filter)>-1||textvalue2.toUpperCase().indexOf(filter)>-1){
                data[i].style.display = "";
            }else{
                data[i].style.display = "none";
            }
        }
    }
}
