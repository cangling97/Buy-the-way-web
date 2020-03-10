function createData(){
    var data = {};
    let apple1 = ("metro","food",0.99,3);
    let apple2 = ("foodBasic","food",0.99,5);
    let apple3 = ("Costco","food",0.50,7);
    let ham1 = ("metro","food",11.29,3)
    let ham2 = ("foodBasic","food",9.99,5)
    let banana1 = ("foodBasic","food",1.50,5);
    let banana2 = ("metro","food",1.99,3);
    let banana3 = ("costco","food",0.50,7);
    let cucumber1 = ("foodBasic","food",7.99,5);
    let cucumber2 = ("metro","food",3.99,3);
    let sausage1 = ("metro","food",17.99, 3);
    let sausage2 = ("foodBasic","food",13.99, 5);
    let sausage3 = ("costco","food",20.99, 7);
    let cookie1 = ("metro","food",9.99,3);
    let cookie2 = ("foodBasic", "food", 7,99,5 );
    let cookie3 = ("costco","food",3.99,7);
    let turkey1 = ("metro","food",39.99,3);
    let turkey2 = ("foodBasic","food",39.99,5);
    let soda1 = ("metro","drink",9.99,3);
    let soda2 = ("foodBasic","drink",7.99,5);
    let soda3 = ("Costco","drink",5.50,7);

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




