import React, { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { TriangleDownIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { RepeatIcon } from '@chakra-ui/icons';
import { DownloadIcon } from '@chakra-ui/icons';
import './Drag.css';
import { Loader } from './Loader';

export const Drag = () => {
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [fail, setFail] = useState(null);
    const toast = useToast(); // Obtener la función de toast

    const handleDrop = async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        const maxSize = 3000000;
        const allowedExtensions = /(\.jpeg|\.webp|\.jpg|\.png)$/i;
        const file = e.dataTransfer.files[0];
        if (!allowedExtensions.exec(file.name)) {
            setErrorMessage('Tipo de archivo no válido. Solo se permiten archivos JPEG, JPG, WEBP y PNG.');
        } else if (file.size > maxSize) {
            setErrorMessage('El archivo es demasiado grande (máx. 3Mb)');
        } else {
            setErrorMessage(null);
            setImage(file);
            setLoading(true);
    
            const formData = new FormData();
            formData.append('image', file);
    
            try {
                const response = await fetch('https://pid-bus-linto.onrender.com/detect_objects', {
                    method: 'POST',
                    body: formData
                });
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
    
                setTimeout(() => {
                    if (response.status === 202) {
                        setFail(true);
                        toast({
                            title: "No se detectaron objetos de movilidad en la imagen.",
                            status: "error",
                            duration: 5000,
                            position: "top",
                            isClosable: true,
                        });
                    } else {
                        setResults({ imageUrl });
                    }
                    setLoading(false);
                }, 1000);
    
            } catch (error) {
                console.error('Error al enviar la imagen:', error);
            }
        }
    };

    const handleDownload = () => {
        if (results && results.imageUrl) {
            const link = document.createElement('a');
            link.href = results.imageUrl;
            link.download = 'result_image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        handleDrop({ dataTransfer: { files: [file] } }); // Simulate drop event with the selected file
    };

    return (
        <div className='drag'>
            <div className='dragzone'>
                <div className='box'
                    onDragOver={(e) => {
                        e.preventDefault();
                    }}
                    onDrop={handleDrop}
                >
                    {image ? (
                        <img src={URL.createObjectURL(image)} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    ) : (
                        <div className='insideBox'>
                            Arrastra una imagen dentro de la caja o haz clic aquí para seleccionar una imagen para analizarla.
                            <input type="file" accept="image/*" onChange={handleFileInputChange} style={{ display: 'none' }} />
                            <Button className='insideButton' colorScheme='black' variant='outline' onClick={() => document.querySelector('input[type="file"]').click()} rightIcon={<PlusSquareIcon />}>Seleccionar imagen</Button>
                        </div>
                    )}
                </div>
                {errorMessage && <div>{errorMessage}</div>}
            </div>

            <div className='arrow'>
                <TriangleDownIcon color={'white'}/>
            </div>
            

            <div className='dragzone2'>
                <div className='box2'>
                    {loading && <Loader/>}
                    {results && results.imageUrl && !loading && (
                        <>
                            <img src={results.imageUrl} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </>
                    )}
                </div>

                {(results || fail) && ( 
            <div className='botones'>
                {results && (
                <Button className='botonD' rightIcon={<DownloadIcon />} colorScheme='white' variant='outline' onClick={handleDownload}>
                    Descárgala
                </Button>
                )}
                <Button className='botonR' rightIcon={<RepeatIcon />} colorScheme='white' variant='outline' onClick={handleRefresh}>
                    Otro intento
                </Button>
            </div>
            )}
            </div>
            
        </div>
    );
};
