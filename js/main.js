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
