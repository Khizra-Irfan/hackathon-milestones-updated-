const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Generate resume HTML
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <div>
        <h3>Personal Information <button class="edit-button" onclick="editSection('personal-info')">Edit</button></h3>
        <div id="personal-info" contenteditable="false">
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
        </div>
    </div>

    <div>
        <h3>Education <button class="edit-button" onclick="editSection('education-info')">Edit</button></h3>
        <div id="education-info" contenteditable="false">
            <p>${education}</p>
        </div>
    </div>

    <div>
        <h3>Experience <button class="edit-button" onclick="editSection('experience-info')">Edit</button></h3>
        <div id="experience-info" contenteditable="false">
            <p>${experience}</p>
        </div>
    </div>

    <div>
        <h3>Skills <button class="edit-button" onclick="editSection('skills-info')">Edit</button></h3>
        <div id="skills-info" contenteditable="false">
            <p>${skills}</p>
        </div>
    </div>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing');
    }
});

// Edit and Save function
function editSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement && sectionElement.isContentEditable) {
        sectionElement.contentEditable = "false";
        sectionElement.style.backgroundColor = "transparent";
    } else if (sectionElement) {
        sectionElement.contentEditable = "true";
        sectionElement.style.backgroundColor = "#e8eff7"; // Light navy background for editing
    }
}
