const tableKey= 'fab-table';


let fabTable;
let fabTableDemo = {
	'Jun Pedrena' :{
		'surname':'Pedrena',
		'phone':'0989289891',
		'school':'ValNat',
		'department':'Master',
		
	},
	'Neo Baho': {
		'surname':'Baho',
		'phone': '09899898',
		'school': 'ValNat',
		'department': 'Grandmaster',
		
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

	let fabTableKeys = Object.keys(fabTable); //['Jun Pedrena','Neo Baho']
	let tableContainer= document.getElementById('fabTableContainer');
	let oldTableBody = document.getElementById('tableBody');
	tableContainer.removeChild(oldTableBody);
	let newTableBody = document.createElement('span');
	newTableBody.id ='tableBody';
	tableContainer.appendChild(newTableBody);

	for (let i=0; i < fabTableKeys.length; i++) {
		let currentRow = document.createElement('div');
		let currentNameCol = document.createElement('div');
		let currentSurnameCol=document.createElement('div');
		let currentPhoneCol = document.createElement('div');
		let currentSchoolCol = document.createElement('div');
		let currentDepartmentCol = document.createElement('div');
		
		let currentEditBtn = document.createElement('div');
		let currentDeleteBtn = document.createElement('div');

		currentRow.className = 'fab-table-row';
		currentNameCol.className = 'fab-table-column fab-firstname';
		currentSurnameCol.className ='fab-table-column fab-surname';
		currentPhoneCol.className = 'fab-table-column fab-phone';
		currentSchoolCol.className = 'fab-table-column fab-school';
		currentDepartmentCol.className = 'fab-table-column fab-department';
		
		currentEditBtn.className = 'fab-table-column fab-edit';
		currentDeleteBtn.className = 'fab-table-column fab-delete';

		currentNameCol.innerHTML =fabTableKeys[i];
		currentSurnameCol.innerHTML = fabTable[fabTableKeys[i]].surname;
		currentPhoneCol.innerHTML =fabTable[fabTableKeys[i]].phone;
		currentSchoolCol.innerHTML =fabTable[fabTableKeys[i]].school;
		currentDepartmentCol.innerHTML = fabTable[fabTableKeys[i]].department;
		
		currentEditBtn.innerHTML = '<i class="fas fa-user-edit"></i>';
		currentDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

		currentRow.appendChild(currentNameCol);
		currentRow.appendChild(currentSurnameCol);
		currentRow.appendChild(currentPhoneCol);
		currentRow.appendChild(currentSchoolCol);
		currentRow.appendChild(currentDepartmentCol);
		currentRow.appendChild(currentEditBtn);
		currentRow.appendChild(currentDeleteBtn);
		newTableBody.appendChild(currentRow);
		
	}
	let enableDisableNewUserModal = (option) => {
		let newPersonName = document.getElementById('newPersonName');
		let newPeronName1 = document.getElementById('newPersonName1');
		let newPersonPhone = document.getElementById('newPersonPhone');
		let newPersonSchool = document.getElementById('newPersonSchool');
		let newPersonDepartment = document.getElementById('newPersonDepartment');
		

		newPersonName.value = '';
		newPersonName1.value= '';
		newPersonPhone.value = '';
		newPersonSchool.value ='';
		newPersonDepartment.value = '';
		

		let newPersonModal = document.getElementById('newPersonModal');
		let backdrop = document.getElementById('backdrop');

		newPersonModal.className = `${option}-modal`;
		backdrop.className = `${option}-modal`;
	}
	let addNewEntryBtn = document.getElementById('fabAddNewEntry');
	let editBtns = document.getElementsByClassName('fab-edit');
	let deleteBtns = document.getElementsByClassName('fab-delete');

	let newPersonAddBtn = document.getElementById('newPersonAddBtn');
	let newPersonCancelBtn = document.getElementById('newPersonCancelBtn');

	newPersonAddBtn.addEventListener('click',() => {
		let newPersonName = document.getElementById('newPersonName').value.trim();
		let newPersonName1 = document.getElementById('newPersonName1').value.trim();
		let newPersonPhone = document.getElementById('newPersonPhone').value.trim();
		let newPersonSchool = document.getElementById('newPersonSchool').value.trim();
		let newPersonDepartment = document.getElementById('newPersonDepartment').value.trim();
		
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
		if(newPersonSchool === '')
		    document.getElementById('newPersonSchool').className = 'input-err';
		else 
		    document.getElementById('newPersonSchool').className ='';
		if(newPersonDepartment === '')
		    document.getElementById('newPersonDepartment').className = 'input-err';
		else 
		    document.getElementById('newPersonDepartment').className = '';
		
		if(newPersonName !== '' && newPersonName1 !== '' && newPersonPhone !== '' && newPersonSchool !== '' && newPersonDepartment !== '' ) {
			let newPerson = {};
			fabTable[newPersonName] = {
				'surname': newPersonName1,
				'phone': newPersonPhone,
				'school': newPersonSchool,
				'department': newPersonDepartment
				
			}
			localStorage.setItem(tableKey,JSON.stringify(fabTable));
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
			let personToEdit = fabTable[nameToEdit];
			let newPersonName = document.getElementById('newPersonName');
			let newPersonName1 = document.getElementById('newPersonName1');
			let newPersonPhone = document.getElementById('newPersonPhone');
			let newPersonSchool = document.getElementById('newPersonSchool');
			let newPersonDepartment = document.getElementById('newPersonDepartment');
			
			newPersonName.value = nameToEdit;
			newPersonName1.value = personToEdit.surname;
			newPersonPhone.value = personToEdit.phone;
			newPersonSchool.value = personToEdit.school;
			newPersonDepartment.value = personToEdit.department;
			
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
	let fabTableKeys = Object.keys(fabTable);
	for (let i = 0; i < fabTableKeys.length; i++){
		if(userName !== fabTableKeys[i]) {
			tempTable[fabTableKeys[i]] = fabTable[fabTableKeys[i]];
		}
	}
	fabTable=tempTable;
	localStorage.setItem(tableKey , JSON.stringify(fabTable));
	refreshDOMTable();
}

let init = () => {

	if(localStorage.getItem(tableKey)) {
		fabTable = JSON.parse(localStorage.getItem(tableKey));	
	} else {
		fabTable= fabTableDemo;
		localStorage.setItem(tableKey, JSON.stringify(fabTable));
	}
 refreshDOMTable();

}

init(); 

}