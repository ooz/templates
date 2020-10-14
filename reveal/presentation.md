---
title: "Title"
separator: <!--s-->
verticalSeparator: <!--v-->
theme: white
revealOptions:
    controls: false
    transition: 'none'
    slideNumber: 'c/t'
---

<!--
Useful snippets (to be used in HTML comments after elements)

* Remove image border: .element style="border: none; background: none;"
-->

<!-- .slide: class="slidebackground" data-background="./background.png" -->
# Title IN YOUR FACE

**Oliver Z**<br/>
**Software Engineer**<br/>
[**abc@o.io**](mailto:abc@o.io)<br/>
[**github.com/ooz**](https://github.com/ooz)

**City, 9999-12-31**

Note: THIS IS JUST FOR ME! HAHA!

<!--s-->

## Plan with Fragments

1. First things first <!-- .element: class="fragment" -->
2. Second stuff second <!-- .element: class="fragment" -->
3. Third issues last <!-- .element: class="fragment" -->

Note: 4. Yawn

<!--s-->

### Slide

* **FAT** *italic* --nah--
* [Link](https://github.com/ooz)

> "Smart one ..." - Oliver

<!--v-->

#### Subslide with code

```javascript
evil(foo) {
    return bar => {
        return eviler(foo, bar);
    }
}
```

<!--v-->

### Subslide with table

|Head1 | Head2 |
|---|---|
|Oh? | Yeah!|
|Oh... | Yeah...|

<!--s-->

## Summary

<!--s-->

## Thank You!

<style>
.reveal .slidebackground {
  background: no-repeat center center fixed;
  background-size: cover; /* `contain` works nicely as well */
}
</style>
