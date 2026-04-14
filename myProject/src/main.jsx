import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import TemprorayComponent, { FirstTempFunction, SecondTempFunction } from './TemprorayComponent'
import TempComp from './TemprorayComponent'
import { FirstTempFunction as T, SecondTempFunction } from './TemprorayComponent'
import { ThirdTempComponent } from './ThirdTempComponent';
import MyHeroSection from './MyHeroSection';
import MyTailwindNavComponent from './MyTailwindNavComponent';
import { MyBootstrapNavComponent } from './MyBootstrapNavComponent';
import { MyMaterialUIComponent } from './MyMaterialUIComponent';
import { MyMaterialUITableComponent } from './MyMaterialUITableComponent';
import MyMaterialUIDrawerComponent from './MyMaterialUIDrawerComponent';
import MyMaterialUISkeletonComponent from './MyMaterialUISkeletonComponent';
import MyMaterialUIStepperComponent from './MyMaterialUIStepperComponent';





createRoot(document.getElementById('root')).render(
  <StrictMode>
  
 {/* <TemprorayComponent></TemprorayComponent> */}
 {/* <TempComp></TempComp>
 <T></T>
 <SecondTempFunction></SecondTempFunction> */}
 <MyTailwindNavComponent></MyTailwindNavComponent>
 {/* <MyBootstrapNavComponent></MyBootstrapNavComponent> */}
 <ThirdTempComponent></ThirdTempComponent>
 <br/>
 <br/>
 <MyMaterialUIComponent></MyMaterialUIComponent>

 <MyMaterialUITableComponent></MyMaterialUITableComponent>
 <MyMaterialUIDrawerComponent></MyMaterialUIDrawerComponent>
 <MyMaterialUISkeletonComponent></MyMaterialUISkeletonComponent>
 <MyMaterialUIStepperComponent></MyMaterialUIStepperComponent>

 
 {/* <MyHeroSection></MyHeroSection> */}

  </StrictMode>,
)
