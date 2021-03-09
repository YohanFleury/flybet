import IsLogin from 'islogin.js'
import {useContext} from 'react'
import profilIcon from 'assets/profile-user.png'


const ProfilButton = () => {
  const styleOfLogo = {
      width: '40px',
      height: '40px'
  }  
  const isLogin = useContext(IsLogin)
  var logo = ""
  isLogin ? logo = <img src={profilIcon} alt="logo" style={styleOfLogo}/>
  : logo = ""
  console.log(logo)

  return (
      <div>
            {logo}
      </div>
    
  )
}
export default ProfilButton