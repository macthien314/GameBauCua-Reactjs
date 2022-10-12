import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'
export default function DanhSachXucSac(props) {
    const dispatch = useDispatch();
    const mangXucXac = useSelector(state=>state.GameBauCuaReducer.mangXucXac);
    return (
        <div className='mt-5 ml-5'>
            <div className='bg-white' style={{ height: 300, width: 300, borderRadius: 150 }}>
                <div className='row'>
                    <div className='col-12 text-right' style={{ marginTop: '-20px', marginLeft:'75px' }}>
                        <XucXac xucXacItem ={mangXucXac[0]}/>
                    </div>

                    <div className='col-6 text-right' style={{}}>
                        <XucXac  xucXacItem ={mangXucXac[1]}/>
                    </div>

                    <div className='col-6 text-right' style={{padding:0}}>
                        <XucXac  xucXacItem ={mangXucXac[2]}/>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:'27%'}}>
                <button onClick={()=>{
                    dispatch({
                        type: 'PLAY_GAME_BAU_CUA'
                })
                }} style={{fontSize:'25px'}} className='btn btn-success mt-2 p2'>Xốc</button>
            </div>
        </div>
    )
}
