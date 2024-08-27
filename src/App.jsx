import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("dark-theme")
      ? JSON.parse(localStorage.getItem("dark-theme"))
      : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-theme", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className="flex justify-center items-center h-screen  dark:bg-black dark:text-white">
      <button
        onClick={() => setDark(!dark)}
        aria-label="Toggle Dark Mode"
        className={`fixed bottom-2 right-2 border-2 p-2 font-bold dark:text-white`}
      >
        {dark ? "Light" : "Dark"}
      </button>
      <div className="w-1/2 mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          qui, a sunt cumque tempora assumenda placeat sint reiciendis dolore ab
          aut reprehenderit libero odio magni odit architecto expedita. Dolor,
          mollitia.
        </p>
      </div>
    </div>
  );
}

export default App;
