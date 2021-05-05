const openWeatherMapApiKey = '4bbb306159fa9440b0ed4d104c247932';
const geoEncodingApiKey = 'AIzaSyDB9mudLAsb7TDX1EIwIhfl-hVKe0j9STA';
const particles = [];
const imageParticles = [];
const imageParticles2 = [];
const imageParticles3 = [];
const imageParticles4 = [];
const imageParticles5 = [];
const imageParticles6 = [];
const imageParticles7 = [];
const imageParticles8 = [];
const imageParticlesbackground = [];
const colorMap = [
    [248, 248, 248],
    [224, 224, 224],
    [192, 192, 192],
    [144, 144, 144],
    [112, 112, 112],
];

let color= [232, 232, 232];

async function setup() {
  createCanvas(windowWidth,windowHeight);
  const lat = localStorage.getItem('lat') || 55.7558;
  const lon = localStorage.getItem('lon') || 37.6173;
  const data = await fetchData(lat, lon);
  
  console.log(data);

  const { main, components, dt } = data.list[0];
  const { aqi } = main;
  const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } = components;
  color=colorMap[aqi-1];
  $("body").css("background-color",`rgb(${color[0]}, ${color[1]}, ${color[2]})`)


//   for (let i=0; i< Math.round(no2); i++) {
//     particles.push(new Particles(100, 200));
//   }
// check in console.log to see that it rounds up to the number)

  for(let i=0; i < Math.round(no2/10); i++) {
      imageParticles.push(new ImageParticle());
  }

  for(let i=0; i < Math.round(o3/10); i++) {
    imageParticles2.push(new ImageParticle2());
  }

  for(let i=0; i < Math.round(so2/30); i++) {
    imageParticles3.push(new ImageParticle3());
  }

  for(let i=0; i < Math.round(pm2_5/10); i++) {
    imageParticles4.push(new ImageParticle4());
  }

  for(let i=0; i < Math.round(co/30); i++) {
    imageParticles5.push(new ImageParticle5());
  }

  for(let i=0; i < Math.round(nh3/30); i++) {
    imageParticles6.push(new imageParticle6());
  }

  for(let i=0; i < Math.round(pm10/30); i++) {
    imageParticles7.push(new imageParticle7());
  }

  for (let i=0; i< Math.round(no/30); i++) {
    imageParticles8.push(new imageParticle8());
  }

//   for(let i=0; i<20;i++){
//       cubes.push(new Cube());
//   }

}

async function loadCoords(lat, lon) {
    localStorage.setItem('lat', lat);
    localStorage.setItem('lon', lon);
    console.log(localStorage);
    window.location.reload();
}



async function fetchData (lat, lon) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${openWeatherMapApiKey}`);
    const responseBody = await response.json();
    return responseBody;
};


function draw() {
  // static stuff
  background(color[0], color [1], color [2]);

  particles.forEach(particle => {
      particle.move();
      particle.display();
  });

  imageParticles.forEach(particle => {
      particle.move();
      particle.display();
  });

  imageParticles2.forEach(particle => {
    particle.move();
    particle.display();
});

    imageParticles3.forEach(particle => {
        particle.move();
        particle.display();
});

imageParticles4.forEach(particle => {
    particle.move();
    particle.display();
});

imageParticles5.forEach(particle => {
    particle.move();
    particle.display();
});

imageParticles6.forEach(particle => {
    particle.move();
    particle.display();
});

imageParticles7.forEach(particle => {
    particle.move();
    particle.display();
});

imageParticles8.forEach(particle => {
    particle.move();
    particle.display();
});


    // cubes.forEach(cube => {
    //     cube.move();
    //     cube.display();
    // })


/*
  bug1.move();
  bug1.display();
  bug2.move();
  bug2.display();
  bug3.move();
  bug3.display();
  bug4.move();
  bug4.display();
  */
}

// class Cube {
//     constructor() {
//         this.width = random(20, 50);
//         this.height = random(20, 50);
//         this.depth = random(20, 50);
//         this.x = random(width);
//         this.y = random(height);
//     }

//     move() {
//         rotateX(millis() / 1000);
//         rotateY(millis() / 1000);
//     }

//     display() {
//         // box([width], [Height], [depth], [detailX], [detailY])
//         box(this.width, this.height, this.depth, this.x, this.y);
        
//     }
// }

class ImageParticle {
    constructor() {
        this.speed = 1;
        this.img = createImg("./images/particle_1.png", "particle_1");
    
        // 117 is size of image
        this.x = random(0, windowWidth - 117);
        this.y = random(0, windowHeight - 117);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        /*
        if (this.x >= windowWidth - 117) {
            this.x = windowWidth - 117;
        }

        if(this.y >= windowHeight - 117) {
            this.y = windowHeight - 117;
        }
        */
    }

    display(){
        this.img.position(this.x, this.y);
    }
}


class ImageParticle2 {
    constructor() {
        this.speed = 1;
        this.img = createImg("./images/particle_2.png", "particle_2");
        // 117 is size of image
        this.x = random(0, windowWidth - 117);
        this.y = random(0, windowHeight - 117);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        /*
        if (this.x >= windowWidth - 117) {
            this.x = windowWidth - 117;
        }

        if(this.y >= windowHeight - 117) {
            this.y = windowHeight - 117;
        }
        */
    }

    display(){
        this.img.position(this.x, this.y);
    }
}

class ImageParticle3 {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(10, 30);
        this.speed = 1;
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
        fill(51);
    }
};

class ImageParticle4 {
    constructor() {
        this.speed = 1;
        this.img = createImg("./images/particle_4.png", "particle_4");
        // 117 is size of image
        this.x = random(0, windowWidth - 117);
        this.y = random(0, windowHeight - 117);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        /*
        if (this.x >= windowWidth - 117) {
            this.x = windowWidth - 117;
        }

        if(this.y >= windowHeight - 117) {
            this.y = windowHeight - 117;
        }
        */
    }

    display(){
        this.img.position(this.x, this.y);
    }
}

class ImageParticle5 {
    constructor() {
        this.speed = 1;
        this.img = createImg("./images/particle_5.png", "particle_5");
        // 117 is size of image
        this.x = random(0, windowWidth - 117);
        this.y = random(0, windowHeight - 117);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        /*
        if (this.x >= windowWidth - 117) {
            this.x = windowWidth - 117;
        }

        if(this.y >= windowHeight - 117) {
            this.y = windowHeight - 117;
        }
        */
    }

    display(){
        this.img.position(this.x, this.y);
    }
}

class imageParticle6 {
    constructor() {
        this.speed = 1;
        this.img = createImg("./images/particle_6.png", "particle_6");
        // 117 is size of image
        this.x = random(0, windowWidth - 117);
        this.y = random(0, windowHeight - 117);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        /*
        if (this.x >= windowWidth - 117) {
            this.x = windowWidth - 117;
        }

        if(this.y >= windowHeight - 117) {
            this.y = windowHeight - 117;
        }
        */
    }

    display(){
        this.img.position(this.x, this.y);
    }
}

class imageParticle7 {
    constructor() {
        this.speed = 1;
        this.img = createImg("./images/particle_7.png", "particle_7");
        // 117 is size of image
        this.x = random(0, windowWidth - 50);
        this.y = random(0, windowHeight - 50);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        /*
        if (this.x >= windowWidth - 50) {
            this.x = windowWidth - 50;
        }

        if(this.y >= windowHeight - 50) {
            this.y = windowHeight - 50;
        }
        */
    }

    display(){
        this.img.position(this.x, this.y);
    }
}

class imageParticle8 {
    constructor() {

        this.speed = 1;
        this.img = createImg("./images/particle_8.png", "particle_8");
       
          // 117 is size of image
          this.x = random(0, windowWidth - 117);
          this.y = random(0, windowHeight - 117);

    }
          move() {
            this.x += random(-this.speed, this.speed);
            this.y += random(-this.speed, this.speed);
          }

display(){
    this.img.position(this.x, this.y);
    }
}

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

$(document).ready( function($) {
    $(document).on('submit', '#user-form', async function(event) {
        await event.preventDefault();
        const serializedAddress = $(this).serialize();
        const geoEncodingResponse = await (await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${serializedAddress}&key=${geoEncodingApiKey}`)).json();
        const { lat, lng } = geoEncodingResponse.results[0].geometry.location;
        loadCoords(lat, lng);
    });

    $('#info-btn').click(function() {
        $('#overlay-key').hide()
        $('#overlay-info').show()
        $('#overlay').show()
    })

    $('#key-btn').click(function() {
        $('#overlay-key').show()
        $('#overlay-info').hide()
        $('#overlay').show()
    })

    $('#overlay').click(function() {
        $('#overlay').hide()
    })
  });

