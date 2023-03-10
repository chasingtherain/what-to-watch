# What to Watch?

## About
What to Watch is a single-page application that recommends popular TV shows and movies to users based on IMDB ratings.

### Tech Stack

1. React
2. Material-UI
3. Vite
4. Zustand

### User Stories

* By selecting the tabs provided, a user can browse:
    * Movies or TV shows that are currently topping global charts
    * Most popular movies or TV shows of all time    
* Based on user's selection, they should see:
    * Current Ranking
    * Poster Image of Show (?)
    * Title of Movie/Show
    * Release Year 
    * IMDb Rating
    * IMDb Rating Count
    * Change in Rank
* A user can sort table result by clicking on table headers

## Planning and Development Process

The project was broken down to three general parts. 
1. TBC  

### Problem-Solving Strategy

_Divide and Conquer_. Split UI into it's atomic components and build them individually before merging them into _absolute units_ that provide value to end user (Thanks for reading! Check out [r/AbsoluteUnits](https://www.reddit.com/r/AbsoluteUnits/), the content is entertaining!).

### Lessons Learned

* Fetch data from Third Party API and perform async operations to display results on FE
* Operationalise micro state manager Zustand in a project
* Operationalise MUI's components such as data grid in a project
* Familiarise myself with frontend dev tool Vite



## API used

[IMDb API](https://imdb-api.com/api/)