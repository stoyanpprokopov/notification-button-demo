import "./styles.css";
import Header from "./Header";
import PageContainer from "./PageContainer";
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons();

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Header />
      <PageContainer>TODO</PageContainer>
    </div>
  );
}
