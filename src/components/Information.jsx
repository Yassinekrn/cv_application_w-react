import React, { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import {
    PhoneOutlined,
    MailOutlined,
    LinkedinOutlined,
    GithubOutlined,
} from "@ant-design/icons";
import "../styles/Info.css";
import {
    EyeOutlined,
    EditOutlined,
    UserOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";

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
                        prefix={<UserOutlined />}
                        type="text"
                        placeholder="Enter your full name"
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                        suffix={
                            <Tooltip title="use title case">
                                <InfoCircleOutlined
                                    style={{
                                        color: "rgba(0,0,0,.45)",
                                    }}
                                />
                            </Tooltip>
                        }
                        className="my-3"
                    />
                    <p className="flex flex-row gap-2 my-1 mx-2">
                        <Input
                            prefix={<PhoneOutlined />}
                            type="tel"
                            placeholder="phone number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                        />
                        <Input
                            type="email"
                            prefix={<MailOutlined />}
                            placeholder="email address"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            value={emailAddress}
                        />
                        <Input
                            type="text"
                            prefix={<LinkedinOutlined />}
                            placeholder="linkedin profile url"
                            onChange={(e) => setLinkedinProfile(e.target.value)}
                            value={linkedinProfile}
                        />
                        <Input
                            type="text"
                            prefix={<GithubOutlined />}
                            placeholder="github profile url"
                            onChange={(e) => setGithubProfile(e.target.value)}
                            value={githubProfile}
                        />
                    </p>
                    <div className="center">
                        <Button
                            // icon={<EyeOutlined />}
                            onClick={() => setEdit(false)}
                        >
                            <Tooltip title="view">
                                <EyeOutlined />
                            </Tooltip>
                        </Button>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className="thin-ctn">
                <h1 className="font-bold text-5xl my-2">
                    {fullName !== "" ? fullName : "Full Name"}
                </h1>
                <p className="flex flex-row gap-2 my-3">
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
                    <Button onClick={() => setEdit(true)} className="my-2">
                        <Tooltip title="edit">
                            <EditOutlined />
                        </Tooltip>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Information;
