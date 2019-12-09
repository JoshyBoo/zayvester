const tableKey= 'eab-table';


let eabTable;
let eabTableDemo = {
	'Jun Pedrena' :{
		'phone':'0989289891',
		'company':'INC',
		'position':'Boss',
		
	},
	'Neo Baho': {
		'phone': '09899898',
		'company': 'VITAS',
		'position': 'Singer',
		
	}
	
};

let enableDisableNameInput = (option) => {
	let newPersonName = document.getElementById('newPersonName');

	if(option === 'enable')
		newPersonName.disabled = false;
	else if (option === 'disable')
		newPersonName.disabled = true;
}
window.onload=function(){
let refreshDOMTable = () => {

	let eabTableKeys = Object.keys(eabTable); //['Jun Pedrena','Neo Baho']
	let tableContainer= document.getElementById('eabTableContainer');
	let oldTableBody = document.getElementById('tableBody');
	tableContainer.removeChild(oldTableBody);
	let newTableBody = document.createElement('span');
	newTableBody.id ='tableBody';
	tableContainer.appendChild(newTableBody);

	for (let i=0; i < eabTableKeys.length; i++) {
		let currentRow = document.createElement('div');
		let currentNameCol = document.createElement('div');
		let currentSurnameCol = document.createElement('div');
		let currentPhoneCol = document.createElement('div');
		let currentCompanyCol = document.createElement('div');
		let currentPositionCol = document.createElement('div');
		
		let currentEditBtn = document.createElement('div');
		let currentDeleteBtn = document.createElement('div');

		currentRow.className = 'eab-table-row';
		currentNameCol.className = 'eab-table-column eab-firstname';
		currentSurnameCol.className = 'eab-table-column eab-surname';
		currentPhoneCol.className = 'eab-table-column eab-phone';
		currentCompanyCol.className = 'eab-table-column eab-company';
		currentPositionCol.className = 'eab-table-column eab-position';
		
		currentEditBtn.className = 'eab-table-column eab-edit';
		currentDeleteBtn.className = 'eab-table-column eab-delete';

		currentNameCol.innerHTML =eabTableKeys[i];
		currentSurnameCol.innerHTML = eabTable[eabTableKeys[i]].surname;
		currentPhoneCol.innerHTML =eabTable[eabTableKeys[i]].phone;
		currentCompanyCol.innerHTML =eabTable[eabTableKeys[i]].company;
		currentPositionCol.innerHTML = eabTable[eabTableKeys[i]].position;
		
		currentEditBtn.innerHTML = '<i class="fas fa-user-edit"></i>';
		currentDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

		currentRow.appendChild(currentNameCol);
		currentRow.appendChild(currentSurnameCol);
		currentRow.appendChild(currentPhoneCol);
		currentRow.appendChild(currentCompanyCol);
		currentRow.appendChild(currentPositionCol);
		currentRow.appendChild(currentEditBtn);
		currentRow.appendChild(currentDeleteBtn);
		newTableBody.appendChild(currentRow);
		
	}
	let enableDisableNewUserModal = (option) => {
		let newPersonName = document.getElementById('newPersonName');
		let newPersonName1 = document.getElementById('newPersonName1');
		let newPersonPhone = document.getElementById('newPersonPhone');
		let newPersonCompany = document.getElementById('newPersonCompany');
		let newPersonPosition = document.getElementById('newPersonPosition');
		

		newPersonName.value = '';
		newPersonName1.value = '';
		newPersonPhone.value = '';
		newPersonCompany.value ='';
		newPersonPosition.value = '';
		

		let newPersonModal = document.getElementById('newPersonModal');
		let backdrop = document.getElementById('backdrop');

		newPersonModal.className = `${option}-modal`;
		backdrop.className = `${option}-modal`;
	}
	let addNewEntryBtn = document.getElementById('eabAddNewEntry');
	let editBtns = document.getElementsByClassName('eab-edit');
	let deleteBtns = document.getElementsByClassName('eab-delete');

	let newPersonAddBtn = document.getElementById('newPersonAddBtn');
	let newPersonCancelBtn = document.getElementById('newPersonCancelBtn');

	newPersonAddBtn.addEventListener('click',() => {
		let newPersonName = document.getElementById('newPersonName').value.trim();
		let newPersonName1 = document.getElementById('newPersonName1').value.trim();
		let newPersonPhone = document.getElementById('newPersonPhone').value.trim();
		let newPersonCompany = document.getElementById('newPersonCompany').value.trim();
		let newPersonPosition = document.getElementById('newPersonPosition').value.trim();
		
		if(newPersonName1 === '')
			document.getElementById('newPersonName1').className = 'input-err';
		else
			document.getElementById('newPersonName1').className= '';
		if(newPersonName === '')
		    document.getElementById('newPersonName').className = 'input-err';
		else 
		    document.getElementById('newPersonName').className = '';
		
		if(newPersonPhone === '')
		    document.getElementById('newPersonPhone').className = 'input-err';
		else 
		    document.getElementById('newPersonPhone').className = '';
		if(newPersonCompany === '')
		    document.getElementById('newPersonCompany').className = 'input-err';
		else 
		    document.getElementById('newPersonCompany').className ='';
		if(newPersonPosition === '')
		    document.getElementById('newPersonPosition').className = 'input-err';
		else 
		    document.getElementById('newPersonPosition').className = '';
		
		if(newPersonName !== '' && newPersonName1 !== '' && newPersonPhone !== '' && newPersonCompany !== '' && newPersonPosition !== '' ) {
			let newPerson = {};
			eabTable[newPersonName] = {
				'surname': newPersonName1,
				'phone': newPersonPhone,
				'company': newPersonCompany,
				'position': newPersonPosition
				
			}
			localStorage.setItem(tableKey,JSON.stringify(eabTable));
			enableDisableNewUserModal('disable');
			refreshDOMTable();
		}
	
	});

	newPersonCancelBtn.addEventListener('click', () => {
		enableDisableNewUserModal('disable');
	});
	addNewEntryBtn.addEventListener('click', () => {
		enableDisableNewUserModal('enable');
	});

	for(let i =0; i < editBtns.length; i++) {
		editBtns[i].addEventListener('click' , ($event) => {
			enableDisableNewUserModal('enable');
			let nameToEdit = $event.target.parentElement.children[0].innerText;
			let personToEdit = eabTable[nameToEdit];
			let newPersonName1 = document.getElementById('newPersonName1');
			let newPersonName = document.getElementById('newPersonName');
			let newPersonPhone = document.getElementById('newPersonPhone');
			let newPersonCompany = document.getElementById('newPersonCompany');
			let newPersonPosition = document.getElementById('newPersonPosition');
			
			newPersonName.value = nameToEdit;
			newPersonName1.value = personToEdit.surname;
			newPersonPhone.value = personToEdit.phone;
			newPersonCompany.value = personToEdit.company;
			newPersonPosition.value = personToEdit.position;
			
            enableDisableNameInput('enable');
		})
	}
	for (let i =0; i < deleteBtns.length; i++) {
		deleteBtns[i].addEventListener('click' , ($event) => {
			let nameToDelete = $event.target.parentElement.children[0].innerText;
			let isSure= window.confirm('Are you sure you want to delete this' + nameToDelete + '?');
			if(isSure)
				deleteUserFromTable(nameToDelete);
		})
	}
}

let deleteUserFromTable = (userName) => {
	let tempTable = {};
	let eabTableKeys = Object.keys(eabTable);
	for (let i = 0; i < eabTableKeys.length; i++){
		if(userName !== eabTableKeys[i]) {
			tempTable[eabTableKeys[i]] = eabTable[eabTableKeys[i]];
		}
	}
	eabTable=tempTable;
	localStorage.setItem(tableKey , JSON.stringify(eabTable));
	refreshDOMTable();
}

let init = () => {

	if(localStorage.getItem(tableKey)) {
		eabTable = JSON.parse(localStorage.getItem(tableKey));	
	} else {
		eabTable= eabTableDemo;
		localStorage.setItem(tableKey, JSON.stringify(eabTable));
	}
 refreshDOMTable();

}

init(); 

}
	

		

	
	

	

