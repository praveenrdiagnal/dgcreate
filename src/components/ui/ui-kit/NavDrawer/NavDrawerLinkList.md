NavDrawer Link:

```js
const links = [
  {
    'id' : '1',
    'title' : 'Home',
    'url' : '/'
  },
  {
    'id' : '2',
    'title' : 'Channels',
    'url' : '/channels'
  },
  {
    'id' : '3',
    'title' : 'Guide',
    'url' : '/guide'
  },
  {
    'id' : '4',
    'title' : 'Videos',
    'url' : '/videos'
  },
  {
    'id' : '5',
    'title' : 'Movies',
    'url' : '/movies'
  },
  {
    'id' : '6',
    'title' : 'Kids',
    'url' : '/kids'
  },
  {
    'id' : '7',
    'title' : 'Favourites',
    'url' : '/favourites'
  },
  {
    'id' : '8',
    'title' : 'Recently Watched',
    'url' : '/recently-watched'
  },
  {
    'id' : '9',
    'title' : 'Settings',
    'url' : '/settings'
  }
];

<div className="bg-black p-6 flex flex-row">
  <NavDrawerLinkList links={links} />
</div>
```