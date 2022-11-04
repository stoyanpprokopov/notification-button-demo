import React, { ReactElement } from "react";
import { useId } from "@fluentui/react-hooks";
import { LayerHost, ILayerProps } from "@fluentui/react/lib/Layer";
import { Customizer } from "@fluentui/react/lib/Utilities";
import { Panel } from "@fluentui/react/lib/Panel";
import { mergeStyles } from "@fluentui/react/lib/Styling";

const PANEL_CONTAINER_ID = "panel_container_id";

interface IPageContainerProps {
  dismissPanel: () => void;
  isPanelOpen: boolean;
  children: any;
}

export default function PageContainer({
  children,
  isPanelOpen,
  dismissPanel,
  ...props
}: IPageContainerProps) {
  const layerHostId = useId(PANEL_CONTAINER_ID);
  const layerProps: ILayerProps = { hostId: layerHostId };

  const scopedSettings = { Layer: layerProps };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      {...props}
    >
      <Panel
        layerProps={{ hostId: layerHostId }}
        isOpen={isPanelOpen}
        headerText="Notifications panel"
        focusTrapZoneProps={{
          isClickableOutsideFocusTrap: true,
          forceFocusInsideTrap: false,
        }}
        onDismiss={dismissPanel}
        isLightDismiss={true}
      >
        TODO
      </Panel>

      <LayerHost id={layerHostId} className={layerHostClass}>
        {children}
      </LayerHost>
    </div>
  );
}

const layerHostClass = mergeStyles({
  position: "relative",
  height: "100%",
});
