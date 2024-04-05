import React, { useEffect, useState } from 'react'

import { customFields, FinalFormFieldJson } from 'components/FormBuilder/DummyJson'
import FormGenerater from 'components/FormBuilder/FormGenerater'
import { Card, CardBody } from 'reactstrap'
import RHFButton from 'components/FormControls/RHFButton'


const Example = () => {

    const [defaultValues, setDefaultValues] = useState({})

    const [btnClick, resetButtonClick] = useState(false);

    const [filterObj, setFilterObj] = useState(null);

    const handleOnChange = (obj) => {
        const { name, val } = obj;

        setFilterObj((prev) => ({
            ...prev,
            [name]: val?.value
        }))
    }

    const resetFormData = () => {
        resetButtonClick(true)
    }

    useEffect(() => {
        /** Set values inside field name */
        setDefaultValues({
            name: 'Dipesh Mali',
            email: 'dm@narola.email',
            age: 28,
            password: '1234567890',
            mobile: '+919099543424',
            dob: '01-05-2023',
            gender: 'm',
            language: ['react', 'node'],
            address: 'Udhna Surat - 394210',
            user: { label: 'Ervin Howell', value: 2 }, // [{}],
            profile: [
                { preview: 'https://picsum.photos/id/237/200/300' },
                { preview: 'https://picsum.photos/seed/picsum/200/300' }
            ],
            imageData: [
                { preview: 'https://picsum.photos/id/237/200/300', name: 'smaple.png' },
                { preview: 'https://picsum.photos/seed/picsum/200/300', name: 'demo.jpg' }
            ],
            ips: ['192.168.100.37', '192.168.100.49'],
            picknic: true,
            description: '<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p><p><br></p><ol><li> <em>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </em></li><li><em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em></li></ol>'
        })

    }, [])



    return (
        <div className='page-content'>
            <Card>
                <CardBody>
                    {/* {dataFields} */}
                    <FormGenerater
                        formFields={FinalFormFieldJson} // pass sample json data here

                        handleOnChange={handleOnChange} // {handleOnChange && selectedFilters - only needful when you have dependent dropdown field}
                        selectedFilters={filterObj} // 

                        onSubmit={(data) => console.log('Form Data', data)}

                        resetFormData={btnClick}  // optional  (resetFormData,resetButtonClick) use to reset form data in parent component
                        resetButtonClick={resetButtonClick} // optional (you can pass this both props as optional but they are dependent on each other)

                        defaultValues={defaultValues}  // useful in edit mode :-)


                        allowResetForm={false}

                        actions={
                            <div className='d-flex justify-content-end'>
                                <RHFButton btnName="Reset" outline={true} onClick={resetFormData} /> {/** second way to add reset button */}
                                &nbsp;
                                <RHFButton btnName="Submit" type="submit" />
                            </div>
                        }
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default Example