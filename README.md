# NOIR STUDIO

Интернет-магазин одежды на React: каталог с фильтрами, карточка товара, корзина с сохранением в LocalStorage. Проект демонстрационный, backend нет.

**Демо:** _добавьте ссылку после деплоя (например, на Vercel)_

## Возможности
- Каталог: поиск, категории, цена, размер, сортировка, избранное
- Страница товара: галерея, размер, цвет, количество, рекомендации
- Корзина: количество, удаление, итог, сохранение после перезагрузки
- О бренде, контакты с валидацией формы, страница 404
- Адаптивная вёрстка и мобильное меню, анимации переходов (Framer Motion)
- Оформление заказа и отправка форм: демо без backend

## Технологии
React 18, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React, Context API.

## Запуск
```bash
npm install
npm run dev
```
Сборка: `npm run build`.

## Структура
```
src/
  components/  Header, Footer, ProductCard, Page
  pages/       Home, Catalog, Product, Cart, About, Contact, NotFound
  context/     ShopContext (корзина, избранное)
  hooks/       useScrollTop
  data/        products.js
  utils/       format.js
  styles/      index.css
```

## Скриншоты
_Добавьте скриншоты в папку `docs/` и вставьте сюда после первого запуска._

## Планы
Реальные фотографии, оформление заказа через backend, авторизация, страница избранного, тесты.
