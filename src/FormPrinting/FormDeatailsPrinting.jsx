import React from 'react';
import { Component } from 'react';
import './FormDeatailsPrinting.css';

class FormDeatailsPrinting extends Component {
    constructor(props) {
        super(props);
    }


    showAddharNumber = (addharNumber, address, language) => {


        return (<div className="spanPhoto ">
            {/* <div>{language == "EN" ? "UID No. " : "आधार क्र. "}&nbsp;&nbsp; </div> */}
            <div className={"AdharDiv2 "}> <div className="AdharDiv alignCenterCSS" style={{ marginLeft: "30px" }}><b>{addharNumber[0]}</b></div>
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


        </div>)

    }


    render() {
        return (
            <div className="lineSpacecss">
                <div>
                    <div className="formTextCenter"> <b>FORM 'D' / नमुना-ड</b></div>
                    <div className="formTextCenter"> <b> MEMORANDUM OF MARRIAGE</b> </div>
                    <div className="formTextCenter"><b>विवाहाचे  ज्ञापन</b></div>
                    <div className="formTextCenter">[See Section 6 and rule 5]</div>
                </div>
                <hr></hr>

                <div id="basicDetsils1" className={" formMarginCss formTextLeft"}>
                    <div className="formInlineCss">
                        <div className="formTextLeft formWidth50css">1. Date Of Marriage :</div>
                        <div className={"formWidth50css"}>23-12-2002</div>
                    </div>

                    <div className="formInlineCss">
                        <div className="formTextLeft formWidth50css">2. Place of Marriage(With Perticulers) विवाहाचे ठिकाण ( संपूर्ण तपशिलासह ) :</div>
                        <div className={"formWidth50css"}>Kolhapur</div>
                    </div>

                    <div className="formInlineCss">
                        <div className="formTextLeft formWidth50css">3. Personal law According to Which the Marriage between two Parties
                    was Solemenized (पक्षकारांमधी विवाह ज्या व्यक्तिगत कायद्यान्वये संपन्न झाला तो कायदा ) :</div>
                        <div className={"formWidth50css"}>2002</div>
                    </div>

                </div>
                {/* <hr></hr> */}

                <div className="formTextLeft formClearBothcss">
                    4. Details Of Husband/वराची संपूर्ण माहिती
                </div>

                <div className={"formInlineCss formMarginCss"}>

                    <div id="hasbandNameInfo" className="formWidth70css  formMarginCss">
                        <div className="formTextLeft">
                            a) Full Name Of Husband :
                        </div>

                        <div className="formInlineCss">
                            <div className="formWidth30css">surname</div>
                            <div className="formWidth30css">name</div>
                            <div className="formWidth30css">middlename</div>

                        </div>

                        {/* <br></br> */}
                        <div className="formTextLeft">&nbsp;&nbsp;&nbsp;&nbsp;
                        पतीचे संपूर्ण नाव :
                        </div>
                        <div className="formInlineCss">
                            <div className="formWidth30css">marathi surname</div>
                            <div className="formWidth30css">marathi name</div>
                            <div className="formWidth30css">marathi middlename</div>
                        </div>
                        {/* <br></br> */}

                        <div className="formTextLeft">&nbsp;&nbsp;&nbsp;&nbsp;
                        UID Number :
                        </div>
                        <div className="formInlineCss">
                            {
                                this.showAddharNumber([1, 2, 3, 4, 5, 6, 9, 7, 9, 0])
                            }
                        </div>

                    </div>

                    <div id="photoBlock1" className="formWidth30css formBorderCss formMarginCss formHeight250px">
                        <div className=" formBorderCss  formHeight200px"> Photo </div>Thumb

                    </div>

                </div>


                <div className="formMarginCss formTextLeft">
                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>b) Other name/s (if any) which the husband is known :</div>
                        <div className={" formWidth60css "}>otherName English</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>पतीला दुसऱ्या नावाने ओळखत असल्यास ते नाव नाव /ती नावे :</div>
                        <div className={" formWidth60css "}>otherName marathi</div>

                    </div>
                    <div className="formMarginCss">
                        c) Religion
                </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>(i)By Birth :</div>
                        <div className={" formWidth60css "}>Religion by birth</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>(ii)By Adoption (If Any) :</div>
                        <div className={" formWidth60css "}>Religion by Adoption</div>

                    </div>

                    <div className="formMarginCss">
                        धर्म
                </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>(i)जन्माने :</div>
                        <div className={" formWidth60css "}>Religion by birth</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>(ii)दुसरा धर्म स्वीकारला असल्यास(कोणताही असल्यास) :</div>
                        <div className={" formWidth60css "}>Religion by Adoption</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>d) Age as on the date of Solemenization of marrige :</div>
                        <div className={" formWidth60css "}>Age at marriage</div>

                    </div>

                    {/* <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> विवाह विधी ज्या तारखेस संप्पन झाला असेल त्या तारखेस असलेले वय :</div>
                        <div className={" formWidth40css "}>Age at marriage</div>

                    </div> */}

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> e) Occupation along with address :</div>
                        <div className={" formWidth60css "}>Address</div>

                    </div>
                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> व्यवसाय कार्यालयाचा पत्यासह :</div>
                        <div className={" formWidth60css "}>Marathi business address</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> f) Status at the time of Marriage (विवाहाचा वेळची स्थिती) :</div>
                        <div className={" formWidth60css "}>Unmarried/divorced</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> g) Full Address of Husband :</div>
                        <div className={" formWidth60css "}>Full address</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> पतीचा संपूर्ण पत्ता :</div>
                        <div className={" formWidth60css "}> Marathi Full address</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> Signature of Husband with date (पतीची तारखेसह स्वाक्षरी) :</div>
                        <div className={" formWidth60css formHeight70px formBorderCss"}> </div>
                    </div>
                    <br></br>
                </div>


                <hr></hr>
                <div className="formTextLeft formClearBothcss">
                    5. Details Of Wife/वधूची संपूर्ण माहिती
                </div>

                <div className={"formInlineCss formMarginCss"}>

                    <div id="hasbandNameInfo" className="formWidth70css  formMarginCss">
                        <div className="formTextLeft">
                            a) Full Name of Wife :
                        </div>

                        <div className="formInlineCss">
                            <div className="formWidth30css">surname</div>
                            <div className="formWidth30css">name</div>
                            <div className="formWidth30css">middlename</div>

                        </div>

                        <br></br>
                        <div className="formTextLeft">&nbsp;&nbsp;&nbsp;&nbsp;
                        पत्नीचे संपूर्ण नाव :
                        </div>
                        <div className="formInlineCss">
                            <div className="formWidth30css">marathi surname</div>
                            <div className="formWidth30css">marathi name</div>
                            <div className="formWidth30css">marathi middlename</div>
                        </div>
                        <br></br>

                        <div className="formTextLeft">&nbsp;&nbsp;&nbsp;&nbsp;
                        UID (ADHAR NUMBER) :
                        </div>
                        <div className="formInlineCss">
                            {
                                this.showAddharNumber([1, 2, 3, 4, 5, 6, 9, 7, 9, 0])
                            }
                        </div>

                    </div>

                    <div id="photoBlock1" className="formWidth30css formBorderCss formMarginCss formHeight250px">
                        <div className=" formBorderCss  formHeight200px"> Photo </div>Thumb

                    </div>

                </div>


                <div className="formMarginCss formTextLeft">
                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>b) Other name/s (if any) which the wife known :</div>
                        <div className={" formWidth60css "}>otherName English</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>पत्नीला दुसऱ्या नावाने ओळखत असल्यास ते नाव नाव /ती नावे :</div>
                        <div className={" formWidth60css "}>otherName marathi</div>

                    </div>
                    <div className="formMarginCss">
                        c) Religion
                </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>(i)By Birth :</div>
                        <div className={" formWidth60css "}>Religion by birth</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>(ii)By Adoption (If Any) :</div>
                        <div className={" formWidth60css "}>Religion by Adoption</div>

                    </div>

                    <div className="formMarginCss">
                        धर्म
                </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>(i)जन्माने :</div>
                        <div className={" formWidth60css "}>Religion by birth</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>(ii)दुसरा धर्म स्वीकारला असल्यास(कोणताही असल्यास) :</div>
                        <div className={" formWidth60css "}>Religion by Adoption</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>d) Age as on the date of Solemenization of marrige :</div>
                        <div className={" formWidth60css "}>Age at marriage</div>

                    </div>

                   

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> e) Status at the time of Marriage (विवाहाचा वेळची स्थिती) :</div>
                        <div className={" formWidth60css "}>Unmarried/divorced</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> f) Full Address of Wife Before Or at the time of Marriage :</div>
                        <div className={" formWidth60css "}>Full address</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> विवाहाचा पूर्वीचा अथवा वेळचा पत्नीचा पूर्ण पत्ता :</div>
                        <div className={" formWidth60css "}> Marathi Full address</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> Signature of wife with date (पत्नीची तारखेसह स्वाक्षरी) :</div>
                        <div className={" formWidth60css formHeight70px formBorderCss"}> </div>
                    </div>
                    <br></br>
                </div>
                <hr></hr>
                <div className={"formHeight250px"}></div>

                <div className="formTextLeft formClearBothcss">
                    6. Witness/साक्षीदार
                </div>
                {/* <div className="formTextLeft">1 )</div> */}

                <div className={"formInlineCss formMarginCss"}>

                    <div id="hasbandNameInfo" className="formWidth70css  formMarginCss">
                        <div className="formTextLeft">
                        <b>1 )</b>&nbsp;&nbsp;&nbsp;  a) Full Name of Witness  :
                        </div>

                        <div className="formInlineCss">
                            <div className="formWidth30css">surname</div>
                            <div className="formWidth30css">name</div>
                            <div className="formWidth30css">middlename</div>

                        </div>

                        {/* <br></br> */}
                        <div className="formTextLeft">&nbsp;&nbsp;&nbsp;&nbsp;
                        i) साक्षीदारचे संपूर्ण नाव :
                        </div>
                        <div className="formInlineCss">
                            <div className="formWidth30css">marathi surname</div>
                            <div className="formWidth30css">marathi name</div>
                            <div className="formWidth30css">marathi middlename</div>
                        </div>
                        {/* <br></br> */}

                        <div className="formTextLeft">&nbsp;&nbsp;&nbsp;&nbsp;
                        UID (ADHAR NUMBER) :
                        </div>
                        <div className="formInlineCss">
                            {
                                this.showAddharNumber([1, 2, 3, 4, 5, 6, 9, 7, 9, 0])
                            }
                        </div>

                    </div>

                    <div id="photoBlock1" className="formWidth30css formBorderCss formMarginCss formHeight250px">
                        <div className=" formBorderCss  formHeight200px"> Photo </div>Thumb

                    </div>

                </div>


                <div className="formMarginCss formTextLeft">
                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>ii) ii) Address of Witness :</div>
                        <div className={" formWidth60css "}>withness 1 address withness 1 address withness 1 address withness 1 address withness 1 address withness 1 address</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>साक्षीदारचा संपूर्ण पत्ता :</div>
                        <div className={" formWidth60css "}> marathi address of withess 1</div>

                    </div>



                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>iii) Occupation and Office Address of Witness :</div>
                        <div className={" formWidth60css "}>Occupation addres witness 1</div>

                    </div>



                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> साक्षीदारचा व्यवसाय आणि कार्यालयाचा पत्ता :</div>
                        <div className={" formWidth60css "}>marathi Occupation addres witness 1</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>iv) Relation of Witness (if any) :</div>
                        <div className={" formWidth60css "}>Relation</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> विवाहित जोडप्याशी असलेले नाते (कोणतेही असल्यास) :</div>
                        <div className={" formWidth60css "}> marathi Relation</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> Signature of withness with date (साक्षीदारची तारखेसह स्वाक्षरी) :</div>
                        <div className={" formWidth60css formHeight70px formBorderCss"}> </div>
                    </div>
                    {/* <br></br> */}
                </div>


                {/* <div className="formTextLeft">2 )</div> */}

                <div className={"formInlineCss formMarginCss"}>

                    <div id="hasbandNameInfo" className="formWidth70css  formMarginCss">
                        <div className="formTextLeft">
                        <b>2 )</b>&nbsp;&nbsp;&nbsp;   a) Full Name of Witness  :
                        </div>

                        <div className="formInlineCss">
                            <div className="formWidth30css">surname</div>
                            <div className="formWidth30css">name</div>
                            <div className="formWidth30css">middlename</div>

                        </div>

                        {/* <br></br> */}
                        <div className="formTextLeft">&nbsp;&nbsp;&nbsp;&nbsp;
                        i) साक्षीदारचे संपूर्ण नाव :
                        </div>
                        <div className="formInlineCss">
                            <div className="formWidth30css">marathi surname</div>
                            <div className="formWidth30css">marathi name</div>
                            <div className="formWidth30css">marathi middlename</div>
                        </div>
                        {/* <br></br> */}

                        <div className="formTextLeft">&nbsp;&nbsp;&nbsp;&nbsp;
                        UID (ADHAR NUMBER) :
                        </div>
                        <div className="formInlineCss">
                            {
                                this.showAddharNumber([1, 2, 3, 4, 5, 6, 9, 7, 9, 0])
                            }
                        </div>

                    </div>

                    <div id="photoBlock1" className="formWidth30css formBorderCss formMarginCss formHeight250px">
                        <div className=" formBorderCss  formHeight200px"> Photo </div>Thumb

                    </div>

                </div>


                <div className="formMarginCss formTextLeft">
                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>ii) ii) Address of Witness :</div>
                        <div className={" formWidth60css "}>withness 2 address</div>

                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>साक्षीदारचा संपूर्ण पत्ता :</div>
                        <div className={" formWidth60css "}> marathi address of withess 2</div>

                    </div>



                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>iii) Occupation and Office Address of Witness :</div>
                        <div className={" formWidth60css "}>Occupation addres witness 1</div>

                    </div>



                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> साक्षीदारचा व्यवसाय आणि कार्यालयाचा पत्ता :</div>
                        <div className={" formWidth60css "}>marathi Occupation addres witness 2</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>iv) Relation of Witness (if any) :</div>
                        <div className={" formWidth60css "}>Relation</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> विवाहित जोडप्याशी असलेले नाते (कोणतेही असल्यास) :</div>
                        <div className={" formWidth60css "}> marathi Relation</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> Signature of withness with date (साक्षीदारची तारखेसह स्वाक्षरी) :</div>
                        <div className={" formWidth60css formHeight70px formBorderCss"}> </div>
                    </div>
                    <br></br>
                </div>
                <hr></hr>

                <span className="formTextLeft">
                    <div>7. Priest/पुरोहित</div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> a) Name (पुरोहिताचे नाव) :</div>
                        <div className={" formWidth60css "}> Priest name</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> b) Address of Priest (पुरोहिताचा संपूर्ण पत्ता) :</div>
                        <div className={" formWidth60css "}> Address of Priest</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> c) Religion (धर्म) :</div>
                        <div className={" formWidth60css "}> Religion</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}> d) Age (वय) :</div>
                        <div className={" formWidth60css "}> Age</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>8. Documents Presented Along with this memorandum(eg : AAdhar CArd, PAN card) :</div>
                        <div className={" formWidth60css "}> Document List</div>
                    </div>

                    <div className=" formMarginCss formInlineCss ">
                        <div className={" formWidth40css "}>9. Date of Submission of Register (निर्बंधकाकडे सादर केल्याचा दिनांक) :</div>
                        <div className={" formWidth60css "}> Date</div>
                    </div>

                </span>









            </div>
        )
    }
}

export default FormDeatailsPrinting;