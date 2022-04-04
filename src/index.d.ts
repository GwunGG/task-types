/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type GetPerson = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};
type GetPersons = GetPerson[];
export function getPersons(): GetPersons;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female';
}
interface Worker extends Person {
    company: string;
}

export function personToString(person: Person | Worker): string;
