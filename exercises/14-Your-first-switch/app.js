function getColor(selection){
    switch (selection){
        case 'red': case 'blue': case 'green':
            return true;
            break;
        default:
            return false;
    }
}

var colorname = prompt('What color do you want? EN INGLES').toLowerCase();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
