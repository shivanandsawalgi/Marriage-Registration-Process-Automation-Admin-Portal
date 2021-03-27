import React, { Component } from 'react';
import './Certificate.css';
// import ReactToPrint from "react-to-print";
// import Maharashta from '../Images/Maharashta.jpg';
import Maharashta from './Maharashta.jpg'


class Certificate extends Component {
    constructor(props) {
        super()


    }

    componentDidMount = () => {
        console.log(this.props.dataForMarriageForm)
    }

    convertToMarathi = (EnglishAddharNumber) => {
        let marathiAddharNumber = [];

        EnglishAddharNumber.map(singleNumber => {
            if (singleNumber == 1) {
                marathiAddharNumber.push("१");
            }
            else if (singleNumber == 2) {
                marathiAddharNumber.push("२");

            }
            else if (singleNumber == 3) {
                marathiAddharNumber.push("३");

            }
            else if (singleNumber == 4) {
                marathiAddharNumber.push("४");

            }
            else if (singleNumber == 5) {
                marathiAddharNumber.push("५");

            }
            else if (singleNumber == 6) {
                marathiAddharNumber.push("६");

            }
            else if (singleNumber == 7) {
                marathiAddharNumber.push("७");

            }
            else if (singleNumber == 8) {
                marathiAddharNumber.push("८");

            }
            else if (singleNumber == 9) {
                marathiAddharNumber.push("९");

            }
            else if (singleNumber == 0) {
                marathiAddharNumber.push("०");

            }
        });
        return marathiAddharNumber;

    }

    showAddharNumber = (addharNumber, address, language) => {


        return (<div className="spanPhoto "><div>{language == "EN" ? "UID No. " : "आधार क्र. "}&nbsp;&nbsp; </div>
            <div className={"AdharDiv2 "}> <div className="AdharDiv alignCenterCSS"><b>{addharNumber[0]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[1]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[2]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[3]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[4]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[5]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[6]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[7]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[8]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[9]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[10]}</b></div>
                <div className="AdharDiv alignCenterCSS"><b>{addharNumber[11]}</b></div>
            </div>
            <div className={"AdharDiv3 "} ><div>&nbsp;&nbsp;राहणार</div>
                <div>&nbsp;&nbsp;{address}</div></div>

        </div>)




    }

    giveMarathiNumber = (gutNumber) => {

        if (gutNumber == 1) {
           return "१"
        }
        else if (gutNumber == 2) {
            return "२"

        }
        else if (gutNumber == 3) {
            return "३"

        }
        else if (gutNumber == 4) {
            return "४"

        }
        else if (gutNumber == 5) {
            return "५"

        }
        else if (gutNumber == 6) {
            return "६"

        }
        else if (gutNumber == 7) {
            return "७"

        }
        else if (gutNumber == 8) {
            return "८"

        }
        else if (gutNumber == 9) {
            return "९"

        }
        else if (gutNumber == 0) {
            return "०"

        }

    }



    returnGatNumber = (certificateNumber, language) => {
        let arrCertificate = certificateNumber.split("/");
        let vol = arrCertificate[2];
        let gutNumber = vol.split("-");
        if (language == "marathi") {
            let marathiGutNum =  this.giveMarathiNumber(gutNumber[1]);
            return marathiGutNum;

        }
        else {
            return gutNumber[1];
        }

    }

    getserialNmber=(certificateNumber,language)=>{

        let arrCertificate = certificateNumber.split("/");
        let serial = arrCertificate[3];
        
        if (language == "marathi") {
            let marathiSerialNumArr =  this.convertToMarathi(serial.split(""));
            let marathiSerialNum = '';
            marathiSerialNumArr.map(num=>{
                marathiSerialNum = marathiSerialNum.concat(num);

            })
            return marathiSerialNum;

        }
        else {
            return serial;
        }

    }

    render() {

        let husbandAddharNumber = this.props.dataForMarriageForm.uidOfHusband.split('');
        let wifeAddharNumber = this.props.dataForMarriageForm.uidOfWife.split('');
        let marathiHusbandAddharNumber = this.convertToMarathi(husbandAddharNumber);
        let marathiWifeAddharNumber = this.convertToMarathi(wifeAddharNumber);
        let certifiacteNumber = this.props.dataForMarriageForm.certificateNumber;
        // let gatNumberMarathi = this.returnGatNumber(this.props.dataForMarriageForm.certificateNumber, "marathi");
        // let gatNumberEnglish = this.returnGatNumber(this.props.dataForMarriageForm.certificateNumber, "EN");
        // let serialNumberMarathi = this.getserialNmber(this.props.dataForMarriageForm.certificateNumber,"marathi");
        // let serialNumberEnglish = this.getserialNmber(this.props.dataForMarriageForm.certificateNumber,"EN");

        return (
            <div className={"col-lg-12 col-md-12 col-sm-12 outerDiv lineSpaceCss paddingOuterDiv"}>
                <span className="spanPhoto"> <div className={" outerDiv photoBlock"}> photo</div>
                    <div className={"col-lg-8 col-md-8 col-sm-8  middleDiv"}>
                        {/* <div><image src="/src/Images/Maharashta.jpg" alt="hii"></image></div> */}
                        <img src={Maharashta} alt="logo"></img>
                        <div><b>महाराष्ट्र शासन</b></div>
                        <div>Government of Maharashtra</div>
                        <div>विवाह नोंदणी कार्यालय : - ग्रामीण रुग्णालय कागल</div>
                        <div>Marriage Registration Office :- Rural Hospital Kagal</div>
                        <div>तालुका - कागल , जिल्हा कोल्हापूर , राज्य महाराष्ट्र, भारत</div>
                        <div>Taluka -Kagal, Dist -Kolhapur, State -Maharashtra, India</div>
                    </div>
                    <div className={" outerDiv photoBlock"}>photo</div></span>

                <div className="outerDiv dataDiv">
                    <div className="middleDiv">
                        <div>नमुना 'ई' / Namuna 'E'</div>
                        <div>विवाह नोंदणीचे प्रमाणपत्र</div>
                        <div>Certificate of Registration of Marriage</div>
                        <div>(पहा कलम ६ (१) आणि नियम ५ / See Section 6(1) and Rule 5 )</div>

                    </div><br></br>
                    {/* <br></br> */}

                    <div className="nameDiv">

                        <div>प्रमाणित करण्यात येते कि, पतीचे नाव <b>{" " + this.props.dataForMarriageForm.marathiHusbandFirstName + " " + this.props.dataForMarriageForm.marathiHusbandMiddleName + " " + this.props.dataForMarriageForm.marathiHusbandLastName} </b>  </div>
                        <br></br>

                        {
                            this.showAddharNumber(marathiHusbandAddharNumber, this.props.dataForMarriageForm.marathiAddressOfHusband, "marathi")
                        }

                        <br></br>
                        <div>आणि पत्नीचे नाव <b>{" " + this.props.dataForMarriageForm.marathiWifeFirstName + " " + this.props.dataForMarriageForm.marathiWifeMiddleName + " " + this.props.dataForMarriageForm.marathiWifeLastName} </b>    </div>
                        <br></br>

                        {
                            this.showAddharNumber(marathiWifeAddharNumber, this.props.dataForMarriageForm.marathiAddressOfWifeBeforeMarriage, "marathi")
                        }
                        <br></br>

                        <div>यांचा विवाह दिनांक <b>{this.props.dataForMarriageForm.marriageDate}</b> रोजी {this.props.dataForMarriageForm.marathiMarriagePlace}(ठिकाणी) येथे विधी संपन्न झाला. </div>
                        {/* <br></br> */}
                        <div>त्याची महाराष्ट्र विवाह मंडळाचे विनिमय आणि विवाह नोंदणी अधिनियम, १९९८ अन्वये ठेवण्यात आलेल्या नोंद वहीचा खंड क्रमांक
                        { " "+this.props.dataForMarriageForm.certificateNumber+" "} वर दिनांक  १० डिसेंबर २०२० रोजी माझ्याकडून नोंदणी करण्यात आली आहे</div>

                    </div>



                    <div className="nameDiv">

                        <div>Certificate that Marriage between, Husband Name  <b>{" " + this.props.dataForMarriageForm.husbandFirstName + " " + this.props.dataForMarriageForm.husbandMiddleName + " " + this.props.dataForMarriageForm.husbandLastName} </b>  </div>
                        <br></br>

                        {
                            this.showAddharNumber(husbandAddharNumber, this.props.dataForMarriageForm.addressOfHusband, "EN")
                        }
                        <br></br>
                        <div>And Wife Name   <b>{" " + this.props.dataForMarriageForm.wifeFirstName + " " + this.props.dataForMarriageForm.wifeMiddleName + " " + this.props.dataForMarriageForm.wifeLastName} </b>  </div>
                        <br></br>

                        {
                            this.showAddharNumber(wifeAddharNumber, this.props.dataForMarriageForm.addressOfWifeBeforeMarriage, "EN")
                        }
                        {/* <br></br> */}

                        <div>Solemnized on <b>{this.props.dataForMarriageForm.marriageDate}</b> at {this.props.dataForMarriageForm.marriagePlace}(place) is Registered by me on 10 December 2020
                         at Serial No.{ this.props.dataForMarriageForm.certificateNumber} of register of Marriages maintained under the  Maharashtra Regulation
        of Marriage Bureaus and Registration of Marriages Act, 1998. </div>
                        <br></br>
                        <div><b>Certificate No.{this.props.dataForMarriageForm.certificateNumber}</b></div>

                    </div>

                    <div className="spanPhoto">
                        <div className={"endBlock1"}><div className="alignLeftCSS">place : Kagal</div>
                            <div className="alignLeftCSS">Date : {"20 February 2020"}</div>
                        </div>
                        <div className="endBlock2 spanPhoto">
                            <div className="midBlock1"></div>
                            <div className="midBlock2 sealBlockCss"> Seal</div>
                            <div className="midBlock1"></div>


                        </div>
                        <div className={"endBlock1"}><div >Signature</div>
                            <div >Registrar of Marriages</div>
                            <div >Marriage Office</div>
                        </div>

                    </div>
                </div>

                {/* <div><img src="/Maharashta.jpg"    alt=""  /></div> */}
            </div>
        )
    }
}

export default Certificate;