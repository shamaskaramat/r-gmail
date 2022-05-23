import  './SidebarOptions.css'

const SidebarOptions = ({Icon,title,number,selected}) => {
  return (
    <>
        <div className={`sidebaroption ${selected && 'sidebaroption--active'}`}>
        <Icon className="icons"/>
        <h3>{title}</h3>
        <p>{number}</p>
        </div>
    </>
  )
}

export default SidebarOptions