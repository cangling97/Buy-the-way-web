

window.addEventListener('load', function(){

    var BroccoliInCart = false;
    var CucumberInCart = false;
    var Broccoli = 1;
    var Cucumber = 1;
    var BroccoliInc = document.getElementById("addBroccoli");
    var BroccoliDec = document.getElementById("minusBroccoli");
    var BroccoliQuantity = document.getElementById('quantityBroccoli');
    var BroccoliToCart = document.getElementById('addBroccoliToCart');
    var BroccoliAdded = document.getElementById('BroccoliAdded');
    var CucumberInc = document.getElementById("addCucumber");
    var CucumberDec = document.getElementById('minusCucumber');
    var CucumberQuantity = document.getElementById('quantityCucumber');
    var CucumberToCart = document.getElementById('addCucumberToCart');
    var CucumberAdded = document.getElementById('CucumberAdded');
    
    
    BroccoliInc.onclick = function(){     
        if (!BroccoliInCart){
            Broccoli++;
            BroccoliQuantity.innerHTML = Broccoli;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    BroccoliDec.onclick = function(){
        if (!BroccoliInCart){
            if (Broccoli > 1){
                Broccoli--;
                BroccoliQuantity.innerHTML = Broccoli;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    BroccoliToCart.onclick = function(){
        //alert(Broccoli + " Broccoli(s) added to cart");
        //add to list
        BroccoliToCart.style.display = "none";
        BroccoliAdded.style.display = "block";
        BroccoliInCart=true;
        localStorage.setItem("Broccoli",Broccoli.toString());
    }


    CucumberInc.onclick = function(){     
        if (!CucumberInCart){
            Cucumber++;
            CucumberQuantity.innerHTML = Cucumber;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CucumberDec.onclick = function(){
        if (!CucumberInCart){
            if (Cucumber > 1){
                Cucumber--;
                CucumberQuantity.innerHTML = Cucumber;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CucumberToCart.onclick = function(){
        //alert(Broccoli + " Broccoli(s) added to cart");
        //add to list
        CucumberToCart.style.display = "none";
        CucumberAdded.style.display = "block";
        CucumberInCart=true;
        localStorage.setItem("Cucumber",Cucumber.toString());
    }
    
  });
