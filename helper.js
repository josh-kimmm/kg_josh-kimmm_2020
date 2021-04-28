var numToString = function(num) {
    var stringValue = "";
    switch(num){
        case 0: 
            stringValue = "Zero";
            break;
        case 1: 
            stringValue = "One";
            break;
        case 2: 
            stringValue = "Two";
            break;
        case 3: 
            stringValue = "Three";
            break;
        case 4: 
            stringValue = "Four";
            break;
        case 5: 
            stringValue = "Five";
            break;
        case 6: 
            stringValue = "Six";
            break;
        case 7: 
            stringValue = "Seven";
            break;
        case 8: 
            stringValue = "Eight";
            break;
        case 9: 
            stringValue = "Nine";
            break;
        default:
            stringValue = null;
            break;
    }

    return stringValue;
};

export {numToString};