interface ButtonProps{
    variant :"primary"| "secondary";
    size:"sm" | "md" | "lg";
    text :string;
    stratIcon? : any;
    endIcon?:any;
    onClick :()=>void

}

export const Button = (props : ButtonProps )=>{
    return <Button></Button>
}

<Button variant="primary" size="md" onClick={()=>{}} text="asasass" />