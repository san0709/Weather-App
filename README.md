# ☁️ WeatherWise: Your Sleek Weather Companion

**A modern, responsive weather application built with React, leveraging the power of the OpenWeatherMap API.**



## ✨ Features

* **Real-time Weather Data:** Get up-to-the-minute weather information for any city worldwide.
* **Intuitive UI:** A clean, dark-themed interface with smooth, glassmorphic elements for a premium feel.
* **Dynamic Icons:** Weather conditions are instantly mapped to relevant, high-quality icons (Sunny, Cloud, Rain, Snow, Wind/Haze/Mist/Fog).
* **Detailed Metrics:** Displays key weather stats: **Temperature (°C)**, **Humidity (%)**, and **Wind Speed (km/hr)**.
* **Robust Error Handling:** Clear error messages for "City not found" (404) and network issues.
* **Responsive Design:** Looks great on desktops, tablets, and mobile devices.

---

## 🚀 Quick Start

Follow these steps to get your local copy up and running.

### Prerequisites

You'll need **Node.js** and **npm** (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd weather-wise
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Get an API Key:**
    * Sign up on **OpenWeatherMap** to get your free API key.

4.  **Configure Environment Variables (Recommended):**
    * Create a file named `.env.local` in the root directory.
    * Add your API key there:
        ```env
        REACT_APP_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
        ```
    * *Note: In the provided code, the API key is hardcoded in `App.jsx`. For production or best practice, replace the hardcoded key with the environment variable:
        ```javascript
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        ```*

5.  **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The app should now be running at `http://localhost:3000`.

---

## 🛠️ Tech Stack

This project is built using modern front-end technologies:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **React** | For building the user interface. |
| **Styling** | **CSS** | Custom, modular styling featuring a **glassmorphic** design aesthetic. |
| **API** | **OpenWeatherMap** | Provides comprehensive weather data. |
| **Data Fetching** | **Fetch API** (`async/await`) | Native browser API for making HTTP requests. |
| **State Management** | **React Hooks** (`useState`) | Simple, built-in state management for the application. |

---

## 📂 Project Structure

The key files and components are structured as follows:

* `src/`:
    * `App.jsx`: The main application component, handling search logic, API calls, and state management.
    * `Card.jsx`: A reusable component for displaying individual weather metrics (Humidity, Wind, Temp).
    * `App.css`: Contains all the application styles, including the custom glassmorphism effects.
    * `assets/`: Stores all the weather and utility icons (Snow, Cloud, Rainy, Sunny, Search, etc.).

### **Core Logic Snippet**

The weather fetching logic is encapsulated in the `getWeather` function in `App.jsx`:

```javascript
const getWeather = async () => {
    // ... input validation and URL construction
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            // Handles city not found error
            // ...
        }

        setWeatherData(data);
    } catch (error) {
        // Handles network errors
        // ...
    }
};
