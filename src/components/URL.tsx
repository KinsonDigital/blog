import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The parameter object used for this component.
 */
interface Params {
  link: string;
  text?: string;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
export function URL(param: Params) {
  const link = param.link.startsWith("https://")
    ? param.link
    : `https://${param.link}`;

  const text =
    param.text === undefined || param.text === null || param.text === ""
      ? link
      : param.text;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="link">
      {text}
      <OpenNewTab
        style={{ paddingTop: "10", paddingLeft: "0.25%", width: "2%" }}
      />
    </a>
  );
}
