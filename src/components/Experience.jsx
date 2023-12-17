import React, { useState } from "react";
import EducationForm from "./EducationForm";
import { Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "../styles/EducationForm.css";

function Experience() {
    const [educationList, setEducationList] = useState([]);
    const [educationIdCounter, setEducationIdCounter] = useState(1);

    const addEducation = () => {
        setEducationList((prevList) => [
            ...prevList,
            {
                id: educationIdCounter,
                title: "",
                description: [],
                duration: "",
                institution: "",
            },
        ]);
        setEducationIdCounter(educationIdCounter + 1);
    };

    const handleEdit = (id, field, value) => {
        console.log("handleEdit - the big one");
        setEducationList((prevList) =>
            prevList.map((edu) =>
                edu.id === id ? { ...edu, [field]: value } : edu
            )
        );
        console.log("edu modified: ");
    };

    const handleDelete = (id) => {
        setEducationList((prevList) => prevList.filter((edu) => edu.id !== id));
    };

    return (
        <>
            <div>
                <h1 className="font-bold text-2xl mx-5">Experience</h1>
                <hr className="border-t-4 border-gray-300 mx-5" />
            </div>
            <div className="center">
                <Button
                    icon={<PlusCircleOutlined />}
                    onClick={addEducation}
                    className="my-2"
                >
                    experience
                </Button>
            </div>
            <div className="flex justify-center items-center flex-col">
                {educationList.map((education) => (
                    <EducationForm
                        key={education.id}
                        education={education}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </>
    );
}

export default Experience;
