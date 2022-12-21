import React from 'react';

const Blog = () => {
    return (
        <div>
        <div  style={{backgroundColor: "#ECF4E7"}} className=" mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 p-10 my-10 rounded-2xl">
          {/* -------- */}
          <div
            tabIndex={0}
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-bold ">
              <p className=" p-4 "> Q:What are the different ways to manage a state in a React application?</p>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
              The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of:
              <br />
  
  1. Hooks<br/>
  2. React Context API
  <br/>
  3. Apollo Link State
  <br />
  We will, however, focus on the use of the setState() method.
  <br />
  The built-in setState() method updates a variable’s value in the classes’ local store. This local store allows the updated variable values to be accessed by any function that may require these values.

setState() tells React that this component and its children (sometimes delayed and grouped into a single batch) should be re-rendered with the most updated state; this re-render is often based on user-triggered events.
              </p>
            </div>
          </div>
  
          {/* -------- */}
  
          <div
            tabIndex={0}
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-bold">
              <p className=" p-4 ">
                Q:How does prototypical inheritance work?
              </p>
            </div>
            <div className="collapse-content">
              <p>
              The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
              <br />
              In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype. In short, objects can inherit properties from other objects — the prototypes. <br />

You’re probably wondering: why the need for inheritance in the first place? Well, inheritance solves the problem of data and logic duplication. By inheriting, objects can share properties and methods without the need of manually setting those properties and methods on each object.
  </p>
            </div>
          </div>
  
          {/* -------- */}
  
          <div
            tabIndex={0}
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-bold">
              <p className=" p-4 ">Q: What is a unit test? Why should we write unit tests?</p>
            </div>
            <div className="collapse-content">
              <p>
              Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
<br/> 
Let’s look at some of the advantages of unit testing:
<br />
You can test units or functions of your project in isolation.
<br />
They enable you to catch bugs early in the development process.
<br />
Automated unit tests help a great deal with regression testing.



              </p>
            </div>
          </div>
  
          {/* ----------- */}
  
          <div
            tabIndex={0}
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-bold ">
              <p className=" p-4 "> Q:React vs. Angular vs. Vue?</p>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
              Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as: 

“The modern web developer’s platform”

It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.
<br />
React is considered a UI library. They define themselves as:

“A JavaScript library for building user interfaces”

Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
<br />
Last but not least, Vue.js is, according to its site:

“A progressive JavaScript framework”

Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;