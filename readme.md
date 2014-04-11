# A coverflow-like jquery plugin.

## How to use

html:

```
<ul id="demo">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

js:

```
$('#demo').skywheel();
```

## Notice

Requirements: jquery

Browsers: Firefox / Chrome / Safari

There must be >= 5 <li> elements in the list!

## Options

```
default = {
    type: "normal",
    sizex: "100px",
    sizey: "40px",
    effect: 1,
    keyOption: "leftright"
};
```

- type
  - "normal" : default optioin
- width : the width for each element
- height : the height for each element
- effect
  - 1 : vertical type
  - 2 : horizontal type
- keyOption
  - "updown" : use up or down key to switch elements
  - "leftright" : use left or right key to switch elements
  - "nokey" : do not bind key handler
