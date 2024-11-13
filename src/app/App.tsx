import React from "react";
import Input from "../Input/Input";

export default function App() {
    console.log('ren');
    
    return(
        <div>
            <div>
            <h1>Hello UI</h1>
        <Input 
        
        value='asdasd'
        label="asdasd"
        name="asfasf"
       
        />
        <Input
        label="asdasd"
        name="asfasf"
        
        />
        <Input 
        
        value='error'
        label="asdasd"
        name="asfasf"
       
        error='Помой жопу'
        />
        <Input 
        
        value='asdasd'
        label="asdasd"
        name="asfasf"
       
        />
            </div>
        </div>
    )
}
