import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"
import { Box, Modal, Typography } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';
import './ModalCupom.css';


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
            <Button
                variant="outlined"
                className="btnModal-1"
                onClick={handleOpen}>Cupom de Desconto</Button>
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
                        <Typography>
                            <h3>CUPOM DE DESCONTO</h3>
                        </Typography>
                        <hr />
                        <Typography>
                            <p>Click no link abaixo para acessar o formulário para preencher as informações do produto antigo.</p>
                        </Typography>
                    </Box>

                </div>
            </Modal>
        </div>
    );

    return (
        <div style={{ margin: '5px' }}>
            <Button
                variant="outlined"
                className="btnModal"
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