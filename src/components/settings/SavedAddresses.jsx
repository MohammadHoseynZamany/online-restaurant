import { LiaCitySolid } from "react-icons/lia"
import { FaRoad } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useCookies } from 'react-cookie'

//MUI
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from "react-hook-form";
import { getAddress, saveAddress } from "../services/services";
import Alert from '@mui/material/Alert';



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function SavedAddresses(props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const [savedAddresses, setSaveAddress] = useState()

    const [cookies] = useCookies(['access_token']);
    useEffect(() => {
        async function getAddressApi() {
            const address = await getAddress(cookies["access_token"])
            if (address) {
                setSaveAddress(address.map((addr) => (
                    <div key={addr.id} className="border-2 border-gray-600 rounded-lg shadow-md shadow-gray-400 px-3 py-4 my-4 hover:shadow-lg hover:shadow-gray-500">
                        <div className="flex justify-between my-3">
                            <h2>
                                City: {addr.city || "--"}
                            </h2>
                            <h2>
                                State: {addr.state || "--"}
                            </h2>
                        </div>
                        <p className="my-3">
                            Street: {addr.street || "--"}
                        </p>
                        <p className="my-3">
                            Zip Code: {addr.zip_code || "--"}
                        </p>
                    </div>
                )))
            }
        }
        getAddressApi()
    }
        , [])

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        props.setDisplay(false);
    };

    const [showAlert, setShowAlert] = React.useState(false)
    const [alertData, setAlertData] = React.useState({ status: "", message: "" })

    async function onSubmit(data) {
        const saveAddr = await saveAddress(cookies["access_token"], data)
        if (saveAddr) {
            setAlertData({ status: "success", message: "Address Successfully Saved" })
            setShowAlert(true)
            setTimeout(() => {
                handleClose()
                setShowAlert(false)
                reset()
            }, 1000)
        } else {
            setAlertData({ status: "error", message: "There was a problem on saving address" })
            setShowAlert(true)
        }
    }


    return (
        <React.Fragment>
            <Dialog
                open={props.display}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit(onSubmit)
                }}
            >
                <DialogTitle className="mx-auto">Saved Addresses</DialogTitle>
                <DialogContent className="h-[70vh] w-[75vw] max-w-96 overflow-x-hidden">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Address" {...a11yProps(0)} className="mx-auto" />
                                <Tab label="New Address" {...a11yProps(1)} className="mx-auto" />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            {savedAddresses}
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            {showAlert && <Alert severity={alertData.status}>{alertData.message}</Alert>}
                            <div className="flex m-10">
                                <LiaCitySolid className="md:w-1/6 my-auto text-3xl" />
                                <div className="w-full my-auto">
                                    <TextField label="City" variant="standard" className="w-full mx-2" {...register("city", { required: true })} />
                                    {errors.city &&
                                        <p className="text-red-700 mx-auto my-2">
                                            This Field is Required
                                        </p>
                                    }
                                </div>
                            </div>
                            <div className="flex m-10">
                                <LiaCitySolid className="md:w-1/6 my-auto text-3xl" />
                                <div className="w-full my-auto">
                                    <TextField label="State" variant="standard" className="w-full mx-2" {...register("state", { required: true })} />
                                    {errors.state &&
                                        <p className="text-red-700 mx-auto my-2">
                                            This Field is Required
                                        </p>
                                    }
                                </div>
                            </div>
                            <div className="flex m-10">
                                <FaRoad className="md:w-1/6 my-auto text-3xl" />
                                <div className="w-full my-auto">
                                    <TextField label="Street" variant="standard" className="w-full mx-2" {...register("street", { required: true })} />
                                    {errors.street &&
                                        <p className="text-red-700 mx-auto my-2">
                                            This Field is Required
                                        </p>
                                    }
                                </div>
                            </div>
                            <div className="flex m-10">
                                <FaHome className="md:w-1/6 my-auto text-3xl" />
                                <div className="w-full my-auto">
                                    <TextField label="Zip Code" variant="standard" className="w-full mx-2" {...register("zip_code", { required: true })} />
                                    {errors.zip_code &&
                                        <p className="text-red-700 mx-auto my-2">
                                            This Field is Required
                                        </p>
                                    }
                                </div>
                            </div>
                        </CustomTabPanel>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="bg-violet-600 text-white rounded-md w-full py-3">Close</Button>
                    {value === 1 && <Button type="submit" className="bg-violet-600 text-white rounded-md w-full py-3">Save</Button>}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
