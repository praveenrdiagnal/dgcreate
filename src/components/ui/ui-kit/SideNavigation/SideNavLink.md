NavDrawer Link:

```js
const handleOnClick = () => {
  console.log("button clicked!");
}

<div className="bg-black p-6 flex flex-row">
  <SideNavLink
    title="Link One"
    onClick={handleOnClick}
  />
</div>
```