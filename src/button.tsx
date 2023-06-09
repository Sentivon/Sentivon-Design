import React  from "react";

interface ButtonProps {
    children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
    return(
        <button className="bg-red-700">
            {props.children}
        </button>
    )
}