# Gilded Rose (Makers Academy week 10)

This Kata was originally created by Terry Hughes (http://twitter.com/TerryHughes). It is already on GitHub here. See also Bobby Johnson's description of the kata.

## The brief

Choose legacy code (translated by Emily Bache) in the language of your choice. The aim is to practice good design in the language of your choice. Refactor the code in such a way that adding the new "conjured" functionality is easy.

## Usage

### How to run program:

```
const brie = new Brie('Aged Brie', 10, 10);
const backStagePass = new BackStagePass('Music Concert', 10, 10);
const standardItem = new StandardItem('Pears', 10, 10);
const sulfura = new Sulfura('sulfura', 'n/a', 10);
const items = [brie, backStagePass, standardItem, sulfura];
gildedRose = new Shop(items);
gildedRose.updateStock();
```

### How to run tests:

```
jasmine
```

### Planning diagram:

<img src="images/jamboard-plan" alt="example usage" width="600"/>

I used Jamboard to model the program. Having initially been unsure about how best to extend the Item class, I ended up sticking quite closely to the initial JamBoard diagram.

## Planning diagram v2:

<img src="images/additional-diagram.jpg" alt="class diagram" width="600"/>

## Approach
