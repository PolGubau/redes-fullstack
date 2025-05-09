import { createRoot } from "react-dom/client";
import "./style.css";
import typescriptLogo from "/typescript.svg";

const App = () => (
	<div>
		<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
			<img src="/vite.svg" className="logo" alt="Vite logo" />
		</a>
		<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
			<img
				src={typescriptLogo}
				className="logo vanilla"
				alt="TypeScript logo"
			/>
		</a>
		test
	</div>
);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("app")!).render(<App />);
