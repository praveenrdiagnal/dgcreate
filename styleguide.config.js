const path = require('path');

module.exports = {
  title: 'Diagnal CREATE',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Header',
      content: 'src/components/ui/ui-kit/Header/Header.md',
      components: 'src/components/ui/ui-kit/Header/*.js'
    },
    {
      name: 'HeroSection',
      content: 'src/components/ui/ui-kit/HeroSection/HeroSection.md',
      components: 'src/components/ui/ui-kit/HeroSection/*.js'
    },
    // {
      // name: 'Footer',
      // content: 'src/components/ui/ui-kit/Footer/Footer.md',
      // components: 'src/components/ui/ui-kit/Footer/*.js'
    // },
    {
      name: 'Rails',
      content: 'src/components/ui/ui-kit/Rails/Rail.md',
      components: 'src/components/ui/ui-kit/Rails/*.js'
    },
    // {
      // name: 'Grid',
      // content: 'src/components/ui/ui-kit/Grid/Grid.md',
      // components: 'src/components/ui/ui-kit/Grid/*.js'
    // },
    // {
      // name: 'NavigationDrawer',
      // content: 'src/components/ui/ui-kit/NavigationDrawer/NavigationDrawer.md',
      // components: 'src/components/ui/ui-kit/NavigationDrawer/*.js'
    // },
    // {
      // name: 'Details',
      // content: 'src/components/ui/ui-kit/Details/Details.md',
      // components: 'src/components/ui/ui-kit/Details/*.js'
    // },
    // {
    //   name: 'Player',
    //   content: 'src/components/ui/ui-kit/Player/Player.md',
    //   components: 'src/components/ui/ui-kit/Player/*.js'
    // },
  ],
  require: [
    path.join(__dirname, 'src/index.scss')
  ],
  assetsDir: 'public'
}