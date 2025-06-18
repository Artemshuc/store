# 🛍️ Интернет-магазин "StoreName"

Современный интернет-магазин электроники/одежды/других товаров с адаптивным дизайном и полным циклом заказа.

## ✨ Возможности

- 📦 Каталог товаров с фильтрами и поиском
- 🛒 Корзина с сохранением состояния
- 🔐 Авторизация пользователей
- 💳 Интеграция с платежной системой (Stripe/PayPal)
- 📱 Адаптивный дизайн (mobile-first)

## 🛠 Технологии

### Frontend
- **React 18** + TypeScript
- **Redux Toolkit** / Zustand (управление состоянием)
- **Vite** / Webpack (сборка)
- **Tailwind CSS** / Material UI (стили)
- **React Router** (навигация)

### Backend (опционально)
- **Node.js** (Express/Nest.js)
- **MongoDB** / PostgreSQL (база данных)
- **JWT** (аутентификация)

### Тестирование
- **Jest** + **React Testing Library** (юнит-тесты)
- **Cypress** (E2E-тесты)
- **Storybook** (UI-компоненты)

## 🚀 Запуск проекта

### Требования
- Node.js 18+
- npm 9+ или yarn
- MongoDB (если есть бэкенд)

### Установка
```bash
# Клонировать репозиторий
git clone https://github.com/ваш-username/store.git
cd store

# Установить зависимости фронтенда
cd frontend
npm install

# Установить зависимости бэкенда (если есть)
cd ../backend
npm install