// Пример кода с ошибкой для ревью
function checkAge(age) {
    if (age = 18) { // ОШИБКА: здесь должно быть age >= 18 или age === 18
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}
console.log(checkAge(20));
