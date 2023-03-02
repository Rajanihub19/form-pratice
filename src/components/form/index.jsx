import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MainLayout from "../../layouts/mainlayout";
const FormDemo1 = ({ handleClose, setData, data }) => {
    const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm([]);

    const onSubmit = (values) => {
        setData([...data, values]);
        reset();
        handleClose();
    }
    return (
        <MainLayout>
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}

                    style={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name="name"
                        {...register("name")}
                        {...register("name", {
                            required: {
                                value: true,
                                message: "name is required",
                            },
                            min: {
                                value: 8,
                                message: "min value is 8",
                            },
                        })}
                        error={!!errors?.name}
                        helperText={errors?.name?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        name="email"
                        {...register("email")}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Contact"
                        variant="outlined"
                        name="contact"
                        {...register("contact")}
                    />
                    <TextField
                        id="outlined-basic"
                        label="DOB"
                        variant="outlined"
                        name="dob"
                        {...register("dob")}
                    />

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </MainLayout>
    )
}
export default FormDemo1;