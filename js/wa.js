const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear all previous error messages
        const errorMessages = document.querySelectorAll('small');
        errorMessages.forEach((error) => error.classList.add('hidden'));

        let isValid = true;

        // Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            document.getElementById('nameError').classList.remove('hidden');
            isValid = false;
        }

        // Email
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            document.getElementById('emailError').classList.remove('hidden');
            isValid = false;
        }

        // Project
        const project = document.getElementById('project');
        if (project.value.trim() === '') {
            document.getElementById('projectError').classList.remove('hidden');
            isValid = false;
        }

        // Budget
        const budget = document.getElementById('budget');
        if (budget.value === '') {
            document.getElementById('budgetError').classList.remove('hidden');
            isValid = false;
        }

        // Date
        const date = document.getElementById('date');
        if (date.value === '') {
            document.getElementById('dateError').classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            form.submit();  // Submit the form if valid
        }
    });