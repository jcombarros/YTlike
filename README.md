# YTlike
Simulation of red progress bar in youtube videos

Task: Options selector with YouTube-like progress bar.

Preliminary:
- go to youtube.com and see the 'red progress bar' at the top of a page, which is running from left to right whenever any video/link is chosen. We refer this progress bar in the rest of the document as YTlike progress bar.

Main description:

Please write a single HTML page which has the following functionality.

- page always adjusts to a size of a browser window (with minimal width fixed to 400px) and height fixed to 300px
- page is split to a 'top toolbar' (where 'options' are displayed) and 'content' (rest of the page)
- the 'top toolbar' is at least 50px high and is split into 4 equal parts called 'option placeholders' (boxes - side by side - whole boxes clickable)

- the 4 'option placeholders' for options on top of a page behave as follows:
-- 'All' option is selected by default
-- 'All' option is exclusive to other options but other options are not exclusive to themselves and behave like 'toggle options' (if one is selected it can be unselected and vice versa)
-- always at least one option must be selected (either 'All' or any combination of other options - Opt1 or Opt1+Opt2 or Opt2+Opt3 or Opt1+Opt3 or Opt1+Opt2+Opt3)
-- selecting any of other options shall automatically deselect 'All' option
-- selecting 'All' option shall automatically (if not selected currently) deselect all other options
-- current selection state (if option is selected) is represented by making the option text bold (at least)
- whenever options selection state is changed the 'content' of a page get updated with the current state of selection
- the 'content' is updated NOT IMMEDIATELY - but with a delay of 3 seconds - in which time a YTlike progress bar is run from left to right
- the YTlike progress bar (the "=" character on the example layout above) runs just below the 'option placeholders'
- whenever options state is changed by user during the running of the progress bar, current run of a progress bar is reset and starts countdown again (for the new selection, only if it actually changed)

Technical details:
- YTlike progress bar does not have to be as fancy as in YouTube - a 3px-high line running (smoothly) from left to right is enough

Technical limitations:
- only jquery can be used (and linked e.g. from https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js url) as an external resource
- the rest shall be implemented using plain html, css, javascript (embedded in the page)
- the animation of progress bar shall be implemented purely in javascript (NOT using css transitions)
- no html 'tables' shall be used


Extra:
- count and values of active options is configurable by page url 'hash'. E.g. adding "#red|blue" to page url will cause to page to have only two options: "red" and "blue" (third box is empty)
