import { useState } from 'react';
import { UploadTitle, UploadContainer, HiddenInput } from './FileUpload.styled';

const FileUpload = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = e => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setIsDragging(false);
  };

  //   const handleDrop = e => {
  //     e.preventDefault();
  //     setIsDragging(false);

  //     const items = e.dataTransfer.items;
  //     const files = e.dataTransfer.files;
  //     if (items && items[0]?.webkitGetAsEntry?.()?.isDirectory) {
  //       onUpload({ dataTransfer: { files } }); // ← передаем в поле dataTransfer, как будто drag&drop
  //     } else {
  //       alert(
  //         'Пожалуйста, перетащите всю папку (connections), а не отдельные файлы.'
  //       );
  //     }
  //   };

  const handleDrop = async e => {
    e.preventDefault();
    setIsDragging(false);

    const items = e.dataTransfer.items;
    if (!items) return;

    const entries = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i].webkitGetAsEntry?.();
      if (item) entries.push(item);
    }

    const allFiles = [];

    const readEntriesRecursively = async entry => {
      return new Promise((resolve, reject) => {
        if (entry.isFile) {
          entry.file(file => {
            allFiles.push(file);
            resolve();
          });
        } else if (entry.isDirectory) {
          const reader = entry.createReader();
          reader.readEntries(async entries => {
            for (const ent of entries) {
              await readEntriesRecursively(ent);
            }
            resolve();
          });
        }
      });
    };

    for (const entry of entries) {
      await readEntriesRecursively(entry);
    }

    onUpload({ target: { files: allFiles } });
  };
  const handleChange = e => {
    onUpload(e); // Просто пробрасываем в App
  };

  return (
    <>
      <UploadTitle>
        Upload Your Instagram Connections folder in the field below
      </UploadTitle>
      <UploadContainer
        $isDragging={isDragging}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
          <path d="M45.1 21.2c-1.5-7.5-8.1-13-15.9-13-7.3 0-13.5 4.9-15.5 11.6C6.3 20.5 0 27.5 0 35.8 0 44.8 7.2 52 16.1 52h27.3c8.4 0 15.2-6.8 15.2-15.2 0-7.4-5.2-13.6-12.5-15.6zM30 42l-9-9h6v-9h6v9h6l-9 9z" />
        </svg>
        <span>Choose or drag & drop your Connections folder</span>
        <HiddenInput onChange={handleChange} $dir $webkit />
      </UploadContainer>
    </>
  );
};

export default FileUpload;
