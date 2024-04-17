import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The parameter object used for this component.
 */
interface Params {
    projName: string;
    version: string;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
const ReleaseNotes: React.FC<Params> = ({ projName, version }: Params) => {
    //github.com/KinsonDigital/CASL/releases/tag/v1.0.0-preview.18
    const url = `https://github.com/KinsonDigital/${projName}/releases/tag/${version}`;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="link">
            {projName} Release Notes
            <OpenNewTab
                style={{ paddingTop: "10", paddingLeft: "0.25%", width: "2%" }}
            />
        </a>
    );
};

export default ReleaseNotes;
