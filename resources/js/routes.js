import Add from './components/Add';
import Showstd from './components/Showstd';
import Update from './components/Update';
export const routes=[
         {
             	path:'/stds/create',component:Add,
             },
             {
             	 path:'/stds',component:Showstd,
             	 
             },
             {
                 path:'/stds/:id/update',component:Update,
                 
             }

];