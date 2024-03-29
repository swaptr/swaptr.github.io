---
title: 'GSOC: Week One'
date: '2021-06-14'
author: 'swaptr'
description: 'This blog post sums up my first week at KDE Community during the Google Summer of Code 2021.'
categories: [gsoc, kde]
published: true
image: '/images/gsoc.png'
sponsor: 'Google Summer of Code'
---

So last blog we finished on the kdereview thing. I remind you this because a lot of work this week would end up being related to issues raised in the kdereview.  
We started by fixing issues with the color of the HeaderBar, a lot of which were basic fixes in accordance to KDE visual guidelines. Now that we had people from the VDG involved, we could now hope to better insights into the graphical aspects of the app. Another fix that I had to add was to shrink the sidebar when the app is in a narrow mode and expand otherwise.  
To get started with the Streaming support, I decided to use the GStreamer package and tried building on of its QML examples, to run the example, I had to set up a custom GStreamer build which I must tell is a pain.  
I then had to start working on one of the kdereview issues which was to highlight the currently opened page. Now this would be a simple fix but we decided to venture into a better and more effective method page handling. Initially the solution was to use a simple Kirigami Pagepool, pushing and popping page at will, and just keeping track of the currentPage, but we could not incorporate an effective highlighting strategy here. So I decided to spring up a more "smarter" (i am guessing :P) way of only pushing-only-the-pages-that-would-make-sense, in this way we would have the reference to the base page and we could highlight it as per the users choice. So the catch here is that the pages related to individual feeds need you provide the feed reference as a required property, same as with the EntryPages. So now, not only would we need to have a reference to the Root page, but also to the individual Feed and Entry pages, and then to the pages themselves. This was done by implementing two functions getPage() and pushPage(), where the former would return an instance of the page, and the latter would take arguments in the form of a list of pages and their properties and then accordingly push those pages onto the stack. With hindsight the subsequent week was denoted to successive refactorings to keep in check for several properties.  
Later this week I started looking into the content discovery issue and designing the frontend of the application. We are using the GPodder Search API so we would need some way to manipulate the .OPML files returned from the search, I had inputs from Bart and Tobias as to how to prepare the C++ backend of the code and I prepared another MR with tooltips and keyboard navigation. So the progress is slightly slower for now but its only the start and I expect to pick the pace soon enough. :)
