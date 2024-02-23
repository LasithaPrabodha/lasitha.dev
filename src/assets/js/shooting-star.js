export function start() {
  //Helpers
  function lineToAngle(x1, y1, length, radians) {
    const x2 = x1 + length * Math.cos(radians),
      y2 = y1 + length * Math.sin(radians);
    return { x: x2, y: y2 };
  }

  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function degreesToRads(degrees) {
    return (degrees / 180) * Math.PI;
  }

  //Particle
  const particle = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    radius: 0,

    create: function (x, y, speed, direction) {
      const obj = Object.create(this);
      obj.x = x;
      obj.y = y;
      obj.vx = Math.cos(direction) * speed;
      obj.vy = Math.sin(direction) * speed;
      return obj;
    },

    getSpeed: function () {
      return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    },

    setSpeed: function (speed) {
      const heading = this.getHeading();
      this.vx = Math.cos(heading) * speed;
      this.vy = Math.sin(heading) * speed;
    },

    getHeading: function () {
      return Math.atan2(this.vy, this.vx);
    },

    setHeading: function (heading) {
      const speed = this.getSpeed();
      this.vx = Math.cos(heading) * speed;
      this.vy = Math.sin(heading) * speed;
    },

    update: function () {
      this.x += this.vx;
      this.y += this.vy;
    },
  };

  //Canvas and settings
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = document.body.offsetWidth),
    height = (canvas.height = document.body.scrollHeight),
    shootingStars = [],
    starsAngle = 145,
    shootingStarSpeed = {
      min: 15,
      max: 20,
    },
    shootingStarOpacityDelta = 0.01,
    trailLengthDelta = 0.01,
    shootingStarEmittingInterval = 10000,
    shootingStarLifeTime = 500,
    maxTrailLength = 300,
    shootingStarRadius = 3,
    paused = false;

  function createShootingStar() {
    const shootingStar = particle.create(randomRange(width / 2, width), randomRange(0, height / 2), 0, 0);
    shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
    shootingStar.setHeading(degreesToRads(starsAngle));
    shootingStar.radius = shootingStarRadius;
    shootingStar.opacity = 0;
    shootingStar.trailLengthDelta = 0;
    shootingStar.isSpawning = true;
    shootingStar.isDying = false;
    shootingStars.push(shootingStar);
  }

  function killShootingStar(shootingStar) {
    setTimeout(function () {
      shootingStar.isDying = true;
    }, shootingStarLifeTime);
  }

  function update() {
    if (!paused) {
      shootingStars.forEach((shootingStar) => {
        if (shootingStar.isSpawning) {
          shootingStar.opacity += shootingStarOpacityDelta;
          if (shootingStar.opacity >= 1.0) {
            shootingStar.isSpawning = false;
            killShootingStar(shootingStar);
          }
        }
        if (shootingStar.isDying) {
          shootingStar.opacity -= shootingStarOpacityDelta;
          if (shootingStar.opacity <= 0.0) {
            shootingStar.isDying = false;
            shootingStar.isDead = true;
          }
        }
        shootingStar.trailLengthDelta += trailLengthDelta;

        shootingStar.update();
        if (shootingStar.opacity > 0.0) {
          drawShootingStar(shootingStar);
        }
      });

      //Delete dead shooting shootingStars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        if (shootingStars[i].isDead) {
          shootingStars.splice(i, 1);
        }
      }
    }
    requestAnimationFrame(update);
  }

  function drawShootingStar(p) {
    const x = p.x,
      y = p.y,
      currentTrailLength = maxTrailLength * p.trailLengthDelta,
      pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

    context.fillStyle = "rgba(255, 255, 255, " + p.opacity + ")";
    const starLength = 5;
    context.beginPath();
    context.moveTo(x - 1, y + 1);

    context.lineTo(x, y + starLength);
    context.lineTo(x + 1, y + 1);

    context.lineTo(x + starLength, y);
    context.lineTo(x + 1, y - 1);

    context.lineTo(x, y + 1);
    context.lineTo(x, y - starLength);

    context.lineTo(x - 1, y - 1);
    context.lineTo(x - starLength, y);

    context.lineTo(x - 1, y + 1);
    context.lineTo(x - starLength, y);

    context.closePath();
    context.fill();

    //trail
    context.fillStyle = "rgba(255, 221, 157, " + p.opacity + ")";
    context.beginPath();
    context.moveTo(x - 1, y - 1);
    context.lineTo(pos.x, pos.y);
    context.lineTo(x + 1, y + 1);
    context.closePath();
    context.fill();
  }

  //Run
  update();

  //Shooting stars
  setInterval(function () {
    if (paused) return;
    createShootingStar();
  }, shootingStarEmittingInterval);

  window.onfocus = function () {
    paused = false;
  };

  window.onblur = function () {
    paused = true;
  };
}
