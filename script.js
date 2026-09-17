// complete the given function

function palindrome(str){

	let x = str.toLowerCase()
	let left = 0;
	let right = x.length-1;

	while (left < right) {

		if(!isAlphanumeric(x[left])){
			left++
		}else if(!isAlphanumeric(x[right])){
			right--
		}else{
			if(left !== right){
				return false
			}
		}

		left++;
		right--;
	}


	function isAlphanumeric(char){
		return (char >= "a" && char <= "z") || (char >= '0' && char <= '9')
	}

}
module.exports = palindrome
