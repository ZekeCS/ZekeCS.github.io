document.addEventListener("DOMContentLoaded", () => {
    // had an issue with the header not being ready when this script runs, so I added a waitForHeader function to check for the header element before setting the title
    const waitForHeader = setInterval(() => {
        const titleEl = document.getElementById("title");
        if (titleEl) {
            clearInterval(waitForHeader);
            // set the title based on the page
            const titles = {
                "index.html": "Pro Plus Consulting",
                "estimate.html": "Get an Estimate",
                "hire_us.html": "Hire Us",
                "client_portal.html": "Client Portal",
                "login.html": "Login",
                "create_account.html": "Create Account"
            };
            // get the current page from the URL
            const file = location.pathname.split("/").pop();
            titleEl.textContent = titles[file] || "Pro Plus Consulting";
        }
    }, 50);
});