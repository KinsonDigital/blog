import React from "react";

interface Props {
    summary: string;
    open?: string;
    children: React.ReactNode;
}

const Details: React.FC<Props> = ({ summary, open = "false", children }) => {
    const isOpened = open === "true";

    return (
        <>
            <div>
                {
                    isOpened
                    ?
                        <details open>
                            <summary>{summary}</summary>

                            {children}
                        </details>
                    :
                        <details>
                            <summary>{summary}</summary>

                            {children}
                        </details>
                }
            </div>
        </>
    );
};

export default Details;
