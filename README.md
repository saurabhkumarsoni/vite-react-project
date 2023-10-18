# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

important interview question

function App() {
  const [count, setCount] = useState(0);

  const add = () =>{
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);    
                            /// here it will 1 and than other click it will increase the counter
                            /// because useState play important role, useState send update in baches to UI or any variable so it will find same work doing again and again so setter method will update recent one value

                            if we want to do update all the value in one click than we have to do like below
                            setCount((previousValue) => previousValue + 1);
                            setCount((previousValue) => previousValue + 1);
                            setCount((previousValue) => previousValue + 1);

                            so this code will give 3 on click of button because here setCount function takes previousValue from state and gives new value
  }

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-10 mb-4">
        Vite + React
      </h1>
      <p><b>Counter: {count}</b></p>
      <button type="button" onClick={add}>Add</button>
    )
}
