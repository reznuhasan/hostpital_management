import React from 'react'
import Styles from "../Styles/About.module.css"
import aboutus from "../assets/aboutus.png"
import BorderBox from '../components/BorderBox'
import mission from "../assets/aboutmission.jpeg"
import box1 from "../assets/box1.png"
import box2 from "../assets/box2.png"
import box3 from "../assets/box3.png"
import box4 from "../assets/box4.png"
import box5 from "../assets/box5.png"
import hospital from "../assets/hospitalAbout.jpg"
import transforming from "../assets/transformingAbout.jpg"
const About = () => {
    return (
        <div>
            <div className={Styles.image}>
                <img src={aboutus} alt="" />
            </div>
            <BorderBox />
            {/* about details part */}
            <div className={Styles.aboutDetails}>
                <div className={Styles.aboutDetailsTitle}>
                    <h1>About EverSmile</h1>
                </div>
                <div className={Styles.aboutDetailsContent}>
                    <p>
                        The Evercare Group believes access to healthcare is a fundamental right for everyone, so it invests in emerging markets to bring private, quality driven healthcare to meet the needs of local people. The Group was created in response to a global challenge to ensure well-being at all ages is provided to those living in developing countries as a pillar to support sustainable economic development.
                    </p>
                </div>
                <div className={Styles.aboutDetailsContent}>
                    <p>
                        We are leading the way in transforming the traditional healthcare model through our integrated cross-continents platform, our impact driven model and our quality driven hospitals and other healthcare facilities.The Evercare Group operates as an integrated healthcare delivery platform in emerging markets across Africa and South Asia, including India, Pakistan, Bangladesh, Kenya and Nigeria.
                    </p>
                </div>
            </div>
            {/* {about mission part} */}
            <div className={Styles.aboutMission}>
                <div className={Styles.missionContent}>
                    <h1>Vision</h1>
                    <p>To be the leading integrated healthcare network in emerging markets, transforming the quality of healthcare and impacting millions of people.</p>
                </div>
                <div className={Styles.missionContent}>
                    <h1>Mission</h1>
                    <p>To build a legacy of impact driven, accessible, safe and private healthcare for patients in need.
                    </p>
                </div>
                <div className={Styles.missionImage}>
                    <img src={mission} alt="" />
                </div>
            </div>
            {/* item box part */}
            <div className={Styles.itemBox}>
                <div className={Styles.itemBoxValue}>
                    <h1>Value</h1>
                    <p>We are committed to providing best-in-class, accessible, private healthcare for all and we encourage all our employees and caregivers to share our values:</p>
                </div>
                <div className={Styles.box} style={{ "backgroundColor": "#161F37" }} >
                    <img src={box1} alt="" />
                    <div className={Styles.boxContent} >
                        <h1>Quality</h1>
                        <p>
                            We are committed to providing quality healthcare for every patient.
                        </p>
                    </div>
                </div>
                <div className={Styles.box} style={{ "backgroundColor": "#7C6598" }} >
                    <img src={box2} alt="" />
                    <div className={Styles.boxContent} >
                        <h1>Integrity</h1>
                        <p>
                            We do the right thing, every time.

                        </p>
                    </div>
                </div>
                <div className={Styles.box} style={{ "backgroundColor": "#C9214C" }} >
                    <img src={box3} alt="" />
                    <div className={Styles.boxContent} >
                        <h1>Passion</h1>
                        <p>
                            We are passionate abouthealthcare and this shows in the care we provide.

                        </p>
                    </div>
                </div>
                <div className={Styles.box} style={{ "backgroundColor": "#9DC161" }} >
                    <img src={box4} alt="" />
                    <div className={Styles.boxContent} >
                        <h1>Respect</h1>
                        <p>
                            We are respectful of everyone regardless of our differences and diversity.

                        </p>
                    </div>
                </div>
                <div className={Styles.box} style={{ "backgroundColor": "#71BEDF" }} >
                    <img src={box5} alt="" />
                    <div className={Styles.boxContent} >
                        <h1>
                            Innovative
                        </h1>
                        <p>
                            We believe innovation allows us to improve our patients’ experience, increase caregiver engagement and ensure the health of our business.

                        </p>
                    </div>
                </div>
            </div>
            {/* impact part */}
            <div className={Styles.impact}>
                <h1>Impact drives everything that we do</h1>
                <div className={Styles.impactBox}>
                    <div className={Styles.impactContent}>
                        <p>Evercare is disrupting the traditional healthcare model with its integrated cross-continents platform, its impact driven model and quality driven hospitals, creating a profitable double bottom line. As a ‘for profit and impact driven’ integrated healthcare group in Asia and Africa, Evercare is transforming the health and wellbeing of residents by providing access to services they may not have had access to previously. We invest in hospitals, clinics and diagnostic centres that offer services meeting the key healthcare needs of each market’s population and providing screening and care to support the significant rise in non-communicable diseases within these countries.</p>
                    </div>
                    <div className={Styles.line}>

                    </div>
                    <div className={Styles.impactContent}>
                        <p>Evercare’s robust healthcare model demonstrates that there is synergy in purpose and profitability and ensures financial viability through effective asset and resource utilisation with a focus on empowering people to take a role in their own health. We understand the fundamental connection between healthy patients, a safe and collaborative work environment, and a sustainable ecosystem. As a global and local healthcare operator, we have a corporate responsibility to demonstrate our commitment and leadership in our business practices, healthcare facilities, and through our people.</p>
                    </div>
                </div>
            </div>
            {/* hospital add part */}
            <div className={Styles.hospitalAdd}>
                <img src={hospital} alt="" />
            </div>
            {/* Transforming part */}
            <div className={Styles.transforming}>
                <div className={Styles.contentBox}>
                    <h1>Transforming Healthcare</h1>
                    <p>
                        Evercare Hospital Dhaka is a 425-bed multidisciplinary super specialty tertiary care hospital which is the first hospital in Bangladesh to have got JCI Accredited. The Joint Commission International (JCI) is a U.S. based accreditation body dedicated to improving healthcare quality and safety around the world. This hospital has the latest in diagnostic equipment and technology, staffed with a team of world–class physicians, trained nurses and technicians in most disciplines of medical science.
                    </p>
                </div>
                <div className={Styles.line}>

                </div>
                <div className={Styles.transImage}>
                    <img src={transforming} alt="" />

                </div>
            </div>

        </div>
    )
}

export default About