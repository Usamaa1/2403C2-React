import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import P from './PropsIntro'
import './style.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <P title='First Title' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur corporis qui. Cum, accusantium voluptatibus illum sunt commodi tempore, eveniet labore est nihil quibusdam possimus inventore ipsam, error recusandae accusamus.' link='https://www.google.com' linkText='Google'></P>
    
    <P title='Second Title' description='Material UI is an open-source React component library that implements Googles Material Design. Its comprehensive and can be used in production out of the box.' link='https://www.google.com' linkText='Facebook'></P>

    <P title='Third Title' description='MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library.' link='https://www.google.com' linkText='Instagram'></P>
 

  </StrictMode>,
)
