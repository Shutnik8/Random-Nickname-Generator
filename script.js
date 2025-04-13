const languageSelect = document.getElementById('language');
const lengthInput = document.getElementById('nicknameLength');
const includeNumbersCheckbox = document.getElementById('includeNumbers');
const generateButton = document.getElementById('generateButton');
const nicknameResult = document.getElementById('nicknameResult');

const russianAdjectives = ["Крутой", "Хитрый", "Быстрый", "Темный", "Светлый", "Ледяной", "Огненный", "Стальной", "Золотой", "Тихий"];
const russianNouns = ["Волк", "Кот", "Дракон", "Рыцарь", "Маг", "Призрак", "Тень", "Герой", "Стрелок", "Воин"];

const englishAdjectives = ["Cool", "Sly", "Fast", "Dark", "Bright", "Icy", "Fiery", "Steel", "Golden", "Silent"];
const englishNouns = ["Wolf", "Cat", "Dragon", "Knight", "Mage", "Ghost", "Shadow", "Hero", "Archer", "Warrior"];

function generateNickname() {
    const language = languageSelect.value;
    const length = parseInt(lengthInput.value);
    const includeNumbers = includeNumbersCheckbox.checked;
    let nickname = "";
    let adjectivesList = [];
    let nounsList = [];
    let characters = "";

    if (language === 'ru') {
        adjectivesList = russianAdjectives;
        nounsList = russianNouns;
        characters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    } else {
        adjectivesList = englishAdjectives;
        nounsList = englishNouns;
        characters = "abcdefghijklmnopqrstuvwxyz";
    }

    const useAdjective = Math.random() < 0.5;
    if (useAdjective && adjectivesList.length > 0) {
        nickname += adjectivesList[Math.floor(Math.random() * adjectivesList.length)];
    }
    if (nounsList.length > 0) {
        nickname += nounsList[Math.floor(Math.random() * nounsList.length)];
    }

    while (nickname.length < length) {
        const numbers = "0123456789";
        let possibleChars = characters;
        if (includeNumbers) {
            possibleChars += numbers;
        }
        nickname += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        if (nickname.length >= length) break;
        nickname += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length)).toUpperCase();
        if (nickname.length >= length) break;
    }

    nickname = nickname.slice(0, length);

    if (includeNumbers && Math.random() < 0.3) {
        nickname += Math.floor(Math.random() * 100);
    }

    nicknameResult.textContent = nickname;
}

generateButton.addEventListener('click', generateNickname);