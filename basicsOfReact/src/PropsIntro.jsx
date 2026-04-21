import React from 'react'

// const PropsIntro = (props) => {
//   return (
//     <div className='myCard'>
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//       <a href={props.link}>{props.linkText}</a>
//       {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur corporis qui. Cum, accusantium voluptatibus illum sunt commodi tempore, eveniet labore est nihil quibusdam possimus inventore ipsam, error recusandae accusamus.</p> */}
//     </div>
//   )
// }

const PropsIntro = ({title, description, link, linkText}) => {
  return (
    <div className='myCard'>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link}>{linkText}</a>
      {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur corporis qui. Cum, accusantium voluptatibus illum sunt commodi tempore, eveniet labore est nihil quibusdam possimus inventore ipsam, error recusandae accusamus.</p> */}
    </div>
  )
}

export default PropsIntro
