import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"
import { Box, Modal, Typography } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';
import './ModalCupom.css';
import { Link } from 'react-router-dom';


function ModalCupom() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className='modal-1'>
                    <Box display="flex" justifyContent="flex-end">
                        <CloseIcon onClick={handleClose} />
                    </Box>

                    <Box className='margin-perguntas1'>
                        <Typography className='padding-bottom-1'>
                            <h3>CUPOM DE DESCONTO</h3>
                        </Typography>
                        <hr />
                        <Typography className='padding-top'>
                            <p>Acesse o formulário abaixo, preencha os dados do seu produto antigo e ganhe o cupom de desconto para compra de um novo.</p>
                        </Typography>
                        
                        <Box>   
                            <img className='imagem-desconto' src="https://ik.imagekit.io/energen/Promo%C3%A7%C3%A3o/AT%C3%89_50__DE_DESCONTO.png?updatedAt=1683035844150" alt="" />
                        </Box>
                        <Link to={'https://forms.gle/ZfdT2MKqANvvpAGT6'} target="_blank">
                            <Button
                                variant="outlined"
                                className="btnModal-1"
                                onClick={handleOpen}>Formulário
                            </Button>
                        </Link>
                    </Box>

                </div>
            </Modal>
        </div>
    );

    return (
        <div style={{ margin: '5px' }}>
            <Button
                variant="outlined"
                className="btnCupom"
                onClick={handleOpen}>Cupom de Desconto</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
export default ModalCupom