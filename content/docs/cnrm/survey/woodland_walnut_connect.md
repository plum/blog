---
title: Establishing Walnut and Connecting Woodland
date: 2002-03-29
tags: [woodland] 
Author: John Plumridge
---


Objectives
==========
To find suitable sites within the Snowdonia National Park for provenance trials with walnut trees. 

The trees are to be grown for timber and fruit and contribute to sustainable and biodiverse land use systems with structured woodland corridors.


Introduction, Land-use Diversification, Wales
=============================================
UK farming is experiencing problems of economics and sustainability. This includes ‘*less favoured*’ areas, which cover much of Wales.

Less favoured areas are over 240 metres, a category of hills and uplands which are less suitable for arable farming and prime pasture. Uplands represent 32% of Britain.

The Welsh uplands produce hardy stock and their role is important in the overall sheep farming system. They are considered to be overstocked by conservation bodies. Keeping the status quo as a production system or museum is unsustainable. It is probably undesirable overall. Diversification has a number of avenues. Productive woodlands can be profitable on some uplands.
Farmers’ strategic decisions may favour diversification. They need the best available advice in making changes. Alternative low intensive, bio-diverse, silvo-agriculture brings long term benefits and are appealing. Farmers need alternative income to headage payments.

There are funding issues however, with loss of headage subsidies, and lack of agricultural and forest integration, with policy divides. Land use modification Incentives for trees are aimed mainly at fenced large continuous woodland. Policy levers lies in the hands of NAW, and Manweb, Maff and Mentor Powys and Tir Gofal (meaning, '*land Care*’) in administering the Woodland Grant Scheme. Most land is "*undesignated*" status. These problems are increasingly recognised, along with the fact that tourists visit Wales for reasons of nature, biodiversity and woodland. 

*A Shelterwoods Trees Scheme* is part of an agroforestry initiative, to allow dispersed trees on farmland for animal welfare and biodiversity. They do not have to be fenced, and so do not consequentially increase stocking densities. Individual trees may need protection in their early establishment.


Prevalence of Walnut
====================
*Origins of the Walnut lies in Central Asian Himalayas, China, Kyrgyzstan, the Caucasus and, Persia.* 

Moldavia
--------
Since the 1970's Walnut trees have only been planted in agroforestry systems such as protective strips of 1-2 rows, in alleys for soil protection, along roads, around farms, along irrigation canals and around field borders (spacing in alleys at 8-10m). These are now well developed, have strong balloon shaped crowns, fruits well and are not prone to pests and disease.

Kyrgyzstan
----------
Nut fruit forests form a forest zone within the altitude band of 800-2400 m above sea level (walnut, pistachio, *malus spp.*, *pyrus spp.*) 
In Snowdonia, 'Farm Garden Mix' final crop : apple and plum, holly, Noble fir. in leaf for two months in the summer

Europe wide
-----------
Walnut is considered indigenous in mainland Europe, now.

Switzerland
------------
Provenance trials were established in several parts of Switzerland just after the First and Second World Wars. They were not successful and abandoned early on, with one exception. It was clear the genetic material was poor. It is believed that the genetic material has deteriorated in Europe because of selection for fruit growing in orchards. Great variety in germplasm exists in the natural fruit forests of Central Asia. This is suitable for trials.
Now Switzerland aims to create highly structured, economically valuable and biologically diverse forests using walnut. Other functions include the protection of dangers found in alpine country, such as erosion, flooding, avalanche, and nature conservation. At lower elevations (below 800 m above sea level) sites are fertile and provide excellent growing conditions for broadleaf timber such as oak (*quercus spp.*), ash (*fraxinus excelsior*), maple (*Acer spp.*) and cherry (*Prunus avium*). Small provenance experiments in Britain were not conclusive (Kerr 1993).

Germany
-------
It is grown between latitudes 44 and 52o N. (Rebmann 1912).

United Kingdom
--------------
Grown everywhere except the Scottish Highlands but most frequently in Lincolnshire, S.Yorks, Devon, Somerset, Dorset (Mitchell & Joblin 1984). Sheltered mid slope south or south west aspect. Where Beech grows. Soils to be avoided are light sandy or heavy soils, shallow soils, peaty soils damp situations (Klemp 1979).  


Benefits of Walnut
==================
Walnut (*Juglans regia*) is interesting because it may contribute to a high biodiversity and higher value production. Suitable for top storey of multi-storey systems, walnut’s fruits are nutritious. The plant has medicinal properties. The timber is valuable. It is used in silvopasture, offering livestock shade and protection, as well as excellent forage for livestock.. 

Its fruits were carried by the Roman Army. The Romans are perhaps responsible for naming British people '*Welsch*', meaning keepers of the welsch, the Germanic name for the walnut tree, and the name given to walnut-growing people and district in North Italy today.

Walnut has medicinal properties. Bark and leaves have alterative, laxative, astringent and detergent properties. It is used for skin troubles (E.g. herpes, eczema), and as a purgative for irritable bowel. It is said to delay hardening of arteries, indigestion, eczema, inflamed eyelids

Walnut has other uses: Crushed walnut leaves are an insect repellent. Its oil was once used instead of butter and olive oil in France, and it is popular as salad and cooking oil. The husks produce a dark yellow dye for colouring wood, hair and wool. It was used by fictional heroes for disguise. The lemon scented leaves deter insects. In England and Wales, horses were once commonly rested under Walnut trees away from annoying flies. 

Timber Properties
-----------------
Walnut timber is pliable, has high tensile strength, medium weight, fine and fibrous but inelastic it requires long seasoning it is easily worked, polishes well. Trees were lost to Britain with imports and fashions in mahogany.

Timber Value
------------
Walnut produces the most demanded and valuable timber. Its price has been stable for the last fifty or more years. Prices are always at least three times as high than for oak or cherry. Walnut is faster growing than all other high quality timber. Stems of 60 cm at breast height may be produced in a 60 to 70 year rotation. Cherry and ash need 80-90 years and oak 140-50 years. Thus compared to oak 200% of volume and 600% of value in the same time.

Why Is Walnut Not Grown?
------------------------
Walnut is not considered a forest tree. Naturally seeded walnuts trees have often not fulfilled hopes and expectations. Experience regarding its management is rare. 


Solving the Problem, Connecting Walnut
======================================

*A Three Stage Process:*

*  Determine suitable land for upland conversion and walnut.
*  Prepare a sub-map to determine where existing woodland may be connected.
*  Add context to a final map, the location of rivers, farmsteads and contours.

MFworks GIS Programme
=====================
The GIS rasta-based programme 'MF Works 2.63' was chosen. Mac OS 7-9. (Also PC versions). Map Info & Arc Info compatible. Available from Canadian firm Keigan Systems Inc.. It is downloadable. Price approximately $900 Canadian in 2001. Developed from MAP II and MapFactory. Fully supported.

MF Works has a pull-down menu system and a script system. It is possible to learn the scripts, as these are provided while using the menu.
The script for this cartographic design follows.

Fig 1. Table: Functions in Iddrissi and MFworks Compared.

============ ======== ==================================================== 
Iddrissi     MFworks  Comments 
============ ======== ====================================================
fuzzy        orient   
crosstabs    cross    
surface      grade    
window       subscene 
reclass/ass  recode   boolean 'constraint mapping' in MFworks
*none*       spread   Functions to define distance zone from target pixels
distance     clump    
overlay      cover    (+ 'reclass') boolean constraint mapping in Idrissi
============ ======== ====================================================
                     

Determining Suitable Land
=========================
A map was required with the following characteristics: potentially suitable soils, below a maximum altitude of 600 metres, facing in a southerly aspect, and on slopes within a specified slope of between 5 and 35%. 

Use of Ecological Site Classification(ESC) and Natural Vegetation Class (NVC) is a way of proceeding. These are entered into a GIS system. However, for walnut trials, the ESC is not definite in the UK. Instead, parameters were taken from research world-wide. Area data files were used for land use, soils, and demography, from the dataset 'SNP', covering Snowdonia National Park, North Wales. Refer to Appendix: '*Map Legends*' for full legend, before the extraction sub-maps. 

*A map was prepared in six stages, as follows:*

A gradient map and an aspect map
--------------------------------
*Two maps were prepared from a demographic rasta map, 'SNPdem', with the following script:*

* SNPgradient  =  grade SNPdem
* SNPaspect  =  Orient SNPdem


Map Display 1: Determining suitable land for upland conversion and walnut.

.. image::  ../images/SNPWN2.jpg 


Desired slope was set at between 5 and 35% slope
------------------------------------------------
The desired aspect was set between south ( = 4) and south east ( = 5) facing slopes. This includes a 45 :sup:`o` overlap either side of each direction, i.e between E (90 :sup:`o`) and SSW (225 :sup:`o`). These were chosen because of the Sun's path, east to west, and the desire for morning sun in particular.

* SNPWNslope  =  ( SNPaspect = 4) OR ( SNPaspect = 5) AND ( SNPgradient > = 5) AND (SNPgradient < = 35) AND (SNPdem < 600)


Four categories of soil were selected from seventeen
----------------------------------------------------
 .. image::  ../images/SNPWN3.jpg

These were categories 3-6 in the 'SNPsoil' rasta data map (see Appendix 1: Legends), and their areas in hectares were calculated. Note: The 'BuildText' command copies the legends from donor to component map.

* SNPWNsoil = Recode "SNPsoil" Assigning 3 to 3, Assigning 4 to 4, Assigning 5 to 5, Assigning 6 to 6 BuildText



Boolean search to determine the suitable soil
---------------------------------------------
Our two prepared maps were maps were interrogated, to select only those areas of suitable soils which were found in the correct aspect The aspect map was used as a Boolean mask, with just two codes ('SNPaspect' code  = 1, void  = 0).

* SNSPWNground =  Cross SNPWNsoil AND SNPWNslope Assigning 3 to 3 with 1, Assigning 4 to 4 with 1, Assigning 5 to 5 with 1, Assigning 6 to 6 With 1


Remove noise
------------
The pixels in the maps represent 40 m :sup:`2` on the ground. A certain amount of 'noise' is introduced when coupled to vegetation survey techniques. Thus scatted pixels need to be grouped (command: 'clump'), and the isolated pixels or, 'noise' removed.

For the purpose, areas of less than two hectares were removed by creating a Boolean mask ('WNg4') from the map 'SNPground'. The map WNg4 was then crossed back to remove undesired areas (coded 0) from SNPground,, the desired areas' value = 1 being reassigned with values for each soil class so as not to lose information on soil type.

* WNg2 = Clump SNPWNground
* WNg3 = Measure WNS2 Hectares Ignore Void
* WNg4 = (WNS3 > = 2) AND (WNS3 < 600)
* SNPWNsite = Cross WNSite AND WNS4 Assigning 3 to 3 with 1, Assigning 4 to 4 with 1,
* Assigning 5 to 5 with 1, Assigning 6 to 6 With 1
* The difference of (18807 - 17748)  =  1,059 ha. were removed.



Place selected soils on a silhouette, "Base Map"
------------------------------------------------
The resulting map, SNPWNsite, was then placed on a silhouette, 'Base Map' in order to define the whole of SNP, and highlight the selected soils. Before Covering the 'Basemap' I geo-referenced the map using six co-ordinate points from the OS map for Snowdonia. These and the error is are given as follows:

* BaseMap = Recode landuse Assigning 1 to 1,
* SNPWNsuit =  Cover BaseMap With SNPWNsite
    * 1. 72/844 377800/277400
    * 2. 860/1160 360100 / 281200
    * 3. 528 / 324 59800 / 256600
    * 4. 372/508 3657/363955
    * 5. 344/812 36700/376600
    * 6. 676/ 1040 23537/3852

**Margins of Error**

* *Avg. error:* R: 0.000017 C: .000006*
* *Max error: R: 0.000001 C: .000009*     


Connecting Woods
================
Existing woodland is to be connected by walnut where suitable conditions exist.

*Four stages accomplish the task:* 

Prepare a Subscene of the Whole SNP
-----------------------------------
The vegetation map (SNPlanduse), was prepared using phase 1 mapping and NVC, in conjunction with aerial photographs and OS land surveys.

* FPTWNsu = Subscene SNPWNsuit Rows 493...795 Columns 409...784
* FPTcontours = Subscene Contours_50 Rows 493...795 Columns 409...784
* FPTrivers = Subscene SNPrivers Rows 493...795 Columns 409...784
* FPTlanduse = Subscene SNPlanduse Rows 493...795 Columns 409...784 *Field Provenance Trials (FPTL)*

MAP DISPLAY B.1:Preparing a sub-map where existing woodland may be connected. 
.. image::  ../images/SNPWN4.jpg

Determine Where Existing Woodland May Be Connected by Plantings
---------------------------------------------------------------
Five categories of woodland were selected from the land-use map.

.. image::  ../images/SNPWN5.jpg

The areas were categorised as value = 7, and the woodland zones spread to 500m. This creates a zone of 500m around the woods (Value = 40).

'Spread' is a command to expand the area adjoining the target pixels. The spreading operation after selecting a woodland mask made the task of clumping pixels and masking for noise unnecessary.

* FPTwoodland = Recode FPTlanduse Assigning 7 to 1...5
* FPTwoodspread = Spread FPTwoodland to 500m

Perform a Boolean Interrogation
-------------------------------
The zones suitable for woodland connection were crossed with suitable soils, reassigning soil values to suitable zones, and void areas = 0. The resulting map was covered with the existing woodland in order to add context:

* ConnectWNa = Cross FPTWNsu And FPTwoodspread Assigning 3 to 3 with 40; Assigning 4 to 4 with 40; Assigning 5 to 5 with 40; Assigning 6 to 6 with 40;
* ConnectWNb =  Cover ConnectWNa with FPTwoodland.

MAP DISPLAY B.2:Preparing a sub-map where existing woodland may be connected. 

.. image::  ../images/SNPWN6.jpg


Prepare a Mask of Farms from the Land-use Map
---------------------------------------------
These were spread them in order to make them appear larger. Rivers were likewise spread, in preparation for adding context. Their central pixels (value = 0), were reassigned a value of 36. Void is automatically re-coded as 0.

* FPTfarms = Recode FPTlanduse Assigning 36 to 36 buildtext
* FPTWNfarmmask = Spread FPTfarms to 70m
* FPTrivers2 = Spread FPTrivers to 75m

.. image::  ../images/SNPWN7.jpg 

.. image::  ../images/SNPWN8.jpg


Add Context to the Walnut Map
=============================
To finish, context was added. Rivers are added after contours, so they are not covered by contour lines. Refer to Map Display 3, below.

* ConnectWNc = Cover ConnectWNb with FPTWNfarmmask
* ConnectWNd = Cover ConnectWNc with FPTcontours
* ConnectWNe = Cover ConnectWNd with FPTrivers2 

Cartographic Models: Two maps summarise the process of the map construction

.. image::  ../images/SNPWN9.jpg

.. image::  ../images/SNPWN10.jpg 


GIS Results, Potential Walnut
=============================
The legends below for the sub-scened maps give areas in hectares, before and after the soils were interrogated for suitability and woodland connectivity.

.. image::  ../images/SNPWN11.jpg


.. image::  ../images/SNPWN12.jpg


About 90% of the humic brown soils were 'lost', and only about 10% of the brown earth and brown alluvial soils. 

About 2, 218 ha of existing woodland can be connected through 650 acres of land. 

There are approximately 40 farmsteads adjoining suitable land of 490 ha. which meets the specific criteria.


Conclusions, Potential for Woodland
===================================
There exists some potential in the area for planting walnut. Forest has become fragmented over centuries. The outcome is a cultural landscape. Radical change may not be an plausible or desirable. However, Economic pressures and unsustainable monoculture do require change.

Diversification of land use needs to include products which are in demand, where value can be added, and which have by- products. Demands are changing. 

There are good reasons for trying Walnut. There are objections, because of expectations concerning walnuts growth. Trials should be aimed at testing new germplasm. Potentially suitable sites need to be found. Interrogation of land maps with GIS has helped to broadly find our targets. Owners could be approached. Walnut may serve as livestock shelter in any case.

Grass communities may diversify with the addition of trees in clumps, and the micro-climatic variations that occur with trees. Quality of pasture is an issue here.

The size of plots would need to be determined before trials, and this could be achieved by interrogating the resultant maps. Suitability should be determined, finally, on the ground.

Objectives of conservation can be served at the same time, by linking woodland with corridors, and build upon what is already there. Dormice require 50 ha of uninterrupted woodland, the Marsh Tit, 25 ha; the Nuthatch 100 ha., species which are on the conservation lists.

Zones of existing scrub and mixed woodland could be protected with buffer zones of scattered trees. At this time 15% of the land is wooded and over 70% of that is conifer plantation.
   

References, Walnut Expansion
============================
J. Blaser, J. Carter, D. Gilmour eds. *Biodiversity and Susutainable Use of Kyrgyztan's walnut-fruit forests*	IUCN Cam. 1998

D. Greene, S. Cousins	*Landscape Ecology and GIS* Taylor&Francis 1996 

M. Grieve	*A Modern Herbal*	Peregrine Books 1978

K. Fern	Plants for a future Permanent Publications: Hamps.,1997

J. Sholto & R. Hart,	*Forest Farming*	Watkins, Lon: 1976

P.Saville - *The silviculture of Juglans regia in Great Britain* Oxford Forestry Institute U.of Oxford

Watkins R.T. - *The use of ecological Site Classification and Natural Vegetation Class in the Creation of New Upland Wood Communitites* (Watkins R.T. MSC Thesis UCNW 1995)

A.R. Sibbald et al *Tree Growth Form in the Establishment Phase of a Silvopastoral Sysytem*	Agroforrestry Forum Dec 1997 Vol 8 No 3

M. Naeem et al *Agroforestry Forum* Dec 1997 Vol 8 No 3

BurgessP.J., et al *Agroforestry Forum* Dec 1997 Vol 8 No 3

Plieninger, T.; Wilbrand, C. *Land use, biodiversity conservation, and rural development in the dehesas of Cuatro Lugares, Spain.* Agroforestry Systems, 2001, Vol.51, No.1, pp.23-34, 43 ref.

Hoppe, G. M.; Crowe, S. R.; McAdam, J. H. *Changes in pasture composition in establishing and mature silvopastoral systems.* Proceedings of the International occasional symposium of the European Grassland Federation, Thessaloniki, Greece, 27-29 May, 1999.

Olff, H.; Vera, et al *Shifting mosaics in grazed woodlands driven by the alternation of plant facilitation and competition.* Plant Biology, 1999, Vol.1, No.2, pp.127-137, 64 ref.

A. Gkaraveli1, J. H. Williams, and J. E. G. *Good Fragmented native woodlands in Snowdonia* (UK)* Forestry, Vol. 74, Issue 2
.
L.D. Incoll et al	*Temperate silvoarable agroforestry with quality hadwood timber species.* Agroforestry Forum Dec. 1997 Vol 8 No.3

L.D. Incoll et al	*Temperate silvoarable agroforestry with poplar* Agroforestry Forum Dec. 1997 Vol 8 No.3 

Jim McAdam and Gerry Hoppe	*Sheep performance and production from a lowland silvopastoral system* Agroforestry Forum Dec. 1997 Vol 8 No.3

R Gritten *Woodland Grazing* Scottish Forestry Vol 53 No.1 1999

M Donnelly *Mixed Species Clumps and Hedgrow Trees on an Upland Farm* Vol 53 No.1 1999

*Controlled Grazing in Woodlands: benefits for conservation farmers* Agroforestry Forum December 1996 Vol.7 No. 3

J.E. Good et al	*The Potential for Expansion of Upland Woodlands and the Environmental and Agri-economic Constraints: A Welsh Case Study.* Scottish Forestry Vol 53 No.1 1999.

T.Bartram	*Enclocyclopaedia of Herbal Medicine* Constable, Lon: 1995   



Appendix, Walnut Connecting Woodland
====================================
.. image::  ../images/SNPWN13.jpg 

