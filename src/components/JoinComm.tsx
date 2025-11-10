import React from "react";
import JoinCommunity from "../join-comm.mdx";

/**
 * Creates a link with an open new tab icon.
 * @param params The parameters for the component.
 * @returns The component.
 */
const MarkdownComp: React.FC = () => {
    return (
        <>
            <h2 className="color-section">Join Our Community</h2>
            <JoinCommunity />
        </>
    );
}

export default MarkdownComp;
