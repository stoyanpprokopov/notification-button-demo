import "./styles.css";
import Header from "./Header";
import PageContainer from "./PageContainer";
import { useBoolean } from "@fluentui/react-hooks";

export default function App() {
  const [isPanelOpen, { setTrue: showPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Header
        isPanelOpen={isPanelOpen}
        showPanel={showPanel}
        dismissPanel={dismissPanel}
      />
      <PageContainer isPanelOpen={isPanelOpen} dismissPanel={dismissPanel}>
        TODO
      </PageContainer>
    </div>
  );
}
