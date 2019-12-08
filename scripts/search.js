function searchTransport() {
	var input, filter, table1,table2,table3,table4, tr1,tr2,tr3,tr4, td, i, txtValue;
	input = document.getElementById("searchInp");
	filter = input.value.toUpperCase();
	table1 = document.getElementsByClassName("transport-table");
	tr1 = table1[0].getElementsByTagName("tr");
	table2 = document.getElementsByClassName("water-table");
	tr2 = table2[0].getElementsByTagName("tr");
	table3 = document.getElementsByClassName("air-table");
	tr3 = table3[0].getElementsByTagName("tr");
	table4 = document.getElementsByClassName("other-table");
	tr4 = table4[0].getElementsByTagName("tr");
	  // Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr1.length; i++) {
		td = tr1[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr1[i].style.display = "";
		} else {
			tr1[i].style.display = "none";
		}
		}
	}
	for (i = 0; i < tr2.length; i++) {
		td = tr2[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr2[i].style.display = "";
		} else {
			tr2[i].style.display = "none";
		}
		}
	}
	for (i = 0; i < tr3.length; i++) {
		td = tr3[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr3[i].style.display = "";
		} else {
			tr3[i].style.display = "none";
		}
		}
	}
	for (i = 0; i < tr4.length; i++) {
		td = tr4[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr4[i].style.display = "";
		} else {
			tr4[i].style.display = "none";
		}
		}
	}
}