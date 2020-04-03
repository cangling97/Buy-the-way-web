function createData(){
    var data = {};
    let apple1 =["metro",0.99];
    let apple2 =["foodBasic",0.99];
    let apple3 =["costco",0.50];
    let salami1 = ["metro",2.99];
    let cheese1 = ["metro",1.99];
    let cheese2 = ["foodBasic",1.99];
    let milk1 = ["metro",5.99];
    let milk2 = ["foodBasic",5.00];
    let milk3 = ["costco",3.00];
    let grape1 = ["metro",5.99];
    let grape2 = ["foodBasic",5.00];
    let grape3 = ["costco",3.00];
    let ham1 =["metro",11.29];
    let ham2 =["foodBasic",9.99];
    let broccoli1 =["foodBasic",2.00];
    let broccoli2 =["metro",2.00];
    let banana1 =["foodBasic",1.50];
    let banana2 =["metro",1.99];
    let banana3 =["costco",0.50];
    let chip1 =["foodBasic",1.50];
    let chip2 =["metro",1.99];
    let chip3 =["costco",0.50];
    let cracker1 =["foodBasic",1.50];
    let cracker2 =["metro",1.99];
    let cracker3 =["costco",0.50];
    let cucumber1 =["foodBasic",7.99];
    let cucumber2 =["metro",3.99];
    let sausage1 =["metro",17.99];
    let sausage2 =["foodBasic",13.99];
    let sausage3 =["costco",20.99];
    let cookie1 =["metro",9.99];
    let cookie2 =["foodBasic", 7,99];
    let cookie3 =["costco",3.99];
    let turkey1 =["metro",39.99];
    let turkey2 =["foodBasic",39.99];
    let juice1 =["metro",9.99];
    let juice2 =["foodBasic",7.99];
    let juice3 =["costco",5.50];
    let soda1 =["metro",9.99];
    let soda2 =["foodBasic",7.99];
    let soda3 =["costco",5.50];
    let catFood1 =["petValu", 34.99];
    let catFood2=["globalPetFood", 28.99];
    let dogFood1 =["petValu", 25.99];
    let dogFood2 =["globalPetFood", 28.99];
    let dogFood3 =["costco",22.50];
    let catTree1 =["petValu", 45.99];
    let catTree2 =["globalPetFood", 55.99];
    let catTree3 =["costco", 39.99];
    let hammer1 =["canadianTire", 7.99]; 
    let hammer2 =["dollarama", 2.99];
    let hammer3 =["costco", 6.99];
    let screw1 =["dollarama", 0.99];
    let screw2 =["canadianTire", 0.99];
    let screwdriver1 =["dollarama", 1.99];
    let screwdriver2 =["canadianTire", 2.99]; 
    let screwdriver3 =["canadaComputer", 4.99]; 

    data["salami"] = [salami1];
    data["cheese"] = [cheese1,cheese2];
    data["milk"] = [milk1,milk2,milk3];
    data["grape"] = [grape1,grape2,grape3];
    data["cracker"] = [cracker1,cracker2,cracker3];
    data["chip"] = [chip1,chip2,chip3];
    data["juice"] = [juice1,juice2,juice3];
    data["broccoli"] = [broccoli1,broccoli2];
    data["catfood"] = [catFood1,catFood2];
    data["dogfood"] = [dogFood1,dogFood2,dogFood3];
    data["cattree"] = [catTree1,catTree2,catTree3];
    data["hammer"] = [hammer1,hammer2,hammer3];
    data["screw"] = [screw1, screw2];
    data["screwdriver"] = [screwdriver1,screwdriver2,screwdriver3];
    data["apple"] = [apple1,apple2,apple3];
    data["banana"] = [banana1,banana2,banana3];
    data["ham"] = [ham1,ham2];
    data["cucumber"] = [cucumber1,cucumber2];
    data["sausage"] = [sausage1,sausage2,sausage3];
    data["cookie"] = [cookie1,cookie2,cookie3];
    data["turkey"] = [turkey1,turkey2];
    data["soda"] = [soda1,soda2,soda3];
    return data;
}

window.addEventListener('load', function(){
    database = createData();
    metro = 700;
    foodBasic = 1400;
    canadaComputer = 750;
    dollarama = 1000;
    globalPetFood = 3400;
    petValu = 3000;
    costco = 7400;
    canadianTire = 2800;
    var item;
    var quantity;
    var list;
    var shop;
    var distance;
    var price;
    var shopList;
    var cloestShop;
    var cheapestShop;
    var totalPrice = 0;
    var totalDistance = 0;
    var click = document.getElementById("click");
    var recomInfo = document.getElementById("recomInfo");
    var recomShop = document.getElementById("recomShop");
    var op1Shop = document.getElementById("op1Shop");
    var op1Info = document.getElementById("op1Info");
    var op2Shop = document.getElementById("op2Shop");
    var op2Info = document.getElementById("op2Info");
    
    click.onclick = function(){
        shopList = [];
        cloestShop = [];
        cheapestShop = [];
        totalPrice = 0;
        totalDistance = 0;
        clPrice = 0;
        clDistance = 0;
        chPrice = 0;
        chDistance = 0;
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var maxClDistance = 10000;
            var maxChPrice = 10000;
            var chDi = 0;
            var clPri = 0;
            var maxdistance = 10000;
            var maxprice = 10000;
            var shopC;
            var shopB;
            var shopA;
            if (localStorage.getItem(localStorage.key(i)) == "b"){
                continue;
            }
            item = localStorage.key(i);
            quantity = localStorage.getItem(localStorage.key(i));
            item = item.toLowerCase();
            list = database[item];
            for (var j = 0; j < list.length; j++){
                shop = list[j][0];
                switch (shop){
                    case "metro":
                        distance = metro;
                        break;
                    case "foodBasic":
                        distance = foodBasic;
                        break;
                    case "costco":
                        distance = costco;
                        break;
                    case "canadaComputer":
                        distance = canadaComputer;
                        break;
                    case "dollarama":
                        distance = dollarama;
                        break;
                    case "canadianTire":
                        distance = canadianTire;
                        break;
                    case "petValu":
                        distance = petValu;
                        break;
                    case "globalPetFood":
                        distance = globalPetFood;
                        break;
                }
                price = list[j][1] * quantity;
                //Cheapest
                if (price < maxChPrice){
                    maxChPrice = price;
                    shopB = shop;
                    chDi = distance;
                }
                //Cloest
                if (distance < maxClDistance){
                    maxClDistance = distance;
                    shopA = shop;
                    clPri = price;
                }
                //recommend
                if (distance < maxdistance && price < maxprice){
                    maxdistance = distance;
                    maxprice = price;
                    shopC = shop;
                }else if(distance < maxdistance + 200 && price < maxprice + 5){
                    maxdistance = distance;
                    maxprice = price;
                    shopC = shop;
                }else if(price < maxprice + 10 && distance < maxdistance - 200){
                    maxdistance = distance;
                    maxprice = price;
                    shopC = shop;
                }
            }
            //cloest distance
            if (!cloestShop.includes(shopA)){
                cloestShop.push(shopA);
                clPrice += clPri;
                clDistance += maxClDistance;
            }else{
                clPrice += clPri;
            }
            //Cheapest
            if (!cheapestShop.includes(shopB)){
                cheapestShop.push(shopB);
                chPrice += maxChPrice;
                chDistance += chDi;
            }else{
                chPrice += maxChPrice;
            }
            //Recommend
            if (!shopList.includes(shopC)){
                shopList.push(shopC);
                totalPrice += maxprice;
                totalDistance += maxdistance;
            }else{
                totalPrice += maxprice;
            }
        }

        var shopName = "";
        var cloest = "";
        var cheapest = "";
        for (var i = 0; i < shopList.length; i++){
            shopName += "&nbsp->&nbsp" + shopList[i];
        }
        for (var i = 0; i < cloestShop.length; i++){
            cloest += "&nbsp->&nbsp" + cloestShop[i];
        }
        for (var i = 0; i < cheapestShop.length; i++){
            cheapest += "&nbsp->&nbsp" + cheapestShop[i];
        }
        if (shopName == cloest){
            op1Shop.style.display = "none";
            op1Info.style.display = "none";
        }else if (shopName == cheapest){
            op2Shop.style.display = "none";
            op2Info.style.display = "none";
        }
        if (cloest == cheapest){
            op2Shop.style.display = "none";
            op2Info.style.display = "none";
        }
        recomShop.innerHTML = shopName;
        op1Shop.innerHTML = cloest;
        op2Shop.innerHTML = cheapest;
        recomInfo.innerHTML = "Est.&nbsp$" + parseInt(totalPrice,10) + "&nbspand&nbsp" + totalDistance +"m";
        op1Info.innerHTML = "Est.&nbsp$" + parseInt(clPrice,10) + "&nbspand&nbsp" + clDistance +"m";
        op2Info.innerHTML = "Est.&nbsp$" + parseInt(chPrice,10) + "&nbspand&nbsp" + chDistance +"m";
    }
    click.click();
    localStorage.clear();
    
});




