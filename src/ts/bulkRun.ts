export const bulkRun = (funcAndArg: [(...arg: any) => void, any[]][]) => {
  // Пропускаємо циклом через map наш масив з функціями та їх аргументами та повертаємо масив промісів
  const arrPromises = funcAndArg.map(([fn, arg]) => {
    //   Створюємо новий проміс на кожній ітерації та повертаємо його
    return new Promise(resolve => {
      // Викликаємо функцію де першим аргументом розпиляємо наш масив з параметрами а останнім передаємо функцію колбек яка повертає результат промісу
      fn(...arg, (result: any) => {
        resolve(result);
      });
    });
  });
  // За допомогою Promise.all виконуємо та повертаємо масив виконаних промісів
  return Promise.all(arrPromises);
};

const f1 = (cb: (...args: any[]) => void) => {
  cb(1);
};
const f2 = (a: any, cb: (...args: any[]) => void) => {
  cb(a);
};
const f3 = (a: any, b: any, cb: (...args: any[]) => void) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
// Output: [1, 2, [3, 4]]
