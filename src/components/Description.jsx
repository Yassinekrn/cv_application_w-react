import React, { useState } from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { DeleteOutlined, AimOutlined } from "@ant-design/icons";

function Description({ description, onEdit, id, listId, setListIdCounter }) {
    const [list, setList] = useState(description);

    const handleEdit = (identifier, value) => {
        console.log("handleEdit");
        setList((prevList) =>
            prevList.map((item) =>
                item.id === identifier ? { ...item, value } : item
            )
        );
        console.log("done editing");
        // Use the callback form of setList to ensure you are working with the updated state
        setList((updatedList) => {
            onEdit(id, "description", updatedList);
            console.log("done calling onEdit");
            return updatedList;
        });
    };

    const handleDelete = (id) => {
        setList((prevList) => prevList.filter((item) => item.id !== id));
    };

    const handleAdd = () => {
        setList((prevList) => [...prevList, { id: listId, value: "" }]);
        setListIdCounter(listId + 1);
        setListIdCounter(listId + 1);
    };

    return (
        <div className="mb-4">
            {list.map((item) => (
                <div className="flex items-center mb-2" key={item.id}>
                    <Input
                        type="text"
                        prefix={<AimOutlined />}
                        value={item.value}
                        onChange={(e) => handleEdit(item.id, e.target.value)}
                        placeholder="description bullet point"
                        className="mr-2"
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => handleDelete(item.id)}
                    ></Button>
                </div>
            ))}
            <Button
                ghost
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleAdd}
                className="w-full"
            >
                add bullet point
            </Button>
        </div>
    );
}

export default Description;
