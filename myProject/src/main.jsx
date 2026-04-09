import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import TemprorayComponent, { FirstTempFunction, SecondTempFunction } from './TemprorayComponent'
import TempComp from './TemprorayComponent'
import { FirstTempFunction as T, SecondTempFunction } from './TemprorayComponent'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
 {/* <TemprorayComponent></TemprorayComponent> */}
 <TempComp></TempComp>
 <T></T>
 <SecondTempFunction></SecondTempFunction>

  </StrictMode>,
)
