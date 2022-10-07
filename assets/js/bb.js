var colors = ["#FFFFFF", "#00FFFF"];

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 2,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 2,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now > Date.now) {
    requestAnimationFrame(frame);
  }
}

window.onload = setTimeout(frame(), 10);