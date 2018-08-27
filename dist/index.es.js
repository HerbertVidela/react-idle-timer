import{Component}from"react";import PropTypes from"prop-types";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},IS_BROWSER="object"===("undefined"==typeof window?"undefined":"undefined"==typeof window?"undefined":_typeof(window)),DEFAULT_ELEMENT=IS_BROWSER?document:{},DEFAULT_EVENTS=["mousemove","keydown","wheel","DOMMouseScroll","mouseWheel","mousedown","touchstart","touchmove","MSPointerDown","MSPointerMove"],IdleTimer=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={idle:!1,oldDate:+new Date,lastActive:+new Date,remaining:null,pageX:null,pageY:null},n.tId=null,n._handleEvent=function(e){var t=n.state,i=t.remaining,o=t.pageX,r=t.pageY,s=n.props.onAction;if(null===i){if("mousemove"===e.type){if(e.pageX===o&&e.pageY===r)return;if(void 0===e.pageX&&void 0===e.pageY)return;if(n.getElapsedTime()<200)return}clearTimeout(n.tId),n.state.idle&&n._toggleIdleState(e),n.setState({lastActive:+new Date,pageX:e.pageX,pageY:e.pageY});var a=n.props.timeout;n.tId=setTimeout(n._toggleIdleState.bind(n),a),s(e)}},e.startOnMount||(n.state.idle=!0),n.toggleIdleState=n._toggleIdleState.bind(n),n.reset=n._reset.bind(n),n.pause=n._pause.bind(n),n.resume=n._resume.bind(n),n.getRemainingTime=n._getRemainingTime.bind(n),n.getElapsedTime=n._getElapsedTime.bind(n),n.getLastActiveTime=n._getLastActiveTime.bind(n),n.isIdle=n._isIdle.bind(n),n}return inherits(t,Component),createClass(t,[{key:"componentWillMount",value:function(){var e=this;if(IS_BROWSER){var t=this.props,n=t.element,i=t.events,o=t.passive,r=t.capture;i.forEach(function(t){n.addEventListener(t,e._handleEvent,{capture:r,passive:o})})}}},{key:"componentDidMount",value:function(){this.props.startOnMount&&this.reset()}},{key:"componentWillUnmount",value:function(){var e=this;if(clearTimeout(this.tId),IS_BROWSER){var t=this.props,n=t.element,i=t.events,o=t.passive,r=t.capture;i.forEach(function(t){n.removeEventListener(t,e._handleEvent,{capture:r,passive:o})})}}},{key:"render",value:function(){return this.props.children||null}},{key:"_toggleIdleState",value:function(e){var t=this.state.idle;this.setState({idle:!t});var n=this.props,i=n.onActive,o=n.onIdle;t?i(e):o(e)}},{key:"_reset",value:function(){clearTimeout(this.tId),this.setState({idle:!1,oldDate:+new Date,lastActive:this.state.oldDate,remaining:null});var e=this.props.timeout;this.tId=setTimeout(this._toggleIdleState.bind(this),e)}},{key:"_pause",value:function(){null===this.state.remaining&&(clearTimeout(this.tId),this.tId=null,this.setState({remaining:this.getRemainingTime()}))}},{key:"_resume",value:function(){var e=this.state,t=e.remaining,n=e.idle;null!==t&&(n||(this.setState({remaining:null}),this.tId=setTimeout(this._toggleIdleState.bind(this),t)))}},{key:"_getRemainingTime",value:function(){var e=this.state,t=e.remaining,n=e.idle,i=e.lastActive;if(n)return 0;if(null!==t)return t;var o=this.props.timeout-(+new Date-i);return o<0&&(o=0),o}},{key:"_getElapsedTime",value:function(){var e=this.state.oldDate;return+new Date-e}},{key:"_getLastActiveTime",value:function(){return this.state.lastActive}},{key:"_isIdle",value:function(){return this.state.idle}}]),t}();IdleTimer.propTypes={timeout:PropTypes.number,events:PropTypes.arrayOf(PropTypes.string),onIdle:PropTypes.func,onActive:PropTypes.func,onAction:PropTypes.func,element:PropTypes.oneOfType([PropTypes.object,PropTypes.element]),startOnMount:PropTypes.bool,passive:PropTypes.bool,capture:PropTypes.bool},IdleTimer.defaultProps={timeout:12e5,element:DEFAULT_ELEMENT,events:DEFAULT_EVENTS,onIdle:function(){},onActive:function(){},onAction:function(){},startOnMount:!0,capture:!0,passive:!0};export default IdleTimer;
//# sourceMappingURL=index.es.js.map
