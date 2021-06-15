// 向仓库派发动作,请求修改路径信息
export const LOCATION_CHANGE = "@@router/LOCATION_CHANGE";

// 路径变化的 actionCreator
export const onLocationChanged = (location, action) => ({
  type: LOCATION_CHANGE,
  payload: {
    location,
    action,
  },
});

// 调用历史对象上的方法
export const CALL_HISTORY_METHOD = "@@router/CALL_HISTORY_METHOD";

const updateLocation = (method) => {
  return (...args) => ({
    type: CALL_HISTORY_METHOD,
    payload: {
      method,
      args,
    },
  });
};

export const push = updateLocation("push");
export const replace = updateLocation("replace");
export const go = updateLocation("go");
export const goBack = updateLocation("goBack");
export const goForward = updateLocation("goForward");
