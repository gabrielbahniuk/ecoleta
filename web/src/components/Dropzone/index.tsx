import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi'
import './styles.css';

const acceptedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg']

interface PropsDropzone {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<PropsDropzone> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    if (!acceptedFiles[0]) {
      return;
    }
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file)
    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);

  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: acceptedMimeTypes,
    minSize: 1,
    maxSize: 2 * 1024 * 1024
  });

  return (
    <div className="dropzone" {...getRootProps()}>
       <input {...getInputProps()} accept={acceptedMimeTypes.join(',')} />
       {
         selectedFileUrl
         ? <img src={selectedFileUrl} alt="Point thumbnail"/>
         : (
            <p>
              <FiUpload />
              Imagem do estabelecimento
            </p>
           )
       }
    </div>
  );
}

export default Dropzone;
