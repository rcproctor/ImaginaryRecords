Writing Testable Apps with Yeoman
=================================

This is the source code for the sample application from the [Writing Testable Apps With Yeoman] [1] presentation at the  July 10, 2013 Denver AngularJS Meetup. The purpose of the app is to demonstarte the use of [Yeoman] [2] to create a testable, well structured [AngularJS] [3] application, provides examples of integrating testing with [Grunt] [4] and [grunt-karma] [5], and provide general purpose configuration of the [Karma] [6] test runner.

Prerequisites
-------------
Before the application can be run locally, the following steps are required:

1. [Install Yeoman] [7]
2. [Install Karma] [8] - **Not required but helpful when using Karma outside of Grunt**

It's also a good idea to take a look at both of the [Yeoman] [2], [Karma] [6] web pages to get familiar with the core concepts.

Once these items are installed, and the source code has been cloned, change to the ImaginaryRecords directory and run: <code>npm install</code>

followed by:

<code>bower install</code>

Once this is done, you should be able to run the application locally using:

<code>grunt server</code>

while in the ImaginaryRecords directory.

Scaffolding
-----------
The application uses [Yeoman] [2] to scaffold an [AngularJS] [3] application. The scaffolding component of [Yeoman] [2] is known as [Yo] [12], and it leverages a concept known as [generators] [9], or project templates. One of the out-of-the box generators is [generator-angular] [10], which will scaffold out a new AngularJS application. This sample application was generated using the [generator-angular] [10] template. Each of the pages in the app were generated using:

<p><code>yo angular:route "myroute"</code></p>

This will leverage the [generator-angular] [10] scaffolding to update the route definitions in app.js, generate a new controller, a new view, and a new unit test.

Testability
-----------
Some important changes were made to the code generated by [Yeoman] [2] to support e2e testing:

First, The Gruntfile.js file changed the 'karma' task to the following: <code><pre>karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      },
      e2e: {
        configFile: "karma-e2e.conf.js",
        singleRun: true
      }
    },</pre></code>

This allows us to use <code>grunt karma:unit</code> or <code>grunt karma:e2e</code> to run unit or e2e tests respectively. The *karma-e2e-conf.js* file adds additional configuration that allows for use of the [AngularJS Scenario Runner] [11]

Finally, the following was added to the *karma-e2e-conf.js* file: <code>
<pre>
// Keep this in sync with localhost port in Gruntfile.
proxies =  {
    '/': 'http://localhost:9000' 
  };</pre>

<pre>urlRoot = '/__e2e/';
</pre></code>

This allows open browsers navigate to http://localhost:9000/__e2e for socket.io connections from karma. This allows browsers on remote machines (like an iPad) to connect to Karma using this configuration.

[1]: http://www.meetup.com/AngularJS-Denver/events/124409462/   "AngularDenverJS Meetup #2"
[2]: http://yeoman.io/                                          "Yeoman"
[3]: http://angularjs.org/                                      "AngularJS"
[4]: http://gruntjs.com/                                        "Grunt"
[5]: https://github.com/karma-runner/grunt-karma                "grunt-karma"
[6]: http://karma-runner.github.io/0.8/index.html               "Karma"
[7]: https://github.com/yeoman/yeoman/wiki/Getting-Started      "Yeoman - Getting Started"
[8]: http://karma-runner.github.io/0.8/index.html               "Karma"
[9]: https://github.com/yeoman/generators                       "Yeoman Generators"
[10]: https://github.com/yeoman/generator-angular               "generator-angular"
[11]: http://docs.angularjs.org/guide/dev_guide.e2e-testing     "Angularjs - e2e Testing"
[12]: https://github.com/yeoman/yo                              "Yo"
