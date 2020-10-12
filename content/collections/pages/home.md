---
title: What is Grayscale Design?
updated_by: a7e1f0c0-2841-42b0-9aca-0e74156180eb
updated_at: 1599621220
id: ff60e2ef-e6f7-4918-901b-017fb765bbfd
---

<div class="mt-8 md:max-w-grp-5 rich-text text-xl leading-7">

## __Grayscale Design__ is a _Color Value-First_ approach for design.

__Color Value__ is one of the most important attributes of design and art. But... all too often it just gets discarded like a wet sock. 🧦 ewww... nobody wants that!

It's time to bring __Color Value__ to center stage! 🤘

<a href="/app" class="leading-6 mb-8 mr-4 inline-block transtion-all bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-full">Try Color Palette Generator&nbsp;&rarr;</a> or read on...

In web design/development, you hear a lot about making your websites more "accessible". And one aspect of that accessibility is making sure there's enough contrast between your background and your content. For example:

<div class="flex">
    <div class="py-half-7 px-7 bg-grayscale-900 text-gray-200">ALL THE FEELS!</div>
    <div class="py-half-7 px-7 bg-grayscale-300 text-gray-100">Y U HATE ME?</div>
</div>

Getting the right contrast is _super important_ for your design, and is easy to do if you're only using black and white... but getting the contrast just right with color is another story...


### __PROBLEM:__ Getting great contrast _using color_ is tough.

Without understanding color value well, picking colors is kinda like Bingo night without the glorious geriatric comradery. (Shout out to my Granny! Love you!) 

White text on a blue background (even a lighter blue) is likely going to have better contrast and readability than white text on a yellow background. 


<div class="flex text-white">
    <div class="py-half-7 px-7" style="background: hsl(220, 100%, 70%);">NOT TOO BAD</div>
    <div class="py-half-7 px-7" style="background: hsl(50, 100%, 70%);">I NEED HELP!</div>
</div>

### __SOLUTION:__ Don't use color.*

<p class="mt-0"><small class="opacity-50">* At least not at first. Let me explain...</small></p>

What if... you designed _everything_ in grayscale first... to get the contrast _just_ right. And then, you came back when you were done and swapped out those grays with colors _that had the same color value_?


Hold up... but can't you already do that with HSL (Hue, Saturation, Lightness) format? __TL;DR:__ Doesn't work _because_ "Lightness" _is not_ Color Value. Oh, by the way, it's pretty much the same story for HSV (Hue, Saturation, Value). 😿


__HSL Debunked:__ Both colors below have 70% Lightness, but the yellow-brown has a much lighter color value. You can tell by how easy it is to read the gray text on one and not the other. 🤦‍♂️

<div class="flex text-grayscale-600 hover:text-grayscale-400">
    <div class="py-half-7 px-7" style="background: hsl(50, 50%, 70%);">hsl(50, 50%, 70%)</div>
    <div class="py-half-7 px-7" style="background: hsl(0, 50%, 70%);">hsl(0, 50%, 70%)</div>
</div>

Not so easy, eh? You can't just swap one color for another and expect the same result... unless you use __Luminance__!

<br>


<div class="flex text-grayscale-600 hover:text-grayscale-400">
    <div class="py-half-7 px-7 bg-gold-500">gold-500 / #EAB436</div>
    <div class="py-half-7 px-7 bg-red-500">red-500 / #EAAEAB</div>
</div>

Here, the text appears to have the same contrast with the background because they have the same Luminance (or "apparent lightness" or "color value")! 

Using a consistent palette that's _Color Value-First_ and Luminance-Based makes finding good color combos WAY easier too. Finally, you don't have to fiddle with that color picker for eternity! 

As if it wasn't obvious enough already, the colors in the last example were generated (easily) using the <strong class="mx-4">grayscale <span class="text-gray-500">design</span></strong> [Luminance-Based Color Palette Generator](/app). You gotta [try it out](/app)! 🚀

...Wait, did someone say, "Bingo!"? 😜 


</div>
