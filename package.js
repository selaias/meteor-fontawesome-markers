Package.describe({
  name: 'selaias:fontawesome-markers',
  summary: 'Meteor Wrapper for fontawesome-markers (https://github.com/nathan-muir/fontawesome-markers) ',
  version: '1.0.0',
  git: 'https://github.com/selaias/meteor-fontawesome-markers.git'
});

Package.onUse(function(api) {
  api.addFiles('fontawesome-markers.js', 'client');
  
   if(api.export){
        api.export('fontawesome');
    }
});

Package.onTest(function (api) {
  // no tests 
});