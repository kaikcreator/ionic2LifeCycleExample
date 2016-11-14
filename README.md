# ionic2LifeCycleExample

This is a simple Ionic 2 example that shows the utility of navigation views life cycle events.

## Install instructions

1. Download
```
git clone https://github.com/kaikcreator/ionic2LifeCycleExample
```

2. Install dependencies
```
npm Install
```

3. Run ionic dev server
```
ionic serve 
```

## How the code works

Once the app is launched, there's a home view with a button in order to navigate to another view.
When the button is clicked, a view called MusicPage is loaded. This view overrides this lifecycle methods: 

* `ionViewDidLoad`: When this event is fired, the view loads a music file in memory
* `ionViewDidEnter`: When this event is fired, the music is played in bucle
* `ionViewWillUnload`: When this event is fired, the music is stopped.

So, when the view is entered for first time, the audio is loaded. Then it is played, and on pressing back button it is stopped.

