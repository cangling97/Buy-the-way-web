function showList(){
    showCheckList = !showCheckList;
    if (showCheckList){
         let checkList = document.getElementsByClassName('checkList');
         checkList.style.display = true;
    }
}

var showCheckList = false;
var myList = document.getElementsByClassName('myList');
myList.addEventListener('click',showList());