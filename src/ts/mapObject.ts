// Простіше було б зробити із звичайним об'єктом а не Map і не робити цикл в циклі(додаю додатковий варіант із простим об'єктом), з Map знайомий в теорії а застосовую на практиці вперше, але я вирішив із опису завдання, що використати необхідно саме колекцію Map для плоскої мапи об'єкта
export const mapObject = (obj: { [key: string]: any }, keyStr = '') => {
  // Створюємо нову колекцію Map
  const map = new Map();
  // Створюємо масив ключів вхідного об'єкта
  const arrObjKeys = Object.keys(obj);
  // Перебираємо властивості об'єкта
  arrObjKeys.forEach(key => {
    //   Перевіряємо чи тип значення властивості є об'єктом, не null та не масив, якщо так то запускаємо рекурсію і передаємо туди значення властивості та нову строку в якій додаємо ключ та косу лінію інакше записуємо в мапу ключ значення
    if (
      typeof obj[key] === 'object' &&
      typeof obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      // Записуємо результат рекурсії в який буде приходити Map
      const result = mapObject(obj[key], `${keyStr}${key}/`);
      // За допомогою for of перебираємо ключі Map та записуємо до мапи на кожній ітерації ключ значення
      for (const key of result.keys()) {
        map.set(key, result.get(key));
      }
    } else {
      map.set(`${keyStr}${key}`, obj[key]);
    }
  });
  // Повертаємо результат
  return map;
};

// Варіант 2
// export const mapObject = (obj: { [key: string]: any }, keyStr = '') => {
//   // Створюємо новий об'єкт в який будемо записувати нашу мапу
//   const newObj: { [key: string]: any } = {};
//   const arrObjKeys = Object.keys(obj);
//   arrObjKeys.forEach(key => {
//     if (
//       typeof obj[key] === 'object' &&
//       typeof obj[key] !== null &&
//       !Array.isArray(obj[key])
//     ) {
//       const result = mapObject(obj[key], `${keyStr}${key}/`);
//       // Копіюємо об'єкт який прийшов з рекурсії в об'єкт для мапи
//       Object.assign(newObj, result);
//     } else {
//       newObj[`${keyStr}${key}`] = obj[key];
//     }
//   });
//   return newObj;
// };

const obj = {
  a: {
    b: {
      c: 12,
      d: 'Hello World',
    },
    e: [1, 2, 3],
  },
};
const obj2 = {
  a: {
    b: {
      c: 12,
      d: 'Hello World',
    },
    e: {
      f: [1, 2, 3],
      g: {
        h: true,
        i: 'Hello DevIT',
      },
    },
  },
};

console.log(mapObject(obj));
console.log(mapObject(obj2));

// // Outputs: {
//   'a/b/c': 12,
//   'a/b/d': 'Hello World',
//   'a/e': [1,2,3]
// }
