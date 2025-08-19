import type { ReactElement } from "react";

interface propsInterface {
    title: string | ReactElement;
    size: 'lg' | 'md' | 'sm';
    starticon?: ReactElement;
    endIcon?: ReactElement
    variant:"primary"|"secondary"
}

const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm"
};

const variantStyle = {
  "primary": "bg-purple-600 text-white",     // Primary style = purple background + white text
  "secondary": "bg-purple-200 text-purple-600" // Secondary style = light purple background + dark purple text
};


export function Button(props: propsInterface) {
    return <button className={sizeStyles[props.size] + " "+ variantStyle[props.variant]} >
        <div className="flex item-center" >

            {props.starticon}
            <div className="pl-2 pr-2">
            {props.title}</div>
            {props.endIcon}

        </div>
    </button>


}