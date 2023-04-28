import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Box, Modal } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';
import Scrollbar from 'react-scrollbar';
import './ModalPerguntas.css';


function ModalPerguntas() {

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
                className="btnModal"
                onClick={handleOpen}>Perguntas Frequentes</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                
                <div className='modal'>
                <Scrollbar style={{ height: 520 }}>
                    <Box display="flex" justifyContent="flex-end">
                        <CloseIcon onClick={handleClose} />
                    </Box>
                    
                    <Box className='margin-perguntas '>
                        <Box >
                            <Typography>
                                <h3>O que é o programa de "EnerGen troca" da EnerGen?</h3>
                            </Typography>
                            
                            <Typography>
                                <p>O programa da EnerGen em parceria com as empresas Samsung, Eletrolux e Arno permite que os clientes troquem seus aparelhos eletrodomésticos antigos por desconto na compra de novos produtos.</p>
                            </Typography>
                        </Box>
                        <Box>
                        <hr />
                            <Typography >
                                <h3>Quais produtos são elegíveis para a troca?</h3>
                            </Typography>
                            <Typography>
                                <p>O programa de "EnerGen troca" abrange produtos dos nossos parceiros Samsung, Arno e Electrolux, como TVs, Ar-condicionado, Micro-ondas, Refrigeradores, Lavadoras de Roupas e Ventiladores.</p>
                            </Typography>
                        </Box>
                        <Box>
                            <hr />
                            <Typography>
                                <h3>Como faço para participar do programa de "EnerGen troca" da EnerGen?</h3>
                            </Typography>
                            <Typography>
                                <p>Para participar do programa de eco troca da EnerGen, basta entrar no site da empresa e cadastrar-se. Lá, além de encontrar todas as informações necessárias sobre o programa, você também poderá fazer uma avaliação do seu produto antigo para verificar o valor do desconto que poderá receber na compra de um produto novo da Samsung, Arno ou Electrolux.</p>
                            </Typography>
                        </Box>
                        <Box>
                            <hr />
                            <Typography>
                                <h3>Quais são os critérios de elegibilidade para a troca?</h3>
                            </Typography>
                            <Typography>
                                <p>Os critérios de elegibilidade variam de acordo com o produto e o estado do aparelho antigo. Em geral, o aparelho deve estar em bom estado de funcionamento e não pode ter danos físicos significativos. Além disso, é importante que o aparelho seja compatível com o programa de troca.</p>
                            </Typography>
                        </Box>
                        <Box>
                            <hr />
                            <Typography>
                                <h3>Qual é o valor do cupom de desconto oferecido pela EnerGen?</h3>
                            </Typography>
                            <Typography>
                                <p>Para gerar o cupom de desconto analisamos as informações do produto antigo comunicado pelo cliente e o produto novo que deseja adquirir. </p>
                            </Typography>
                        </Box>
                        <Box>
                            <hr />
                            <Typography>
                                <h3>O que a EnerGen faz com os aparelhos antigos trocados?</h3>
                            </Typography>
                            <Typography>
                                <p>A EnerGen tem parceiros que gerenciam o processo de reciclagem e reaproveitamento de materiais para garantir que os aparelhos antigos sejam descartados de forma responsável e sustentável. A ideia é retirar esses aparelhos de circulação.</p>
                            </Typography>
                        </Box>
                    </Box>
                    </Scrollbar>
                </div>
                
            </Modal>
            
        </div>
    );

    return (
        <div style={{ margin: '5px' }}>
            <Button
                variant="outlined"
                className="btnModal"
                onClick={handleOpen}>Perguntas Frequentes</Button>
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
export default ModalPerguntas