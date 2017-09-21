module.exports = function zeros(expression) {
 	let arr = expression.split('*');
	let result = 0;
	let fvs = 0;
	let tws = 0;

	for (let i=0; i<arr.length; i++) {
		if (arr[i].indexOf('!!') > 0) {
			let sourceNumber = +arr[i].substring(0, arr[i].indexOf('!!'));
			if (sourceNumber%2 == 0) {
			 result += tens(sourceNumber);
			 tws += twoes(sourceNumber);
			} else {
				fvs += fives(sourceNumber);
			}
		} else {
			let sourceNumber = +arr[i].substring(0, arr[i].indexOf('!'));
		result += tens(sourceNumber)+fives(sourceNumber);
		tws += twoes(sourceNumber);
		}
	};
	return (fvs >= tws) ? result+tws : result+fvs;
};

function fives(n) {
		let count = 0;
		for (let i=1; i<= n; i++) {
			if (i%5 == 0 && i%2 !== 0) {
				let num = i;
				while(num%5 == 0 && num>1) {
					count++;
					num = num/5;
				}
			}
				
		}
		return count;
	};

	function twoes(n) {
		let count = 0;
		for (let i=1; i<= n; i++) {
			if (i%2 == 0) count++;
		}
		return count;
	};

	function tens(n) {
		let count = 0;
		for (let i=1; i<= n; i++) {
			if (i%10 == 0 && (i+5)%10 !== 0) {
				let num = i;
				while(num%10 == 0 && num>1) {
					count++;
					num = num/10;
				}
			}
		}
		return count;
	};
