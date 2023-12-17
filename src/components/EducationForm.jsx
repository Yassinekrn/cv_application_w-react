import React, { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
    FontColorsOutlined,
    FieldTimeOutlined,
    BankOutlined,
} from "@ant-design/icons";
import "../styles/EducationForm.css";
import Description from "./Description";

function EducationForm({ education, onEdit, onDelete }) {
    const [isEditMode, setIsEditMode] = useState(true);
    const [listIdCounter, setListIdCounter] = useState(1);

    const handleEdit = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <div className="container my-3 p-2 border border-gray-300 rounded-md flex flex-col w-4/5 ">
            {!isEditMode ? (
                // View Mode
                <>
                    <div className="flex justify-between mb-2 w-full flex-row">
                        <h4>
                            {education.title !== "" ? education.title : "title"}
                        </h4>
                        <p>
                            {education.duration !== ""
                                ? education.duration
                                : "duration"}
                        </p>
                    </div>
                    <br />
                    <div className="flex justify-between mb-2 w-full flex-row">
                        <ul>
                            {education.description.length != 0 ? (
                                education.description.map((item) => (
                                    <li
                                        className="list-disc  mx-4"
                                        key={item.id}
                                    >
                                        {item.value}
                                    </li>
                                ))
                            ) : (
                                <li className="list-disc mx-4">bullet point</li>
                            )}
                        </ul>
                        <p>
                            {education.institution !== ""
                                ? education.institution
                                : "institution"}
                        </p>
                    </div>
                    <div className="flex">
                        <Button onClick={handleEdit} className="mr-2">
                            <Tooltip title="edit">
                                <EditOutlined />
                            </Tooltip>
                        </Button>
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => onDelete(education.id)}
                        ></Button>
                    </div>
                </>
            ) : (
                // Edit Mode
                <>
                    <Input
                        prefix={<FontColorsOutlined />}
                        type="text"
                        placeholder="title"
                        value={education.title}
                        onChange={(e) =>
                            onEdit(education.id, "title", e.target.value)
                        }
                        className="mb-2 w-1/4"
                    />
                    <Description
                        description={education.description || []}
                        onEdit={onEdit}
                        id={education.id}
                        listId={listIdCounter}
                        className="mb-2 w-1/3"
                        setListIdCounter={setListIdCounter}
                    />
                    <Input
                        type="text"
                        prefix={<FieldTimeOutlined />}
                        placeholder="duration"
                        value={education.duration}
                        onChange={(e) =>
                            onEdit(education.id, "duration", e.target.value)
                        }
                        className="mb-2 w-1/5"
                    />
                    <Input
                        type="text"
                        prefix={<BankOutlined />}
                        placeholder="institution"
                        value={education.institution}
                        onChange={(e) =>
                            onEdit(education.id, "institution", e.target.value)
                        }
                        className="mb-2 w-1/5"
                    />
                    <Button onClick={handleEdit} className="mr-2">
                        <Tooltip title="view">
                            <EyeOutlined />
                        </Tooltip>
                    </Button>
                </>
            )}
        </div>
    );
}

export default EducationForm;
