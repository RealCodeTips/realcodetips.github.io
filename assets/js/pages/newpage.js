const binaryToDecimal = (binary) => {
	let result=0
	let pow=0

	for (let i=binary.length-1; i>=0; i--) {
    		let exponent=Math.pow(2, pow)
    		result += exponent * parseInt(binary[i],10)
    		pow++
	}

	console.log(result)
}
