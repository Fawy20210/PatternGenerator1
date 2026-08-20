# How does it work?
It works by remembering the position and the direction every points is facing, and every iteration moving them by an fixed amount divided by the iteration, and then there is a chance for it to either add 1 more point facing left or right or add 2 more points, one pointing left, one pointing right.


## How to use it
Go to the [Github Page](https://fawy20210.github.io/PatternGenerator1/), and play around with the different values a bit.

## Parameters
### The width of the image in pixels: 
How wide the output image is supposed to be in pixels.

### The height of the image in pixels: 
How high the output image is supposed to be in pixels.

### Get random starting positions: 
If activated, you get to chose how many starting points there are, which will then be randomly spread.

#### Amount of starting points:
(If *Get random starting positions* is active) <br>
How many random points get generated. 

### Amount of iterations: 
How many time steps there will be, past 10-15 it is going to dramaticly slow down. (I think it kinda grows like this 2^n)
### Starting line length: 
How long the line sin the first iteration will be, all subsequent iteration will have a line length of startLength/currentIteration
### Line thickness: 
How thick the lines should be in pixels
### Transparent Background:
If activated, the background will have no colour, making it transparent. 
### Background color: 
(If *Transparent Background* isn't activated) <br>
The colour of the background.
### Line color: 
What colour the lines should be.
### The width of the preview in pixels: 
How wide the preview on the website should be in pixels
### The height of the preview in pixels:
How high the preview on the website should be in pixels

