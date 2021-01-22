// Problem number:1
function kilometerToMeter(kilometer){
    // cheaking input number is positive or not
    if (kilometer < 0) {
        console.log("please enter valid number");
    }
    else{
        // calculating meters into kilometer
        var meter = kilometer * 1000;
        return meter;

    }

}
// Problem number:2
function budgetCalculator(ghori,mobile,laptop){
    if (isNaN(mobile) ||isNaN(ghori)||isNaN(laptop)|| ghori < 1 || mobile < 1 || laptop < 1 ){
        console.log("please enter Valid number");
    }
    else
    {
    var ghoriPrice = 50;
    var mobilePrice = 100;
    var laptorPrice = 500;
    // calculating total bugeds
    var totalBuget = (ghori*ghoriPrice)+(mobile*mobilePrice)+(laptop*laptorPrice);
    return totalBuget;
    }
}
// Problem number:3
function hotelCost(totalDays){
    var totalCost = 0;
    // calculating for 1st Ten days
    if (totalDays <= 10){
        totalCost = 100 * tatalDays;
        
    } 
    //  calculating for 1st Ten + 2nd Ten days
    else if(totalDays <= 20){
        var fristTenDays = 10 * 100;
        var remaining = tatalDays - 10;
        var secondTenDays = remaining * 80;
        totalCost = fristTenDays + secondTenDays;
        
    }
    //  calculating for 1st Ten + 2nd Ten + After twenty days
    else{
        var fristTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = totalDays - 20;
        var afterTwentyDays = remaining * 50;
        var totalCost = fristTenDays + secondTenDays + afterTwentyDays;
        
    }
    return totalCost;
}
// Problem number:4
function megaFriend(friendsNameArray) {
    var friendsNameTemp = [];
    // counting length of the string
    for (i = 0; i < friendsNameArray.length; i++) {
        // comparenig length of the strings and then assign the string itself to friendsNameTemp
      if (friendsNameArray[i].length > friendsNameTemp.length) {
        friendsNameTemp = friendsNameArray[i];
        }
    }
    return friendsNameTemp;
}
