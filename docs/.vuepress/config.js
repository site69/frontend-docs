module.exports = {
  title: 'site69/frontend-docs',
  description: 'Как писать фронтенд для Site69',
  themeConfig: {
    sidebar: [
      {
        title: 'Общее',
        collapsable: false,
        children: [
          '/technology',
          '/tools',
          '/workflow',
          '/requirements',

        ]
      },
      {
        title: 'CSS',
        collapsable: false,
        children: [
          '/styles-structure',
          '/utilities',
        ]
      },
    ]
  }
}