import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileImage,
  faFileAlt,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import './service.css';

const UploadComponent = () => {
  const [fileUploadOpacity, setFileUploadOpacity] = useState(0);

  const handleFileBrowserClick = (e) => {
    e.preventDefault();
    document.getElementById('file-upload').click();
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className='upload-text'>Upload an Image</h1>
        <div className="upload-container">
          <div className="border-container">
            <div className="icons fa-4x">
              <FontAwesomeIcon
                icon={faFileImage}
                transform="shrink-3 down-2 left-6 rotate--45"
              />
              <FontAwesomeIcon icon={faFileAlt} transform="shrink-2 up-4" />
              <FontAwesomeIcon
                icon={faFilePdf}
                transform="shrink-3 down-2 right-6 rotate-45"
              />
            </div>
            <input
              type="file"
              id="file-upload"
              style={{ opacity: fileUploadOpacity }}
            />
            <p>
              Drag and drop files here, or{' '}
              <a href="#" onClick={handleFileBrowserClick}>
                browse
              </a>{' '}
              your computer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadComponent;