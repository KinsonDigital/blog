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
const URL: React.FC<Params> = ({ link, text }: Params) => {
    link = link.startsWith("https://")
        ? link
        : `https://${link}`;

    text = text === undefined || text === null || text === ""
        ? link
        : text;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="link">
            {text}
            <OpenNewTab
                style={{
                    display: "inline-block",
                    marginBottom: "4px",
                    verticalAlign: "middle",
                    paddingLeft: "0.25%",
                    width: "2%"
                }}
            />
        </a>
    );
}

export default URL;
