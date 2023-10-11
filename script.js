// complete the given function

function palindrome(str){
	let word = str.trim();
	let arr = word.split(" ");
	let w = arr.join("");

	let i = 0, j = w.length-1;
	while(i < j){
		if(w.charAt(i) != w.charAt(j)){
			console.log(false);
			return false;
		}
		i++;
		j--;
	}
	console.log(true);
	return true;
}
module.exports = palindrome
