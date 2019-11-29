	let ol = document.getElementById("ol");
	ol.addEventListener('click', liListener);

	
	let inputArea = document.getElementById("area");
	
  	function liListener(event){

	  	let input = document.createElement('input');
  		let target = event.target;
  		 if(target.tagName == 'LI') {
    		input.value = target.innerHTML;
    	 	target.innerHTML = '';

		    if (target.nextSibling !== input) {
		      target.after(input);
		      input.focus();
		      target.removeEventListener('click', liListener);
		      target.remove(); 
		      input.addEventListener('blur', changeLi);
	    		}
	    	}
		
		function changeLi(){
		input.replaceWith(target);	
		target.innerHTML = this.value;
  		}	
  	}
  	/////////Кнопка добавить///////////
  	let addBut = document.getElementById('but');
  	addBut.addEventListener('click', addLi);
  	
  	function addLi(){
  		if(inputArea.value !== ''){
			let li = document.createElement('li');
			li.innerHTML = inputArea.value;
			ol.appendChild(li);
			del.removeAttribute('disabled');
		}
  		else{
  			inputArea.placeholder = 'введите текст';
  		}
  		inputArea.value = '';
  	}
  	////////////////////////////////////////
  	let del = document.getElementById('del');
  	del.addEventListener('click', delBut);

 
    let listItems = document.getElementsByTagName("li");
    function delBut(){
      if(listItems.length === 0) {
        del.setAttribute('disabled', true);
         
       };
      let last = listItems[listItems.length - 1];
      last.parentNode.removeChild(last);
    }


