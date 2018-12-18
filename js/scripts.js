(function() {
	const names = ['Alice', 'Andy', 'Bob', 'Charles', 'David B', 'David Z', 'Deven', 'Edward', 'Fred', 'George', 'Hamilton', 'Ian', 'Joey', 
	              'Ken', 'Larry', 'Mark', 'Matt M', 'Matt W', 'Neil', 'Oswald', 'Pete', 'Quincy', 'Ronald', 'Steve', 'Tony', 
	               'Uno', 'Vance', 'William', 'Xavier', 'Zed'];
	const btn = document.querySelector('.rando-start');
	const container = document.querySelector('.rando-names');
	let isComplete = false;

	function createDivs() {
		if( isComplete !== true ) {
			for (i=1; i <= 3; i++) {
				let div = document.createElement('div');
				div.className = `rando-box box${i}`;
				let name = document.createTextNode('name');
				div.appendChild(name);
				container.append(div);
			}
			isComplete = true;
		}
		else {
			return;
		}
	}

	createDivs();
	const box1 = document.querySelector('.box1');
	const box2 = document.querySelector('.box2');
	const box3 = document.querySelector('.box3');

	function randomizer(arr, el, limit) {
		let count = 1;

		if (limit === null || limit === undefined) {
			limit = 25;
		}

		if (!Array.isArray(arr) || el === undefined) {
			console.warn('Please enter required parameters: (array, element)');
			return;
		}

		let interval = setInterval(function numbers() {
		  if (count <= limit) {
		    el.textContent = arr[Math.floor(Math.random()*arr.length)];
		    count++;
		  } else {
		    clearInterval(interval);
		  }
		}, 50);
	}

	btn.addEventListener("click", function(event) { 
	  container.classList.remove('hidden');
	  randomizer(names, box1, 25);
	  randomizer(names, box2, 50);
	  randomizer(names, box3, 75);
	}, false);

})();