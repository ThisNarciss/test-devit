export const deepEqual: (obj1: object | any, obj2: object | any) => boolean = (
  obj1,
  obj2
) => {
  // Робимо перевірку чи параметри не є об'єктами
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
    // Якщо параметри не є об'єктами порівнюємо їх і повертаємо результат
    return obj1 === obj2;
  }
  // Дістаємо ключі об'єкта у масив
  const obj1Keys: any[] = Object.keys(obj1);
  const obj2Keys: any[] = Object.keys(obj2);
  // Робимо перевірку якщо довжина масивів не однакова повертаємо false так як тоді об'єкти точно не рівні
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  // Порівнюємо ключі об'єктів рекурсивно
  for (const key of obj1Keys) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

console.log(deepEqual({ name: 'test' }, { name: 'test' })); // output true
console.log(deepEqual({ name: 'test' }, { name: 'test1' })); // output false
console.log(
  deepEqual(
    { name: 'test', data: { value: 1 } },
    { name: 'test', data: { value: 2 } }
  )
); // output false
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // false
