// .vitepress/config.js
export default {
    title: 'Ugreen NASync Guide',
    description: 'A comprehensive guide to Ugreen NASync',
    base: '/community-guide/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        // Add more navigation items if needed
      ],
      sidebar: [
        // Define your sidebar here
        {
          text: 'Introduction',
          items: [
            { text: 'What is Ugreen NASync?', link: '/introduction/what-is-nasync' },
            // Add more sidebar items
          ],
        },
        {
          text: 'Getting Started',
          items: [
            { 
              text: 'Official Beginner\'s Guide', 
              link: 'https://nas.ugreen.com/pages/nasync-series-beginner-guide',
              target: '_blank' // This makes the link open in a new tab
            },
            // Your other sidebar items...
          ]
        },
        {
        text: 'Advanced Guides',
        items: [
          { text: 'Accessing BIOS', link: '/advanced-guides/accessing-bios' },
          // ... other advanced guides
        ]
        }
        // Add more sections
      ],
    },
  }
  
