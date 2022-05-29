# Look At

Приложение создано в ходе выполнения тестового задания для компании ***Продуктлаб***

https://pavel-voitekhovich-test.netlify.app/

**Требования**

*Необходимо сверстать адаптивную страницу со списком фотографий.
При клике на фотографии открывается модальное окно с фотографией,
списком комментариев и формой добавления комментариев.*

Для того что бы запустить проект выполните следующие действия:

`git clone https://github.com/VoitihovichP/product-lab.git`

`cd product-lab`

`npm install`

`npm run serve`



**Задача с собеседования:**

*Условие:* 

Найти повторяющийся элемент в массиве и получить количество его повторений.

*Решение*

```
const arr = [2, 3, 1, 1, 1, 4, 5];
const obj = {};
arr.forEach((item) => {
    obj[item] = obj[item] + 1 || 1;
});

for (key in obj) {
  if (obj[key] > 1) {
    console.log(`элемент ${key} повторяется ${obj[key]} раз`);
  }
}
