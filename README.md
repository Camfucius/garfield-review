## README

[![Codeship Status for Camfucius/garfield-review](https://app.codeship.com/projects/7bfceee0-ace2-0138-76d2-4a64f987a7c0/status?branch=master)](https://app.codeship.com/projects/403539)

Authors: Amber Bai, Jay Cammarano, Greg Getchell, William Campbell, Cameron Perkins

# Overview:

Our group decided that the only worthy topic for a review website is one that is close to all of our hearts. Garfield! Welcome to the Garfield Review Initiative, created by myself, Greg, Jay, Amber, and Will! Our goal was to provide visitors with a platform that fulfills their every desire for the best Garfield products around. 

We used React to supply visitors with an uninterrupted internet experience, preventing annoying page reloads while delivering a seamless platform.  Our React fetches data from our data tables handled by our Rails back end. A visitor can upgrade their experience by becoming a member, provided by . Devise. This feature allows a visitor to provide information on a product, or review existing products! 
Once logged in, a visitor just needs to open the product form to have their favorite orange feline paraphernalia displayed! All a user needs is a link to a product, the product’s image , and a product description. Once a product is posted, other users can share their opinion or go to the website where this product is sold so they can snag their next favorite Garfield piece. 

# Dependancies and Setup
- Rails ~> 5.2.3
- ruby ~> 2.6.5
- created with make_it_so gem

## Additional Gems:
- gem 'webpacker', '~> 3.3'
- gem "bulma-rails", "~> 0.9.0"
- gem 'sprockets', '~> 3.7.2'(added back in manually after replacing Foundation)
- gem "active_model_serializers"

# Why Bulma?
- Utility Based
- SASS pre-processing allows global color schemes and use of variables
- easy and flexible custamization of content on page
- Can add utility functions easily through the generated .scss
