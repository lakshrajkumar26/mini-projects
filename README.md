# Counter

- /counter  [`to increase decrease Random Reset using UseState`] 


# Weather 

- /weather  [`to get weather data`]
-  learnings  How to use button using both methods and hooks .i.e useState and useRef 
- in UseState by  fn(event) {event.target.value}
- in useRef by  fn(event)  inputRef.current.value
- error handling  is setWeatherData true :render  everythiung else : render nothing 


try{

}
catch (error){
 setweatherdata(false)
console.log(error)
alert()
}

{WeatherData ?   *is true render this inside fragment* <> </>  : *false render inside * <> </>}

inshort  {weatherData ? <> true thing </>  : <>false things </>}

# 🧑‍💻 Mini Project Portfolio (React)
## 🖼️ Screenshots

### 🔹 Home Page
![Home Page](assets/screenshots/home.png)

### 🔹 Weather App
![Weather App](assets/screenshots/weather.png)

### 🔹 To-Do List
![To-Do List](assets/screenshots/todolist.png)

### 🔹 BMI Calculator
![BMI Calculator](assets/screenshots/bmi.png)
 
### 🔹 Quote Generator
![Quote Generator](assets/screenshots/quotes.png)

This is a beginner-friendly React portfolio that includes several **mini projects** created to practice and demonstrate core React concepts. These projects are simple, educational, and ideal for reinforcing your knowledge in building interactive UI, handling state, fetching data from APIs, and managing component-based architecture.

---

## 🚀 Projects Included

| Project            | Key Concepts Covered |
|--------------------|----------------------|
| **BMI Calculator** | State handling, controlled inputs, basic conditional rendering |
| **To-Do List**     | Array state manipulation (add/delete), event handling, conditional styles |
| **Weather App**    | Fetch API with `useEffect`, error handling, working with API keys, dynamic UI |
| **Quote Generator**| Random selection from fetched data, minimal API usage, button events |

---

## 📚 What I Learned (React Concepts)

### ✅ Functional Components
Modern React prefers **function components** with hooks instead of class components.

```jsx
function MyComponent() {
  return <h1>Hello</h1>;
}
✅ useState
Allows you to declare a state variable in a function component.

jsx
Copy
Edit
const [count, setCount] = useState(0);
✅ useEffect
Runs side effects — like fetching data — after component renders.

jsx
Copy
Edit
useEffect(() => {
  // Runs once on mount
  fetchData();
}, []);
✅ Controlled Components
Inputs where React controls the value via useState.

jsx
Copy
Edit
<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
✅ Event Handling
jsx
Copy
Edit
<button onClick={handleClick}>Click me</button>
🛠️ Tech Stack
React (Vite + JSX)

CSS3

OpenWeatherMap API

Type.fit Quotes API

📁 Folder Structure
css
Copy
Edit
/src
  ├── components/
  │     ├── Bmi.jsx
  │     ├── Todo.jsx
  │     ├── Weather.jsx
  │     ├── Quotes.jsx
  ├── Home.jsx
  ├── App.jsx
  ├── index.js
  └── styles/
        ├── home.css
        ├── weather.css
🔧 Getting Started
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/react-mini-projects.git
cd react-mini-projects
Install dependencies

bash
Copy
Edit
npm install
Setup API Key

Create a .env file:

ini
Copy
Edit
VITE_APP_ID=your_openweather_api_key
Run the project

bash
Copy
Edit
npm run dev
Open browser: http://localhost:5173

🌐 Project Pages
Project	Route
Home	/
BMI Calculator	/bmi
To-Do List	/todo
Weather App	/weather
Quote Generator	/quotes

🧠 React Revision Notes (Quick Guide)
Use this section for last-minute interview prep or revision!

🔹 Component Basics
Reusable pieces of UI

Must return valid JSX

PascalCase names

🔹 JSX
Syntax extension for JS

Wrap multiple elements in one parent

Use {} for expressions

🔹 Hooks
Hook	Purpose
useState	Manage local component state
useEffect	Handle side effects (API, timers)
useRef	Access DOM nodes or persist values

🔹 Props vs State
Props	State
Passed from parent	Managed within component
Read-only	Can be updated
Immutable	Mutable via setState

🔹 Common Patterns
jsx
Copy
Edit
// Fetching API
useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(data => setData(data));
}, []);

// Controlled input
<input value={input} onChange={e => setInput(e.target.value)} />
🔹 Conditional Rendering
jsx
Copy
Edit
{isLoading ? <p>Loading...</p> : <p>Data loaded</p>}
🔹 Mapping Lists
jsx
Copy
Edit
{tasks.map(task => <li key={task.id}>{task.name}</li>)}
📌 Future Enhancements
Add React Router

Responsive design with media queries

Use localStorage in Todo app

Dark/light theme switcher

Deploy to Netlify or Vercel
