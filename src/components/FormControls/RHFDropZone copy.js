import React, { Fragment, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Controller } from 'react-hook-form';
import { FormFeedback, Label } from 'reactstrap';
import FeatherIcon from "feather-icons-react";

const RHFDropZone = (props) => {

    const { control, errorobj, label, name, isRequired = true, pocSetvalue, getFileData, setPocStepsImage, editPocData, multiple } = props

    const [uploadError, setuploadError] = useState('');
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
                    {label && <Label htmlFor="example-text-input" className="form-label">
                        {label} {isRequired && <span className="text-danger">*</span>}
                    </Label>}
                    <Dropzone
                        onChange={onChange}
                        label={label}
                        id="file"
                        pocSetvalue={pocSetvalue}
                        name={name}
                        editPocData={editPocData?.images}
                        getFileData={getFileData}
                        multiple={multiple}
                        uploadError={uploadError}
                        setuploadError={setuploadError}
                    />

                    {uploadError ? <FormFeedback type="invalid"> {uploadError} </FormFeedback> :
                        isError ? <FormFeedback type="invalid"> {errorMessage} </FormFeedback> : ""}
                </Fragment>
            )}

        />

    );
};

const Dropzone = ({ onChange, name, pocSetvalue, editPocData, getFileData, multiple, setuploadError }) => {

    const [files, setfiles] = useState(editPocData || []);

    const onDrop = useCallback((acceptedFiles) => {

        if (acceptedFiles.length > 0) {
            const base64Arr = acceptedFiles.map(o => URL.createObjectURL(o));
            pocSetvalue(name, acceptedFiles);
            getFileData({ files: acceptedFiles, base64Arr });
            setfiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                )
            );
            onChange(acceptedFiles)
            setuploadError("")
        } else {
            setfiles([])
            setuploadError('Invalid file type.')
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } =
        useDropzone({
            accept: "image/png, image/jpg, image/jpeg, image/gif, image/svg+xml",
            onDrop,
            multiple
        });

    const additionalClass = isDragAccept ? "accept" : isDragReject ? "reject" : "";

    const deleteFile = (e) => {
        const deleted = files.filter((item, index) => index !== e);
        setfiles(deleted);
        // const base64Arr = deleted.map(o => URL.createObjectURL(o)); // now
        // getFileData({ files: deleted, base64Arr }); // now
        getFileData({ files: deleted });
        onChange(deleted)
    }

    // display already uploaded images below dropzone
    const images = files.map((file, index) => (
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

    return (
        <>

            <div {...getRootProps({
                className: `droparea ${additionalClass}`

            })}>
                {/* <input {...getInputProps({ onChange })} /> */}
                <input {...getInputProps()} />
                <span>{isDragActive ? <FeatherIcon icon="upload" /> : <FeatherIcon icon="file" />}</span>
                <p className='mb-0'>Drag'n'drop images, or click to select files</p>
            </div>
            {
                files ?
                    <div className='d-flex flex-wrap'>
                        {images}
                    </div> : ""
            }
        </>
    );
};

export default RHFDropZone
