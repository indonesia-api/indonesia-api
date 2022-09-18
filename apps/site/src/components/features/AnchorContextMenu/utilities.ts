function openLinkInNewTab(url: string) {
  window.open(url, "_blank").focus();
}

function openLinkInNewWindow(url: string) {
  const features = {
    top: window.screenTop + 16,
    left: window.screenLeft + 16,
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const stringify = Object.entries(features)
    .map(([k, v]) => `${k}=${v}`)
    .join(",");

  window.open(url, "_blank", stringify).focus();
}

export { openLinkInNewTab, openLinkInNewWindow };
