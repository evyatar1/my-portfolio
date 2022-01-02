const header = {
    title: 'Evyatar Hen',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Evyatar Hen',
    role: 'Software Developer',
    description:
      'Computer Science graduate from Tel-Hai College, Interested in a full-time position as a Software Developer. I am a hardworking and ambitious person, highly motivated to learn new technologies, develop and integrate into software teams, dedicated, tolerant, attentive and serious worker with a great passion for programming.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/evyatarhen/',
      github: 'https://github.com/evyatar1',
    },
  }

  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Polynomial',
      description:
        'Application for maintaining and managing polynomials, the app permits several operations like add, delete or update polynomials with the option to view the graph.',
      stack: ['JAVA', 'ANDROID'],
      sourceCode: 'https://github.com/evyatar1/Polynomial',
      livePreview: 'https://github.com',
    },
    {
      name: 'Movie-app',
      description:
        'This is a search movie app. This app is build with React JS , Bootstrap and CSS. also using OMDb API for fetching the data.',
      stack: ['HTML', 'CSS', 'React'],
      sourceCode: 'https://github.com/evyatar1/movie-app',
      livePreview: 'https://github.com',
    },
    {
      name: 'Tic-Tac-Toe Game',
      description:
        'simple Tic-Tac-Toe game using HTML/CSS/JavaScript.',
      stack: ['CSS', 'HTML', 'JavaScript'],
      sourceCode: 'https://github.com/evyatar1/Tic-Tac-Toe-game',
      livePreview: 'https://codepen.io/evyatar1/pen/KKvVLwB',
    },
  ]



const skills = [
    'Java',
    'C',
    'C#',
    'JavaScript',
    'HTML',
    'CSS',
    'Android',
    'C++',
    'React',
    'SQL',
    'Python',
    'OOP',
    'Github',
  ]
  
  const contact = {
    email: 'evyatar037@gmail.com',
  }
  


  export { header, about, projects, skills, contact };