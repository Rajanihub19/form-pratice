import React from "react";
import Button from "@mui/material/Button";
const Table = ({ data, setData, handleOpen, handleClose }) => {
    const deleteD = (index) => {
        let temp = data;
        temp.splice(index, 1)
        setData([...data]);

    }
    const updateD = () => {

    }
    return (
        <div>
            <table
                style={{
                    width: "50%",
                    margin: "0 auto",
                    border: "2px solid lightseagreen",
                    position: "absolute",
                    left: "42rem",

                }}
            >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>DOB</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {!!data.length ?
                        (data.map((list, index) => {
                            {/* console.log("list:", list); */ }
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td>{list.contact}</td>
                                    <td>{list.dob}</td>
                                    <td><Button variant="contained" onClick={deleteD}>delete</Button></td>
                                    <td><Button variant="contained" onClick={() => updateD(index)}>update</Button>
                                    </td>
                                </tr>
                            );
                        })) : <div>no data found</div>}
                </tbody>
            </table>
        </div>

    );
};
export default Table;