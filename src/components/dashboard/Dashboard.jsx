/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-07 21:26:41
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 15:18:33
 * @ 文件解释: 首页
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../style/dashboard.less';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom'
import {UPDATESYSTEMINFO} from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const Dashboard = props => {

  return (
    <Fragment>
      <BreadcrumbCustom second={props.routerTitle} />
      <Card
        title={[
          <SVGICON
            type="anticonxitongguanli"
            className="singleStyle"
            key="singleStyle"
          />,
          <span key="_uploadSliderSpan">丰顺爱心促进会</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
       
      </Card>

    </Fragment>
  )

}

// 类型检查
Dashboard.propTypes = propTypes

export default Dashboard