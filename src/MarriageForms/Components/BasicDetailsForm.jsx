import React, { Component } from 'react';
import genericAjax from '../../Common/AjaxFunctions/GenericAjax';
import './BasicDetailsForm.css';
import axios from 'axios';
import Transliterate from '../../googleTranslateTest/Transliterate';
import Select from 'react-select'


const STATEOPTION = [
    { value: 'Maharashtra', label: 'Maharashtra' },


];

const DISTRICTOPTIONS = [
    { value: 'Amravati', label: 'Amravati' },
    { value: 'Aurangabad', label: 'Aurangabad' },
    { value: 'Kokan', label: 'Kokan' },
    { value: 'Nagpur', label: 'Nagpur' },
    { value: 'Nashik', label: 'Nashik' },
    { value: 'Pune', label: 'Pune' },

];

const APPLICATIONDIVISION = [
    { value: 'Pune', label: 'Pune' },
    { value: 'Kolhapur', label: 'Kolhapur' },
    { value: 'Solapur', label: 'Solapur' },
    { value: 'Satara', label: 'Satara' },
    { value: 'Sangali', label: 'Samngali' },

];

const HOSPITAL = [
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Karanataka', label: 'Karanataka' },

];

const DataSource = [
    { town: 'Kurundwad', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' },
    { town: 'Gadhinglaj', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' },
    { town: 'Ichalkaranji', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' },
    { town: 'Jaysingpur', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' },
    { town: 'Kagal', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' },
    { town: 'Murgud', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' },
    { town: 'Vadgaon', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' },
    { town: 'Panhala', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' },
    { town: 'Malkapur', district: 'Kolhapur', division: 'Pune', state: 'Maharashtra' }
];


class BasicDatailsForm extends Component {

    constructor() {
        super();

        this.state = {
            stateNames: [],
            divisionNames: [],
            districtNames: [],
            townNames: [],
            form: {
                "applicantState": "Maharashtra",

                "applicantDivision": "Pune",

                "hospital": "Rural Hospital Panhala",

                "applicantTaluka": "Panhala",

                "applicationId": "",

                "applicantDistrict": "",

                "applicantTaluka": "",

                "marriageDate": "",

                "marriagePlace": "",

                "lawOfMarriage": "",

                "marathiMarriagePlace": "",

                "marathiLawOfMarriage": "",

                "submissionDate": "",

                "documentsPresented": "",

                "isMarriageRegisteredAlready": false,

                "husbandFirstName": "",

                "husbandMiddleName": "",

                "husbandLastName": "",

                "marathiHusbandFirstName": "",

                "marathiHusbandMiddleName": "",

                "marathiHusbandLastName": "",

                "uidOfHusband": "",

                "otherNameOfHusband": "",
                "marathiOtherNameOfHusband": "",

                "religionByBirthOfHusband": "",

                "marathiReligionByBirthOfHusband": "",

                "ageOfHusband": {
                    "years": "",
                    "months": ""

                },

                "religionByAdoptionOfHusband": "",

                "marathiReligionByAdoptionOfHusband": "",

                "statusOfHusbandAtMarriage": "",

                "addressOfHusband": "",
                "marathiAddressOfHusband": "",

                "occupationOfHusbandWithAddress": "",
                "marathiOccupationOfHusbandWithAddress": "",

                "wifeFirstName": "",

                "wifeMiddleName": "",

                "wifeLastName": "",

                "marathiWifeFirstName": "",

                "marathiWifeMiddleName": "",

                "marathiWifeLastName": "",

                "uidOfWife": "",

                "otherNameOfWife": "",
                "marathiOtherNameOfWife": "",

                "religionByBirthOfWife": "",

                "religionByAdoptionOfWife": "",

                "marathiReligionByBirthOfWife": "",

                "marathiReligionByAdoptionOfWife": "",

                "ageOfWife": {
                    "years": "",
                    "months": ""

                },

                "statusOfWifeAtMarriage": "",

                "addressOfWifeBeforeMarriage": "",
                "marathiAddressOfWifeBeforeMarriage": "",

                "nameofWitness1": "",

                "uidOfWitness1": "",

                "addressOfWitness1": "",

                "relationWithCoupleOfWitness1": "",

                "occupationOfWitness1WithAddress": "",

                "marathiNameofWitness1": "",

                "marathiAddressOfWitness1": "",

                "marathiRelationWithCoupleOfWitness1": "",

                "marathiOccupationOfWitness1WithAddress": "",

                "nameofWitness2": "",

                "uidOfWitness2": "",

                "addressOfWitness2": "",

                "relationWithCoupleOfWitness2": "",

                "occupationOfWitness2WithAddress": "",

                "marathiNameofWitness2": "",

                "marathiAddressOfWitness2": "",

                "marathiRelationWithCoupleOfWitness2": "",

                "marathiOccupationOfWitness2WithAddress": "",

                "nameOfWitness3": "",

                "uidOfWitness3": "",

                "addressOfWitness3": "",

                "relationWithCoupleOfWitness3": "",

                "occupationOfWitness3WithAddress": "",

                "marathiNameOfWitness3": "",

                "marathiAddressOfWitness3": "",

                "marathiRelationWithCoupleOfWitness3": "",

                "marathiOccupationOfWitness3WithAddress": "",

                "priestName": "",

                "priestAddress": "",

                "priestReligion": "",

                "priestAge": "",

                "marathiPriestName": "",

                "marathiPriestAddress": "",

                "marathiPriestReligion": "",

                "documentStatus": ""
            }
        }

    }

    componentDidMount = () => {
        if (this.props.dataForMarriageForm) {
            let pageFormData = { ...this.state.form };

            let dataTobind = Object.assign({}, pageFormData, this.props.dataForMarriageForm);

            let me = this;
            me.setState({
                form: dataTobind
            }, () => {
                console.log(this.state.form)
            })

        }
    }





    onchangeFields = (key, event, f, h) => {
        let formData = { ...this.state.form }

        if (event.target.name == "ageOfHusbandYears") {
            formData.ageOfHusband.years = event.target.value;
        }
        else if (event.target.name == "ageOfHusbandMonths") {
            formData.ageOfHusband.months = event.target.value;
        }
        else if (event.target.name == "ageOfWifeYears") {
            formData.ageOfWife.years = event.target.value;
        }
        else if (event.target.name == "ageOfWifeMonths") {
            formData.ageOfWife.months = event.target.value;
        }
        else {
            formData[key] = event.target.value

        }


        this.setState({
            form: formData
        })

    }

    onchangeFieldsSelect = (key, object, f, h) => {
        let formData = { ...this.state.form }

        formData[key] = object

        this.setState({
            form: formData
        })

    }
    closeDetailsPage = () => {

        this.props.decideToShowDetails(false);
    }

    onSubmit = () => {
        let urlForGettingList = "https://dpfl604t9k.execute-api.ap-south-1.amazonaws.com/Prod/api/users";
        let formDataData = this.state.form
        axios.post(urlForGettingList, formDataData)
            .then(responce => {
                alert("Marriage details are  Submitted Successfully");
                this.closeDetailsPage();

                console.log(responce.data);

            });
    }

    onClickApproveBtn = () => {

        let customUrl = "https://dpfl604t9k.execute-api.ap-south-1.amazonaws.com/Prod/api/admin/approve/" + this.state.form.applicationId;

        axios.post(customUrl)
            .then(responce => {
                alert("Marriage details are Approved Successfully");
                this.closeDetailsPage();

                console.log(responce.data);

            });

    }

    onClickRejectBtn = () => {

        let customUrl = "https://dpfl604t9k.execute-api.ap-south-1.amazonaws.com/Prod/api/admin/reject/" + this.state.form.applicationId;

        axios.delete(customUrl)
            .then(responce => {
                alert("Marriage details are Rejected Successfully");
                this.closeDetailsPage();

                console.log(responce.data);

            });

    }

    handleChangeSelect = (key, e) => {
        console.log("Fruit Selected!!");

        let formData = { ...this.state.form };

        formData[key] = e.target.value;
        this.setState({ form: formData });
    }

    filterOptions = (key) => {

        if (key == "applicantState") {
            let applicantState = [...this.state.stateNames];
            DataSource.map(singleObj => {

                if (applicantState.includes(singleObj.state) != true) {
                    applicantState.push(singleObj.state)
                }
            });

            let optionObjects = [];

            applicantState.map(singleData => {
                optionObjects.push({ "value": singleData, 'label': singleData })

            });
            return optionObjects;



        } else if (key == "applicantDivision") {
            let applicantDivision = [];
            DataSource.map(singleObj => {


            })

        } else if (key == "hospital") {
            let hospital = [];
            DataSource.map(singleObj => {

            })

        } else if (key == "applicantTaluka") {
            let applicantTaluka = [];
            DataSource.map(singleObj => {

            })

        }


    }

    createArrayObjectswithArray = (arrOptions) => {

        let optionObjects = [];

        arrOptions.map(singleData => {
            optionObjects.push({ "value": singleData, 'label': singleData })

        });
        return optionObjects;

    }



    renderForm = () => {

        let stateOptions = [];

        stateOptions = this.filterOptions("applicantState");




        return (
            <div className="container containerDivCss initialTextAlign">

                {/* {
                    <div className={"headerDiv"}><center>Welcome to the User Portal</center> </div>
                } */}


                {/* <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  headerMargingCss closebtncss"}><b><div><p>X</p></div> </b></div> */}

                {/* <div className="btn btn-link">Print this form</div> */}

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  col-xs-12 closebtncss"}>
                    <button className="btn btn-danger" onClick={this.closeDetailsPage}>close</button>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 centerAlignCss headerMargingCss"}>
                    <div> <b>FORM 'D' / नमुना-ड</b></div>
                    <div> <b> MEMORANDUM OF MARRIAGE</b> </div>
                    <div><b>विवाहाचे  ज्ञापन</b></div>

                </div>

               
                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12"}>1. Date Of Marriage (लग्नाची तारीख) </div>
                    <div className={"col-lg-4 col-md-5 col-sm-9 col-xs-12"}>
                        <input type="Date" name="marriageDate" value={this.state.form.marriageDate} onChange={this.onchangeFields.bind(this, "marriageDate")} className="fullWidthCss"></input>

                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12  col-xs-12"}>2. Place of Marriage(With Perticulers)
                    विवाहाचे ठिकाण ( संपूर्ण तपशिलासह ) </div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        {/* <input type="text" name="marriagePlace" value={this.state.form.marriagePlace} onChange={this.onchangeFields.bind(this,"")} className="fullWidthCss"></input> */}
                        <Transliterate type="text" name="marriagePlace" value={this.state.form.marriagePlace}
                            onChange={this.onchangeFields.bind(this, "marriagePlace")}
                            className="fullWidthCssMarathi"></Transliterate>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> 3. Personal law According to Which the Marriage between two Parties
                    was Solemenized (पक्षकारांमधी विवाह ज्या व्यक्तिगत कायद्यान्वये संपन्न झाला तो कायदा )</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <input type="text" name="lawOfMarriage" value={this.state.form.lawOfMarriage} onChange={this.onchangeFields.bind(this, "lawOfMarriage")} className="fullWidthCss"></input>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 smallFieldsBoxCss"}> 4. Details Of Husband/वराची संपूर्ण माहिती</div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> a) Full Name Of Husband</div>
                    <div className={" row col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            <input type="text" name="husbandLastName" value={this.state.form.husbandLastName} onChange={this.onchangeFields.bind(this, "husbandLastName")} className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Surname</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            <input type="text" name="husbandFirstName" value={this.state.form.husbandFirstName} onChange={this.onchangeFields.bind(this, "husbandFirstName")} className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Name</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            <input type="text" name="husbandMiddleName" value={this.state.form.husbandMiddleName} onChange={this.onchangeFields.bind(this, "husbandMiddleName")} className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Father Name</div>
                        </div>

                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 smallFieldsBoxCss"}>  पतीचे संपूर्ण नाव</div>
                    <div className={"row col-lg-12 col-md-12 col-sm-12 col-xs-12"}>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            {/* <input type="text" name="marathiHusbandLastName" value={this.state.form.marathiHusbandLastName} onChange={this.onchangeFields.bind(this,"")} className="fullWidthCss"></input> */}

                            <Transliterate type="text" name="marathiHusbandLastName" value={this.state.form.marathiHusbandLastName}
                                onChange={this.onchangeFields.bind(this, "marathiHusbandLastName")}
                                className="fullWidthCssMarathi"></Transliterate>
                            <div className={"centerAlignCss"}>आडनाव</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            {/* <input type="text" name="marathiHusbandFirstName" value={this.state.form.marathiHusbandFirstName} onChange={this.onchangeFields.bind(this,"")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiHusbandFirstName" value={this.state.form.marathiHusbandFirstName}
                                onChange={this.onchangeFields.bind(this, "marathiHusbandFirstName")}
                                className="fullWidthCssMarathi"></Transliterate>

                            <div className={"centerAlignCss"}>नाव</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            {/* <input type="text" name="marathiHusbandMiddleName" value={this.state.form.marathiHusbandMiddleName} onChange={this.onchangeFields.bind(this,"")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiHusbandMiddleName" value={this.state.form.marathiHusbandMiddleName}
                                onChange={this.onchangeFields.bind(this, "marathiHusbandMiddleName")}
                                className="fullWidthCssMarathi"></Transliterate>
                            <div className={"centerAlignCss"}>वडिलांचे नाव</div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>UID (ADHAR NUMBER) </div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <input type="text" name="uidOfHusband" value={this.state.form.uidOfHusband} onChange={this.onchangeFields.bind(this, "uidOfHusband")} className="fullWidthCss"></input>
                    </div>
                </div>

                <div className="row  otherNameBoxCss">
                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>b) Other name/s (if any) which the husband known </div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                            <input type="text" name="otherNameOfHusband" value={this.state.form.otherNameOfHusband} onChange={this.onchangeFields.bind(this, "otherNameOfHusband")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>पतीला दुसऱ्या नावाने ओळखत असल्यास ते नाव नाव /ती नावे</div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  "}>
                            <Transliterate type="text" name="marathiOtherNameOfHusband" value={this.state.form.marathiOtherNameOfHusband}
                                onChange={this.onchangeFields.bind(this, "marathiOtherNameOfHusband")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 smallFieldsBoxCss"}>c) Religion </div>

                <div className="row  otherNameBoxCss">
                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>(i)By Birth </div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                            <input type="text" name="religionByBirthOfHusband" value={this.state.form.religionByBirthOfHusband} onChange={this.onchangeFields.bind(this, "religionByBirthOfHusband")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>(ii)By Adoption (If Any)</div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  "}>
                            <input type="text" name="religionByAdoptionOfHusband" value={this.state.form.religionByAdoptionOfHusband} onChange={this.onchangeFields.bind(this, "religionByAdoptionOfHusband")} className="fullWidthCss"></input>

                        </div>
                    </div>
                </div>



                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 smallFieldsBoxCss"}>धर्म  </div>

                <div className="row  otherNameBoxCss">
                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>(i)जन्माने </div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                            <Transliterate type="text" name="marathiReligionByAdoptionOfHusband" value={this.state.form.marathiReligionByAdoptionOfHusband}
                                onChange={this.onchangeFields.bind(this, "marathiReligionByAdoptionOfHusband")}
                                className="fullWidthCssMarathi"></Transliterate>                        </div>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>(ii)दुसरा धर्म स्वीकारला असल्यास(कोणताही असल्यास)</div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  "}>
                            <Transliterate type="text" name="marathiReligionByAdoptionOfHusband" value={this.state.form.marathiReligionByAdoptionOfHusband}
                                onChange={this.onchangeFields.bind(this, "marathiReligionByAdoptionOfHusband")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss "}> d) Age as on the date of Solemenization of marrige </div>

                <div className={"row smallFieldsBoxCss  col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                    <div className={"col-lg-6 col-md-6 col-sm-6  smallFieldsBoxCss"}>
                        <input type="text" name="ageOfHusbandYears" value={this.state.form.ageOfHusband.years} onChange={this.onchangeFields.bind(this, "ageOfHusbandYears")} className="fullWidthCss"></input>
                        <div className={"centerAlignCss"}>years</div>
                    </div>
                    <div className={"col-lg-6 col-md-6 col-sm-6 smallFieldsBoxCss"}>
                        <input type="text" name="ageOfHusbandMonths" value={this.state.form.ageOfHusband.months} onChange={this.onchangeFields.bind(this, "ageOfHusbandMonths")} className="fullWidthCss"></input>
                        <div className={"centerAlignCss"}>months</div>
                    </div>

                </div>


                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>e) Occupation along with address</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <textarea onChange={this.onchangeFields.bind(this, "occupationOfHusbandWithAddress")} name="occupationOfHusbandWithAddress"
                            value={this.state.form.occupationOfHusbandWithAddress} className="fullWidthCss"></textarea>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>व्यवसाय कार्यालयाचा पत्यासह</div>
                    <div
                        className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>


                        <Transliterate type="text" name="marathiOccupationOfHusbandWithAddress" value={this.state.form.marathiOccupationOfHusbandWithAddress}
                            onChange={this.onchangeFields.bind(this, "marathiOccupationOfHusbandWithAddress")}
                            className="fullWidthCssMarathi"></Transliterate>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss "}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> f) Status at the time of Marriage (विवाहाचा वेळची स्थिती)</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 row"}>
                        <div className={"col-lg-4 col-md-4 col-sm-4 formInlineCss"}>
                            <input type="radio" value="Unmarried (अविवाहित)" onChange={this.onchangeFields.bind(this, "")} name="statusOfHusbandAtMarriage" className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Unmarried(अविवाहित)</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-4 formInlineCss "}>
                            <input type="radio" value="Widower (विधुर)" onChange={this.onchangeFields.bind(this, "")} name="statusOfHusbandAtMarriage" className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Widower(विधुर)</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-4 formInlineCss"}>
                            <input type="radio" value="Divorced (घटस्फोटित)" onChange={this.onchangeFields.bind(this, "")} name="statusOfHusbandAtMarriage" className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Divorced(घटस्फोटित)</div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>g)  Full Address of Husband</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <textarea onChange={this.onchangeFields.bind(this, "addressOfHusband")} className="fullWidthCss"
                            name="addressOfHusband"
                            value={this.state.form.addressOfHusband}></textarea>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>पतीचा संपूर्ण पत्ता</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>


                        <Transliterate type="text" name="marathiAddressOfHusband" value={this.state.form.marathiAddressOfHusband}
                            onChange={this.onchangeFields.bind(this, "marathiAddressOfHusband")}
                            className="fullWidthCssMarathi"></Transliterate>
                    </div>
                </div>

                <hr></hr>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> 4. Details Of Wife/वधूची संपूर्ण माहिती</div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> a) Full Name of Wife</div>
                    <div className={"row col-lg-12 col-md-12 col-sm-12 col-xs-12"}>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            <input type="text" name="wifeLastName" value={this.state.form.wifeLastName} onChange={this.onchangeFields.bind(this, "wifeLastName")} className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Surname</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            <input type="text" name="wifeFirstName" value={this.state.form.wifeFirstName} onChange={this.onchangeFields.bind(this, "wifeFirstName")} className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Name</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            <input type="text" name="wifeMiddleName" value={this.state.form.wifeMiddleName} onChange={this.onchangeFields.bind(this, "wifeMiddleName")} className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Father Name</div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 smallFieldsBoxCss"}>  	पत्नीचे संपूर्ण नाव</div>
                    <div className={"row col-lg-12 col-md-12 col-sm-12 col-xs-12"}>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            {/* <input type="text" name="marathiWifeLastName" value={this.state.form.marathiWifeLastName} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiWifeLastName"
                                value={this.state.form.marathiWifeLastName}
                                onChange={this.onchangeFields.bind(this, "marathiWifeLastName")}
                                className="fullWidthCssMarathi"></Transliterate>
                            <div className={"centerAlignCss"}>आडनाव</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            {/* <input type="text" name="marathiWifeFirstName" value={this.state.form.marathiWifeFirstName} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiWifeFirstName"
                                value={this.state.form.marathiWifeFirstName}
                                onChange={this.onchangeFields.bind(this, "marathiWifeFirstName")}
                                className="fullWidthCssMarathi"></Transliterate>
                            <div className={"centerAlignCss"}>नाव</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 smallFieldsBoxCss"}>
                            {/* <input type="text" name="marathiWifeMiddleName" value={this.state.form.marathiWifeMiddleName} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiWifeMiddleName"
                                value={this.state.form.marathiWifeMiddleName}
                                onChange={this.onchangeFields.bind(this, "marathiWifeMiddleName")}
                                className="fullWidthCssMarathi"></Transliterate>
                            <div className={"centerAlignCss"}>वडिलांचे नाव</div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>UID (ADHAR NUMBER) </div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <input type="text" name="uidOfWife" value={this.state.form.uidOfWife} onChange={this.onchangeFields.bind(this, "uidOfWife")} className="fullWidthCss"></input>
                    </div>
                </div>

               
                <div className="row  otherNameBoxCss">
                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>b) Other name/s (if any) which the wife known </div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                            <input type="text" name="otherNameOfWife" value={this.state.form.otherNameOfWife} onChange={this.onchangeFields.bind(this, "otherNameOfWife")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>पत्नीला दुसऱ्या नावाने ओळखत असल्यास ते नाव नाव /ती नावे</div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  "}>
                            <Transliterate type="text" name="marathiOtherNameOfWife"
                                value={this.state.form.marathiOtherNameOfWife}
                                onChange={this.onchangeFields.bind(this, "marathiOtherNameOfWife")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 smallFieldsBoxCss"}>c) Religion </div>

                <div className="row  otherNameBoxCss">
                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>(i)By Birth </div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                            <input type="text" name="religionByBirthOfWife" value={this.state.form.religionByBirthOfWife} onChange={this.onchangeFields.bind(this, "religionByBirthOfWife")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>(ii)By Adoption (If Any)</div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  "}>
                            <input type="text" name="religionByAdoptionOfWife" value={this.state.form.religionByAdoptionOfWife} onChange={this.onchangeFields.bind(this, "religionByAdoptionOfWife")} className="fullWidthCss"></input>

                        </div>
                    </div>
                </div>



                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 smallFieldsBoxCss"}>धर्म  </div>

                <div className="row  otherNameBoxCss">
                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>(i)जन्माने </div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                            <Transliterate type="text" name="marathiReligionByBirthOfWife"
                                value={this.state.form.marathiReligionByBirthOfWife}
                                onChange={this.onchangeFields.bind(this, "marathiReligionByBirthOfWife")}
                                className="fullWidthCssMarathi"></Transliterate>                        </div>
                    </div>

                    <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>(ii)दुसरा धर्म स्वीकारला असल्यास(कोणताही असल्यास)</div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12  "}>
                            <Transliterate type="text" name="marathiReligionByAdoptionOfWife"
                                value={this.state.form.marathiReligionByAdoptionOfWife}
                                onChange={this.onchangeFields.bind(this, "marathiReligionByAdoptionOfWife")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss "}> d) Age as on the date of Solemenization of marrige </div>

                <div className={"row smallFieldsBoxCss  col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                    <div className={"col-lg-6 col-md-6 col-sm-6  smallFieldsBoxCss"}>
                        <input type="text" name="ageOfWifeYears" value={this.state.form.ageOfWife.years} onChange={this.onchangeFields.bind(this, "ageOfWifeYears")} className="fullWidthCss"></input>
                        <div className={"centerAlignCss"}>years</div>
                    </div>
                    <div className={"col-lg-6 col-md-6 col-sm-6 smallFieldsBoxCss"}>
                        <input type="text" name="ageOfWifeMonths" value={this.state.form.ageOfWife.months} onChange={this.onchangeFields.bind(this, "ageOfWifeMonths")} className="fullWidthCss"></input>
                        <div className={"centerAlignCss"}>months</div>
                    </div>

                </div>




                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> e) Status at the time of Marriage (विवाहाचा वेळची स्थिती)</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 row"}>
                        <div className={"col-lg-4 col-md-4 col-sm-4 formInlineCss"}>
                            <input type="radio" name="statusOfWifeAtMarriage" className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Unmarried(अविवाहित)</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-4 formInlineCss "}>
                            <input type="radio" name="statusOfWifeAtMarriage" className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Widow(विधवा)</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-4 formInlineCss"}>
                            <input type="radio" name="statusOfWifeAtMarriage" className="fullWidthCss"></input>
                            <div className={"centerAlignCss"}>Divorced(घटस्फोटित)</div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss "}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>f)  Full Address of Wife Before Or at the time
                    of Marriage </div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <textarea onChange={this.onchangeFields.bind(this, "addressOfWifeBeforeMarriage")}
                            name="addressOfWifeBeforeMarriage"
                            value={this.state.form.addressOfWifeBeforeMarriage}
                            className="fullWidthCss"></textarea>
                    </div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>विवाहाचा पूर्वीचा अथवा वेळचा पत्नीचा पूर्ण पत्ता</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        {/* <textarea onChange={this.onchangeFields.bind(this, "")}
                            name="marathiAddressOfWifeBeforeMarriage"
                            value={this.state.form.marathiAddressOfWifeBeforeMarriage}
                            className="fullWidthCss"></textarea> */}
                        <Transliterate type="text" name="marathiAddressOfWifeBeforeMarriage"
                            value={this.state.form.marathiAddressOfWifeBeforeMarriage}
                            onChange={this.onchangeFields.bind(this, "marathiAddressOfWifeBeforeMarriage")}
                            className="fullWidthCssMarathi"></Transliterate>
                    </div>
                </div>

                {/* <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>g) Signature of Husband with date (पत्नीची तारखेसह स्वाक्षरी)</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 signetureCss"}></div>
                    </div>
                </div> */}

                <hr></hr>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> 6. Witness/साक्षीदार</div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-1 col-md-1 col-sm-0 col-xs-0 "}>1. </div>
                    {/* <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> */}
                    {/* <span className={"formInlineCss"}>
                            <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>Name</div>
                            <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                                <input type="text" name="" value={this.state.form.} onChange={this.onchangeFields.bind(this,"")} className="fullWidthCss"></input>
                            </div>
                        </span> */}

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >i) Name </div>
                        <div >
                            <input type="text" name="nameofWitness1" value={this.state.form.nameofWitness1} onChange={this.onchangeFields.bind(this, "nameofWitness1")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >नाव </div>
                        <div >
                            {/* <input type="text" name="marathiNameofWitness1" value={this.state.form.marathiNameofWitness1} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiNameofWitness1"
                                value={this.state.form.marathiNameofWitness1}
                                onChange={this.onchangeFields.bind(this, "marathiNameofWitness1")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >UID (AADHAR NUMBER) </div>
                        <div >
                            <input type="text" name="uidOfWitness1" value={this.state.form.uidOfWitness1} onChange={this.onchangeFields.bind(this, "uidOfWitness1")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss "}>
                        <div >ii)  Address of Witness</div>
                        <div >
                            <textarea onChange={this.onchangeFields.bind(this, "addressOfWitness1")}
                                name="addressOfWitness1"
                                value={this.state.form.addressOfWitness1}
                                className="fullWidthCss"></textarea>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >साक्षीदारचा संपूर्ण पत्ता</div>
                        <div >

                            <Transliterate type="text" name="marathiAddressOfWitness1"
                                value={this.state.form.marathiAddressOfWitness1}
                                onChange={this.onchangeFields.bind(this, "marathiAddressOfWitness1")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss "}>
                        <div >iii)  Occupation and Office Address of Witness</div>
                        <div >
                            <textarea onChange={this.onchangeFields.bind(this, "occupationOfWitness1WithAddress")}
                                name="occupationOfWitness1WithAddress"
                                value={this.state.form.occupationOfWitness1WithAddress}
                                className="fullWidthCss"></textarea>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >साक्षीदारचा व्यवसाय आणि कार्यालयाचा पत्ता</div>
                        <div >

                            <Transliterate type="text" name="marathiOccupationOfWitness1WithAddress"
                                value={this.state.form.marathiOccupationOfWitness1WithAddress}
                                onChange={this.onchangeFields.bind(this, "marathiOccupationOfWitness1WithAddress")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >iv) Relation of Witness (if any)</div>
                        <div >
                            <input type="text" name="relationWithCoupleOfWitness1" value={this.state.form.relationWithCoupleOfWitness1} onChange={this.onchangeFields.bind(this, "relationWithCoupleOfWitness1")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >विवाहित जोडप्याशी असलेले नाते (कोणतेही असल्यास)</div>
                        <div >
                            {/* <input type="text" name="marathiRelationWithCoupleOfWitness1" value={this.state.form.marathiRelationWithCoupleOfWitness1} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiRelationWithCoupleOfWitness1"
                                value={this.state.form.marathiRelationWithCoupleOfWitness1}
                                onChange={this.onchangeFields.bind(this, "marathiRelationWithCoupleOfWitness1")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>


                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                    <div className={"col-lg-1 col-md-1 col-sm-1 fieldBoxCss"}>2. </div>


                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >i) Name </div>
                        <div>
                            <input type="text" name="nameofWitness2" value={this.state.form.nameofWitness2} onChange={this.onchangeFields.bind(this, "nameofWitness2")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >नाव </div>
                        <div >
                            {/* <input type="text" name="marathiNameofWitness2" value={this.state.form.marathiNameofWitness2} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiNameofWitness2"
                                value={this.state.form.marathiNameofWitness2}
                                onChange={this.onchangeFields.bind(this, "marathiNameofWitness2")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss "}>
                        <div >UID (AADHAR NUMBER) </div>
                        <div >
                            <input type="text" name="uidOfWitness2" value={this.state.form.uidOfWitness2} onChange={this.onchangeFields.bind(this, "uidOfWitness2")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >ii)  Address of Witness</div>
                        <div >
                            <textarea onChange={this.onchangeFields.bind(this, "addressOfWitness2")}
                                name="addressOfWitness2"
                                value={this.state.form.addressOfWitness2}
                                className="fullWidthCss"></textarea>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >साक्षीदारचा संपूर्ण पत्ता</div>
                        <div >

                            <Transliterate type="text" name="marathiAddressOfWitness2"
                                value={this.state.form.marathiAddressOfWitness2}
                                onChange={this.onchangeFields.bind(this, "marathiAddressOfWitness2")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >iii)  Occupation and Office Address of Witness</div>
                        <div >
                            <textarea onChange={this.onchangeFields.bind(this, "occupationOfWitness2WithAddress")}
                                name="occupationOfWitness2WithAddress"
                                value={this.state.form.occupationOfWitness2WithAddress}
                                className="fullWidthCss"></textarea>

                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >साक्षीदारचा व्यवसाय आणि कार्यालयाचा पत्ता</div>
                        <div >

                            <Transliterate type="text" name="marathiOccupationOfWitness2WithAddress"
                                value={this.state.form.marathiOccupationOfWitness2WithAddress}
                                onChange={this.onchangeFields.bind(this, "marathiOccupationOfWitness2WithAddress")}
                                className="fullWidthCssMarathi"></Transliterate>

                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >iv) Relation of Witness (if any)</div>
                        <div >
                            <input type="text" name="relationWithCoupleOfWitness2" value={this.state.form.relationWithCoupleOfWitness2} onChange={this.onchangeFields.bind(this, "relationWithCoupleOfWitness2")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss "}>
                        <div >विवाहित जोडप्याशी असलेले नाते (कोणतेही असल्यास)</div>
                        <div >
                            {/* <input type="text" name="marathiRelationWithCoupleOfWitness2" value={this.state.form.marathiRelationWithCoupleOfWitness2} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiRelationWithCoupleOfWitness2"
                                value={this.state.form.marathiRelationWithCoupleOfWitness2}
                                onChange={this.onchangeFields.bind(this, "marathiRelationWithCoupleOfWitness2")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>


                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-1 col-md-1 col-sm-1 "}>3. </div>


                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >i) Name </div>
                        <div >
                            <input type="text" name="nameOfWitness3" value={this.state.form.nameOfWitness3} onChange={this.onchangeFields.bind(this, "nameOfWitness3")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >नाव </div>
                        <div >
                            {/* <input type="text" name="marathiNameOfWitness3" value={this.state.form.marathiNameOfWitness3} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}

                            <Transliterate type="text" name="marathiNameOfWitness3"
                                value={this.state.form.marathiNameOfWitness3}
                                onChange={this.onchangeFields.bind(this, "marathiNameOfWitness3")}
                                className="fullWidthCssMarathi"></Transliterate></div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >UID (AADHAR NUMBER) </div>
                        <div >
                            <input type="text" name="uidOfWitness3" value={this.state.form.uidOfWitness3} onChange={this.onchangeFields.bind(this, "uidOfWitness3")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >ii)  Address of Witness</div>
                        <div >
                            <textarea onChange={this.onchangeFields.bind(this, "addressOfWitness3")}
                                name="addressOfWitness3"
                                value={this.state.form.addressOfWitness3}
                                className="fullWidthCss"></textarea>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >साक्षीदारचा संपूर्ण पत्ता</div>
                        <div >

                            <Transliterate type="text" name="marathiAddressOfWitness3"
                                value={this.state.form.marathiAddressOfWitness3}
                                onChange={this.onchangeFields.bind(this, "marathiAddressOfWitness3")}
                                className="fullWidthCssMarathi"></Transliterate>

                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div>iii)  Occupation and Office Address of Witness</div>
                        <div >
                            <textarea onChange={this.onchangeFields.bind(this, "occupationOfWitness3WithAddress")}
                                name="occupationOfWitness3WithAddress"
                                value={this.state.form.occupationOfWitness3WithAddress}
                                className="fullWidthCss"></textarea>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >साक्षीदारचा व्यवसाय आणि कार्यालयाचा पत्ता</div>
                        <div >

                            <Transliterate type="text" name="marathiOccupationOfWitness3WithAddress"
                                value={this.state.form.marathiOccupationOfWitness3WithAddress}
                                onChange={this.onchangeFields.bind(this, "marathiOccupationOfWitness3WithAddress")}
                                className="fullWidthCssMarathi"></Transliterate>

                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >iv) Relation of Witness (if any)</div>
                        <div>
                            <input type="text" name="relationWithCoupleOfWitness3" value={this.state.form.relationWithCoupleOfWitness3} onChange={this.onchangeFields.bind(this, "relationWithCoupleOfWitness3")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >विवाहित जोडप्याशी असलेले नाते (कोणतेही असल्यास)</div>
                        <div>
                            {/* <input type="text" name="marathiRelationWithCoupleOfWitness3" value={this.state.form.marathiRelationWithCoupleOfWitness3} onChange={this.onchangeFields.bind(this, "")} className="fullWidthCss"></input> */}
                            <Transliterate type="text" name="marathiRelationWithCoupleOfWitness3"
                                value={this.state.form.marathiRelationWithCoupleOfWitness3}
                                onChange={this.onchangeFields.bind(this, "marathiRelationWithCoupleOfWitness3")}
                                className="fullWidthCssMarathi"></Transliterate>
                        </div>
                    </div>

                </div>
                <hr></hr>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}> 7. Priest/पुरोहित</div>
                </div>

                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-1 col-md-1 col-sm-1 "}>1. </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >a) Name (पुरोहिताचे  नाव) </div>
                        <div >
                            <input type="text" name="priestName" value={this.state.form.priestName} onChange={this.onchangeFields.bind(this, "priestName")} className="fullWidthCss"></input>

                        </div>
                    </div>


                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >b)  Address of Priest (पुरोहिताचा  संपूर्ण पत्ता)</div>
                        <div >
                            <textarea onChange={this.onchangeFields.bind(this, "priestAddress")}
                                name="priestAddress"
                                value={this.state.form.priestAddress}
                                className="fullWidthCss"></textarea>

                        </div>
                    </div>



                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >c) Religion (धर्म)</div>
                        <div >
                            <input type="text" name="priestReligion" value={this.state.form.priestReligion} onChange={this.onchangeFields.bind(this, "priestReligion")} className="fullWidthCss"></input>
                        </div>
                    </div>

                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                        <div >d) Age (वय)</div>
                        <div >
                            <input type="text" name="priestAge" value={this.state.form.priestAge} onChange={this.onchangeFields.bind(this, "priestAge")} className="fullWidthCss"></input>
                        </div>
                    </div>


                </div>


                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "} >8. Documents Presented Along with this memorandum(eg : AAdhar CArd, PAN card)</div>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>
                        <input type="text" name="documentsPresented" value={this.state.form.documentsPresented} onChange={this.onchangeFields.bind(this, "documentsPresented")} className="fullWidthCss"></input>
                    </div>
                </div>

                <div>
                    <ul>
                        <li>	सदर विवाहाची नोंद वराकडे/वधूकडे करण्यात आलेली नाही (नको असलेले खोडावे ) </li>
                    </ul>
                </div>



                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "}>9. Date of Submission of Register (निर्बंधकाकडे सादर केल्याचा दिनांक)</div>
                    <div className={"col-lg-4 col-md-4 col-sm-12 col-xs-12 "}>
                        <input type="Date" name="submissionDate" onChange={this.onchangeFields.bind(this, "submissionDate")}
                            className="fullWidthCss" value={this.state.form.submissionDate}></input>
                    </div>
                </div>

                {  <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 fieldBoxCss row centerAlignCss"}>
                    {this.state.form.documentStatus == "" && <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4 fieldBoxCss"}>
                        <button className="btn btn-primary" onClick={this.onSubmit}> Submit</button>

                    </div>}
                    {this.state.form.documentStatus == "PendingForApproval" && <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4 fieldBoxCss"}>
                        <button className="btn btn-primary" onClick={this.onClickApproveBtn}> Approve</button>

                    </div>}
                    {this.state.form.documentStatus == "PendingForApproval" && <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4 fieldBoxCss"}>
                        <button className="btn btn-primary" onClick={this.onClickRejectBtn}> Reject</button>

                    </div>}
                </div>
                }



            </div>
        )
    }
    render() {
        let renderForm = this.renderForm();

        return (
            <div>


                {renderForm}

            </div>
        )
    }


}

export default BasicDatailsForm;

