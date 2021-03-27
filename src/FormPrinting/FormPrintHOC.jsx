import React from 'react';
import { Component } from "react";
import ReactToPrint from "react-to-print";
import FormDeatailsPrinting from './FormDeatailsPrinting';
import Priest from './Priest';

class FormPrintHOC extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <ReactToPrint
                    trigger={() => {
                        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                        // to the root node of the returned component as it will be overwritten.
                        return <a href="#">Print this Form!</a>;
                    }}
                    
                    content={() => this.componentRef} documentTitle={"Marriage_Form"}
                />

                <FormDeatailsPrinting ref={el => (this.componentRef = el) } ></FormDeatailsPrinting>

                

                

                

        </div>)
    }

}

export default FormPrintHOC;