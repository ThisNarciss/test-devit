export const arrayToObject = (arr: any) => {
  // Створюємо об'єкт в який будемо наповняти ключами та їх властивостями
  const obj: { [key: string]: any } = {};
  // Запускаємо цикл який буде перебирати масив масивів
  for (let i = 0; i < arr.length; i += 1) {
    //   На кожній ітерації записуємо внутрішній масив та створюємо змінні для ключа та властивості
    const innerArr = arr[i];
    const key: string = innerArr[0];
    // Створюємо змінну через let так як вона може бути масивом і далі робимо перевірку чи вона масив якщо так то рекурсивно викликаємо функцію і записуємо нове значення властивості
    let value: any = innerArr[1];
    if (Array.isArray(value)) {
      value = arrayToObject(value);
    }
    obj[key] = value;
  }
  // Повертаємо об'єкт
  return obj;
};

var arr = [
  ['name', 'developer'],
  ['age', 5],
  [
    'skills',
    [
      ['html', 4],
      ['css', 5],
      ['js', 5],
    ],
  ],
];

console.log(arrayToObject(arr));
// // Outputs: {
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
