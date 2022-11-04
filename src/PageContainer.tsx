import React, { ReactElement } from "react";
import { LayerHost, ILayerProps } from "@fluentui/react/lib/Layer";
import { mergeStyles } from "@fluentui/react/lib/Styling";
import { PANEL_CONTAINER_ID } from "./panelUtils";

interface IPageContainerProps {
  children: any;
}

export default function PageContainer({
  children,
  ...props
}: IPageContainerProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      {...props}
    >
      <LayerHost
        id={PANEL_CONTAINER_ID}
        className={mergeStyles({
          position: "relative",
          height: "100%",
        })}
      >
        {children}
      </LayerHost>
    </div>
  );
}
