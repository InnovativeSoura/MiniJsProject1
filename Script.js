 // Dark Mode Toggle
        function toggleDarkMode(){
            document.body.classList.toggle("dark-mode");
        }

        // Form Validation
        document.getElementById("myForm").addEventListener("submit", function(event){

            let phone = document.getElementById("phone").value;
            let error = document.getElementById("error");

            // Phone validation (10 digits only)
            let phonePattern = /^[0-9]{10}$/;

            if(!phonePattern.test(phone)){
                event.preventDefault();
                error.innerHTML = "Phone number must contain exactly 10 digits.";
            }
            else{
                error.innerHTML = "";
                alert("Form Submitted Successfully!");
            }

        });