# RS School REST service

# *Инструкция*

 Полезыные ссылки
 + [Задание](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/rest-service.md)
 + [Критерии проверки](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/cross-check/rest-service.md)
 + [Моя самопроверка](#self-test)
 + 06.12.2021	23:59 / 06.12.2021	23:59	


## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

<a id="self-test"></a>


# Самопроверка #
Ваша оценка - 190 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) По плюс 10 баллов за каждый успешно пройденный тест при запуске npm run test. Здесь только отметить, что такие тесты есть, сумму нужно посчитать вручную. 
Отзыв: +90 баллов
Выполненные пункты:
1) Код приложения, работающий с сущностью user разделен по модулям в соответствии с его назначением (к примеру: работа с запросом и ответом в *.router.js, бизнес-логика в *.service.js, работа с хранилищем данных в *.repository.js и т.п.) 

2) Код приложения, работающий с сущностью board разделен по модулям в соответствии с его назначением (к примеру: работа с запросом и ответом в *.router.js, бизнес-логика в *.service.js, работа с хранилищем данных в *.repository.js и т.п.) 

3) Код приложения, работающий с сущностью task разделен по модулям в соответствии с его назначением (к примеру: работа с запросом и ответом в *.router.js, бизнес-логика в *.service.js, работа с хранилищем данных в *.repository.js и т.п.) 

4) REST сервис построен на базе фреймворка/библиотеки, отличной от Express и Nest.js, либо на чистом Node.js плюс 100 баллов 

