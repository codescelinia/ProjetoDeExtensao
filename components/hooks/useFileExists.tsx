import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';

const useFileExists = (filePath: string) => {
  const [fileExists, setFileExists] = useState(true);

  useEffect(() => {
    const checkFile = async () => {
      try {
        const fileInfo = await FileSystem.getInfoAsync(filePath);
        setFileExists(fileInfo.exists);
      } catch (error) {
        console.error('Erro ao verificar arquivo:', error);
        setFileExists(false);
      }
    };

    checkFile();
  }, [filePath]);

  return fileExists;
};

export default useFileExists;