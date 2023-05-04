import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} className="bannerSobre">
          <Grid item xs={6} className="bannerSobreTitulo">
            <Typography
              variant="h3"
              component={"h3"}
              className="titulosDestaqueBanner"
            >
              Compromisso com a energia que move o mundo.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <img
                src="https://ik.imagekit.io/energen/Sobre/linda_linda.png?updatedAt=1682523662307"
                alt="banner da página sobre"
                width={"100%"}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid display={"flex"} className="sobreProjeto" alignItems="center">
          <Grid item xs={8}>
            <Box margin={"30px"}>
              <img
                className="imgSobreProjeto"
                src="https://ik.imagekit.io/energen/Sobre/Design_sem_nome.png?updatedAt=1682529792687"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid margin={"30px"}>
              <Typography
                className="frasesDestaque"
                variant="h4"
                component={"h4"}
                align="center"
              >
                Por que falar sobre eficiência energética é importante?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component={"h6"}
                style={{ margin: "30px" }}
                align="justify"
                className="texto"
              >
                Falar sobre eficiência energética e energias limpas é de extrema
                importância tanto para o Brasil quanto para o mundo. Esses temas
                estão diretamente relacionados à busca por um desenvolvimento
                sustentável, à preservação do meio ambiente e ao combate às
                mudanças climáticas. É fundamental destacar que, quando se trata
                de energia, não se trata apenas de fornecer mais recursos
                energéticos, mas sim de criar soluções que otimizem todo o
                ecossistema. Isso inclui medidas relacionadas ao consumo e
                redução de custos, à segurança energética, o combate ao
                desperdício e à promoção da eficiência.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className="sobreEnerGen"
        >
          <Grid item xs={9} className="sobreEnerGen">
            <Box>
              <img
                src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/logo_branco_fundo_verde.png?updatedAt=1682205118043"
                width={"40%"}
                alt=""
              />
            </Box>
          </Grid>
        </Grid>

        <Grid className="sobreEnerGen" display="flex" alignItems={"center"}>
          <Grid item xs={9}>
            <Typography
              variant="h6"
              component={"h6"}
              style={{ margin: "0px 30px" }}
              align="justify"
              className="texto"
            >
              Nós criamos o <strong>EnerGen </strong>com o propósito de
              aproximar a população e incentivá-la a fazer escolhas mais
              conscientes em relação ao uso de energia. Percebemos que esse
              setor apresenta grandes possibilidades, mas também grandes
              responsabilidades, especialmente diante das mudanças que ocorrem
              no mundo. Por esse motivo, a ONU incluiu a{" "}
              <strong>Energia Acessível e Limpa</strong> como um dos 17
              Objetivos de Desenvolvimento Sustentável, e isso inclui não só
              pensar em novas possibilidades para os recursos energéticos, mas
              também pensar no acesso e na eficiência dos recursos que já
              utilizamos. Queremos contribuir e cooperar para que todos possam
              participar desse ecossistema ativamente, de modo que tenhamos
              ações positivas e, em conjunto, possamos mudar o nosso cenário
              futuro para melhor. <br />
              <b>Junte-se a nós nessa jornada!</b>
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <img
                src="https://ik.imagekit.io/energen/Sobre/sobreEnerGen.png?updatedAt=1682542821510"
                alt=""
                width={"90%"}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} className="sobreEnerGen">
          <Grid
            item
            xs={9}
            className="sobreEnerGen"
            alignItems={"center"}
            display={"flex"}
          >
            <Typography
              variant="h5"
              component={"h5"}
              style={{ margin: "30px" }}
              className="frasesDestaque"
              align="justify"
            >
              Nosso objetivo é tornar mais fácil para as pessoas fazer escolhas
              conscientes e responsáveis com relação ao consumo de energia.
            </Typography>
          </Grid>
        </Grid>

        <Grid display={"flex"} className="parceirosComerciais">
          <Grid item xs={6}>
            <Typography
              variant="h4"
              component={"h4"}
              align="center"
              style={{ margin: "30px" }}
              className="titulosDestaque"
            >
              Marcas parceiras
            </Typography>
            <Typography
              variant="h6"
              component={"h6"}
              style={{ margin: "30px" }}
              align="justify"
              className="texto"
            >
              Nossas marcas parceiras oferecem descontos imperdíveis em produtos
              selecionados para vocês, consumidores conscientes que acreditam e
              fazem sua parte em relação à eficiência energética. Acreditamos
              que, caminhando juntos, podemos ir ainda mais longe.
            </Typography>
            <Grid
              display="flex"
              alignItems={"center"}
              style={{ margin: "30px" }}
            >
              <Box flex={1}>
                <img
                  src="https://ik.imagekit.io/energen/logo_parceiros/samsung-logo.png?updatedAt=1682459635272"
                  alt="logo Samsung"
                  width={"80%"}
                />
              </Box>
              <Box flex={1}>
                <img
                  src="https://ik.imagekit.io/energen/logo_parceiros/arno-logo.png?updatedAt=1682459662990"
                  alt="logo Arno"
                  width={"60%"}
                />
              </Box>
              <Box flex={1}>
                <img
                  src="https://ik.imagekit.io/energen/logo_parceiros/electrolux-logo.png?updatedAt=1682459649985"
                  alt="logo Eletrolux"
                  width={"80%"}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={6} className="parceiroColeta">
            <Typography
              variant="h4"
              component={"h4"}
              align="center"
              style={{ margin: "30px" }}
              className="titulosDestaque"
            >
              ReciclaGen
            </Typography>

            <Grid>
              <Typography
                variant="h6"
                component={"h6"}
                style={{ margin: "30px 30px 1px 30px" }}
                align="justify"
                className="texto"
              >
                Nossa parceira <b>ReciclaGen </b>, cuida de uma parte super
                importante no nosso ecossistema, ela recicla e faz o descarte
                consciente do que não é reaproveitável.
              </Typography>
            </Grid>
            <Grid display="flex">
              <Grid>
                <Typography
                  variant="h6"
                  component={"h6"}
                  align="justify"
                  style={{ margin: " 0px 40px 0px 30px " }}
                  className="texto"
                >
                  Juntas disponibilizamos parte do retorno financeiro para
                  investimento em projetos que promovem instalações de energia
                  limpa para comunidades que ainda não a possuem.
                </Typography>
              </Grid>

              <Grid style={{ margin: " 0px 30px 0px 0px " }}>
                <img
                  src="https://ik.imagekit.io/energen/Sobre/reciclagen.png?updatedAt=1682648861434"
                  alt=""
                  width={200}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="chamadaEquipe">
          <Typography
            variant="h4"
            component={"h4"}
            align="center"
            style={{ margin: "30px" }}
            className="titulosDestaque"
          >
            Quem trabalha nesse projeto?
          </Typography>
          <Typography
            variant="h6"
            component={"h6"}
            style={{ margin: "30px" }}
            align="center"
            className="texto"
          >
            Essa é a equipe de desenvolvedores que, através de muito empenho e
            trabalho em equipe, criou e desenvolveu a Energen. Estamos
            comprometidos com esse movimento de ações com a finalidade de
            encontrar maneiras eficientes para o uso de energia, contribuindo
            com um futuro mais limpo e sustentável para todos.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          className="cardsEquipe1"
          display="flex"
          justifyContent={"center"}
        >
          <Card className="cardIndividualTamanho" style={{ margin: "30px" }}>
            <CardMedia
              className="cardIndividual"
              // style={{ margin: "10px" }}
              sx={{ minHeight: "55%" }}
              image="https://ik.imagekit.io/energen/desenvolvedores/123555504_v_4?updatedAt=1682460592334"
              title="foto de perfil de Andreza Silvestre"
            />
            <CardContent className="cardIndividual">
              <Typography gutterBottom variant="h5" component="div">
                Andreza <br /> Silvestre
              </Typography>
              <Typography
                variant="body1"
                className="cardIndividual"
                style={{ margin: "5px 5px" }}
              >
                Software Developer
              </Typography>
            </CardContent>
            <CardActions className="cardIndividual" style={{ padding: "1px" }}>
              <a
                className="cardIndividual-links"
                href="https://www.linkedin.com/in/andreza-silvestre/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="cardIndividual-links"
                href="https://github.com/Deekahass"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </CardActions>
          </Card>

          <Card className="cardIndividualTamanho" style={{ margin: "30px" }}>
            <CardMedia
              className="cardIndividual"
              // style={{ margin: "10px" }}
              sx={{ minHeight: "55%" }}
              image="https://ik.imagekit.io/energen/desenvolvedores/lia-profile_f6j65vYgo?updatedAt=1682637355142"
              title="foto de perfil de Lia Laurindo"
            />
            <CardContent className="cardIndividual">
              <Typography gutterBottom variant="h5" component="div">
                Lia <br />
                Laurindo
              </Typography>
              <Typography
                variant="body1"
                className="cardIndividual"
                style={{ margin: "5px 5px" }}
              >
                Software Developer
              </Typography>
            </CardContent>
            <CardActions className="cardIndividual" style={{ padding: "1px" }}>
              <a
                className="cardIndividual-links"
                href="https://www.linkedin.com/in/lialaurindo/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="cardIndividual-links"
                href="https://github.com/lialaurindo"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </CardActions>
          </Card>

          <Card className="cardIndividualTamanho" style={{ margin: "30px" }}>
            <CardMedia
              className="cardIndividual"
              // style={{ margin: "10px" }}
              sx={{ minHeight: "55%" }}
              image="https://ik.imagekit.io/energen/desenvolvedores/100010843_v_4?updatedAt=1682460642174"
              title="foto de perfil de Jaine Santos"
            />
            <CardContent className="cardIndividual">
              <Typography gutterBottom variant="h5" component="div">
                Jaine <br />
                Santos
              </Typography>
              <Typography
                variant="body1"
                className="cardIndividual"
                style={{ margin: "5px 5px" }}
              >
                Software Developer
              </Typography>
            </CardContent>
            <CardActions className="cardIndividual" style={{ padding: "1px" }}>
              <a
                className="cardIndividual-links"
                href="https://www.linkedin.com/in/jainejosiane/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="cardIndividual-links"
                href="https://github.com/JaineSantos0"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          className="cardsEquipe1"
          display="flex"
          justifyContent={"center"}
        >
          <Card
            className="cardIndividualTamanho"
            sx={{ maxWidth: 250 }}
            style={{ margin: "30px" }}
          >
            <CardMedia
              className="cardIndividual"
              // style={{ margin: "10px" }}
              sx={{ minHeight: "55%" }}
              image="https://ik.imagekit.io/energen/desenvolvedores/105376533_v_4?updatedAt=1682460671307"
              title="foto de perfil de Dener Verçosa"
            />
            <CardContent className="cardIndividual">
              <Typography gutterBottom variant="h5" component="div">
                Dener <br />
                Verçosa
              </Typography>
              <Typography
                variant="body1"
                className="cardIndividual"
                style={{ margin: "5px 5px" }}
              >
                Software Developer
              </Typography>
            </CardContent>
            <CardActions className="cardIndividual" style={{ padding: "1px" }}>
              <a
                className="cardIndividual-links"
                href="https://www.linkedin.com/in/dener-vercosa/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="cardIndividual-links"
                href="https://github.com/denervercosa"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </CardActions>
          </Card>

          <Card
            className="cardIndividualTamanho"
            sx={{ maxWidth: 250 }}
            style={{ margin: "30px" }}
          >
            <CardMedia
              className="cardIndividual"
              // style={{ margin: "10px" }}
              sx={{ minHeight: "55%" }}
              image="https://ik.imagekit.io/energen/desenvolvedores/1680746249065.jpeg_width_396_height_396?updatedAt=1682553815731"
              title="foto de perfil de Kelvin Souza"
            />
            <CardContent className="cardIndividual">
              <Typography gutterBottom variant="h5" component="div">
                Kelvin <br />
                Souza
              </Typography>
              <Typography
                variant="body1"
                className="cardIndividual"
                style={{ margin: "5px 5px" }}
              >
                Software Developer
              </Typography>
            </CardContent>
            <CardActions className="cardIndividual" style={{ padding: "1px" }}>
              <a
                className="cardIndividual-links"
                href="https://www.linkedin.com/in/kelvin-souza-/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="cardIndividual-links"
                href="https://github.com/KeelvinW"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </CardActions>
          </Card>

          <Card
            className="cardIndividualTamanho"
            sx={{ maxWidth: 250 }}
            style={{ margin: "30px" }}
          >
            <CardMedia
              className="cardIndividual"
              // style={{ margin: "10px" }}
              sx={{ minHeight: "55%" }}
              image="https://ik.imagekit.io/energen/desenvolvedores/123500218_v_4?updatedAt=1682460617231"
              title="foto de perfil de Nicolas Albuquerque"
            />
            <CardContent className="cardIndividual">
              <Typography gutterBottom variant="h5" component="div">
                Nicolas <br />
                Albuquerque
              </Typography>
              <Typography
                variant="body1"
                className="cardIndividual"
                style={{ margin: "5px 5px" }}
              >
                Software Developer
              </Typography>
            </CardContent>
            <CardActions className="cardIndividual" style={{ padding: "1px" }}>
              <a
                className="cardIndividual-links"
                href="https://www.linkedin.com/in/albuquerquenicolas"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="cardIndividual-links"
                href="https://github.com/NicolasAlbuquerque"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </CardActions>
          </Card>
          <Card className="cardIndividualTamanho" style={{ margin: "30px" }}>
            <CardMedia
              className="cardIndividual"
              // style={{ margin: "10px" }}
              sx={{ minHeight: "55%" }}
              image="https://ik.imagekit.io/energen/desenvolvedores/123783746_v_4?updatedAt=1682460695413"
              title="foto de perfil de Fábio Martins"
            />
            <CardContent className="cardIndividual">
              <Typography gutterBottom variant="h5" component="div">
                Fábio <br />
                Martins
              </Typography>
              <Typography
                variant="body1"
                className="cardIndividual"
                style={{ margin: "5px 5px" }}
              >
                Software Developer
              </Typography>
            </CardContent>
            <CardActions className="cardIndividual" style={{ padding: "1px" }}>
              <a
                className="cardIndividual-links"
                href="https://www.linkedin.com/in/martinsdfabio/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="cardIndividual-links"
                href="https://github.com/martinsdfabio"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Sobre;
