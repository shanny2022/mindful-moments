# WEB103 Project 1 - Mindful Moments

Submitted by: **Shuntoria Reid**

About this web app: **Mindful Moments is a list-based web app that shares simple mental health self-care tips for busy students. Users can browse different self-care activities and click each one to learn more about how it can support stress relief, focus, and emotional wellness.**

Time spent: **X** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as as `localhost:3000/tips/journaling` and `localhost:3000/tips/deep-breathing`**
  - [x] **When showing this feature in the video walkthrough, the unique URL for each detailed view is shown**
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] The app includes a clean card layout, detail pages, a back-to-home link, and custom styling.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='YOUR_GIF_LINK_HERE' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Kap**.

## Notes

One challenge I encountered was making sure each self-care tip had its own unique detail page. I solved this by using Express route parameters and matching each URL id to the correct item in my data file.

## License

Copyright 2026 Shuntoria Reid

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
