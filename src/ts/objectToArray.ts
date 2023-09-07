// Варіант 1
export const objectToArray = (obj: { [key: string]: any }) => {
  // Створюємо масив в який будемо додавати наші властивості та їх значення об'єкта
  const mainArr: any[] = [];
  // За допомогою циклу for in перебираємо властивості об'єкта
  for (const key in obj) {
    //   Робимо перевірку чи є властивість особистою властивістю об'єкта
    if (obj.hasOwnProperty(key)) {
      // Записуємо значення властивості у змінну через let
      let value = obj[key];
      // Перевіряємо чи значення не містить об'єкт, якщо містить запускаємо його через рекурсію і записуємо нове значення
      if (typeof value === 'object') {
        value = objectToArray(value);
      }
      // Пушимо масив ключ значення в головний масив
      mainArr.push([key, value]);
    }
  }
  // Повертаємо масив
  return mainArr;
};

// // Варіант 2 - в даному варіанті нам не потрібно робити перевірку чи є властивість особистою і код стає трішки декларативніший
// export const objectToArray = (obj: { [key: string]: any }) => {
//   const mainArr: any[] = [];
//   // Збираємо усі ключі об'єкта у масив
//   const arrObjKeys = Object.keys(obj);
//   // Перебираємо ключі за допомогою forEach
//   arrObjKeys.forEach(key => {
//     let value = obj[key];
//     if (typeof value === 'object') {
//       value = objectToArray(value);
//     }
//     mainArr.push([key, value]);
//   });
//   return mainArr;
// };

// Варіант 3
// Якби не було вкладених об'єктів можна було просто використати Object.entries

console.log(
  objectToArray({
    name: 'developer',
    age: 5,
    skills: {
      html: 4,
      css: 5,
      js: 5,
    },
  })
);

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]
