document.querySelector("form").addEventListener("submit", function (event) {
    const service = document.getElementById("service").value;
    
    if (service === "") {
        alert("Please select a service");
        event.preventDefault();  // Prevent form submission
    }
});
