import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Baseurl from '../SourceFiles/Baseurl'


toast.configure()
const UpdatePersonal = () => {

    const [fieldStatus, setFieldStatus] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [cnic, setCnic] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [whatsappbusiness, setWhatsappBussiness] = useState('')
    const [address, setAddress] = useState('')
    const [desription, setDescription] = useState('')
    const [age, setAge] = useState('')
    const [religion, setReligion] = useState('')
    const [region, setRegion] = useState('')
    const [bio, setBio] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [coverPic, setCoverPic] = useState('')
    const [cv, setCV] = useState('')
    const [upwork, setUpwork] = useState('')
    const [fiver, setFiver] = useState('')
    const [professionalDesc, setProfessionalDesc] = useState('')
    const [profession, setProfession] = useState('')
    const [designation, setDesignation] = useState('')
    // const [userID, setUserID] = useState('')

    const SetLocalLogin = async () => {
        try {
            let user = await localStorage.getItem('user');
            let parsed_user = JSON.parse(user)
            if (parsed_user) {
                fetchData(parsed_user.id)
            }
        } catch {
            return null;
        }
    }

    const submitData = () => {

        const userObj = {
            name: name,
            phone: phone,
            bio: bio,
            short_des: desription,
            cv: cv,
            whatsapp: whatsapp,
            whatsapp_b: whatsappbusiness,
            address: address,
            age: age,
            religion: religion,
            region: region,
            cnic: cnic,
            profile_photo: profilePic,
            cover_photo: coverPic,
            upword: upwork,
            fiverr: fiver
        }
        axios.post(`${Baseurl}showbusiness`, userObj)
            .then((res) => {
                console.log(res)
                toast.info('Data updated successfully')
                setInterval(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch((err) => {
                console.log(err)
                toast.warn('Error while updating your data')
            })
    }

    const fetchData = (userID) => {
        var formdata = new FormData();
        formdata.append("user_id", `${userID}`);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl}showbusiness`, requestOptions)
            .then(response => response.json())
            .then(result => {

                setName(result.data[0].name)
                setPhone(result.data[0].phone)
                setCnic(result.data[0].cnic)
                setWhatsapp(result.data[0].whatsapp)
                setWhatsappBussiness(result.data[0].whatsapp_b)
                setAge(result.data[0].age)
                setAddress(result.data[0].address)
                setProfession(result.data[0].profession)
                setDesignation(result.data[0].designation)
                setReligion(result.data[0].religion)
                setRegion(result.data[0].region)
                setUpwork(result.data[0].upword)
                setFiver(result.data[0].fiverr)
                // setBio(result.data[0].long_desc)
                setDescription(result.data[0].bio)
                setProfessionalDesc(result.data[0].professional_desc)

                console.log(result)
            })
            .catch(error => console.log('error', error));
    }


    useEffect(() => { SetLocalLogin(); }
        , [])


    return (

        <div className='main-panel'>
            <div className='content-wrapper'>
                <h3 className='mb-5'><b> UPDATE YOUR PERSONAL INFORMATION:</b></h3>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="mb-3" style={{ borderColor: name === "" && fieldStatus === true ? "red" : 'white' }}>
                            <label for="exampleInputPassword1" class="form-label"><b>Name:</b></label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Phone Number:</b></label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>CNIC Number:</b></label>
                            <input value={cnic} onChange={(e) => setCnic(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>WhatsApp Number:</b></label>
                            <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3' >
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>WhatsApp Business:</b></label>
                            <input value={whatsappbusiness} onChange={(e) => setWhatsappBussiness(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Age:</b></label>
                            <input value={age} onChange={(e) => setAge(e.target.value)} type="number" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Address:</b></label>
                            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>

                </div>

                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Profession:</b></label>
                            <input value={profession} onChange={(e) => setProfession(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Designation:</b></label>
                            <input value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Religion:</b></label>
                            <input value={religion} onChange={(e) => setReligion(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Region:</b></label>
                            <input value={region} onChange={(e) => setRegion(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Upwork:</b></label>
                            <input value={upwork} onChange={(e) => setUpwork(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><b>Fiver:</b></label>
                            <input value={fiver} onChange={(e) => setFiver(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Bio</b></label>
                            <textarea value={desription} onChange={(e) => setBio(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows={3} />
                        </div>
                    </div>

                </div>

                <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Professional Description</b></label>
                            <textarea className="form-control" defaultValue={professionalDesc} onChange={(e) => setProfessionalDesc(e.target.value)} id="exampleFormControlTextarea1" rows={6} />
                        </div>
                    </div>

                </div>

                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label"><b> Update Profile Photo</b></label>
                            <input onChange={(e) => setProfilePic(e.target.value)} className="form-control" type="file" id="formFile" />
                        </div>

                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label"><b> Update Cover Photo</b></label>
                            <input onChange={(e) => setCoverPic(e.target.value)} className="form-control" type="file" id="formFile" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label"><b>Update CV:</b></label>
                            <input onChange={(e) => setCV(e.target.value)} className="form-control" type="file" id="formFile" />
                        </div>
                    </div>
                </div>

                <button onClick={submitData} type="submit" className="btn btn-primary">Submit</button>
            </div>

        </div>

    )
}

export default UpdatePersonal