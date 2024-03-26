import Image from "next/image"
import NameImage from "@public/PName.png"
import PhoneImage from "@public/PPhone.png"

import { useForm } from "react-hook-form"
import { useCookies } from 'react-cookie'

//MUI
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getProfileData, updateProfileData } from "../services/services"
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';



export default function PersonalInfo(props) {
    const [cookies] = useCookies(['access_token']);
    const [showAlert, setShowAlert] = React.useState(false)
    const [alertData, setAlertData] = React.useState({status:"", message:""})
    const [avatar, setAvatar] = React.useState()

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    React.useEffect(()=>{
        async function getApiData(){
            const apiData = await getProfileData(cookies["access_token"])
            if (apiData){
                reset({...apiData})
                setAvatar(apiData.avatar)
            }
        }
        getApiData()
    }, [])

    const handleClose = () => {
        props.setDisplay(false)
        setShowAlert(false)
    };

    async function onSubmit(data) {
        const updateProfile = await updateProfileData(cookies["access_token"], data)
        if (updateProfile){
            setAlertData({status:"success", message:"Profile updated successfully"})
            setShowAlert(true)
            setTimeout(()=>{
                handleClose()
                setShowAlert(false)
            }, 1000)
        } else{
            setAlertData({status:"error", message:"There was a problem on updating the profile"})
            setShowAlert(true)
        }
    }


    return (
        <React.Fragment>

            <Dialog
                open={props.display || false}
                onClose={handleClose}
                onSubmit={handleSubmit(onSubmit)}
                PaperProps={{
                    component: 'form',
                }}
            >
                {showAlert && <Alert severity={alertData.status}>{alertData.message}</Alert>}
                {/* <Avatar src={watch("avatar")} /> */}
                <DialogTitle>Personal Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    In this section, you can edit your profile information
                    </DialogContentText>
                    <div>
                        <div className="flex mt-4 pr-2">
                            <Image src={NameImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto mb-8" />
                            <div className="w-full mx-3">
                            <TextField label="Full Name" variant="standard" placeholder="Mark Clarke" className="w-full" {...register("full_name")} />
                            </div>
                        </div>
                        <div className="flex mt-4 pr-2 mb-6">
                            <Image src={PhoneImage} alt="name" width={100} height={100} className="w-12 h-12 my-auto" />
                            <div className="w-full mx-3">
                            <TextField label="Phone Number" variant="standard" placeholder="+1 (234) 5678 900" className="w-full" {...register("phone_number")} />
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="bg-violet-600 text-white rounded-md w-full py-3">Cancel</Button>
                    <Button type="submit" className="bg-violet-600 text-white rounded-md w-full py-3">Update Profile</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}