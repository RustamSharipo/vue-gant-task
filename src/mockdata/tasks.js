const tasks = [
    {
      id: 1,
      label: 'Make some noise',
      user:
        '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
      start: getDate(-24 * 5),
      duration: 15 * 24 * 60 * 60 * 1000,
      progress: 85,
      type: 'project',
      //collapsed: true,
    },
    {
      id: 2,
      label: 'With great power comes great responsibility',
      user:
        '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
      parentId: 1,
      start: getDate(-24 * 4),
      duration: 4 * 24 * 60 * 60 * 1000,
      progress: 50,
      type: 'milestone',
      collapsed: true,
      style: {
        base: {
          fill: '#1EBC61',
          stroke: '#0EAC51',
        },
        /*'tree-row-bar': {
          fill: '#1EBC61',
          stroke: '#0EAC51'
        },
        'tree-row-bar-polygon': {
          stroke: '#0EAC51'
        }*/
      },
    },
    {
      id: 3,
      label: 'Courage is being scared to death, but saddling up anyway.',
      user:
        '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
      parentId: 2,
      start: getDate(-24 * 3),
      duration: 2 * 24 * 60 * 60 * 1000,
      progress: 100,
      type: 'task',
    },
    {
      id: 4,
      label: 'Put that toy AWAY!',
      user:
        '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
      start: getDate(-24 * 2),
      duration: 2 * 24 * 60 * 60 * 1000,
      progress: 50,
      type: 'task',
      dependentOn: [3],
    },
  ];
