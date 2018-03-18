// A Simple contact list using javascript arrays and objects

//Event handler for the Header checkbox MDL No longer handles this
function updateCheckBox(headerCB) {
	var table = document.querySelector('table');
	var headerCheckbox = table.querySelector('thead .mdl-data-table__select input');
	var boxes = table.querySelectorAll('tbody .mdl-data-table__select');
	var rows = table.querySelectorAll('tbody tr');
	if (headerCB.checked) {
		for (let i = 0, length = boxes.length; i < length; i++) {
			boxes[i].MaterialCheckbox.check();
			//rows[i].classList.add('checked');
		}
	} else {
		for (let i = 0, length = boxes.length; i < length; i++) {
			boxes[i].MaterialCheckbox.uncheck();
			//rows[i].classList.remove('checked');
		}
	}
}
// Function to delete all rows that have the checkbox checked
function rowRemove() {
	var table = document.querySelector('table'); //get reference  of the table
	var boxes = table.querySelectorAll('tbody .mdl-data-table__select'); // get reference of checkbox elements as a list
	var rows = table.querySelectorAll('tbody tr'); // target rows in table body
	//alert (boxes[2].MaterialCheckbox.inputElement_.checked.toString ())
	//alert (rows.length )
	for (let i = 0, length = rows.length; i < length; i++) {
		// let tempele =boxes[i];
		if (boxes[i].MaterialCheckbox.inputElement_.checked) // if checkbox is checked
		{
			rows[i].remove();
		} // remove its corresponding row
	}
}
//Add a Contact
function freshUpdate(name, email) {
	var listContainer = document.getElementById('features-list');
	var tmptr;
	var tmptd;
	var tmplabel;
	var tmpinput;
	var tmptd2;
	var tmptd3;
	// create new elements
	tmptr = document.createElement("tr");
	tmptd = document.createElement("td");
	tmptd.setAttribute("class", "mdl-data-table__cell--non-numeric");
	tmplabel = document.createElement("label");
	tmplabel.setAttribute("class", "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select");
	tmpinput = document.createElement("input");
	tmpinput.setAttribute("class", "mdl-checkbox__input");
	tmpinput.setAttribute("type", "checkbox");
	tmptd2 = document.createElement("td");
	tmptd2.setAttribute("class", "mdl-data-table__cell--non-numeric");
	tmptd2.innerHTML = name;
	tmptd3 = document.createElement("td");
	tmptd3.setAttribute("class", "mdl-data-table__cell--non-numeric");
	tmptd3.innerHTML = email;
	// connect new Elements into the "tr row" element
	tmplabel.appendChild(tmpinput);
	tmptd.appendChild(tmplabel);
	tmptr.appendChild(tmptd);
	tmptr.appendChild(tmptd2);
	tmptr.appendChild(tmptd3);
	// MDL promotions that re-attach events and styles
	componentHandler.upgradeElement(tmpinput);
	componentHandler.upgradeElement(tmplabel);
	componentHandler.upgradeElement(tmptd);
	componentHandler.upgradeElement(tmptd2);
	componentHandler.upgradeElement(tmptd3);
	// Insert new elements into the DOM
	listContainer.appendChild(tmptr);
}
//MDL Text Input Cleanup fixes the dirty bit on the MDL form
function mdlCleanUp() {
	var mdlInputs = document.querySelectorAll('.mdl-js-textfield');
	for (var i = 0, l = mdlInputs.length; i < l; i++) {
		mdlInputs[i].MaterialTextfield.checkDirty();
	}
}
// Event handler for the Add Button
function addPerson() {
	//alert(document.getElementById('fullName').value)
	freshUpdate(document.getElementById('fullName').value, document.getElementById('email').value);
	document.getElementById("contactForm").reset();
	mdlCleanUp();
	//document.getElementById('fullName').reset();
	//	document.getElementById('email').value = "";
	return false;
}
