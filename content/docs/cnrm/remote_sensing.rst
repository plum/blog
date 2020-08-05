---
title: Remote Sensing
author: John Plumridge
date: 2001-12-29
weight: 8
---

.. contents:: Table of Contents
   :depth: 1
.. sectnum::

Remote sensing includes all methods, from aerial photography to satellite radiation sensing.

Radiation patterns are interpreted to give useful information of landscape perspective. Absorption spectra of soils, rocks and vegetation differ, and knowledge of these differences enhance interpretation and use for planning.

Remote Sensing and GIS
======================
These are complementary systems and the software processes both. Can be used to answer quickly, quantitative questions of consequence to directives and grants.

* Ordnance survey maps may be based on aerial photographs and produced on computer processors
    * Many are available on GIS data collections
* Historical maps can aid interpretation
* Digital cartography differs from GIS, as it is simple manipulation.
* GIS produces new information through overlaying different information (e.g. polygon overlay)
* Data to a resolution of within a few cm is typically fed into GIS systems, these days.

Viewpoints and Surveys
======================
Data to a resolution of within a few cm is obtained through satellite sensors and complimentary methods.

High Viewpoint
--------------
* 36,000 km.
* Geostationary, following the earth's orbit. The view remains the same. For weather observation.
* Eg. at 36,000 km : GOES E, GOES W, MeteorSat. Views the globe. Crude. Global. Initially for clouds, but views plantations.

Polar/Earth Orbiting
--------------------
* 700 to 1000km. Regional.
* Sees fields, forests, urban patterns.
* E.g. LANDSAT, ERS1, RADARSAT

These have their own orbits, observe different zones. They observe changes over time, e.g. every 16 days or so in a repeat cycle.

Ariel Photographs
-----------------
* 10,000m to 1000m.

Photography
-----------
* 2m

Ground Surveys
--------------
* 1cm
* Radiometers: amount and quality of light, E.g. from a leaf.
* High resolution.

Surveys
-------
* Several technologies may be used in a survey, eg. LANDSAT to spot forests. Then, dig out ariel photographs     


Remote Sensing Basics
=====================
Radiation is measured and interpreted to give useful information of landscape perspective. Absorption spectra of soils, rocks and vegetation, do differ, and knowledge of these enhance interpretation.

Uses
----
- interpretation
- stratification
- classification
- estimations of biomass from aerial stereo photographs, E.g. timber volumes.

Radiation
---------
Light varies throughout the day in colour and intensity; it varies seasonally, apart from at the equator. In Summer, the Sun's declination is higher. In Winter, its declination is lower.

- *Reflectance:* is proportional
- *Radiance:* is the absolute amount of reflected light.
- *The Sun:* Natural radiation: visible and middle red; thermal infra red.
- *Synthetic radiation:* Microwave or radar passes through clouds (i.e. an all weather system).
- *Ultraviolet:* (low end UV) frazzles plants and burns skins in spring when the hole in ozone layer opens

Spectral Response of Green Vegetation
-------------------------------------
'Red Edge'... the absorption spectrum from visible red to infrared
These two bands are the most important for vegetation.

.. image::  ../images/RemoteSensing1.jpg


Absorption Spectra
==================

Ultraviolet and Infrared Data
-----------------------------
.. image::  ../images/RemoteSensing2.jpg

Infrared Film
.............
*False colour infrared film:*

* The strongest signal of absorption (by vegetation) is infrared (45% reflectance), and is thus seen as Red and also about 1/3 blue (15% reflectance), so the colour approaches purple.
* Blue light is filtered out of the lens by a 'Ratan Filter'. (note: light meters use blue light, therefore adjust with tests).
* Vegetation when stressed gives 'pre-visual changes'... ie. is seen sooner. e.g. fungal attacks; drought stress; nutrient stress. The peak at 45 drops away when wilting, therefore the colour changes towards magenta/purple from cherry red, in infrared film in GIS sensors.
* Infrared can estimate grasslands and biomass.

Wavelength Range of Sensors
---------------------------
* Waveband in series are chosen as bands; e.g. band 2 and band 1, to be useful.
* The French 'SPOT' chose just 3: green, red and infrared for observing everything on the planet.

Combining red and infrared
--------------------------
* The two are given different values; IR/R gives a simple vegetation index.
* At 3 = healthy vegetation
* At 2 = stressed vegetation
* Normalised vegetation index: (IR-R)/(IR+R) this virtually measures the length of the red edge.


Low frequency Light
-------------------
* Below visible light is low frequency. Most is absorbed by the atmosphere. This gives the blue haze, scattered light. It doe snot have much information content for scientists, or use for vegetation.

Absorption Spectra of Species
=============================

Between species differences
---------------------------
* A real and measurable difference exists in the absorption spectrum of the species. This gives indication of Broadleaf vs. conifers by qualitative measures of reflectance at all points of the spectrum.

Within species differences
--------------------------
* Eg. young and old leaves (and thus, mature canopy and young canopy). This is a seasonal attribute. The young leaf has less absorption in infra-red absorption areas.

Absorption Spectra of Soils
---------------------------
.. image::  ../images/RemoteSensing3.jpg

RS can only detect what is on the surface. Absorption generally increases with wavelength. Differences exist. Gypsum has a very uncharacteristic spectrum due to the presence of minerals, and is used by mineral prospectors.

* Moisture content: darkens, polarises.
* Iron Oxide: absorbs green, reflects red. (Opposite of plants)
* Organic matter darkens
* Texture: rough or diffuse
* Structure: sand, smooth, specular, polarising


