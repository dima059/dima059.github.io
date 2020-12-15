function searchTransport() {
	var input, filter, table1,table2,table3,table4, tr1,tr2,tr3,tr4, td, i, txtValue;
	input = document.getElementById("searchInp");
	filter = input.value.toUpperCase();
	table1 = document.getElementsByClassName("transport-table");
	tr1 = table1[0].getElementsByTagName("tr");
	th1 = document.getElementsByClassName("th-transport");
	table2 = document.getElementsByClassName("water-table");
	tr2 = table2[0].getElementsByTagName("tr");
	th2 = document.getElementsByClassName("th-water");
	table3 = document.getElementsByClassName("air-table");
	tr3 = table3[0].getElementsByTagName("tr");
	th3 = document.getElementsByClassName("th-air");
	table4 = document.getElementsByClassName("other-table");
	tr4 = table4[0].getElementsByTagName("tr");
	th4 = document.getElementsByClassName("th-other");
	tName = document.getElementsByClassName("tName");
	  // Loop through all table rows, and hide those who don't match the search query
	var invisible=0;
	for (i = 0; i < tr1.length; i++) {
		td = tr1[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr1[i].style.display = "";
		} else {
			tr1[i].style.display = "none";
			invisible++;
		}
		}
	}
	if (invisible==tr1.length-1) {
		th1[0].style.display="none";
		tName[0].style.display="none";
	}
	else {
		th1[0].style.display="";
		tName[0].style.display="";
	}
	invisible=0;
	for (i = 0; i < tr2.length; i++) {
		td = tr2[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr2[i].style.display = "";
		} else {
			tr2[i].style.display = "none";
			invisible++;
		}
		}
	}
	if (invisible==tr2.length-1) {
		th2[0].style.display="none";
		tName[1].style.display="none";
	}
	else {
		th2[0].style.display="";
		tName[1].style.display="";
	}
	invisible=0;
	for (i = 0; i < tr3.length; i++) {
		td = tr3[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr3[i].style.display = "";
		} else {
			tr3[i].style.display = "none";
			invisible++;
		}
		}
	}
	if (invisible==tr3.length-1) {
		th3[0].style.display="none";
		tName[2].style.display="none";
	}
	else {
		th3[0].style.display="";
		tName[2].style.display="";
	}
	invisible=0;
	for (i = 0; i < tr4.length; i++) {
		td = tr4[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr4[i].style.display = "";
		} else {
			tr4[i].style.display = "none";
			invisible++;
		}
		}
	}
	if (invisible==tr4.length-1) {
		th4[0].style.display="none";
		tName[3].style.display="none";
	}
	else {
		th4[0].style.display="";
		tName[3].style.display="";
	}
	invisible=0;
}

function showdiv() {
	var input, filter, container, cars, i, h5, txtValue, visible = 0;
	input = document.getElementById("searchInp");
	filter = input.value.toUpperCase();
	container = document.getElementsByClassName("products")[0];
	cars = container.getElementsByClassName("product-card");
	for (i=0; i<cars.length; i++) {
		h5 = cars[i].getElementsByTagName("h5")[0];
		if (h5) {
			txtValue = h5.textContent;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				cars[i].style.display="";
				visible++;
			} else {
				cars[i].style.display="none";
			}
		}	

	}
}