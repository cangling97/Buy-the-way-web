function showList(showCheckList,checkList){
    if (showCheckList){
         checkList.style.display = "block";
         checkList.style.pointerEvents = "auto";
    }
    if(!showCheckList){
        //localStorage.clear();
        checkList.style.display = "none";
    }
    showCheckList = !showCheckList;
    return showCheckList;
}

function createContentList(){
    var OneContent = document.getElementById("1");
    var TwoContent = document.getElementById("2");
    var ThreeContent = document.getElementById("3");
    var FourContent = document.getElementById("4");
    var FiveContent = document.getElementById("5");
    var SixContent = document.getElementById("6");
    var SevenContent = document.getElementById("7");
    var EightContent = document.getElementById("8");
    var NineContent = document.getElementById("9");
    var Tenontent = document.getElementById("10");
    var contentList = [OneContent,TwoContent,ThreeContent,FourContent,FiveContent,SixContent,SevenContent,EightContent,NineContent,Tenontent];
    return contentList;
}

function createIdList(){
    var OneContent = document.getElementById("Od");
    var TwoContent = document.getElementById("Td");
    var ThreeContent = document.getElementById("THd");
    var FourContent = document.getElementById("Fd");
    var FiveContent = document.getElementById("FId");
    var SixContent = document.getElementById("Sd");
    var SevenContent = document.getElementById("SId");
    var EightContent = document.getElementById("Ed");
    var NineContent = document.getElementById("Nd");
    var Tenontent = document.getElementById("TEd");
    var idList = [OneContent,TwoContent,ThreeContent,FourContent,FiveContent,SixContent,SevenContent,EightContent,NineContent,Tenontent];
    return idList;
}

window.addEventListener('load', function(){
    localStorage.clear();
    var showCheckList = true;
    var myList = document.getElementById("myList");
    var checkList = document.getElementById('checkList');
    
    contentList = createContentList();
    getListId = createIdList();


    this.window.onclick = function(){
        for (var i = 0;i<localStorage.length;++i ) {
            data = localStorage.getItem(localStorage.key(i));
            contentList[i].innerHTML = localStorage.key(i) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data;
            getListId[i].style.display = "block";
          }
    };

    myList.onclick = function(){
        showCheckList = showList(showCheckList,checkList);
    };
    checkList.onclick = function(){
        showCheckList = showList(showCheckList,checkList);
    };

    //myList.addEventListener('click',showList(showCheckList));
    
  });

