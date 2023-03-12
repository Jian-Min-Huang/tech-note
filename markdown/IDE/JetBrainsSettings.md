##### key setting
* annotation
* maven settings
* indicator
* vm settings
* Run Dashboard <-> gradle import
* tab
* recent file
* keymap
* quick documentation
* build project automatically, Registry -> compiler.automake.allow.when.app.running, Save files
* Class count to use import with '*'

##### plugin
* lombok
* ranbow braces
* pmd
* checkstyle
* Lua

##### run tomcat
* Server
  * On 'update' action: Update classes and resources
  * On frame deactivation: Do nothing
* Deployment
  * xxx:war exploded
* Before launch
  * Build 'xxx:war exploded' artifact
  
##### gradle
```
If this is a Gradle module, please check the .idea project folder there is a gradle.xml

  <GradleProjectSettings>
    <option name="distributionType" value="DEFAULT_WRAPPED" />
    <option name="externalProjectPath" value="$PROJECT_DIR$/xxx" />
    <option name="gradleHome" value="/opt/gradle/gradle-2.13" />
    ......
  </GradleProjectSettings>
you should remove this entry and try to reimport your module
```

##### backup
```
In my case, I wanted to move project level data sources from phpStorm to DataGrip and this worked: mv my-project/.idea/dataSources dataSources.* ~/Library/Preferences/DataGrip2017.2/projects/default/.idea/

File based project, local configuration: .iws file
Directory based project, local configuration: workspace.xml file under .idea directory
File based project, shared configuration: .ipr file
Directory based project, shared configuration: .xml file under runConfigurations subdirectory of .idea directory

But if you go to the setup dialog of the run configuration (run configurations drop down > Edit configurations), 
there should be a checkbox "Share" right next to the name of the run configuration. 
What it does is that it stores the settings of that run configuration in the .ipr file (or in the .idea directory). 
If you share your project file with your team through version control, they'll have access to that run configuration as well. Hope that helps!

Export data source settings
Click File | Export Settings.
In the Export settings window, click Select None.
In the Export settings window, select Database: drivers, Database: settings, and Database: global sources.
In the Export settings to field, type a path to the folder where you want to store the settings.zip file.
```

##### webstorm
* Preference -> Directory -> Add Root Content (add exclude directory)
* Preference -> Version Control

##### unclassified
* Preferences -> Editor -> Appearance -> Show right margin
* Preferences -> Editor -> Code Style -> Right margin
* Preferences -> Editor -> Code Style -> Line separator
* Preferences -> Editor -> Inspections -> Spring -> Spring Core -> Code -> Autowiring for Bean Class
* Editor -> Inspections -> Serialization Issues
* Editor -> Inspections -> Spring -> Srping Core -> Code -> Autowiring for Bean Class
* Tools -> Terminal -> Application settings -> Shell path -> /bin/zsh