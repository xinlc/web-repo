/* eslint-disable */
// initial App
const ready = function() {
  alert(2)
  window.__cyb_weixin_href__ = window.location.href;
  alert(window.location.href);
  setTimeout(() => {
    BaiduMap.init((location) => {
      store.dispatch(updateUserLocation(location));
    });
  }, 500);
};
const completed = function () {
  document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
  ready();
};

if ( document.readyState === "complete" ||
    ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout( ready );
} else {
    // Use the handy event callback
    document.addEventListener( "DOMContentLoaded", completed );
    // A fallback to window.onload, that will always work
    window.addEventListener( "load", completed );
}