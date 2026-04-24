// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-beginning-of-my-internship-at-labri-university-of-bordeaux-with-nathanaël-fijalkow",
          title: 'Beginning of my internship at LaBRI, University of Bordeaux with Nathanaël Fijalkow.',
          description: "",
          section: "News",},{id: "news-beginning-of-my-internship-at-sapienza-university-of-rome-with-giuseppe-perelli",
          title: 'Beginning of my internship at Sapienza University of Rome with Giuseppe Perelli.',
          description: "",
          section: "News",},{id: "news-beginning-of-my-second-internship-at-sapienza-university-of-rome-with-giuseppe-perelli",
          title: 'Beginning of my second internship at Sapienza University of Rome with Giuseppe Perelli....',
          description: "",
          section: "News",},{id: "news-beginning-of-my-internship-at-lis-marseille-with-pierre-ohlmann",
          title: 'Beginning of my internship at LIS Marseille with Pierre Ohlmann.',
          description: "",
          section: "News",},{id: "news-beginning-of-my-phd-first-year-at-sapienza-university-of-rome",
          title: 'Beginning of my PhD, first year at Sapienza University of Rome.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
