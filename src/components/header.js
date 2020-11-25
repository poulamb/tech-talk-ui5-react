import React from "react";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents/dist/Avatar";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Icon";

export default function Header() {
  return (
    <div>
      <ui5-shellbar
        primary-title="Demo Portal"
        secondary-title="Tech Open Mic"
        show-notifications
        notification-count="22"
      >
        <ui5-avatar
          slot="profile"
          image="https://media-exp1.licdn.com/dms/image/C4E03AQGA0iuYuIBkeA/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=0m-hiY7kW_P_Xppyd9JS34SNqiHj7haaxsGtgYMpoM0"
        ></ui5-avatar>
        <img
          slot="logo"
          src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg.adapt.svg/1493030643828.svg"
          alt="PB"
        />
        <ui5-input slot="searchField" placeholer="Enter service..."></ui5-input>
      </ui5-shellbar>
    </div>
  );
}
