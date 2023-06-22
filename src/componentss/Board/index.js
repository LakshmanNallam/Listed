import { Component } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlinePieChart,AiOutlineSetting,AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'
import {RxAvatar} from 'react-icons/rx'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {SlCalender, SlLike} from 'react-icons/sl'
import {BsTags,BsBoxArrowDown} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import Recharts from '../Recharts'
import Charts from '../PieChart'
import './index.css'



class Board extends Component{

    render(){
        return (
            <div className='firstCon'>
              <div className='secondCon'>
                <div className='leftCon'>
        
                  <div className='leftuppercon'>
                  <h1>Board.</h1>
                  <div className='selectors'><div className='selectorIcon'><AiOutlinePieChart /></div><p>Dashboard</p><div></div></div>
                  <div className='selectors'><div className='selectorIcon'><BsTags /></div><p>Transactions</p><div></div></div>
                  <div className='selectors'><div className='selectorIcon'><SlCalender /></div><p>Schedules</p><div></div></div>
                  <div className='selectors'><div className='selectorIcon'><HiOutlineUser /></div><p>User</p><div></div></div>
                  <div className='selectors'><div className='selectorIcon'><AiOutlineSetting /></div><p>Settings</p><div></div></div>
                  </div>
                  <div className='lowerDiv'><p>Help</p>
                  <p>Contact Us</p></div>
                </div>
        
              <div className='rightCon'>
                
                <div className='DashboardCon'>
                  <div className='dashleft'><h1>Dashboard</h1></div>
                  <div className='dashright'>
                    <div className='forinputCon'><input type="input" className='input' placeholder='Search'/><AiOutlineSearch/></div>
                    <IoIosNotificationsOutline className='noti'/>
                    <RxAvatar className='noti'/>
                  </div>
                </div>
        
                <div className='CardsCon'>
                  <div className='card bg1'>
                    <div className='cardlogo'><BsBoxArrowDown/></div>
                    <p>Total Revenues</p>
                    <h1>$2,129,430</h1>
                  </div>
                  <div className='card bg2'>
                    <div className='cardlogo'><BsTags/></div>
                    <p>Total Transactions</p>
                    <h1>430</h1>
                  </div>
                  <div className='card bg3'>
                    <div className='cardlogo'><SlLike/></div>
                    <p>Total Likes</p>
                    <h1>9,430</h1>
                  </div>
                  <div className='card bg4'>
                    <div className='cardlogo'><FiUsers/></div>
                    <p>Total Users</p>
                    <h1>950</h1>
                  </div>
                </div>
                
                <div className='LineChart'><Recharts /></div>
        
                <div className='LastRowCon'>
                  <div className='TopProducts'>
                    <div className='headingoftoppro'><h1 className='heading'>Top Products</h1>
                    <input type="date" className='date'/></div>
                  <Charts/>
                  </div>
                  <div className='TopProducts'>
                  <div className='headingoftoppro'><h1 className='heading'>Today's Schedules</h1>
                    </div>
                    <div className='lowerConscedule'>
                      <div className='schudecard bc1'>
                      <h1>Meeting with Suppliers from Kuta Bali</h1>
                      <p>14.00-15.00</p>
                      <p>at Sunset Road,Kuta Bali</p>
                    </div>
                    <div className='schudecard bc2'>
                      <h1>Meeting with Suppliers from Kuta Bali</h1>
                      <p>14.00-15.00</p>
                      <p>at Sunset Road,Kuta Bali</p>
                    </div></div>
                
                  </div>
                </div>
                
                
              </div>
              </div>
            </div>
          );
    }
}

export default Board