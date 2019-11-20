let bill_first_name = document.getElementById('bill_first_name')
let bill_last_name = document.getElementById('bill_last_name')
let bill_email = document.getElementById('bill_email')
let bill_adress1 = document.getElementById('bill_adress1')
let bill_adress2 = document.getElementById('bill_adress2')
let bill_city = document.getElementById('bill_city')
let bill_country = document.getElementById('bill_country')
let bill_phone = document.getElementById('bill_phone')


let ship_first_name = document.getElementById('ship_first_name')
let ship_last_name = document.getElementById('ship_last_name')
let ship_email = document.getElementById('ship_email')
let ship_adress1 = document.getElementById('ship_adress1')
let ship_adress2 = document.getElementById('ship_adress2')
let ship_city = document.getElementById('ship_city')
let ship_country = document.getElementById('ship_country')
let ship_phone = document.getElementById('ship_phone')

const generateShip = () => {
	if (document.getElementById('isEqualBillShip').checked == true) {
		ship_first_name.value = bill_first_name.value 
		ship_last_name.value = bill_last_name.value
		ship_email.value = bill_email.value
		ship_adress1.value = bill_adress1.value
		ship_adress2.value = bill_adress2.value
		ship_city.value = bill_city.value
		ship_country.value = bill_country.value
		ship_phone.value = bill_phone.value
	} else {
		ship_first_name.value = ""
		ship_last_name.value = ""
		ship_email.value = ""
		ship_adress1.value = ""
		ship_adress2.value = ""
		ship_city.value = ""
		ship_country.value = ""
		ship_phone.value = ""
	}
}