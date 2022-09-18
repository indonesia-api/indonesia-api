function goBack() {
  console.log(window.history.state);
  window.history.back();
}

function goForward() {
  console.log(window.history.state);
  window.history.forward();
}

function reload() {
  window.location.reload();
}

export { goBack, goForward, reload };
