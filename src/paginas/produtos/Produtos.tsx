import { Grid } from '@mui/material';
import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function Produtos() {
    return (
      <>
      
        {/* banner */}
      <Grid style={{backgroundColor:'blue'}}  textAlign={'center'} className="Fundo">

                <img src="https://media.discordapp.net/attachments/1075067205194092599/1097695629876146267/hero_desk_LP_ecossistema_v6.png?width=1440&height=640" alt=""  height= {'400vh'} background-size={'cover'}/>
          </Grid> 
        <Grid container display={'flex'}>
          <Grid alignContent={'row'}>
          </Grid>


           {/* menu produtos */}
          <Grid xs={2} item  >
          <Navigation 
            // you can use your own router's api to get pathname
            activeItemId="/management/members"  
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Microondas',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Refrigeradores',
                itemId: '/management',
                // elemBefore: () => <Icon name="users" />,
                // subNav: [
                //   {
                //     title: 'Frost Free',
                //     itemId: '/management/projects',
                //   },
                //   {
                //     title: 'Duplex',
                //     itemId: '/management/members',
                //   },
                //   {
                //     title: 'Expositor',
                //     itemId: '/management/members',
                //   },
                //   {
                //     title: 'Frezzer',
                //     itemId: '/management/members',
                //   },
                // ],
              },
              {
                title: 'Lavadoras',
                itemId: '/lavadoras',
                // subNav: [
                //   {
                //     title: 'Semi-automáticas',
                //     itemId: '/lavadoras/semi',
                //   },
                //   {
                //     title: 'Automáticas',
                //     itemId: '/lavadoras/auto',
                //   },
                // ],
              },
              {
                title: 'Televisores',
                itemId: '/televisores',
                // subNav: [
                //   {
                //     title: 'Polegadas e LCD',
                //     itemId: '/televisores/lcd',
                //   },
                //   {
                //     title: 'LED',
                //     itemId: '/televisores/led',
                //   },
                //   {
                //     title: 'PLASMA',
                //     itemId: '/televiroes/plasma',
                //   },
                // ],
              },
              {
                title: 'Ventiladores',
                itemId: '/ventiladores',
                // subNav: [
                //   {
                //     title: 'Mesa',
                //     itemId: '/ventiladores/mesa',
                //   },
                //   {
                //     title: 'Teto',
                //     itemId: '/ventiladores/teto',
                //   }
                // ],
              }
            ]}
          />
          </Grid>


              {/* Produtos */}
            <Grid item xs={10} display={'flex'} style={{backgroundColor:'red'}}>
              djsnjdnsjnjdnsjkendjksfbfn
          </Grid>
        
        </Grid>
      </>
    );
}
export default Produtos


