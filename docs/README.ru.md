<h1 align="center">Compact UI library (OOP)</h1>
<p align="center">
  <em>Эта библиотека представляет собой набор многократно используемые компоненты, которые упрощают создание интерактивных и адаптивных пользовательских интерфейсов. Удобный инструмент, когда нужно использовать ООП в интерфейсах Библиотека будет продолжать обновляться, это не последняя её версия. Под капотом библиотека использует чистый TypeScript.</em>
</p>

## Навигация
- [Структура проекта](#section-lib-structure)
  - [Глобальная структура](#section-global-structure)
  - [Важная структура](#section-important-files)

- [Как использовать](#section-how-to-use)
  - [Скачать библиотеку](#dwn-lib)
  - [Добавление в проект](#import-lib)
  - [Использование компонентов](#use-components)
    - [Use PopUp](#use-component-1)
    - [Use Tooltip](#use-component-2)
    - [Use FormValidator](#use-component-3)
    - [Use Chat](#use-component-4)
    - [Use PopUpNotification](#use-component-5)

- [Компоненты](#section-components)
  - [Core UI Library](#section-ui-framework)
  - [Popups & Modals](#section-popups-modals)
  - [Form Validation](#section-form-validation)
  - [Content Switching](#section-content-switching)
  - [Async Components](#section-async-components)
  - [Chat & Queue](#section-сhat-queue)
  - [Text Selection Errors](#section-text-selection-errors)

- [TODO](#section-todo)

- [Автор](#section-author)
  - [Kirill Doroshev](https://github.com/dkmfzf)

- [Лицензия](#section-license)

<h2 id="section-lib-structure">
  Структура проекта
</h2>

<h3 id="section-global-structure">
  Глобальная структура
</h3>

- src/ — корневая папка проекта
- src/Components/Chat — папка с компонентами чата
- src/Components/Notification — папка с компонентом сообщения
- src/Components/PopUpSelectionError — папка с компонентом выбора ошибки
- src/ContentSwitcher — папка с компонентом переключателя контента
- src/FormValidation — папка с компонентом валидации формы
- src/PopUp — папка с компонентами всплывающих окон

<h3 id="section-important-files">
  Важная структура
</h3>

- src/index.ts — главный файл библиотеки
- src/UILib.ts — главный файл жизненного цикла библиотеки
- src/utils/utils.ts — файл с вспомогательными функциями

<h2 id="section-how-to-use">
  Как использовать
</h2>

__ДИСКЛЕЙМЕР: библиотека находиться в самом первом своём билде, в последствии она будет добавлена в инфраструктуру ```npm``` пакетов. На данный момент она доступна только через явное использование в проекте.__

Для того что бы использовать библиотеку, необходимо импортировать ее в свой проект, а все файлы в src/ (желательно для этого создать отдельную директорию например: ```src/lib/'файл библиотеки'```).
После того как файлы будут импортированны можно приступать к созданию компонентов и использовать их в своем проекте.  

<h3 id="dwn-lib">
  1. Установка библиотеки
</h3>

```bash
git clone https://github.com/DKMFzF/web-ui-library.git
```

<h3 id="import-lib">
  2. Импорт библиотеки в проект
</h3>

```TypeScript
// index.ts (located at the root of the project)

import {
  UILib,
  PopUp,
  Tooltip,
  Modal,
  Dropdown,
  FormValidator,
  Accordion,
  ContentSwitcher,
  Gallery,
  Slider,
  Tabs,
  AsyncDropdown,
  PopUpNotification,
  NotificationElement,
  PopUpSelectionError,
  Queue,
  Chat,
} from './lib/index.ts';
```

<h3 id="use-components">
  3. Использование компонентов
</h3>

Теперь вы можете использовать компоненты и функции из библиотеки в вашем проекте. Вот несколько примеров:  

<h4 id="use-component-1">
  3.1 Использование PopUp
</h4>

```TypeScript
  const popup = new PopUp();
  popup.initAll(); // Инициализация всех всплывающих окон на странице
```

<h4 id="use-component-2">
  3.2 Использование Tooltip
</h4>

```TypeScript
  const tooltip = new Tooltip();
  tooltip.init('[data-trigger-tooltip]', '[data-content-tooltip]'); // Initializing tooltips
```
<h4 id="use-component-3">
  3.3 Использование FormValidator
</h4>

```TypeScript
  const formValidator = new FormValidator();
  formValidator.initAll(); // Инициализация валидации всех форм на странице
```

<h4 id="use-component-4">
  3.4 Использование Chat
</h4>

```TypeScript
  const chat = new Chat({
    nameFile: 'chat.html',
    widthWindow: 400,
    heightWindow: 600,
    form: document.querySelector('#chat-form'), // Форма для ввода имени пользователя
  });
```

<h4 id="use-component-5">
  3.5 Использование PopUpNotification
</h4>

```TypeScript
  const popupNotification = new PopUpNotification();
  popupNotification.addNotification('Новое уведомление!');
  popupNotification.renderNotification(); // Отображение уведомления
```

**4. Настройка HTML**  
Для работы некоторых компонентов (например, PopUp, Tooltip, Dropdown) требуется определённая структура HTML. Например:

**4.1 Для PopUp**
```HTML
  <button data-trigger-popup="myPopup">Открыть PopUp</button>
  <div id="myPopup" data-content-popup>
    <p>Это всплывающее окно!</p>
  </div>
```

**4.2 Для Tooltip:**
```HTML
  <button data-trigger-tooltip="myTooltip">Наведите на меня</button>
  <div id="myTooltip" data-content-tooltip>
    <p>Это тултип!</p>
  </div>
```

**4.3 Для FormVali**
```HTML
  <form data-form>
    <input type="text" class="form__input" required>
    <button type="submit">Отправить</button>
  </form>
```

**5. Настройка стилей**  
Убедитесь, что у вас подключены стили для компонентов. Например, для PopUp и Tooltip могут потребоваться CSS-классы, такие как widget_hidden, display_flex и другие.
```CSS
  .widget_hidden {
    display: none;
  }

  .display_flex {
    display: flex;
  }
```

**6. Использование утилит**
Вы можете использовать утилиты, такие как ensureElement, ensureAllElements, capitalizeFirst и другие, в своём коде. Например:
```JavaScript
  import { ensureElement, capitalizeFirst } from 'ваш путь до библиотеки';

  const element = ensureElement('#myElement'); // Получение элемента
  const capitalizedString = capitalizeFirst('hello'); // "Hello"
```

**7. Пример полного использования**
Вот пример использования нескольких компонентов вместе:
```JavaScript
  import { PopUp, Tooltip, FormValidator, Chat } from 'ваш путь до библиотеки';

  // Инициализация PopUp
  const popup = new PopUp();
  popup.initAll();

  // Инициализация Tooltip
  const tooltip = new Tooltip();
  tooltip.init('[data-trigger-tooltip]', '[data-content-tooltip]');

  // Инициализация FormValidator
  const formValidator = new FormValidator();
  formValidator.initAll();

  // Инициализация Chat
  const chat = new Chat({
    nameFile: 'chat.html',
    widthWindow: 400,
    heightWindow: 600,
    form: document.querySelector('#chat-form'),
  });
```

<h2 id="section-components">
  Компоненты
</h2>

В даном разделе описанны все компоненты, которые используются в библиотеке. К компонентам приложенна UML-диаграммы, которые явно показывают связи между компонентами. Для уменьшения места в некоторых компонентах **уменьшина дитализация**. Это означает что компонент был описан выше и повтороное описание не требовалось.

<h3 id="section-ui-framework">
  Базовый UI-фреймворк (Core UI Library)
</h3>

Абстрактный класс, который служит основой для всех UI-компонентов. Он определяет базовые методы для инициализации элементов интерфейса и управления их состоянием (показ, скрытие, переключение).

Методы:
- ```initAll(): void``` — Инициализирует все UI-компоненты на странице.
- ```init(widget: SelectorElement | SelectorElement[],  trigger: SelectorElement | SelectorElement[]): void``` — Инициализирует конкретный компонент с указанным триггером.
- ```toggle(popup: HTMLElement): void``` — Переключает видимость всплывающего элемента.
- ```show(popup: HTMLElement): void``` — Показывает всплывающий элемент.
- ```hide(popup: HTMLElement): void``` — Скрывает всплывающий элемент.

Как может быть использован:
- Создание новых UI-компонентов, которые требуют управления видимостью.
- Реализация общих механизмов для всплывающих окон, вкладок, модальных окон и других интерфейсных элементов.

#### UML-диаграмма компонента
<p>
  <img width="100%" height="100%" src="./base-class.png">  
</p> 

<h3 id="section-popups-modals">
  Всплывающие окна и элементы (Popups & Modals)
</h3>

#### Класс: PopUp
Описание: базовый класс для управления всплывающими элементами, такими как модальные окна, выпадающие списки и тултипы. Он определяет методы для отображения всплывающих элементов и их позиционирования относительно триггеров.

Методы:
- ```initAll(): void``` — Инициализирует все PopUp-элементы.
- ```init(trigger: SelectorElement, popup: SelectorElement): void``` — Инициализирует конкретное всплывающее окно.
- ```determineСoords(trigger: HTMLElement, popup: HTMLElement): void``` — Определяет координаты отображения всплывающего окна относительно триггера.
- ```positioningElement(positionStr: string, coords: DOMRect, popupSize: DOMRect): PositionInterface``` — Вычисляет финальное положение окна.
- ```addBehavior(trigger: HTMLElement, popup: HTMLElement): void``` — Добавляет обработчики событий.

Как может быть использован:
- Управление модальными окнами в веб-приложении.
- Отображение всплывающих подсказок или контекстных меню при наведении.

#### Класс: Dropdown
Описание: расширяет функциональность PopUp и реализует поведение выпадающего списка (dropdown).

Методы:
- ```addBehavior(trigger: HTMLElement, popup: HTMLElement): void``` — Добавляет поведение для открытия и закрытия списка.

Как может быть использован:
- Реализация навигационных меню с вложенными пунктами.
- Создание полей ввода с автодополнением.

#### Класс: Modal (Наследуется от PopUp)
Описание: отдельный тип всплывающего элемента, предназначенный для отображения модальных окон с затемнением фона.

Методы:
- ```addBehavior(trigger: HTMLElement, popup: HTMLElement): void``` — Добавляет поведение для открытия и закрытия модального окна.

Как может быть использован:
- Создание диалоговых окон подтверждения действий.
- Реализация всплывающих форм обратной связи или входа в систему.

#### Класс: Tooltip (Наследуется от PopUp)
Описание: класс для управления всплывающими подсказками.

Методы:
- ```addBehavior(trigger: HTMLElement, popup: HTMLElement): void``` — Добавляет обработчик событий.
- ```hideTooltip(tooltip: HTMLElement, delay: number): void``` — Скрывает всплывающую подсказку с задержкой.

Как может быть использован:
- Отображение вспомогательной информации при наведении на элементы интерфейса.
- Улучшение юзабилити веб-форм и сложных UI-компонентов.

#### UML-диаграмма компонента
<p>
  <img width="100%" height="100%" src="./pop-up.png">  
</p>

<h3 id="section-form-validation">
  Валидация форм (Form Validation)
</h3>

#### Класс: FormValidator
Описание: класс для управления валидацией форм. Позволяет проверять корректность ввода, управлять состоянием кнопки отправки и выводить сообщения об ошибках.

Методы:
- ```initAll(): void``` — Инициализирует валидацию для всех форм.
- ```init(form: SelectorElement): void``` — Инициализирует валидацию для конкретной формы.
- ```searchBtnSubmit(form: HTMLFormElement): ButtonSubmit``` — Ищет кнопку отправки формы.
- ```toogleButtonState(inputList: HTMLInputElement[], btnSubmit: ButtonSubmit): void``` — Переключает состояние кнопки отправки.
- ```hasInvalidInput(inputsList: HTMLInputElement[]): boolean``` — Проверяет, есть ли в форме невалидные поля.
- ```showError(input: HTMLInputElement, errorMessage: string): void``` — Отображает сообщение об ошибке.
- ```hideError(input: HTMLInputElement): void``` — Скрывает сообщение об ошибке.
- ```inputValidation(form: HTMLFormElement, input: HTMLInputElement): void``` — Проверяет валидность ввода.

Как может быть использован:
- Автоматическая проверка форм перед их отправкой.
- Предотвращение отправки некорректных данных пользователями.

#### UML-диаграмма компонента
<p>
  <img width="100%" height="100%" src="./valid.png">  
</p>

<h3 id="section-content-switching">
  Переключение контента (Content Switching)
</h3>

#### Класс: ContentSwitcher
Описание: общий механизм для переключения отображаемого контента по клику на триггеры.

Методы:
- ```initAll(): void``` — Инициализирует все переключатели контента.
- ```init(contentSwitcher: SelectorElement): void``` — Инициализирует один переключатель.
- ```addBehavior(switchContent: HTMLElement[], allTriggers: HTMLElement[]): void``` — Добавляет обработчики событий.

Как может быть использован:
- Переключение вкладок (Tabs).
- Отображение слайдов в галерее или слайдере.

#### Класс: Accordion
Описание: реализация аккордеона – компонента, который позволяет скрывать и разворачивать блоки контента.

Как может быть использован:
- Создание списка часто задаваемых вопросов (FAQ).
- Управление отображением длинных текстов.

#### Класс: Gallery (Наследуется от ContentSwitcher)
Описание: позволяет переключать изображения внутри галереи.
Как может быть использован:
- Реализация карусели изображений.
- Просмотр изображений в режиме слайд-шоу.

#### Класс: Slider (Наследуется от ContentSwitcher)
Описание: расширение функционала галереи, позволяющее пользователям переключать слайды с помощью точек или стрелок.

Методы:
- ```showSlider(dots: HTMLElement[], switchContent: HTMLElement[], sliderIndex: number): void``` — Отображает активный слайд.

Как может быть использован:
- Реализация рекламных баннеров или слайд-шоу.
- Отображение контента с пошаговой навигацией.

#### Класс: Tabs (Наследуется от ContentSwitcher)
Описание: класс для управления вкладками, переключающими отображаемый контент.
Как может быть использован:
- Создание многостраничных форм без перезагрузки страницы.
- Организация информации в карточках товаров или профилях пользователей.

#### UML-диаграмма компонента
<p>
  <img width="100%" height="100%" src="./swither.png">  
</p>

<h3 id="section-async-components">
  Асинхронные элементы (Async Components)
</h3>

#### Класс: AsyncDropdown (Наследуется от Dropdown)
Описание: позволяет загружать данные динамически и отображать их в выпадающем списке.

Методы:
- ```cashFunction(fn: Function): Function``` — Кеширует результаты поиска.
- ```renderSearch(list: string[], parentElement: HTMLElement): void``` — Отображает результаты поиска.

Как может быть использован:
- Реализация поиска с автодополнением.
- Загрузка данных о товарах, пользователях или других сущностях по мере ввода текста.

#### UML-диаграмма компонента
<p>
  <img width="100%" height="100%" src="./asnc.png">  
</p>

<h3 id="section-сhat-queue">
  Чат и Очередь сообщений (Chat & Queue)
</h3>

#### Класс: Chat
Описание: позволяет реализовать веб-чат с сохранением состояния сообщений и пользователей.

Методы:
- ```init(form: HTMLFormElement): void``` — Инициализирует чат и привязывает форму отправки сообщений.

Как может быть использован:
- Организация чата для поддержки клиентов.
- Создание системы сообщений в реальном времени для веб-приложений.

#### Класс: PopUpNotification
Описание: отвечает за управление очередью всплывающих уведомлений.

Методы:
- ```addNotification(message: string): void``` — Добавляет новое уведомление в очередь.
- ```renderNotification(): void``` — Отображает уведомление.

Как может быть использован:
- Вывод уведомлений о новых сообщениях или ошибках.
- Создание системы push-уведомлений в веб-приложениях.

#### Класс: Queue<T>
Описание: общий класс для управления очередью элементов.

Методы:
- ```add(el: T): void``` — Добавляет элемент в очередь.
- ```remove(): T | undefined``` — Удаляет элемент из очереди.
- ```size(): number``` — Возвращает количество элементов в очереди.
- ```get(): Array<T>``` — Возвращает массив элементов очереди.

Как может быть использован:
- Управление очередью сообщений или уведомлений.
- Хранение запросов пользователей в режиме офлайн.

#### UML-диаграмма компонента
<p>
  <img width="100%" height="100%" src="./chat.png">  
</p>

<h3 id="section-text-selection-errors">
  Ошибки выбора текста (Text Selection Errors)
</h3>

#### Класс: PopUpSelectionError
Описание: позволяет отображать всплывающие ошибки при выделении некорректного текста.

Методы:
- ```addBehavior(trigger: HTMLElement, popup: HTMLElement): void``` — Добавляет обработчики событий.

Как может быть использован:
- Подсветка ошибок в текстовых редакторах.
- Автоматическое исправление текста при выделении.

#### Класс: SelectionText
Описание: класс для работы с выделенным текстом.

Методы:
- ```getSelectedText(): string``` — Получает текущий выделенный текст.

Как может быть использован:
- Получение выделенного текста для анализа или исправления.
- Отображение опций копирования, вставки или исправления текста.

#### UML-диаграмма компонента
<p>
  <img width="100%" height="100%" src="./error.png">  
</p>

<h2 id="section-todo">
  Планы на доработку/добавление функционала
</h2>

- __TODO__: Добавить в инфраструктуру npm пакетов
- __TODO__: Добавить тесты для компонентов

<h2 id="section-author">
  Author
</h2>

[Дорошев Кирилл (DKMFzF)](https://vk.com/dkmfzf )

<h2 id="section-license">
  Лицензия
</h2>

Этот проект лицензирован по лицензии MIT