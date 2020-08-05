
---
title: Modelling Silvopasture Canopy and Growth
category: cnrm
author: John Plumridge
date: 2001-11-02
---


.. contents:: Table of Contents
   :depth: 1
.. sectnum::


Aim of the Assignment
=====================
Growth data from current agroforestry trials in Columbia were to be modelled using AME's Simile object - based computer programme. The trails included three strata of shrub, arboreal (i.e. fruit trees) and timber trees, over pasture. 


The Agroforestry Trial
======================
Shrubs had been planted at a density of 625 ha-1, arboreal trees at 144 ha-1, and timber at 36 ha-1.

*The species included in the trial were,*

* Shrubs: 
    *Crescentia cujete* (Cc), *Glyricidia sepium* (Gs) and *Leucocephala leucocephala* (Li); 
* Arboreals: 
    *Cassia grandis;* 
* Timber trees: 
    *Pachira quinata.*

These planting densities were represented in the model. I constructed a sub-plot of 5 species and twelve trees. Their layout in  the plantation appears  as in the grid:

== == == ==
Cc Gs Li Cc
Gs Pq Cc Cg
Li Cc Gs Li
== == == ==


How a Model of Silvopasture Was Built
=====================================

1. A model of a tree
2. Twelve instances of tree
3. Locating the fixed population on a grid
4. A sub model '*pasture*'


A model of a tree
-----------------
This was constructed and enclosed in a sub-model box, entitled 'tree'. One container represented accumulating growth as '*biomass'*. Initial values were entered. The containers' value is used as a multiplier of growth, and should not be zero.

Growth rate ('gr'), maximum size ('maxsize') and, loss ('loss') variables were created to model growth of a tree, given by the flow equation 'photo'. The relative figures for  growth and loss were gave a balanced growth over time:

* *photo = gr x biomass x (1-biomass/maxsize)*

A loss equation gives decreasing exponential and limited growth:

* *loss = 0.2 x biomass*


Twelve Instances of Tree
------------------------
These were created by 'generated set', 'dimensions = 12', in the sub-model population window. Each species was assigned a code 1 to 5. In our layout, the Index appears as,

== == == ==
1  2  3  1 
2  4  1  5 
1  1  2  1
== == == == 


The species  code was indexed as an array within the modelling programme. An array variable was created named 'species', and the equation entered:

* *species = element((1,2,3,1,2,4,1,5,1,1,2,1)),index(1))*

With this array I could assign growth rates to each species as in our array:

==== ==== === ===
1.4  1.59 1.2 1.4
1.59 0.5  1.4 0.4
1.4  1.59 1.2 1.4
==== ==== === ===

The growth rates (gr) were  entered into the equation:

*  *if species = 1 then 1.4 else if species = 2 then 1.59 else if species = 3 then 1.2 else if species = 4 then 0.5 else if species = 5 then 0.4 else 0*

Maximum heights (not true heights) were assigned as:

== == == ==
10 17 15 10
17 40 10 30
15 25 17 15
== == == ==

This gives the equations for the array (maxsize):

* *if species = 1 then 10 else if species = 2 then 17 else if species = 3 then 15 else if species = 4 then 40 else if species = 5 then 30 else 0*


Locating the Fixed Population on a Grid
---------------------------------------
The modelling environment offers a default 10 x 10 grid, giving 100 cells to which all instances of a model may be located through x, y co-ordinates.
I ran the sub model 'tree' with random co-ordinates, using the function rand (0,100) for each of Xposn and Yposn variables. Selecting the Lollipop tool gave a dynamic 3-d representation. The sub model ran successfully.

I wished to specify the planting arrangement, and therefore indexed their locations. By default, each cell is divided in to 10 by 10 co-ordinates giving 100 x 100 point co-ordinates.

I calculated the cell co-ordinates for each member of the array of twelve using the following grid. I calculated  central values. For example in cell 1 (0 to 10) central value is 5, for the first  square's central co-ordinates.

=== == == == ==
x/y 5  15 25 35
5 
15 
25
=== == == == == 

This gives the two equations for  x, y variables:

* *Xposn = element((5,15,25,35,5,15,25,35,5,15,25,35),index(1))*

* *Yposn = element((5,5,5,5,15,15,15,15,25,25,25,25),index(1))*

The formula '*element(array)*' gives the selected array of values. The function index (1), returns those values to each member in the population, in order. The sub model ran successfully.


A sub model 'pasture'
---------------------
This model was built with one compartment, '*height*', representing growth above ground. It was placed upon a sub model '*quadrat*'. The quadrat represents the grid square so the x and y  equations were used to provide 12  cells for pasture to correspond with the trees.

In the quadrat a '*distance*' variable was created to give the distance of each cell on the quadrat to each tree position in the array, by the equation,

* *Distance =  hypot((Xposn) - x,(yposn) - y)*

Tree '*biomass*' as a variable gives an indication of  light interception. A '*stratalight*' variable was produced to give a reduction in light according to the strata in which the tree '*biomass*' was positioned. Thus, timber at the top is simply biomass; fruit is biomass/2; shrubs are biomass/4. This makes the assumption that strata 1 is most light demanding, and strata 3 (i.e. shrubs), less so.

A '*shade*' variable placed on the pasture sub model calculates shade for each cell at grass level. It is relative to the distance from each tree biomass and position in the array, and is given by the equation,

* *shade = stratalight/1 + Distance*


The values given by the shade variable were then transformed into available light by the variable '*light*'  whose equation was,

* *Light = var2/(var2 + shade)*

Some modelling involved adjusting figures. Units are relative only. '*var2*' allowed me to match the scale of values for shade to the scale of values of pasture growth, given by '*photo'*.

The division by shade for a second time gives  a more suitable proportion of available light to shade for pasture growth in the range of 1:3, rather than 1:100. This proportion bears upon the growth rate.

The equation and its values for var2 was arrived at by calculations on paper, and then rerunning the model until a balance between light and shade was arrived at.

The flow equation for pasture growth (photo) was given the exponential form:

* *photo = gr x light x height x (1 - height/maxheight)*


Evaluation of Running the Model
===============================
* Instruction: Use a lollipop diagram for tree growth and for pasture growth, and plot value pasture *height* against time: run for 60 time units.*

I found that  'division by zero' prevented me from running the model with AME's equation, *shade = sum(biomass/distance ^ 2)*, in the disaggregated agroforestry model.

Using  the denominator *1 + distance*, didn't solve the problem, and I had to resort to a suitable equation of my own making, which gives a relationship between distance and shade.

Additionally, I experienced problems with the equation *sum(stratalight/distance ^ 2)* as "*ERROR unit expression array(1,size(tree)) has array dimensions 1 which are incompatible with the array it represents, whose dimensions are ()"*. This AME equation worked when applying random positions to the x,y coordinates of the tree population, but not with fixed coordinates as I intended.

The 3d viewer did not work with my model with fixed rasta coordinates. I suspect overall the problems emerge with my selecting a sub-plot of 4 x 3 and not 10x10. To realistically model agroforestry trails of a chosen plot size seems important to me, and that is why I persisted.

I also modelled loss flow for trees using the conditional equation,  

* *if biomass > 20 then 0.1 x biomass else 0.* 

This loss flow only operates if tree biomass is greater than the specified amount. This  may represent  care taken in establishing seedlings, or replanting. Alternatively, perhaps cutting fodder for cattle after the plant has reached some maturity.

Investigating the dynamics of the model, the following table records my results when manipulating variables. Here, I kept the trees' maximum height and growth rates the same, once I had a useful representation for different species.


Table: Pasture height and pasture photosynthesis, with manipulations of variables

==== =========== ==================== ================= ==================== ============= ============================ ========================
var2 gr(pasture) respiration(pasture) init.tree biomass initial photo(range) photo;time=60 pasture height after time=60 max height(pasture)/time
==== =========== ==================== ================= ==================== ============= ============================ ======================== 
50   1           0.01                 3                 0.50-0.95            0.001-0.47    21.07-23.4                   24/10
20   1           0.01                 3                 0.34-0.93            0.040-0.4     14.00-15.8                   17/5  
20   1           0.04                 3                 0.34-0.93            0.070-0.55    06.50-07.5                   10/3  
20   2           0.04                 3                 0.34-0.93            0.130-1.1     13.00-14.4                   19.5/3
20   2           0.04                 4                 0.34-0.93            0.130-1.1     13.00-14.4                   18.2/4
==== =========== ==================== ================= ==================== ============= ============================ ======================== 

1. When 'var2' was changed from 20 to 50, increases are noted in initial growth quantity ('photo'), maximum 'height' attained, and 'height' of pasture when time (t) = 60. This is because the shade factor weighting is reduced by increasing var2.

Notably at t=60, range in growth quantity increased whilst range in pasture 'height' decreased, with this manipulation.

2. When the loss function ('respiration') of pasture was increased the growth quantity ('photo') decreased along with the resultant pasture height in time.Maximum height also decreased. 'photo' is a function here of pasture height.

3. When the variable pasture growth rate ('gr') was doubled to gr = 2, the growth quantity ('photo') increased along with maximum 'height' and height at t = 60. 'Height' and 'photo' ranges were both greater than when gr = 1.

4. When initial tree biomass was increased from 3 to 4, the  growth quantity and pasture heights when t = 60, remained the same as when biomass = 3. The maximum pasture height decreased however, and took longer to reach. This result represents a consequence of increased shade at an earlier time, but where final shade remains the same. This is because the tree maxheights were not changed.


Further Considerations of Silvopasture Model
============================================
The model's equation concerning distance from a tree to give shade by the hypotenuse function assumes that shade is denser at the centre of the tree. The equation is neither shade given by spread, nor density of crown. However, biomass is a useful variable for shade and could be modified for the species. 

Spread of crown also needs to be modelled within a layer in order to predict competitive limits to spread.

Trees specialise in light usage. Within each layer of trees, relative shade tolerance or light demand of a tree needs to be taken into account in order to assess its growth, and subsequently the growth of strata below.
 
Models of 'spread of a substance' from one cell to surrounding cells from a centre offer this possibility. Competition for water and nutrients in pairs and hence complex arrangements may similarly be explored.

Movement of the sun, and time of day, are additional factors of light intensity and length of tree shadow. The natural environment might appear complicated, but I suppose that all these factors could be modelled. 

The slide control is particularly useful for balancing variables, but gives duplicate sliders for each member in a population, which isn't convenient when the members share one common variable, as with uniform grass. 

Entering species and planting data in tables would be useful for approved models.

One reason for exploring models, is to assist with planting and management decisions.
We consider models existing in our head even when in the field. An experienced caretaker, in a tradition of sustainable natural resource management, in some way responds immediately when visiting the site. That person's model reflects the site. Management decisions change the site. It is ongoing. 

Simulation models could be useful, as an explorative tool, in guiding and planning research. Research trials may take considerable time. In a short space of time we may explore the models in our heads, given access to a computer modelling environment.

This Silvopastoral model is at the plot level, and is useful as such. Such models may also be built into landscape level models, such as the (recently renamed) Fallow Model of Meine van Noordwij.

