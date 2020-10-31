# WorkLink
### Go and get it done!!
> A job provoding and posting website

### Problems Addressed:
  - Helping people get aware of the jobs available in their locality. Also acting as a helping hand for unemployed people (like plumbers, maids, carpenters etc.) looking out for job opportunities
  - Finding appropriate people to fulfill the required job in a lesser time.As people find it difficult to find workers when they migrate to new cities.
 
### Overview:

The site will be having two portals: 

1. One for **the person looking for a worker**.  
    The person will register with his details and whenever a need arises.
    He/She can create a worker requirement mentioning the following things:
    - Type of job
    - Location 
    - Approximate days the work would take to complete
    - Expectations(if any) from the worker
    - Salary Offered   
    Then the workers who have filled in those location preferences and possess those skills will get notified with the message and they can click on interested button.
    This will notify the person searching for worker that a worker is interested and they can contact each other without any third party involvement in between.
    After the work is done the job provider can go and give some review for the working and the rating which can help other people get a better idea of the worker.

2. Second for **the worker**.  
    The person who is available to provide some service in his capacity as a carpenter, plumber, maid, etc. ,can create their profile indicating:
    - The work they are available for
    - Location of worker
    - The regions they are available 
    - The time they can be possibly available at
    - Cost per hour (if they have any specified)
    - Their contact information(phone no., email(if any), address)  
    The person who is searching for a worker can search among the various available workers, know about their availability and can choose them by seeing their profile.
    Workers can also look for the available needs related to their work and request the person who posted it.

### Goals: 
Our project aims at reducing the gap between the people who are willing to work and the people looking for workers. 
- It will eliminate any kind of third party involvement thereby ensuring that the total profit that the worker deserves goes to the worker only.
- It will help in promoting the local services available at a particular time in a particular location.

### Scalability (targeted category of people that will benefit from this):
- It will benefit the local workers get a suitable job by making them aware of the jobs available in their preferred location .They can even make a choice between the available works.With the help of the ratings they have achieved it will even increase their chances of getting more job offers.
- It will benefit the people in general.Whether they want a carpenter or a painter they can get over their.It can even help them filter the workers based on the review of other people.

### Tech Stacks Required:
- Website(Mern Stack)
- Future needs:
  - Machine learning to suggest workers about the availability of work required.   
  - We can add realtime watch by the person who requires worker. (for e.g: A worker can add there status live for a particular type of work and As it will be live the client can     connect directly to the active labour within a click.) 
  - Cloud to deploy the website

### Limitations (if any):
The fact that labourers still are not comfortable with using apps and websites and even some labourers so not own a phone can be a limitation.

### Roadmap Overview:
  1. 1st week of october - Setting up basic project and creating tasks
  2. October to December - Features implementation
  3. December to January - Improvements
  4. January to February - Adding some new features and testing

### Approximate count of contributors required:
  8-12
  
  
# Setting up project in your local machine:
After cloning project:
## For client side
  1. cd client
  2. yarn install
  3. yarn start
  
## For server side
  1. cd server
  2. npm install
  3. node src/App.js
 
# Contribute
  
#### Remote
_**Note**_: *This is only needed if you want to contribute to the project.*

When a repository is cloned, it has a default remote named origin that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote named upstream. For this project it can be done by running the following command -

`git remote add upstream https://github.com/dscnitp/job-provider-site`

You can check that the previous command worked by running `git remote -v`. You should see the following output:

```
$ git remote -v
origin  https://github.com/YOUR_GITHUB_USER_NAME/job-provider-site (fetch)
origin  https://github.com/YOUR_GITHUB_USER_NAME/job-provider-site (push)
upstream        https://github.com/dscnitp/job-provider-site.git (fetch)
upstream        https://github.com/dscnitp/job-provider-site.git (push)
```
