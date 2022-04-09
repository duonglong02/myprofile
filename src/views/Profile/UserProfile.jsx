import React, { memo, useEffect, useState, createContext } from "react";
import styles from "./_user-profile.module.scss";
import Header from './Header/Header';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillCaretUp } from "react-icons/ai";
import Footer from "./Footer/Footer";

toast.configure({
    autoClose: 3000,
    draggable: false,
    limit: 3,
    style: {
        fontSize: '1.5rem'
    }
});

export const ThemeContext = createContext();

function UserProfile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setProfile(() => {
            return {
                "createDate": "2022-04-01T22:48:32.000",
                "createdBy": "admin",
                "modifyDate": "2022-04-01T22:48:38.000",
                "modifiedBy": "admin",
                "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                "voided": false,
                "personalInformation": {
                    "createDate": "2022-04-01T22:48:32.000",
                    "createdBy": "admin",
                    "modifyDate": "2022-04-03T01:19:27.000",
                    "modifiedBy": "admin",
                    "id": "4dc7c6be-9c64-44da-bbae-3df3d556b3aa",
                    "voided": false,
                    "firstName": "Dương",
                    "lastName": "Long",
                    "dateOfBirth": null,
                    "address": "Thanh Tri - Ha Noi",
                    "job": "Java Backend",
                    "linkFacebook": "",
                    "linkInstagram": "",
                    "linkTwitter": "",
                    "linkGithub": "",
                    "email": "nduonglong02@gmail.com",
                    "phone": "0962524547"
                },
                "introduce": {
                    "createDate": "2022-04-01T22:48:32.000",
                    "createdBy": "admin",
                    "modifyDate": "2022-04-02T17:59:28.000",
                    "modifiedBy": "admin",
                    "id": "b11dbe71-c3c0-4e89-b36b-6590a12c17cd",
                    "voided": false,
                    "sentenceWelcome": "I am a 2nd year student at Thuy Loi University. Currently, I am living in Hanoi.",
                    "introductionUser": "I'm living in Ha Noi",
                    "titleAboutMe": "Duong Long",
                    "task": "I've been study at Thuy Loi University since 2020. And I had 3 months experience with framework Spring Boot and React Js..",
                    "descriptionTask": "I worked with Java Spring Boot Experience working with: Java, Spring Boot framework, React Js, MySQL, Rest Api. Proficient use of source code management tools: SVN, Git, Github."
                },
                "educationList": [
                    {
                        "createDate": "2022-04-04T22:32:42.000",
                        "createdBy": "admin",
                        "modifyDate": "2022-04-04T22:32:42.000",
                        "modifiedBy": "admin",
                        "id": "24c185c5-1b82-42cf-9e67-7730ab70e6aa",
                        "voided": false,
                        "schoolName": "Viet Nam - Ba Lan High School",
                        "course": "2017-2020",
                        "major": "None",
                        "profile": {
                            "createDate": "2022-04-01T22:48:32.000",
                            "createdBy": "admin",
                            "modifyDate": "2022-04-01T22:48:38.000",
                            "modifiedBy": "admin",
                            "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                            "voided": false,
                            "personalInformation": null,
                            "introduce": null,
                            "educationList": null,
                            "skillList": null,
                            "projectList": null
                        }
                    },
                    {
                        "createDate": "2022-04-04T22:32:42.000",
                        "createdBy": "admin",
                        "modifyDate": "2022-04-04T22:32:42.000",
                        "modifiedBy": "admin",
                        "id": "b7287817-6894-40f6-82c5-da7c94429000",
                        "voided": false,
                        "schoolName": "Thuy Loi University",
                        "course": "2020-2024",
                        "major": "Information Technology",
                        "profile": {
                            "createDate": "2022-04-01T22:48:32.000",
                            "createdBy": "admin",
                            "modifyDate": "2022-04-01T22:48:38.000",
                            "modifiedBy": "admin",
                            "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                            "voided": false,
                            "personalInformation": null,
                            "introduce": null,
                            "educationList": null,
                            "skillList": null,
                            "projectList": null
                        }
                    }
                ],
                "skillList": [
                    {
                        "createDate": "2022-04-04T22:32:42.000",
                        "createdBy": "admin",
                        "modifyDate": "2022-04-04T22:32:42.000",
                        "modifiedBy": "admin",
                        "id": "8960d0b7-372f-483e-8d69-99ef26360cc0",
                        "voided": false,
                        "name": "Back-end",
                        "technologyList": [
                            {
                                "createDate": "2022-04-04T22:32:42.000",
                                "createdBy": "admin",
                                "modifyDate": "2022-04-04T22:32:42.000",
                                "modifiedBy": "admin",
                                "id": "4a275dd0-4d13-44b0-a794-867465767f28",
                                "voided": false,
                                "name": "Data Access",
                                "iconName": "FaDatabase",
                                "details": "JDBC, JPA, Hibernate",
                                "skill": {
                                    "createDate": "2022-04-04T22:32:42.000",
                                    "createdBy": "admin",
                                    "modifyDate": "2022-04-04T22:32:42.000",
                                    "modifiedBy": "admin",
                                    "id": "8960d0b7-372f-483e-8d69-99ef26360cc0",
                                    "voided": false,
                                    "name": "Back-end",
                                    "technologyList": null,
                                    "profile": {
                                        "createDate": "2022-04-01T22:48:32.000",
                                        "createdBy": "admin",
                                        "modifyDate": "2022-04-01T22:48:38.000",
                                        "modifiedBy": "admin",
                                        "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                                        "voided": false,
                                        "personalInformation": null,
                                        "introduce": null,
                                        "educationList": null,
                                        "skillList": null,
                                        "projectList": null
                                    }
                                }
                            },
                            {
                                "createDate": "2022-04-04T22:32:42.000",
                                "createdBy": "admin",
                                "modifyDate": "2022-04-04T22:32:42.000",
                                "modifiedBy": "admin",
                                "id": "60cfaa33-fc3d-4647-9efe-030df7733200",
                                "voided": false,
                                "name": "Java",
                                "iconName": "FaJava",
                                "details": "",
                                "skill": {
                                    "createDate": "2022-04-04T22:32:42.000",
                                    "createdBy": "admin",
                                    "modifyDate": "2022-04-04T22:32:42.000",
                                    "modifiedBy": "admin",
                                    "id": "8960d0b7-372f-483e-8d69-99ef26360cc0",
                                    "voided": false,
                                    "name": "Back-end",
                                    "technologyList": null,
                                    "profile": {
                                        "createDate": "2022-04-01T22:48:32.000",
                                        "createdBy": "admin",
                                        "modifyDate": "2022-04-01T22:48:38.000",
                                        "modifiedBy": "admin",
                                        "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                                        "voided": false,
                                        "personalInformation": null,
                                        "introduce": null,
                                        "educationList": null,
                                        "skillList": null,
                                        "projectList": null
                                    }
                                }
                            },
                            {
                                "createDate": "2022-04-04T22:32:42.000",
                                "createdBy": "admin",
                                "modifyDate": "2022-04-04T22:32:42.000",
                                "modifiedBy": "admin",
                                "id": "7bda2503-6aa4-4900-9aab-f4311b9356aa",
                                "voided": false,
                                "name": "Spring Boot",
                                "iconName": "SiSpringboot",
                                "details": "",
                                "skill": {
                                    "createDate": "2022-04-04T22:32:42.000",
                                    "createdBy": "admin",
                                    "modifyDate": "2022-04-04T22:32:42.000",
                                    "modifiedBy": "admin",
                                    "id": "8960d0b7-372f-483e-8d69-99ef26360cc0",
                                    "voided": false,
                                    "name": "Back-end",
                                    "technologyList": null,
                                    "profile": {
                                        "createDate": "2022-04-01T22:48:32.000",
                                        "createdBy": "admin",
                                        "modifyDate": "2022-04-01T22:48:38.000",
                                        "modifiedBy": "admin",
                                        "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                                        "voided": false,
                                        "personalInformation": null,
                                        "introduce": null,
                                        "educationList": null,
                                        "skillList": null,
                                        "projectList": null
                                    }
                                }
                            }
                        ],
                        "profile": {
                            "createDate": "2022-04-01T22:48:32.000",
                            "createdBy": "admin",
                            "modifyDate": "2022-04-01T22:48:38.000",
                            "modifiedBy": "admin",
                            "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                            "voided": false,
                            "personalInformation": null,
                            "introduce": null,
                            "educationList": null,
                            "skillList": null,
                            "projectList": null
                        }
                    },
                    {
                        "createDate": "2022-04-04T22:32:42.000",
                        "createdBy": "admin",
                        "modifyDate": "2022-04-04T22:32:42.000",
                        "modifiedBy": "admin",
                        "id": "942d0ba4-481f-49b4-8128-653cb948301e",
                        "voided": false,
                        "name": "Front-end",
                        "technologyList": [
                            {
                                "createDate": "2022-04-04T22:32:42.000",
                                "createdBy": "admin",
                                "modifyDate": "2022-04-04T22:32:42.000",
                                "modifiedBy": "admin",
                                "id": "2f2b8f05-2f05-4e07-ba07-95c8c39bc422",
                                "voided": false,
                                "name": "React JS",
                                "iconName": "FaReact",
                                "details": "",
                                "skill": {
                                    "createDate": "2022-04-04T22:32:42.000",
                                    "createdBy": "admin",
                                    "modifyDate": "2022-04-04T22:32:42.000",
                                    "modifiedBy": "admin",
                                    "id": "942d0ba4-481f-49b4-8128-653cb948301e",
                                    "voided": false,
                                    "name": "Front-end",
                                    "technologyList": null,
                                    "profile": {
                                        "createDate": "2022-04-01T22:48:32.000",
                                        "createdBy": "admin",
                                        "modifyDate": "2022-04-01T22:48:38.000",
                                        "modifiedBy": "admin",
                                        "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                                        "voided": false,
                                        "personalInformation": null,
                                        "introduce": null,
                                        "educationList": null,
                                        "skillList": null,
                                        "projectList": null
                                    }
                                }
                            },
                            {
                                "createDate": "2022-04-04T22:32:42.000",
                                "createdBy": "admin",
                                "modifyDate": "2022-04-04T22:32:42.000",
                                "modifiedBy": "admin",
                                "id": "8f15c1fc-009a-4a07-9b86-9057672b553a",
                                "voided": false,
                                "name": "HTML",
                                "iconName": "FaHtml5",
                                "details": "",
                                "skill": {
                                    "createDate": "2022-04-04T22:32:42.000",
                                    "createdBy": "admin",
                                    "modifyDate": "2022-04-04T22:32:42.000",
                                    "modifiedBy": "admin",
                                    "id": "942d0ba4-481f-49b4-8128-653cb948301e",
                                    "voided": false,
                                    "name": "Front-end",
                                    "technologyList": null,
                                    "profile": {
                                        "createDate": "2022-04-01T22:48:32.000",
                                        "createdBy": "admin",
                                        "modifyDate": "2022-04-01T22:48:38.000",
                                        "modifiedBy": "admin",
                                        "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                                        "voided": false,
                                        "personalInformation": null,
                                        "introduce": null,
                                        "educationList": null,
                                        "skillList": null,
                                        "projectList": null
                                    }
                                }
                            },
                            {
                                "createDate": "2022-04-04T22:32:42.000",
                                "createdBy": "admin",
                                "modifyDate": "2022-04-04T22:32:42.000",
                                "modifiedBy": "admin",
                                "id": "a42f2bdc-5692-400c-be4f-9cbafe7dd4b3",
                                "voided": false,
                                "name": "JavaScript",
                                "iconName": "FaJs",
                                "details": "",
                                "skill": {
                                    "createDate": "2022-04-04T22:32:42.000",
                                    "createdBy": "admin",
                                    "modifyDate": "2022-04-04T22:32:42.000",
                                    "modifiedBy": "admin",
                                    "id": "942d0ba4-481f-49b4-8128-653cb948301e",
                                    "voided": false,
                                    "name": "Front-end",
                                    "technologyList": null,
                                    "profile": {
                                        "createDate": "2022-04-01T22:48:32.000",
                                        "createdBy": "admin",
                                        "modifyDate": "2022-04-01T22:48:38.000",
                                        "modifiedBy": "admin",
                                        "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                                        "voided": false,
                                        "personalInformation": null,
                                        "introduce": null,
                                        "educationList": null,
                                        "skillList": null,
                                        "projectList": null
                                    }
                                }
                            },
                            {
                                "createDate": "2022-04-04T22:32:42.000",
                                "createdBy": "admin",
                                "modifyDate": "2022-04-04T22:32:42.000",
                                "modifiedBy": "admin",
                                "id": "c91e9467-6832-4415-897f-c03d8d65bca5",
                                "voided": false,
                                "name": "CSS",
                                "iconName": "FaCss3",
                                "details": "",
                                "skill": {
                                    "createDate": "2022-04-04T22:32:42.000",
                                    "createdBy": "admin",
                                    "modifyDate": "2022-04-04T22:32:42.000",
                                    "modifiedBy": "admin",
                                    "id": "942d0ba4-481f-49b4-8128-653cb948301e",
                                    "voided": false,
                                    "name": "Front-end",
                                    "technologyList": null,
                                    "profile": {
                                        "createDate": "2022-04-01T22:48:32.000",
                                        "createdBy": "admin",
                                        "modifyDate": "2022-04-01T22:48:38.000",
                                        "modifiedBy": "admin",
                                        "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                                        "voided": false,
                                        "personalInformation": null,
                                        "introduce": null,
                                        "educationList": null,
                                        "skillList": null,
                                        "projectList": null
                                    }
                                }
                            }
                        ],
                        "profile": {
                            "createDate": "2022-04-01T22:48:32.000",
                            "createdBy": "admin",
                            "modifyDate": "2022-04-01T22:48:38.000",
                            "modifiedBy": "admin",
                            "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                            "voided": false,
                            "personalInformation": null,
                            "introduce": null,
                            "educationList": null,
                            "skillList": null,
                            "projectList": null
                        }
                    }
                ],
                "projectList": [
                    {
                        "createDate": "2022-04-04T22:32:42.000",
                        "createdBy": "admin",
                        "modifyDate": "2022-04-04T22:32:42.000",
                        "modifiedBy": "admin",
                        "id": "30a852c9-5897-4a31-bfee-ed707c4d13e8",
                        "voided": false,
                        "name": "EQA",
                        "participationProcess": "- Participation process: 18/10/2021 - 28/01/2022",
                        "description": "- Project on \"Quản lý chương trình ngoại kiểm xét nghiệm lao\" of the Ministry of Health.",
                        "profile": {
                            "createDate": "2022-04-01T22:48:32.000",
                            "createdBy": "admin",
                            "modifyDate": "2022-04-01T22:48:38.000",
                            "modifiedBy": "admin",
                            "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                            "voided": false,
                            "personalInformation": null,
                            "introduce": null,
                            "educationList": null,
                            "skillList": null,
                            "projectList": null
                        }
                    },
                    {
                        "createDate": "2022-04-04T22:32:42.000",
                        "createdBy": "admin",
                        "modifyDate": "2022-04-04T22:32:42.000",
                        "modifiedBy": "admin",
                        "id": "f37b5de4-005b-44c8-9567-5eb5e58da3cd",
                        "voided": false,
                        "name": "My Profile",
                        "participationProcess": "- Participation process: 09/02/2022 - Now",
                        "description": "- Project of my team in subject \"Nền tảng phát triển web\" at Thuy Loi University.",
                        "profile": {
                            "createDate": "2022-04-01T22:48:32.000",
                            "createdBy": "admin",
                            "modifyDate": "2022-04-01T22:48:38.000",
                            "modifiedBy": "admin",
                            "id": "b7b98c2d-d96e-4fec-ae46-d158f22355ec",
                            "voided": false,
                            "personalInformation": null,
                            "introduce": null,
                            "educationList": null,
                            "skillList": null,
                            "projectList": null
                        }
                    }
                ]
            }
        })
    }, [])

    const providerValue = {
        profile
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* <Header />
            <Home />
            <AboutMe />
            <Education />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
            <div
                className={styles.backTotop}
                title="Back to top"
                onClick={() => scrollToTop()}
            >
                <AiFillCaretUp />
            </div> */}
            <ThemeContext.Provider value={providerValue}>
                <Header />
                <div className={styles.container}>
                    <Home />
                    <AboutMe />
                    <Education />
                    <Skills />
                    <Experience />
                    <Contact />
                    <Footer />
                </div>
            </ThemeContext.Provider>
            <div
                className={styles.backTotop}
                title="Back to top"
                onClick={() => scrollToTop()}
            >
                <AiFillCaretUp />
            </div>
        </>
    );
}

export default memo(UserProfile)