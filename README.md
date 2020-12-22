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
