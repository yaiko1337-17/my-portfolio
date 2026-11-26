const toggleButton = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    toggleButton.textContent = 'Включить светлую тему';
}

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Включить светлую тему';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Включить темную тему';
        localStorage.setItem('theme', 'light');
    }
});


//Валидация формы обратной формы//
//Находим форму и поля ввода по их ID или тегам//

const contactForm = document.getElementById('contact-form');
const userNameInput = document.getElementById('name');
const userMessageInput = document.getElementById('message');
//Слушаем событие отправки формы (submit)//
contactForm.addEventListener('submit',function(event) {
    event.preventDefault();

    const nameValue = userNameInput.value.trim();
    const messageValue = userMessageInput.value.trim();

    if (messageValue.length < 5){
        alert('Пожалуйста напишите более подробное сообщение(минимум 5 символов).');
        return;
    }

    alert(`Спасибо, ${nameValue}! Ваше сообщение успешно отправлено.`);
    contactForm.reset()
});

//ДИНАМИЧЕСКИЙ СЧЕТЧИК СИМВОЛОВ//

const messageArea = document.getElementById('message');
const counterDisplay = document.getElementById('char-counter');
const maxChars = 200;

messageArea.addEventListener('input', function() {
    const currentLength = messageArea.value.length;
    const charsLeft = maxChars - currentLength;
    counterDisplay.textContent = `Осталось символов: ${charsLeft}`;

    if (charsLeft <= 20) {
        counterDisplay.style.color = '#e74c3c';
    } else {
        counterDisplay.style.color = '#7f8c8d';
    }

    if (currentLength > maxChars) {
        messageArea.value = messageArea.value.substring(0, maxChars);
        counterDisplay.textContent = `Осталось символов: 0`;
    }
});