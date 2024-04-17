import React from "react";

/**
 * The parameter object used for this component.
 */
interface Params {
    url: string;
    isCentered?: string;
}

const GIF: React.FC<Params> = ({ url, isCentered }: Params) => {
    const classValue = isCentered === undefined || isCentered === "true"
        ? "center-horiz"
        : "";

    return (
        <div className={classValue}>
            {
                <img src={url} width="80%"></img>
            }
        </div>
    );
};

export default GIF;