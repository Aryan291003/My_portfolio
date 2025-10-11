const projects = [
  {
    id: 'p1',
    title: 'Portfolio Website',
    image: '/image/portfolio.png',
    description: 'My personal portfolio built with React and Three.js.',
    tags: ['React', 'Three.js'],
    link: 'https://github.com/Aryan291003/My_portfolio',
     longDescription:"this project is a personal portfolio website built with react and Vite.I have taken inspiration from amazon prime video for the design and layout of the  website with my touch to it. also have used tailwind css and typescript for the development of this website.",
    extraImages: ["/image/pdsec/p1.png", "/image/pdsec/p2.png"]
   
  },  
  {
    id: 'p2',
    title: 'User Management system  ',
    image: '/image/capstone.png',
    description: 'This was my capstone project for my final semester during my college made for a Taekwondow Acade.....Read more',
    tags: ['C#', 'Tailwind','Azure','postgreSQL','React','TypeScript','ASP.NET'],
     link: 'https://github.com/brokolidev/tkd',
     longDescription:"This project is a user managemnt system made for a Taekwondow Academy to manage there students and there progress. it has features like user managment(like registering new students, teachers ) , attendance(USING QR CODE ) , progress tracking and many more. it is built using C# for backend and React with typescript for frontend and tailwind css for styling. also have used postgreSQL for database and hosted it on Azure.",
     extraImages: ["/image/pdsec/u1.png", "/image/pdsec/u2.png"],
    video: "/video/user.mp4",                  
  },
  {
    id: 'p3',
    title: 'Router Kernel',
    image: '/image/RouterKernel.png',
    description: 'made a low level router kernel in RUSt for class Project .',
    tags: ['Rust','QEMU'],
    link: 'https://github.com/jovielarue/minirouter',
     longDescription:"this porject is my class project for my emerging trends class where we have to explore a new technology and make a project on it. i have choosen rust as my technology and made a simple router kernel. It wasnt a 100% success but i got kernel and bootloader to talk with each other with the help of the other group members and i dont have much to show for it ",
    extraImages: ['/image/RouterKernel.png'],
  
  },
  {
    id: 'p4',
    title: 'RC Car Website',
    image: '/image/RCcars.png',
    description: 'made Rc car webiste as a class project using React javascript and mongoDB.',
    tags: ['React','javascript','CSS','mongoDB', 'Node.js'],
     link: 'https://github.com/Aryan291003/RcCars-website-',
     longDescription:"in this porject we have made a E-commerce style website in which the user can purchase, browse the product.I have made this project using React for frontend and Node.js with express for backend and mongoDB for database.",
     extraImages: ["/image/pdsec/rc1.png", "/image/pdsec/rc2.png"],
  
  },
  {
    id: 'p5',
    title: ' Advance Mobile Calculator App',
    image: '/image/calculator1.png',
    description: 'made mobile calculator using React and javascript it can perform basic conversion and advance convserion aswell.',
    tags: ['React','javascript'],
    link: 'https://github.com/Aryan291003/Calculator1',
     longDescription:"In this projeyt I have attempted to make a calculator which  can perform basic calcluation but the advance conersion too like temprature , weight and many more. it also have a toogle button to change the  theme of app either dark or light .",
   extraImages: ["/image/pdsec/cal1.png", "/image/pdsec/cal2.png", "/image/pdsec/cal3.png"],
    video: "/video/calculator.mp4",
  },
  {
    id: 'p6',
    title: 'Employee Management System',
    image: '/image/employeeM.png',
    description: 'made a simple employee managemnt system using C# in MAUI app and SQLlite  .',
    tags: ['C#','MAUI','SQLlite'],
   link: 'https://github.com/Aryan291003/EmployeeSystem',
     longDescription:"this project is my first ever project with front-end and back-end both. i have made a simple employee managemnt system using C# in MAUI app and SQLlite as database. it can perform basic crud operation like add, delete, update and view employee.",
    extraImages: ["/image/pdsec/e1.png", "/image/pdsec/e2.png"],
    
  }

]

export default projects
