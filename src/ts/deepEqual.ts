// Варіант 1 - перевіряти властивості рекурсивно
export const deepEqual: (firstObj: any, secondObj: any) => boolean = (
  firstObj,
  secondObj
) => {
  // Робимо перевірку чи аргументи не є об'єктами
  if (typeof firstObj !== 'object' && typeof secondObj !== 'object') {
    // Якщо аргументи не є об'єктами порівнюємо їх і повертаємо результат
    return firstObj === secondObj;
  }
  // Дістаємо ключі об'єкта у масив
  const firstObjKeys: any[] = Object.keys(firstObj);
  const secondObjKeys: any[] = Object.keys(secondObj);
  // Робимо перевірку якщо довжина масивів не однакова повертаємо false так як тоді об'єкти точно не рівні
  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }
  // Порівнюємо ключі об'єктів рекурсивно
  for (const key of firstObjKeys) {
    if (!deepEqual(firstObj[key], secondObj[key])) {
      return false;
    }
  }

  return true;
};

// Варіант 2 (Для прикладів із тестового він підходить найкраще, але якщо в об'єкті будуть методи або тип даних Symbol тоді ми можемо використовувати тільки функцію з рекурсією бо JSON.stringify не зможе конвертувати методи та Symbol до строки) - використаємо JSON.stringify

// export const deepEqual = (firstObj: any, secondObj: any) => {
//   return JSON.stringify(firstObj) === JSON.stringify(secondObj);
// };

console.log(deepEqual({ name: 'test' }, { name: 'test' })); // output true
console.log(deepEqual({ name: 'test' }, { name: 'test1' })); // output false
console.log(
  deepEqual(
    { name: 'test', data: { value: 1 } },
    { name: 'test', data: { value: 2 } }
  )
); // output false
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // false
