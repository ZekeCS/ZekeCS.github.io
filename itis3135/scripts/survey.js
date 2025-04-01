function createDeleteButton(courseDiv) {
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    
    deleteButton.onclick = function () {
        courseDiv.remove();
    };
    
    return deleteButton;
}

function displayResults() {
    const formData = new FormData(document.getElementById("byoForm"));
    let output = "";

    const labels = {
        personalBackground: "Personal Background",
        professionalBackground: "Professional Background",
        academicBackground: "Academic Background",
        webDevBackground: "Background in Web Development",
        computerPlatform: "Primary Computer Platform",
        funnyThing: "Funny Thing",
        anythingElse: "Anything Else"
    };

    let courses = [];
    formData.forEach((value, key) => {
        if (key === "image") {
            const image = document.getElementById("image").files[0];
            if (image) {
                const imageURL = URL.createObjectURL(image);
                output += `<figure><img src="${imageURL}" id="selfie"><figcaption>${formData.get("imageCaption")}</figcaption></figure>`;
            }
        } else if (key === "courses[]") {
            courses.push(value);
        } else if (labels[key]) {
            output += `<p><strong>${labels[key]}:</strong> ${value}</p>`;
        }
    });

    if (courses.length > 0) {
        output += "<p><strong>Courses I'm Taking:</strong></p><ul class='background-list'>";
        courses.forEach((course) => {
            output += `<li>${course}</li>`;
        });
        output += "</ul>";
    }

    output += '<button onclick="location.reload()">Reset</button>';

    const form = document.getElementById("byoForm");
    const resultsContainer = document.getElementById("resultsContainer");
    
    const name = formData.get("name");
    const mascot = formData.get("mascot");

    form.style.display = "none";
    
    document.querySelector("h2").textContent = name;
    document.querySelector("h3").textContent = mascot;

    resultsContainer.innerHTML = output;
}

function validateForm() {
    const form = document.getElementById("byoForm");
    if (!form.checkValidity()) {
        alert("Please fill out required fields.");
        return;
    }
    displayResults();
}

function resetForm() {
    document.getElementById("byoForm").reset();
    document.getElementById("courses").innerHTML = '<button type="button" onclick="addCourse()">Add Course</button>';
}

function addCourse() {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course-item");
    const input = document.createElement("input");
    input.type = "text";
    input.name = "courses[]";
    input.required = true;
    
    const deleteButton = createDeleteButton(courseDiv);

    courseDiv.appendChild(input);
    courseDiv.appendChild(deleteButton);
    
    document.getElementById("courses").appendChild(courseDiv);
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("byoForm");
    const coursesDiv = document.getElementById("courses");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });
    
    form.addEventListener("reset", function () {
        resetForm();
    });
    
    coursesDiv.innerHTML = '<button type="button" onclick="addCourse()">Add Course</button>';
});