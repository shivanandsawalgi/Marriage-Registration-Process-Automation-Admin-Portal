import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import Certificate from './Certificate';

class DownloadCertificate extends Component {
    constructor(props) {
        super()
    }

    closeCertificate=()=>{
        this.props.closeCertificate();
    }
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => {
                        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                        // to the root node of the returned component as it will be overwritten.
                        return <a href="#">Print this Certificate!</a>;
                    }}
                    
                    content={() => this.componentRef} documentTitle={"Marriage_Cetificate"}
                />
                <div><button className="btn btn-link" onClick={this.closeCertificate}>close Certificate</button></div>
                <Certificate ref={el => (this.componentRef = el)} dataForMarriageForm={this.props.dataForMarriageForm}></Certificate> 
            </div>
        )
    }
}

export default DownloadCertificate;