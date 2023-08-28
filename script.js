// Define a list of predefined students with their registration numbers and names
const predefinedStudents = [
    { regNumber: '418', name: 'B R VISHAL' },
    { regNumber: '419', name: 'RAJARSHI DEY' },
    { regNumber: '420', name: 'SUBHAM SAGAR JHA' },
    { regNumber: '421', name: 'TAMMA ESHWAR KANTH REDDY' },
    { regNumber: '422', name: 'DINESH KUMAR M' },
    { regNumber: '424', name: 'HARINARAYANAN R' },
    { regNumber: '425', name: 'YUVRAJ SINGH' },
    { regNumber: '427', name: 'NIBHRITI SARKAR' },
    { regNumber: '429', name: 'SANDEEP REDDY ONTARU' },
    { regNumber: '430', name: 'SHIVAJI MATIKA' },
    { regNumber: '432', name: 'INDRAJEET SARKAR' },
    { regNumber: '433', name: 'PUPPALA MANIKANTA SAI PATEL' },
    { regNumber: '434', name: 'KARRI HARSHA VARDHAN' },
    { regNumber: '435', name: 'JAYESH YOGENDRA SINGH' },
    { regNumber: '436', name: 'PRIYANSHU RAJ' },
    { regNumber: '437', name: 'M.VISHNU VARDHAN' },
    { regNumber: '438', name: 'DEBASHISH JENA' },
    { regNumber: '439', name: 'VALLURU YASHWANTH REDDY' },
    { regNumber: '440', name: 'SAI DEEPTI ALAPATI' },
    { regNumber: '441', name: 'SRI KRISHNA KOUSHIK CHALLA' },
    { regNumber: '442', name: 'DEVANSHU SINGH JADON' },
    { regNumber: '443', name: 'TANUSH CHAUHAN' },
    { regNumber: '444', name: 'KANAPARTHI SHASHIDHAR REDDY' },
    { regNumber: '445', name: 'MACHIREDDY ROHAN REDDY' },
    { regNumber: '446', name: 'SOUMIL SAHA' },
    { regNumber: '447', name: 'PRATHAM SHAH' },
    { regNumber: '448', name: 'YASH KUMAR' },
    { regNumber: '449', name: 'ADITYA BATTULA' },
    { regNumber: '450', name: 'BHASKARA JATHIN SANJAY' },
    { regNumber: '451', name: 'GUHAN A S' },
    { regNumber: '452', name: 'TANISHQ DHAWAN' },
    { regNumber: '453', name: 'LALIT KRISHNAN S R' },
    { regNumber: '454', name: 'PARATALA PRANAV MURARI' },
    { regNumber: '455', name: 'RITESH MANWANI' },
    { regNumber: '456', name: 'VIJEET KUMAR SINGH' },
    { regNumber: '457', name: 'VURIMI.SAIMANISH KUMAR' },
    { regNumber: '458', name: 'DEVANSH PORWAL' },
    { regNumber: '459', name: 'LAKSHAY CHAWLA' },
    { regNumber: '460', name: 'AVULA CHAKRI GOVIND YADAV' },
    { regNumber: '461', name: 'SURYA GANESH MYGAPULA' },
    { regNumber: '462', name: 'PARUCHURI VENKATA SUDHEER' },
    { regNumber: '463', name: 'SIRIGIRI ROHIT REDDY' },
    { regNumber: '464', name: 'KYATHISREE KARUMAJJI' },
    { regNumber: '465', name: 'SAHIL AGRAWAL' },
    { regNumber: '466', name: 'SNEHAL VINOD' },
    { regNumber: '468', name: 'GAUTHAM KRISHNA B N' },
    { regNumber: '471', name: 'TEJAS KHURANA' },
    { regNumber: '472', name: 'PRAVEEN KUMAR.J' },
    { regNumber: '473', name: 'SAI SASHANK KANAKAM' },
    { regNumber: '474', name: 'JAIAAKASH. M' },
    { regNumber: '475', name: 'ADDWIN VIBRO D' },
    { regNumber: '476', name: 'GUNISETTY JAYA CHANDRA' },
    { regNumber: '479', name: 'GAJJALA SANDEEP KUMAR REDDY' },
    { regNumber: '480', name: 'ANUBHAV SINGH' },
    { regNumber: '481', name: 'B REVANTH KUMAR REDDY' },
    { regNumber: '482', name: 'SHAIK AFTHAB ALAM' },
    { regNumber: '483', name: 'TADI YOGA SAI RAM SRIHARI' },
    { regNumber: '484', name: 'ABHINAV KUMAR' },
    { regNumber: '485', name: 'GUDLA SAI NITISH' },
    { regNumber: '486', name: 'DUTTATREYA JENA' },
    { regNumber: '487', name: 'BATCHU DEVARCHITH PARASHARA' },
    { regNumber: '488', name: 'SRIDURGESH R' },

];

// Function to find absentees based on input of present students
function findAbsentees(presentStudents) {
    const absentees = [];

    for (const student of predefinedStudents) {
        if (!presentStudents.includes(student.regNumber)) {
            absentees.push(student);
        }
    }

    return absentees;
}

// Example input of present students (registration numbers)
const presentStudents = ['A123', 'C789'];

// Call the function to find absentees
const absentees = findAbsentees(presentStudents);

// Display the absentees
console.log('Absentees:');
for (const student of absentees) {
    console.log(`${student.regNumber} - ${student.name}`);
}


// Define the predefinedStudents array and findAbsentees function (as shown in the previous response)

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('attendanceForm');
    const presentStudentsInput = document.getElementById('presentStudents');
    const absenteesList = document.getElementById('absenteesList');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const presentStudents = presentStudentsInput.value.split(' ').filter(item => item.trim() !== '');

        const absentees = findAbsentees(presentStudents);

        // Clear the previous absentees list
        absenteesList.innerHTML = '';

        // Display the new absentees list
        for (const student of absentees) {
            const listItem = document.createElement('li');
            listItem.textContent = `${student.regNumber} - ${student.name}`;
            absenteesList.appendChild(listItem);
        }
    });
});
