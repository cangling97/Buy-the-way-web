function showList(showCheckList,checkList){
    if (showCheckList){
         checkList.style.display = "block";
         checkList.style.pointerEvents = "auto";
    }
    return !showCheckList;
}

function enterOption(){
    if (localStorage.length == 0){
        alert("Please Add Something to Your Cart!")
    }else if(localStorage.length == 2){
        window.location = "option1.html";
    }else if(localStorage.length == 3){
        window.location = "option2.html";
    }else{
        window.location = "option.html";
    }
}

function emptyList(){
    localStorage.clear();
    console.log(1);
    window.location = "index.html";
}

function toSubmit(){
    var x = document.getElementById("SearchBox").value;
    x = x.toLowerCase();
    if (x == "turkey"){
        document.newForm.action = "turkey.html";
    }else if(x == "cookie"){
        document.newForm.action = "cookie.html";
    }else{
        alert("Nothing Found");
    }
}

function closeList(showCheckList,checkList){
    if(!showCheckList){
        //localStorage.clear();
        checkList.style.display = "none";
        checkList.style.pointerEvents = "none";
    }
    return !showCheckList;
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

function createQuanlityList(){
    var OneContent = document.getElementById("Q1");
    var TwoContent = document.getElementById("Q2");
    var ThreeContent = document.getElementById("Q3");
    var FourContent = document.getElementById("Q4");
    var FiveContent = document.getElementById("Q5");
    var SixContent = document.getElementById("Q6");
    var SevenContent = document.getElementById("Q7");
    var EightContent = document.getElementById("Q8");
    var NineContent = document.getElementById("Q9");
    var Tenontent = document.getElementById("Q10");
    var quanlityList = [OneContent,TwoContent,ThreeContent,FourContent,FiveContent,SixContent,SevenContent,EightContent,NineContent,Tenontent];
    return quanlityList;
}


function display(localStorage,contentList,getListId,quanList){
    for (var i = localStorage.length - 1; i >= 0; i--) {
        data = localStorage.getItem(localStorage.key(i));
        contentList[i].innerHTML = localStorage.key(i) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data;
        //quanList[i].innerHTML = localStorage.key(i);
        console.log(localStorage.key(i));
        getListId[i].style.display = "block";
      }
}

function remove(index,contentList,getListId,quanList){
    let deleted = localStorage.length - 1;
    deleted = deleted = index;
    localStorage.removeItem(localStorage.key(deleted));
    //location.reload();
    display(localStorage,contentList,getListId,quanList);
}


window.addEventListener('load', function(){
    var showCheckList = true;
    var myList = document.getElementById("myList");
    var checkList = document.getElementById('checkList');
    var close = document.getElementById("close");
    
    var contentList = createContentList();
    var getListId = createIdList();
    var quanList = createContentList();
     var de1 = document.getElementById("delete1");
     var de2 = document.getElementById("delete2");   
    //  var de3 = document.getElementById("delete3");
    //  var de4 = document.getElementById("delete4");
    //  var de5 = document.getElementById("delete5");
    //  var de6 = document.getElementById("delete6");
    //  var de7 = document.getElementById("delete7");
    //  var de8 = document.getElementById("delete8");
    //  var de9 = document.getElementById("delete9");
    //  var de10 = document.getElementById("delete10");
     de1.onclick = function(contentList,getListId,quanList){
        remove(0,contentList,getListId,quanList);
     }
     de2.onclick = function(contentList,getListId,quanList){
        remove(1,contentList,getListId,quanList);
     }



    de1.onclick = function(){
        remove(1,contentList,getListId);
     }

    this.window.onclick = function(){
        display(localStorage,contentList,getListId,quanList);
    };

    myList.onclick = function(){
        showCheckList = showList(showCheckList,checkList);
    };



    close.onclick = function(){
        showCheckList = closeList(showCheckList,checkList);
    };

    //myList.addEventListener('click',showList(showCheckList));
    
  });
