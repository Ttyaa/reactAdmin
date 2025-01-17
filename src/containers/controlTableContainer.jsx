/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 14:45:13
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 10:55:23
 * @ 文件解释: 控制渲染表格数据的容器组件
 */

import React from 'react';
import EditableTable from '../components/Common/BaseControlComponent/ControlComponent';
import {connect } from 'react-redux';
import { getTableDataSelector, getTableTotalSelector, getAllCityIdSelector } from '../selector/controlTableDataSelector';
import { getTableAction, delTableAction , updateTableAction} from '../action/controlTableDataAction';

const ControlTableContainer = props => {

  return <EditableTable {...props} />
}

const mapStateToProps = state => {
  return {
    _tableData: getTableDataSelector(state),
    _total: getTableTotalSelector(state),
    _AllCity: getAllCityIdSelector(state),
    loading: state.getTableReducer.loading,
    _reload: state.delTableReducer._reload
  }
}

export default connect(mapStateToProps, {
  updateTableAction,
  getTableAction,
  delTableAction
})(ControlTableContainer)