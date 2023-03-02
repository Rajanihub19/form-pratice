import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormDemo1 from '../form/form';
import { useState } from "react";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal = ({ data, setData, handleOpen, handleClose, open, setOpen }) => {
    // const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Button onClick={() => { handleOpen() }}>ADD</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>Add details</h1>
                    <FormDemo1 handleClose={handleClose} data={data}
                        setData={setData} handleOpen={handleOpen}
                    />



                </Box>

            </Modal>
        </div>
    );
}
export default BasicModal;