# Angular 2 Todo

This is a Todo MVC implementation, written in Angular 2.

What makes this different is that it is backed with ASP .NET Core, and Universal Angular, which enables server side rendering.  

# Getting started

1. Clone the repo
2. Run the following commands

```
dotnet restore
npm install
webpack --progress --colors --watch
dotnet run
```

Open your favourite web browser and point to `http://localhost:8080/`.

## Known issues
Universal Angular does not currently (at time of writing) support `localStorage`, so todo's are not saved between refreshes.  ([See GitHub Issue](https://github.com/angular/universal/issues/272))
