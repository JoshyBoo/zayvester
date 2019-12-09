//Ano ba yang sta-table na yan? Yan yung pinaka main key ng lahat ng codes dito kung mapapansin niyo kumbaga sa isang operation yan yung 
//tinatawag na 'CODENAME'
const tableKey= 'sta-table';


//Okay so yang commands sa baba example lang yan kasi malalaman mo na nag fafunction yung JAVA SCRIPT mo pag nakita mong lumabas yung names and infos na nilagay mo dyan.
let staTable;
let staTableDemo = {
	'Jun Pedrena' :{
		'surname':'Pedrena',
		'phone':'0989289891',
		'school':'ValNat',
		'degree':'Master',
		'year':'1987'
	},
	'Joshua Romneo': {
		'surname':'Romneo',
		'phone': '09899898',
		'school': 'ValNat',
		'degree': 'Grandmaster',
		'year': '2000'
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

	let staTableKeys = Object.keys(staTable); //['Jun Pedrena','Neo Baho']
	let tableContainer= document.getElementById('staTableContainer');
	let oldTableBody = document.getElementById('tableBody');
	tableContainer.removeChild(oldTableBody);
	let newTableBody = document.createElement('span');
	newTableBody.id ='tableBody';
	tableContainer.appendChild(newTableBody);
	//Dito mo muna makikita yung content ng columns mo, kumbaga sa essay ito yung body/katawan ng lahat.
	for (let i=0; i < staTableKeys.length; i++) {
		let currentRow = document.createElement('div');
		let currentNameCol = document.createElement('div');
		let currentSurnameCol = document.createElement('div');
		let currentPhoneCol = document.createElement('div');
		let currentSchoolCol = document.createElement('div');
		let currentDegreeCol = document.createElement('div');
		let currentYearCol = document.createElement('div');
		let currentEditBtn = document.createElement('div');
		let currentDeleteBtn = document.createElement('div');

		currentRow.className = 'sta-table-row';
		currentNameCol.className = 'sta-table-column sta-firstname';
		currentSurnameCol.className = 'sta-table-column sta-surname';
		currentPhoneCol.className = 'sta-table-column sta-phone';
		currentSchoolCol.className = 'sta-table-column sta-school';
		currentDegreeCol.className = 'sta-table-column sta-degree';
		currentYearCol.className = 'sta-table-column sta-year';
		currentEditBtn.className = 'sta-table-column sta-edit';
		currentDeleteBtn.className = 'sta-table-column sta-delete';

		currentNameCol.innerHTML =staTableKeys[i];
		currentSurnameCol.innerHTML=staTable[staTableKeys[i]].surname;
		currentPhoneCol.innerHTML =staTable[staTableKeys[i]].phone;
		currentSchoolCol.innerHTML =staTable[staTableKeys[i]].school;
		currentDegreeCol.innerHTML = staTable[staTableKeys[i]].degree;
		currentYearCol.innerHTML = staTable[staTableKeys[i]].year;	

		currentEditBtn.innerHTML = '<i class="fas fa-user-edit"></i>';
		currentDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

		currentRow.appendChild(currentNameCol);
		currentRow.appendChild(currentSurnameCol);
		currentRow.appendChild(currentPhoneCol);
		currentRow.appendChild(currentSchoolCol);
		currentRow.appendChild(currentDegreeCol);
		currentRow.appendChild(currentYearCol);
		currentRow.appendChild(currentEditBtn);
		currentRow.appendChild(currentDeleteBtn);
		newTableBody.appendChild(currentRow);
		
	}
	//Ito naman ang fucntion nito kapag tapos kanang mag add ng entry mo marereset na ulit yung sasagutan mo. For example
	//Nag fill out kana ng infos mo then naadd mo na once na clinick mo ulit yung add button reset na lahat wala na dun yung info's na nilagay mo
	let enableDisableNewUserModal = (option) => {
		let newPersonName = document.getElementById('newPersonName');
		let newPersonName1 = document.getElementById('newPersonName1');
		let newPersonPhone = document.getElementById('newPersonPhone');
		let newPersonSchool = document.getElementById('newPersonSchool');
		let newPersonDegree = document.getElementById('newPersonDegree');
		let newPersonYear = document.getElementById('newPersonYear');

		newPersonName.value = '';
		newPersonName1.value= '';
		newPersonPhone.value = '';
		newPersonSchool.value ='';
		newPersonDegree.value = '';
		newPersonYear.value = '';

		let newPersonModal = document.getElementById('newPersonModal');
		let backdrop = document.getElementById('backdrop');

		newPersonModal.className = `${option}-modal`;
		backdrop.className = `${option}-modal`;
	}
	let addNewEntryBtn = document.getElementById('staAddNewEntry');
	let editBtns = document.getElementsByClassName('sta-edit');
	let deleteBtns = document.getElementsByClassName('sta-delete');

	let newPersonAddBtn = document.getElementById('newPersonAddBtn');
	let newPersonCancelBtn = document.getElementById('newPersonCancelBtn');

	newPersonAddBtn.addEventListener('click',() => {
		let newPersonName = document.getElementById('newPersonName').value.trim();
		let newPersonName1=document.getElementById('newPersonName1').value.trim();
		let newPersonPhone = document.getElementById('newPersonPhone').value.trim();
		let newPersonSchool = document.getElementById('newPersonSchool').value.trim();
		let newPersonDegree = document.getElementById('newPersonDegree').value.trim();
		let newPersonYear = document.getElementById('newPersonYear').value.trim();
		//Ito ang tinatawag na INPUT ERROR, so basically may experience naman na kayo sa pag fifill out ng data diba? 
		//Na kapag may kulang kang nilagay na info hindi ka papayagan mag add ng entry so ito yung function ng INPUT ERROR
		//Pag nag fill out ka tas may nakalimutan kang ilagay na info hindi mag fufunction yung add button, for example 
		//Nakalimutan mong lagyan ng information yung School so hindi mag fafunction yung add button kasi may kulang ka pang nilagay.
		if(newPersonName1 ==='')
			document.getElementById('newPersonName1').className = 'input-err';
		else
			document.getElementById('newPersonName1').className ='';
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
		if(newPersonDegree === '')
		    document.getElementById('newPersonDegree').className = 'input-err';
		else 
		    document.getElementById('newPersonDegree').className = '';
		if(newPersonYear === '')
		    document.getElementById('newPersonYear').className = 'input-err';
		else 
		    document.getElementById('newPersonYear').className = '';
		if(newPersonName !== '' && newPersonName1 !== '' && newPersonPhone !== '' && newPersonSchool !== '' && newPersonDegree !== '' && newPersonYear !== '') {
			let newPerson = {};
			staTable[newPersonName] = {
				'surname':newPersonName1,
				'phone': newPersonPhone,
				'school': newPersonSchool,
				'degree': newPersonDegree,
				'year': newPersonYear
			}
			localStorage.setItem(tableKey,JSON.stringify(staTable));
			enableDisableNewUserModal('disable');
			refreshDOMTable();
		}
	
	});
	//Ang button na ito ay para sa pag cancel ng gagawin mong proseso ng pag fifill out, so meron siyang command na 'addEventListener which means 
	//na pag clinick mo siya ma didisable yung UserModal na mag aallowed sayo na mag edit.
	//In terms of UserModal yan yung mag aallow sayo na mag edit or mag input ng info's
	newPersonCancelBtn.addEventListener('click', () => {
		enableDisableNewUserModal('disable');
	});
	//Same thing lang din dito sa addNewEntryBtn pag clinick mo siya may mangyayaring event at maeenable yung NewUserModal..
	addNewEntryBtn.addEventListener('click', () => {
		enableDisableNewUserModal('enable');
	});
	//Ang edit button ay para sa pag eedit ng info's na nalagay mo na at kung sakaling may pagkakamali kang nagawa maaari mo pa siyang maedit
	//gamit ang edit button na ito,Pag clinick mo siya nandun pa rin yung info's mo dahil sa mga commands sa baba inaanyayahan niya na makuha ulit yung element Id sa 
	//isang ID kaya't nasesave yung info's lalo na pag ieedit mo siya.
	for(let i =0; i < editBtns.length; i++) {
		editBtns[i].addEventListener('click' , ($event) => {
			enableDisableNewUserModal('enable');
			let nameToEdit = $event.target.parentElement.children[0].innerText;
			let personToEdit = staTable[nameToEdit];
			let newPersonName = document.getElementById('newPersonName');
			let newPersonName1 = document.getElementById('newPersonName1');
			let newPersonPhone = document.getElementById('newPersonPhone');
			let newPersonSchool = document.getElementById('newPersonSchool');
			let newPersonDegree = document.getElementById('newPersonDegree');
			let newPersonYear = document.getElementById('newPersonYear');
			newPersonName.value = nameToEdit;
			newPersonName1.value = personToEdit.surname;
			newPersonPhone.value = personToEdit.phone;
			newPersonSchool.value = personToEdit.school;
			newPersonDegree.value = personToEdit.degree;
			newPersonYear.value = personToEdit.year;
            enableDisableNameInput('enable');
		})
	}
	//Sa delete button naman mahalaga yan pag may tao kanang gustong idelete sa address book mo, So pano siya nag wowork? 
	//So pag clinick mo siya yung command na $event.target.parentElement.children yan yung buong infos about sa taong inadress mo. 
	//Once na clinick mo yung delete lalabas yung isSure which is yung command na mag tatanong sayo kung gusto mo na bang idelete yung ganong bagay
	//once na naclick mo na yung OK automatically siyang madedelete kagaya ng normal na function ng delete button.
	for (let i =0; i < deleteBtns.length; i++) {
		deleteBtns[i].addEventListener('click' , ($event) => {
			let nameToDelete = $event.target.parentElement.children[0].innerText;
			let isSure= window.confirm('Are you sure you want to delete this' + nameToDelete + '?');
			if(isSure)
				deleteUserFromTable(nameToDelete);
		})
	}
}
//Karugtong lang din to ng delete button this one is the last command para mag function na yung delete button mo
let deleteUserFromTable = (userName) => {
	let tempTable = {};
	let staTableKeys = Object.keys(staTable);
	for (let i = 0; i < staTableKeys.length; i++){
		if(userName !== staTableKeys[i]) {
			tempTable[staTableKeys[i]] = staTable[staTableKeys[i]];
		}
	}
	staTable=tempTable;
	localStorage.setItem(tableKey , JSON.stringify(staTable));
	refreshDOMTable();
}

let init = () => {

	if(localStorage.getItem(tableKey)) {
		staTable = JSON.parse(localStorage.getItem(tableKey));	
	} else {
		staTable= staTableDemo;
		localStorage.setItem(tableKey, JSON.stringify(staTable));
	}
 refreshDOMTable();

}

init(); 

}
	
refreshDOMTable();



//PS SA MGA SUMUNOD NA JAVASCRIPT PAREHAS LANG SILA NG FUNCTION SO LAHAT NG FUNCTION NG 'EMPLOYEE.JS, FACULTY.JS' ITO LANG DIN YUN.