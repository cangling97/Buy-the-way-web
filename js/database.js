function database(){
    var data = {};
    let apple1 = ("metro","food",0.99,3);
    let apple2 = ("foodBasic","food",0.99,5);
    let apple3 = ("Costco","food",0.50,7);
    let salmon = ("metro","food",19.99,3);
    let ham1 = ("metro","food",11.29,3)
    let ham2 = ("foodBasic","food",9.99,5)
    let orange1 = ("foodBasic","food",1.50,5);
    let orange2 = ("metro","food",1.99,3);
    let scallop1 = ("foodBasic","food",14.99,5);
    let scallop2 = ("metro","food",19.9,3);
    let beef1 = ("metro","food",15.99, 3);
    let beef2 = ("foodBasic","food",13.99, 5);
    let beef3 = ("costco","food",32.99, 7);

    data["apple"] = [apple1,apple2,apple3];
    data["salmon"] = [salmon];
    data["ham"] = [ham1,ham2];
    data["orange"] = [orange1,orange2];
    data["scallop"] = [scallop1,scallop2];
    data["beef"] = [beef1,beef2,beef3];
    return data;
}



