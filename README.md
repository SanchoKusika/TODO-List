# TODO App
TODO приложение на `React + TypeScript + Vite` с архитектурой `Feature Sliced Design` и управлением состоянием через `Zustand`

## Инструкция по запуску
```
git clone https://github.com/SanchoKusika/ToDo-List.git
npm install
npm run dev
```

## FSD
- `src/app` - вход приложения (`App`, глобальные стили, инициализация AOS)
- `src/pages` - `home-page` собирает страницу из виджетов
- `src/widgets` - крупные UI-блоки страницы (`header`, `tasks-board`)
- `src/features` - пользовательские сценарии и их состояние:
  `task-management`, `task-search`, `language-switcher`, `theme-switcher`, `board-view-switcher`
- `src/entities` - доменная сущность `task`
- `src/shared` - `/lib` - i18n, форматирование даты, `/config` - ключи localStorage - , `/ui` переиспользуемые кнопки

Используются алиасы путей `@app`, `@pages`, `@widgets`, `@features`, `@entities`, `@shared` через `vite.config.ts`, `tsconfig.app.json`

## Реализованные фичи
- Создание и редактирование задачи через модальное окно
- Удаление задачи
- Статусы задач: `todo`, `in-progress`, `done`
- Дата создания и дата изменения задачи
- Drag & Drop API (без библиотек) задачи между колонками в режиме доски
- Переключение вида доски как колонка или список
- Поиск задач по заголовку
- Мультиязычность интерфейса: `RU/EN`
- Переключение темы: `light / dark / auto`
- Сохранение состояния в `localStorage`: язык, тема, режим отображения доски, список задач
- AOS анимации
