import React, { Fragment, useEffect, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Controller } from 'react-hook-form';
import { FormFeedback, Label } from 'reactstrap';
import FeatherIcon from "feather-icons-react";
import defaultImage from "../../assets/images/Default-User-Image.jpeg";

const RHFDropZone = (props) => {

    const { control, errorobj, label, name, isRequired = false, disabledField = false, pocSetvalue, getFileData, editPocData, fileData, fileConfig, classes } = props

    let isError = false;
    let errorMessage = "";

    if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
        isError = true;
        errorMessage = errorobj[name][0]?.message || errorobj[name]?.message;
    }

    return (

        <Controller
            id={name}
            name={name}
            control={control}
            defaultValue={[]}
            render={({ field: { onChange } }) => (
                <Fragment>
                    <div className={`mb-3 ${classes?.wrapper}`} >
                        {label && <Label htmlFor="example-text-input" className="form-label">
                            {label} {isRequired && <span className="text-danger">*</span>}
                        </Label>}

                        {/* {!disabledField ? */}
                        <React.Fragment>
                            <Dropzone
                                name={name}
                                label={label}
                                onChange={onChange}
                                fileConfig={fileConfig}
                                // pocSetvalue={pocSetvalue}
                                // editPocData={editPocData?.images}
                                fileData={fileData} // dm
                                getFileData={getFileData}
                                classes={classes}
                                disabledField={disabledField}
                            // uploadError={uploadError}
                            // setuploadError={setuploadError}
                            />
                            {isError ? <FormFeedback type="invalid"> {errorMessage} </FormFeedback> : ""}
                        </React.Fragment>
                    </div>
                </Fragment>
            )}

        />

    );
};

const Dropzone = ({ onChange, name, pocSetvalue, editPocData, getFileData, fileData, fileConfig, classes, disabledField }) => {

    // const [files, setfiles] = useState(editPocData || []);
    const [files, setfiles] = useState(fileData || []);


    const fileRef = React.useRef(null);

    console.log('dm files =>', files);

    const [errorList, setErrors] = useState([]);

    useEffect(() => {
        setfiles(fileData)
    }, [fileData])

    const onDrop = useCallback((acceptedFiles, fileRejections) => {

        setErrors([]);

        if (acceptedFiles.length > 0) {
            const base64Arr = acceptedFiles.map(o => URL.createObjectURL(o));
            // pocSetvalue(name, acceptedFiles);
            // getFileData({ files: acceptedFiles, base64Arr });
            setfiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                )
            );
            onChange(acceptedFiles)
            // setuploadError("")
        }

        if (fileRejections.length > 0) {
            fileRejections?.map((item, i) => {
                item?.errors?.map(error => {
                    setErrors(prev => [...prev, `${item?.file?.name} - ${error?.message}`])
                })
            })
        }

    }, []);


    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } =
        useDropzone({
            onDrop,
            accept: fileConfig?.accept,
            multiple: fileConfig?.multiple,
            maxSize: fileConfig?.maxSize,
            maxFiles: fileConfig?.maxFiles,
        });

    const additionalClass = isDragAccept ? "accept" : isDragReject ? "reject" : "";

    const deleteFile = (e) => {
        const deleted = files.filter((item, index) => index !== e);
        setfiles(deleted);
        // getFileData({ files: deleted });
        onChange(deleted)
    }

    // display already uploaded images below dropzone
    const renderImages = files?.map((file, index) => (
        <div className='file-preview' key={index}>
            <FeatherIcon
                className="" size="20" icon="x-circle"
                onClick={() => { deleteFile(index) }}
            />
            <img
                src={file?.preview || file?.signedUrl}
                style={{ width: '100px' }}
                alt="image"
            />
        </div>
    ));


    const renderErrors = errorList?.map((error, index) => (
        <div className='file-errors' key={index}>
            <FormFeedback type="invalid">{error}</FormFeedback>
        </div>
    ));


    const renderFilesName = () => (
        <ul>
            {files?.map((file, index) => <li key={index}>{file?.name}</li>)}
        </ul>
    )

    console.log('fileConfig ==>', fileConfig); //multiple

    /* Note : imageDisplayType may be (regular or round) */

    return (
        <>
            {(fileConfig?.multiple || (!fileConfig?.multiple && fileConfig?.imageDisplayType?.value === 'regular')) ?
                <React.Fragment>
                    {!disabledField ?
                        <div {...getRootProps({ className: `droparea ${additionalClass}` })}>
                            <input {...getInputProps()} className={`${classes?.field}`} />
                            <span>{isDragActive ? <FeatherIcon icon="upload" /> : <FeatherIcon icon="file" />}</span>
                            <p className='mb-0'>Drag'n'drop images, or click to select files</p>
                        </div>
                        :
                        <div {...getRootProps({ className: `droparea ${additionalClass}` })}>
                            <span>{isDragActive ? <FeatherIcon icon="upload" /> : <FeatherIcon icon="file" />}</span>
                            <p className='mb-0'>Drag'n'drop images, or click to select files</p>
                        </div>
                    }
                    {(fileConfig?.filePreview && files?.length > 0) ?
                        <div className='d-flex flex-wrap'>{renderImages}</div> : ''
                    }
                </React.Fragment>
                :
                fileConfig?.imageDisplayType?.value === 'round' ?
                    <div className="profile-container" style={{ height: "150px", width: "150px" }}>
                        <img src={files?.length > 0 && files[0]?.preview || defaultImage} alt={'sample-pic'} className="profileCover" />
                        <div {...getRootProps({ className: `avatar-upload` })}>
                            <input {...getInputProps()} className={`${classes?.field}`} />
                            <span />
                        </div>
                    </div> :
                    <div>
                        <FeatherIcon icon="paperclip" cursor="pointer" size={18} onClick={() => fileRef.current.click()} />
                        <div {...getRootProps()} style={{ display: "none" }}>
                            <input {...getInputProps()} className={`${classes?.field}`} ref={fileRef} />
                        </div>
                    </div>
            }

            {renderFilesName()}

            {renderErrors}
        </>
    );
};

export default RHFDropZone
