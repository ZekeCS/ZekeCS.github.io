document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('estimate-form');
    const outputDiv = document.getElementById('estimate-output');
    const resultSection = document.getElementById('estimate-result');

    // function for calculating the estimate, calculation numbers given by client
    const calculateEstimate = (serviceType, years, employees) => {
        let baseRate = serviceType === 'Full-Time' ? 500 : 200;
        let experienceDiscount = years >= 10 ? 0.8 : years >= 5 ? 0.9 : 1;
        let estimate = serviceType === 'Full-Time'
            ? employees * baseRate * experienceDiscount
            : employees * baseRate * experienceDiscount * 0.75;
        return estimate.toFixed(2);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const serviceType = document.getElementById('service-type').value;
        const years = parseInt(document.getElementById('years').value);
        const employees = parseInt(document.getElementById('employees').value);

        // validate inputs
        if (!serviceType || isNaN(years) || isNaN(employees)) {
            outputDiv.innerHTML = '<p style="color:red;">Please fill out all fields.</p>';
            resultSection.style.display = 'block';
            return;
        }

        const estimate = calculateEstimate(serviceType, years, employees);
        // display estimate in output div
        outputDiv.innerHTML = `
            <p>Service Type: <strong>${serviceType}</strong></p>
            <p>Years in Operation: <strong>${years}</strong></p>
            <p>Number of Employees: <strong>${employees}</strong></p>
            <p><strong>Estimated Monthly Cost: $${estimate}</strong></p>
            <p style="font-size:0.8em;color:gray;">* Final prices may vary.</p>
        `;
        resultSection.style.display = 'block';
    });
});