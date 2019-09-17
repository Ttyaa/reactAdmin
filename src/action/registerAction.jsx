/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-03 10:32:37
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-03 10:53:45
 * @ 文件解释: 注册 - Action
 */

import * as registerConstants from '../constants/registerConstants';
import { message } from 'antd';
import {REGISTER} from '../axios/index';

/**
 * @description 注册Action
 * @param {formData} 表单信息
 */
export const RegisterAction = () => {
  return async dispatch => {
    dispatch({
      type: registerConstants._startRegister
    })
    try{
      const res = await REGISTER();
      if(res && res.status === 200){
        dispatch({
          type: registerConstants._successRegister,
          payload: res
        })
      }else{
        message.error(res.message)       
      }
    } catch(err) {
      dispatch({
        type: registerConstants._failRegister
      })
    } finally {
      dispatch({
        type: registerConstants._stopRegister
      })
    }
  }
}



