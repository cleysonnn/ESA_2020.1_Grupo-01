import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import Preload from './pages/preload.js';
//import MainScreen from './screens/mainScreen.js';
//import Concluidos from './screens/concluidos';
//import Conquistas from './screens/conquistas.js';
//import EscolhaMeta from './screens/escolhaMeta';
//import MetaFinanceira from './screens/metaFinanceira.js';
//import MetaFinanceira2 from './screens/metaFinanceira2.js';
//import MenuFinanceiro from './screens/menuFinanceiro.js';
//import PopUpMetaCriada from './screens/popUpMetaCriada.js';
//import PopUpMetaConcluida from './screens/popUpMetaConcluida.js';
//import PopUpConquista from './screens/popUpConquista.js';
//import PopUpMetaFinalizada from './screens/popUpMetaFinalizada.js';
//import MetaVicioPersonalizada from './screens/metaVicioPersonalizada.js';
import MetaVicioPersonalizada2 from './screens/metaVicioPersonalizada2.js';
const Routes = createAppContainer(
    createSwitchNavigator({
        //Preload,
       // MainScreen,
       //Concluidos,
       //Conquistas,
       //EscolhaMeta
       //MetaFinanceira
       //MetaFinanceira2
       //MenuFinanceiro
       //PopUpMetaCriada
       //PopUpMetaConcluida
       //PopUpConquista
       //PopUpMetaFinalizada
       MetaVicioPersonalizada2
       
    })
);

export default Routes;