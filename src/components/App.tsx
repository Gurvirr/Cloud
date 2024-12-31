import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import TitleBar from "./TitleBar.tsx";
import styles from "/src/styles/app.module.css";
    
function App() {
const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke("greet", { name }));
    }

    return (
        <main className={styles.container}>
            <TitleBar />
            <h1>Cloud, the lightweight rich-text editor.</h1>

            <div className={styles.row}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/Cloud.png" className={`${styles.logo} ${styles.vite}`} alt="Vite logo" />
                </a>
                <a href="https://tauri.app" target="_blank">
                    <img src="/Cloud.png" className={`${styles.logo} ${styles.tauri}`} alt="Tauri logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src="/Cloud.png" className={`${styles.logo} ${styles.react}`} alt="React logo" />
                </a>
            </div>
            <p>Click on the Tauri, Vite, and React logos to learn more.</p>

            <form
                className={styles.row}
                onSubmit={(e) => {
                    e.preventDefault();
                    greet();
                }}
            >
                <input
                    id="greet-input"
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="Enter a name..."
                />
                <button type="submit">Greet</button>
            </form>
            <p>{greetMsg}</p>
        </main>
    );
}

export default App;
