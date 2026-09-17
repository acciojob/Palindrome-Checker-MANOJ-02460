// complete the given function

function palindrome(str){

	let x = str.toLowerCase().trim()

	for(let i=0; i<x.length; i++){

		if(x[i] !== x[x.length-1-i]){
			return false
		}
	}

	return true

}
module.exports = palindrome
