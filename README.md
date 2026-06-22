# 🎬 React Movie Search App

A feature-rich Movie Search Application built with React that allows users to discover popular movies, search for their favorite titles, and browse through movie collections with a smooth and responsive user experience.

## 🚀 Features

- 🔍 Search movies by title
- 🎞️ Browse popular and trending movies
- 📄 Pagination for seamless navigation between pages
- 🛣️ Client-side routing using React Router
- 🔗 API integration using Axios
- 🌐 Global state management with Context API
- 📤 Props drilling implementation for component communication
- ⚛️ Built with React Hooks
- 🎠 Custom banner carousel built using React state and JavaScript logic
- 📱 Fully responsive design
- ⚡ Fast performance with Vite

## 🛠️ Technologies Used

- React.js
- Vite
- React Router DOM
- Axios
- Context API
- JavaScript (ES6+)
- CSS3
- Movie Database API (TMDB)

## 📚 React Concepts Practiced

This project demonstrates practical usage of:

- Components
- Props
- Props Drilling
- useState
- useEffect
- Context API
- Conditional Rendering
- Event Handling
- API Fetching with Axios
- React Router
- Pagination Logic
- Custom Carousel Logic

## 📂 Project Structure

```text
src/
├── components/
│   ├── Banner.jsx
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   └── Pagination.jsx
│
├── context/
│   └── MovieContext.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Movies.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── App.css
```

## 🎠 Custom Banner Carousel

The banner section is implemented without any third-party carousel library.

Features:
- Automatic slide switching
- State management using `useState`
- JavaScript timing logic
- Dynamic background images
- Responsive design

## 🔗 Routing

Implemented using React Router DOM.

Example Routes:

```jsx
/
```

Home Page

```jsx
/movies
```

Movies Listing Page

```jsx
/movie/:id
```

Movie Details Page (if implemented)

## 📡 API Integration

Movie data is fetched using Axios from the TMDB API.

Example:

```javascript
axios.get(API_URL)

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience with:

- React Fundamentals
- State Management
- Context API
- Routing
- API Consumption
- Pagination
- Component Reusability
- Custom Carousel Development
- Responsive UI Design

## 🌱 Future Enhancements

- Movie Details Page
- Favorites/Watchlist
- Genre Filters
- Dark Mode
- Authentication
- Infinite Scrolling

## 👨‍💻 Author

**Ajit Sherkar**

Built as part of my React learning journey and portfolio projects collection.

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.