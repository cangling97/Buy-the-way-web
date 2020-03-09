function showList(showCheckList,checkList){
    if (showCheckList){
         checkList.style.display = "block";
    }
    if(!showCheckList){
        checkList.style.display = "none";
    }
    showCheckList = !showCheckList;
    return showCheckList;
}
window.onload=function(){
    var showCheckList = true;
    var myList = document.getElementById("myList");
    var checkList = document.getElementById('checkList');
    myList.onclick = function(){
        showCheckList = showList(showCheckList,checkList);
    };
    checkList.onclick = function(){
        showCheckList = showList(showCheckList,checkList);
    }
    //myList.addEventListener('click',showList(showCheckList));
    
  }
