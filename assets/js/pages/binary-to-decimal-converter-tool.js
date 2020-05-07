const binaryToDecimal = (binary) => {
	let result=0
	let pow=0

	for (let i=binary.length-1; i>=0; i--) {
    		let r=Math.pow(2, pow)

    		result += r * parseInt(binary[i],10)

    		pow++
	}

	return result
}


document.querySelector('#binaryToDecimal').addEventListener('submit', event => {
	event.preventDefault()
	
	const b = document.querySelector('#binary').value
	const d = binaryToDecimal(b)

	document.querySelector('#decimal').value = d
})
