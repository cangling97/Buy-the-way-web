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
    var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
    for (var i = localStorage.length - 1; i >= 0; i--) {
        data = localStorage.getItem(localStorage.key(i));
        if (localStorage.key(i) == "Turkey"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        contentList[i].innerHTML = localStorage.key(i) + space + data;
        //quanList[i].innerHTML = localStorage.key(i);
        console.log(localStorage.key(i));
        getListId[i].style.display = "block";
      }
}

function remove(index){
    localStorage.removeItem(localStorage.key(index));
    display(localStorage,contentList,getListId,quanList);
    location.reload();
}



window.addEventListener('load', function(){

    var listIcon = document.getElementById("list");
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
    de1.onclick = function(){
       remove(0,contentList,getListId,quanList);
    }
    de2.onclick = function(){
       remove(1,contentList,getListId,quanList);
    }



   
   var contentList = createContentList();
   var getListId = createIdList();
   var quanList = createContentList();

   if (localStorage.length != 0){
    listIcon.style.display="none";
    display(localStorage,contentList,getListId,quanList);
}
   de1.onclick = function(){
       remove(1,contentList,getListId);
    }

   this.window.onclick = function(){
       display(localStorage,contentList,getListId,quanList);
   };


   //myList.addEventListener('click',showList(showCheckList));
   
 });
