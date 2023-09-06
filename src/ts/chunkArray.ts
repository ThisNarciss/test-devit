// Оголошуємо функцію генератор
export function* chunkArray(
  arr: any[],
  arrLength: number
): Generator<any, any, undefined> {
  // Оголошуємо зміну і копіюємо масив для нарізання в ітераторі
  // За допомогою оператору spread робимо функцію чистою і не мутуємо масив який потрапляє до функції як аргумент
  const chunkedArr = [...arr];
  // Запускаємо цикл for
  for (let index = 0; index < arrLength; index += 1) {
    //   Нарізаємо масив і повертаємо його частини

    yield chunkedArr.splice(0, arrLength);
  }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
