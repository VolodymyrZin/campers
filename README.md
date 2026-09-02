# TravelTrucks

TravelTrucks — вебзастосунок для пошуку та бронювання кемперів. Користувачі
можуть переглядати каталог кемперів, фільтрувати їх за параметрами, переглядати
детальну інформацію, відгуки та бронювати обраний кемпер.

## Features

- Перегляд головної сторінки з банером та переходом до каталогу.
- Перегляд каталогу кемперів.
- Фільтрація кемперів за:
  - локацією;
  - типом кузова;
  - типом двигуна;
  - типом трансмісії.

- Серверна фільтрація через query-параметри.
- Пагінація каталогу за допомогою кнопки **Load More**.
- Завантаження по 4 кемпери за один запит.
- Перегляд детальної інформації про кемпер.
- Галерея зображень кемпера.
- Перегляд відгуків та рейтингу у вигляді п'ятизіркової шкали.
- Форма бронювання кемпера.
- Відправлення даних бронювання на backend API.
- Повідомлення про успішне бронювання.
- Loader під час асинхронних запитів.
- Відкриття сторінки деталей кемпера у новій вкладці.

## Technologies

- Next.js
- React
- TypeScript
- TanStack Query
- Axios
- Formik
- Yup
- CSS Modules
- Swiper
- React Hot Toast
- Ratti

## Backend API

Для отримання даних про кемпери та роботи з бронюваннями використовується
TravelTrucks API:

`https://campers-api.goit.study`

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:VolodymyrZin/campers.git
```

### 2. Navigate to the project directory

```bash
cd campers
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Відкрийте http://localhost:3000 у браузері.

## Available Scripts

### Development

```bash
npm run dev
```

Запускає застосунок у режимі розробки.

### Production build

```bash
npm run build
```

Створює production build застосунку.

### Production start

```bash
npm start
```

Запускає production-версію застосунку.

## Project Structure

```text
app/
├── page.tsx
└── catalog/
    ├── page.tsx
    ├── loading.tsx
    └── [camperId]/
        ├── page.tsx
        └── loading.tsx

components/
├── Hero/
├── CatalogList/
├── CamperCard/
├── Filters/
├── NothingFound/
├── CamperGallery/
├── Reviews/
├── CamperRating/
├── BookingForm/
└── LoaderModal/

lib/
└── api/

types/
└── camper.ts
```

## Author

**VolodymyrZin**

GitHub: https://github.com/VolodymyrZin/campers
