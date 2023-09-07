// function NotificationException() {}
// function ErrorException() { }
// У випадку з TypeScript необхідно писати класи для реалізації винятків які створюються через new
class NotificationException extends Error {}
class ErrorException extends Error {}

function primitiveMultiply(a: number, b: number) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a: number, b: number) {
  // Використовуємо конструкцію try/catch для відловлювання винятків
  try {
    //   Викликаємо нашу функцію яка повертає або результат або один із винятків
    const result = primitiveMultiply(a, b);
    // Повертаємо результат якщо не було згенеровано один із винятків
    return result;
  } catch (error) {
    // Перевіряємо за допомогою if та instanceof до якого із класів належить виняток
    if (error instanceof ErrorException) {
      // Завершуємо виконання функції якщо прийшов виняток із ErrorException
      return 'Operation rejected';
    }
    if (error instanceof NotificationException) {
      // Виконуємо функцію рекурсивно якщо прийшов виняток із NotificationException для повторного обчислення та отримання результату або винятків
      return reliableMultiply(a, b);
    }
  }
}

console.log(reliableMultiply(8, 8));
