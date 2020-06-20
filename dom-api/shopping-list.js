const userin = document.querySelector('input');
	const btn = document.querySelector('button');
	const shoplist = document.querySelector('ul');

	function addToList(){
		var item = userin.value;
		userin.value = '';
		//alert(item);

		const liItem = document.createElement('li');
		const btnspan = document.createElement('span');
		const everyBtn = document.createElement('button');

		liItem.textContent = item;
		everyBtn.textContent = "Delete";
		everyBtn.style.margin = "10px";
		
		btnspan.appendChild(everyBtn);
		liItem.appendChild(btnspan);
		shoplist.appendChild(liItem);
		
		//everyBtn.setAttribute('onclick','this.parentNode.parentNode.remove();');

		everyBtn.onclick = function(){
			this.parentNode.parentNode.remove();
			userin.focus();
		}
		userin.focus();
	}