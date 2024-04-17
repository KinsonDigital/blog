import React from "react";
import OpenNewTab from "@site/static/img/new-tab.svg";

/**
 * The parameter object used for this component.
 */
interface Params {
    owner: string;
    projName: string;
}

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
const GHProj: React.FC<Params> = ({ owner, projName }: Params) => {
    const forgotOwnerAttr = owner === undefined || owner === "";
    const forgotProjNameAttr = projName === undefined || projName === "";

    const url = `https://github.com/${owner}/${projName}`;

    if (forgotOwnerAttr) {
        return (
            <span style={{color: 'red'}}>'missing-owner-attribute'</span>
        );
    } else if (forgotProjNameAttr) {
        return (
            <span style={{color: 'red'}}>'missing-projName-attribute'</span>
        );
    } else {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="link">
            {projName}
            <OpenNewTab
                style={{ paddingTop: "10", paddingLeft: "0.25%", width: "2%" }}
                />
            </a>
        );
    }
};

export default GHProj;
