import React, { ReactElement } from "react";
import { useId } from "@fluentui/react-hooks";
import { LayerHost, ILayerProps } from "@fluentui/react/lib/Layer";
import { Customizer } from "@fluentui/react/lib/Utilities";
import { Panel } from "@fluentui/react/lib/Panel";
import { mergeStyles } from "@fluentui/react/lib/Styling";

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
  const layerHostId = useId("layerHost");
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
      <Customizer scopedSettings={scopedSettings}>
        {isPanelOpen && (
          <Panel
            isOpen={true}
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
        )}
      </Customizer>
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
