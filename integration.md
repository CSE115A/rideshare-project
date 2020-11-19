# Rideshare Price Comparer 
## Integration Document


This document outlines the interactions between each component in the Rideshare Price Comparer. The components are as follows:

* ### Front-End
    * 2 Address Boxes
    * The "Compare!" Button
    * Google Map
* ### Back-End
    * Autocomplete Function
    * getGeocode()
    * getUberLyftPrices()


Verbatim/paraphrasing from Isai: 

The autocomplete function is called whenever there is a key typed up and it'll display the predictions. Once a user clicks on a location, getGeocode() will be called and it will make a backend call to getUberLyftPrices(). The prices returned from getUberLyftPrices() will be displayed in the front end.
    