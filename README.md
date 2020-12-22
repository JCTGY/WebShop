# WebShop
## Purpose
Designed a e-commerce full stack website with Spring Cloud as backend and React as frontend \
Combine 5 microservice using [Zuul](server/apigateway)(Api Gateway) and [Eureka](https://github.com/spring-cloud/spring-cloud-netflix)(Loadbalancer) \
Microservice Include - 
  * [Customer Service](server/customer_service)
  * [Product Service](server/product_service)
  * [Cart Service](server/cart_service)
  * [Shipping Service](server/shipping_service)
  * [Order Service](server/order_service)

## Table of Contents
- [Application screenshots](#application-screenshots)
- [Technology stack](#technology-stack)
  * [Client - Frontend/UI](#client---frontendui)
  * [Server - Backend](#server---backend)
  * [Data](#data)
  * [Libraries](#libraries)
- [Prerequisites](#prerequisites)
- [How to use](#how-to-use)
- [Team Member](#team-member)

## Application screenshots
<img src="resources\LandingPage.png"/>
<img src="resources\ProductPage.png"/>
<img src="resources\ProductItemPage.png"/>
<img src="resources\CartPage.png"/>

## Technology stack

### Client - Frontend/UI
* [React](https://reactjs.org/) - One of the popular frontend libaray that makes it painless to create interactive UIs. Design simple views for each state in your application
* [Bootstrap](https://react-bootstrap.github.io/) - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development


### Server - Backend

* 	[JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) - Java™ Platform, Standard Edition Development Kit
* 	[Spring Boot](https://spring.io/projects/spring-boot) - Framework to ease the bootstrapping and development of new Spring Applications
* 	[Maven](https://maven.apache.org/) - Dependency Management

### Data
* 	[H2 Database Engine](https://www.h2database.com/html/main.html) - Java SQL database. Embedded and server modes; in-memory databases

### Libraries
* [JPA](https://spring.io/projects/spring-data-jpa) - This module deals with enhanced support for JPA based data access layers. It makes it easier to build Spring-powered applications that use data access technologies
* [Actuator](https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html) - Actuator endpoints let you monitor and interact with your application
* [Validation](https://github.com/spring-projects/spring-boot) - Make sure data is valid before REST api call
* [Lombok](https://projectlombok.org/) - Never write another getter or equals method again, with one annotation your class has a fully featured builder
* [openfeign](https://spring.io/projects/spring-cloud-openfeign) - makes writing web service clients easier. To use Feign create an interface and annotate it.

## Prerequisites
Spring Boot v2.3.6 \
Java 11 \
Node v14.15.0

## How to use
* 	Download the zip or clone the Git repository
* 	Unzip the zip file (if you downloaded one)
* 	Open Eclipse
	* File -> Import -> Existing Maven Project -> Navigate to the folder where you unzipped the zip -> server
* Start all the Microservices
* cd into client folder and run
``` 
$ npm install
$ npm start
```

## Team Member
[Jeffrey Chaing](https://github.com/JCTGY) \
[Derek Mccool](https://github.com/derekmccool) \
[Victor Martinez](https://github.com/xerophytic7) \
[Monwen Shen](https://github.com/monwen)
