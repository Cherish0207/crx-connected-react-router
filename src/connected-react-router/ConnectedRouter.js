import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Router } from "react-router";
import { onLocationChanged } from "./actions";
/**
 * 1.可以通过派发仓库动作的方式跳转路由/路径
 * 2.路径改变后把最新的路径信息写入仓库,组件能够通过仓库获取最新的路径信息
 */
class ConnectedRouter extends PureComponent {
  // static contextType = ReactReduxContext
  constructor(props) {
    super(props);
    const { history, onLocationChanged } = props;

    // 当路径发生变化的时候,会执行回执行回调,并传递最新的location和action
    this.unlisten = history.listen(onLocationChanged);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { history, children } = this.props;
    return <Router history={history}>{children}</Router>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLocationChanged: (location, action) =>
    dispatch(onLocationChanged(location, action)),
});

export default connect(null, mapDispatchToProps)(ConnectedRouter);
// export default ConnectedRouter
