let remainder = ``;
function decimalToBinary(num) {
  //Write you code here
	
	while (num>0) {
                remainder = `${num%2}` + remainder;
                num = Math.floor(num/2);
            }
            return remainder;
  /*
  7/2 = 1
  3/2 = 1
  
  
  */
}

window.decimalToBinary = decimalToBinary;
