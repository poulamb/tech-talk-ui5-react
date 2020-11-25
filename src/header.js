import React from "react";
import "@ui5/webcomponents/dist/shellbar";
import "@ui5/webcomponents/dist/Avatar";
import "@ui5/webcomponents/dist/Input";

export default function Header() {
  return (
    <ui5-shellbar
      primary-title="Corporate Portal"
      secondary-title="secondary title"
      show-notifications
      notification-count="22"
    >
      <ui5-avatar
        slot="profile"
        image="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg.adapt.svg/1493030643828.svg"
      ></ui5-avatar>
      <img
        slot="logo"
        src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg.adapt.svg/1493030643828.svg"
        alt="PB"
      />
      <ui5-input slot="searchField placeholer="Enter service..."></ui5-input>
    </ui5-shellbar>
  );
}
