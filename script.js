window.jsPDF = window.jspdf.jsPDF;

function printData() {
    // Get the predefined values 
    var micrCode = document.getElementById("micrCode").value;
    var ifscCode = document.getElementById("ifscCode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var city = document.getElementById("city").value;

    // Get the input values
    var inputData1 = document.getElementById("inputData1").value;
    var cifId = document.getElementById("cifId").value;
    var fatherName = document.getElementById("fatherName").value;
    var jointAccountHolder = document.getElementById("jointAccountHolder").value;

    // Get the selected font size
    var fontSize = document.getElementById("fontSize").value;

    // Check if data is entered
    if (inputData1.trim() === "" || cifId.trim() === "") {
        alert("Please enter data in both Name and CIF ID fields before printing.");
        return;
    }

    // Create a new jsPDF instance
    var pdf = new jsPDF();

    // Set font size
    pdf.setFontSize(parseInt(fontSize));

    // Set margins (simulate margins with setLineWidth)
    var margin = 10;
    pdf.setLineWidth(margin);

    // Set number of columns (optional)
    var numColumns = 2;

    // Calculate column width
    var columnWidth = (pdf.internal.pageSize.width - margin * (numColumns + 1)) / numColumns;

    // Add content to PDF
    pdf.text(margin, margin, "MICR Code: " + micrCode);
    pdf.text(margin, margin + 10, "IFSC Code: " + ifscCode);
    pdf.text(margin, margin + 20, "Phone Number: " + phoneNumber);
    pdf.text(margin, margin + 30, "City: " + city);

    pdf.text(margin + columnWidth + margin, margin, "CIF ID: " + cifId);
    pdf.text(margin + columnWidth + margin, margin + 10, "Father's Name: " + fatherName);
    pdf.text(margin + columnWidth + margin, margin + 20, "Joint Account Holder: " + jointAccountHolder);

    // Directly open print dialog
    pdf.autoPrint();

    // Save or open the PDF
    pdf.save("printed_data.pdf");
}
