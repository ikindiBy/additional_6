module.exports = function zeros(expression) {
 	let arr = expression.split('*');
	console.log(arr);
	let result = 0;
	let fvs = 0;
	let tws = 0;
	for (let i=0; i<arr.length; i++) {
		if (arr[i].indexOf('!!') > 0) {
			let sourceNumber = +arr[i].substring(0, arr[i].indexOf('!!'));
			if (sourceNumber%2 == 0) {
			 // result += tens(sourceNumber);
			 result = result + tens(sourceNumber)+fivesForDF(sourceNumber);
			 tws += twoes(sourceNumber);
			 // fvs += fivesForDF(sourceNumber);
			 console.log('in  !! - ',sourceNumber, 'twoes-', twoes(sourceNumber),
				'fvs-' , fives(sourceNumber),
				'tens-', fivesForDF(sourceNumber));
			} else {
				fvs += fives(sourceNumber);
				console.log(sourceNumber,  'fvs-' , fives(sourceNumber));
			}
		} else {
			let sourceNumber = +arr[i].substring(0, arr[i].indexOf('!'));
			result += tens(sourceNumber)+fives(sourceNumber);
			tws += twoes(sourceNumber);
			console.log('in  ! - ',sourceNumber, 'twoes-', twoes(sourceNumber),
				'fvs-' , fives(sourceNumber),
				'tens-', tens(sourceNumber));
		}
	};
	return (fvs >= tws) ? result+tws : result+fvs;

};

	function fives(n) {
		let count = 0;
		for (let i=1; i<= n; i++) {
			if (i%5 == 0 && i%2 !== 0)  {
				console.log(i);
				let num = i;
				while(num%5 == 0 && num>1) {
					count++;
					num = num/5;
				}
			}
			if (i%50 == 0 && i/10 >=5) {
				console.log(i);
				let num = i;
				while(num%5 == 0 && num>1) {
					count++;
					num = num/50;
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

	function fivesForDF(n) {
		let count = 0;
		for (let i=2; i<= n; i=i+2) {
			if (i%5 == 0 && i%2 !== 0)  {
				console.log(i);
				let num = i;
				while(num%5 == 0 && num>1) {
					count++;
					num = num/5;
				}
			}
			if (i%50 == 0 && i/10 >=5) {
				console.log(i);
				let num = i;
				while(num%5 == 0 && num>1) {
					count++;
					num = num/50;
				}
			}	
		}
		return count;
	};