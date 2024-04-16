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
const GHUrl: React.FC<Params> = ({ link, text }: Params) => {
    link = link.startsWith("https://github.com")
        ? link
        : `https://github.com/${link}`;

    text = text === undefined || text === null || text === ""
        ? link
        : text;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="link">
            {text}
            <OpenNewTab
                style={{ paddingTop: "10", paddingLeft: "0.25%", width: "2%" }}
            />
        </a>
    );
};

export default GHUrl;
