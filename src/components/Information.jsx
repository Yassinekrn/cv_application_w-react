import React, { useState } from "react";
import { Button, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/Info.css";

function Information() {
    const [edit, setEdit] = useState(true);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [linkedinProfile, setLinkedinProfile] = useState("");
    const [githubProfile, setGithubProfile] = useState("");

    if (edit) {
        return (
            <div className="thin-ctn">
                <form>
                    <Input
                        type="text"
                        placeholder="full name"
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                    />
                    <p className="container">
                        <Input
                            type="tel"
                            placeholder="phone number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                        />
                        <Input
                            type="email"
                            placeholder="email address"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            value={emailAddress}
                        />
                        <Input
                            type="text"
                            placeholder="linkedin profile url"
                            onChange={(e) => setLinkedinProfile(e.target.value)}
                            value={linkedinProfile}
                        />
                        <Input
                            type="text"
                            placeholder="github profile url"
                            onChange={(e) => setGithubProfile(e.target.value)}
                            value={githubProfile}
                        />
                    </p>
                    <div className="center">
                        <Button onClick={() => setEdit(false)}>
                            <FontAwesomeIcon icon={faEye} /> &nbsp; View mode
                        </Button>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className="thin-ctn">
                <h2>{fullName !== "" ? fullName : "Full Name"}</h2>
                <p className="container">
                    <span>
                        {phoneNumber !== ""
                            ? phoneNumber + " |"
                            : "your phone number |"}{" "}
                    </span>
                    <span>
                        {" "}
                        {emailAddress !== ""
                            ? emailAddress + " |"
                            : " your email address |"}{" "}
                    </span>
                    <span>
                        {linkedinProfile !== "" ? (
                            <>
                                <a
                                    href={linkedinProfile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                                <span> |</span>
                            </>
                        ) : (
                            " your linkedin profile |"
                        )}
                    </span>

                    <span>
                        {" "}
                        {githubProfile !== "" ? (
                            <>
                                <a
                                    href={githubProfile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </>
                        ) : (
                            "your github profile "
                        )}
                    </span>
                </p>
                <div className="center">
                    <Button onClick={() => setEdit(true)}>
                        <FontAwesomeIcon icon={faPenToSquare} /> &nbsp; Edit
                        mode
                    </Button>
                </div>
            </div>
        );
    }
}

export default Information;
