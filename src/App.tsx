import "./styles.css";
import Header from "./Header";
import PageContainer from "./PageContainer";

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
