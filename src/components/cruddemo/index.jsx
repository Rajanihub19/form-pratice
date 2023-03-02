import { useState } from "react";
import React from "react";
import Modal from '@mui/material/Modal';
import BasicModal from "../model/index";
import Table from "../table/index";



const CrudDemo = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data, setData] = useState([]);
    return (
        <div>
            <BasicModal data={data} setData={setData} handleOpen={handleOpen} handleClose={handleClose} open={open} setOpen={setOpen} />
            <Table data={data} setData={setData} handleOpen={handleOpen} handleClose={handleClose} />;

        </div>
    )
}
export default CrudDemo;