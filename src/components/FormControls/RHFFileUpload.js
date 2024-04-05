import React, { useState, useEffect } from "react";
import { FormFeedback } from "reactstrap";
import { Controller } from 'react-hook-form';
import userimg from "../../assets/images/users/avatar-1.jpg";
import "../../assets/scss/profilepic.scss";
import unsupportedImage from "../../assets/images/UnsupportedImage.jpeg"
import { SUPPORTED_FORMATS } from "constants/Constant";

const RHFFileUpload = ({
  name,
  control,
  errorobj,
  setValue,
  getFileData,
  defaultImage,
  setError,
  clearErrors,
  id = 'userProfile',
  showEditIcon = true,
  isValidate = false,
  sizeValidation = false,
}) => {
  const [userImage, setUserImage] = useState(defaultImage || userimg);

  let isError = false;
  let errorMessage = "";

  if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
    isError = true;
    errorMessage = errorobj[name]?.message;
  }

  useEffect(() => {
    setUserImage(defaultImage);
  }, [defaultImage])


  const onFileSelectHandler = (e, field) => {
    const objectUrl = URL.createObjectURL(e?.target?.files[0]);

    const img = new Image();
    img.src = objectUrl;
    img.onload = () => {
      if (img.width > 400 && img?.height > 400) {
        setError(name, { type: 'custom', message: 'Image should be 400 X 400 size' });
      } else {
        clearErrors(name)
        if (SUPPORTED_FORMATS.includes(e?.target?.files[0]?.type)) {
          setUserImage(objectUrl);
        } else {
          setUserImage(unsupportedImage)
        }
        getFileData({ file: e?.target?.files[0], base64: objectUrl, fieldName: name });
        field.onChange(e?.target?.files[0])
      }
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      id={name}
      render={({ field }) => (
        <div className="profile-container" style={{ height: "150px", width: "150px" }}>
          <img src={userImage} alt={userImage} className="profileCover" />
          {showEditIcon &&
            <div className="avatar-upload">
              <input
                name={name}
                accept="image/*"
                // id="userProfile"
                id={id}
                type="file"
                onChange={(e) => onFileSelectHandler(e, field)}
              />
              {/* <label htmlFor="userProfile" /> */}
              <label htmlFor={id} />
            </div>
          }
          {isError && isValidate && (
            <FormFeedback type="invalid" className="text-center">{errorMessage}</FormFeedback>
          )}
        </div>
      )
      }
    />
  );
};

export default RHFFileUpload;
