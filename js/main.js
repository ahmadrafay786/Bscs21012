function changeLanguage(lang) {
    const education = document.getElementById('educationSection');
    const skills = document.getElementById('skillsSection');
    const projects = document.getElementById('projectsSection');
    const experience = document.getElementById('experienceSection');
    const nameElement = document.querySelector('.name');

    if (lang === 'en') {
        nameElement.innerText = 'My Name is Ahmad Rafay';
        education.innerHTML = `
            <div class="container">
                <h1>Education</h1>
                <div class="education-item"><label>Matric:</label><span>Zamir Public School</span></div>
                <div class="education-item"><label>College:</label><span>Punjab Group of Colleges [2019-2021]</span></div>
                <div class="education-item"><label>University:</label><span>Information Technology University [2021-Present]</span></div>
            </div>
        `;
    } else if (lang === 'ur') {
        nameElement.innerText = 'میرا نام احمد رفای ہے';
        education.innerHTML = `
            <div class="container">
                <h1>تعلیم</h1>
                <div class="education-item"><label>میٹرک:</label><span>ضمیر پبلک اسکول</span></div>
                <div class="education-item"><label>کالج:</label><span>پنجاب گروپ آف کالجز [2019-2021]</span></div>
                <div class="education-item"><label>یونیورسٹی:</label><span>انفارمیشن ٹیکنالوجی یونیورسٹی [2021-موجودہ]</span></div>
            </div>
        `;
    } else if (lang === 'ar') {
        nameElement.innerText = 'اسمي أحمد رافاي';
        education.innerHTML = `
            <div class="container">
                <h1>التعليم</h1>
                <div class="education-item"><label>المدرسة:</label><span>مدرسة ضمير العامة</span></div>
                <div class="education-item"><label>الكلية:</label><span>مجموعة كليات البنجاب [2019-2021]</span></div>
                <div class="education-item"><label>الجامعة:</label><span>جامعة تكنولوجيا المعلومات [2021-الحاضر]</span></div>
            </div>
        `;
    }
}

const data = {
    name: "Ahmad Rafay",
    education: [
        { level: "Matric", institution: "Zamir Public School" },
        { level: "College", institution: "Punjab Group of Colleges [2019-2021]" },
        { level: "University", institution: "Information Technology University [2021-Present]" }
    ],
    skills: {
        soft: ["Communication", "Teamwork", "Problem-Solving", "Time Management"],
        hard: ["Programming", "Database Management", "Web Development", "Machine Learning"]
    },
    projects: [
        { title: "Project 1", description: "Created a Parking App using Flutter and Firebase" },
        { title: "Project 2", description: "Created Shogi using Object Oriented Programming" },
        { title: "Project 3", description: "Restaurant App using .NET MAUI and SQL Database" },
        { title: "Project 4", description: "Appointment Booking App using .NET MAUI" }
    ],
    experience: [
        { role: "Junior Software Developer", company: "JSS Devs", duration: "[Sep 2023-Present]" }
    ],
    certificates: [
        "Employee of the Month at JSS Devs",
        "Internship completion certificate at Claws Custom Boxes"
    ],
    socialMedia: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/ahmad-rafay-7057a9275/", icon: "linkedin.png" },
        { platform: "GitHub", url: "https://github.com/ahmadrafay786", icon: "github.png" },
    ]
};

function populateData() {

    document.getElementById("name").innerText = `My Name is ${data.name}`;    
    const educationSection = document.getElementById("education");
    data.education.forEach(item => {
        const div = document.createElement("div");
        div.className = "education-item";
        div.innerHTML = `<label>${item.level}:</label> <span>${item.institution}</span>`;
        educationSection.appendChild(div);
    });

    
    const softSkills = document.getElementById("softSkills");
    data.skills.soft.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        softSkills.appendChild(li);
    });

    
    const hardSkills = document.getElementById("hardSkills");
    data.skills.hard.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        hardSkills.appendChild(li);
    });

    const projectsSection = document.getElementById("projects");
    data.projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "project-item";
        div.innerHTML = `<label>${project.title}:</label> <span>${project.description}</span>`;
        projectsSection.appendChild(div);
    });

    const experienceSection = document.getElementById("experience");
    data.experience.forEach(exp => {
        const div = document.createElement("div");
        div.className = "experience-item";
        div.innerHTML = `<label>${exp.role}:</label> <span>${exp.company} ${exp.duration}</span>`;
        experienceSection.appendChild(div);
    });

    const certificatesSection = document.getElementById("certificates");
    data.certificates.forEach(certificate => {
        const li = document.createElement("li");
        li.textContent = certificate;
        certificatesSection.appendChild(li);
    });

    const socialMediaLinks = document.getElementById("socialMediaLinks");
    data.socialMedia.forEach(social => {
        const a = document.createElement("a");
        a.href = social.url;
        a.target = "_blank";
        const img = document.createElement("img");
        img.src = `images/${social.icon}`;
        img.alt = `${social.platform} icon`;
        img.className = "social-icon";
        a.appendChild(img);
        socialMediaLinks.appendChild(a);
    });
}

populateData();
