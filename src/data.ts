import { CareerObjective } from "./app/shared/models/CareerObjective";
export const sample_careers: CareerObjective[] = [
  {
    id:1,
    name: 'UI/UX Training',
    description: 'Mobile App UI/UX Training',
    targetDate: '2015-05-01',
    completedDate: '2015-05-01'
  },
  {
    id:2,
    name: 'RDBMS Training',
    description: 'RDBMS efficiency Training',
    targetDate: '2014-03-21',
    completedDate: '2014-03-21'
  },
];

export const MyInfo:any = {
  firstName: 'Karl Adrian',
  middleName: 'Maranan',
  lastName: 'Acevedo',
  email: 'acevedo.karladrian@gmail.com',
  address: 'Sta.Ana, Manila, Philippines',
  yearsOfExperience:'18',
  companiesWorkedOn: [
    {
      companyName: 'Direct Sourcing Solutions',
      role: 'Fullstack PHP Developer',
      started:'Nov 2020',
      ended: 'Present',
      techStack: 'PHP, MySQL, Symfony, Bootstrap, NodeJS,Wordpress integration,Javascript, Docker, TDD, API Integration',
      projects: 'Payment Gateway, Woocommerce Website'
    },
    {
      companyName: 'Innerworks International',
      role: 'Fullstack PHP Developer',
      started:'July 2018',
      ended: 'April 2020',
      techStack: 'Angular, MongoDB, Coffeescript, PHP, Wordpress, PostgreSQL, Javascript, Jenkins, Docker',
      projects: 'Client Website(Frontend)'
    },
    {
      companyName: 'JoinPiggy',
      role: 'Fullstack PHP Developer',
      started:'Mar 2018',
      ended: 'June 2020',
      techStack: 'PHP, MySQL, JS,React, CSS3',
      projects: 'Client Website(Frontend), Chrome extension'
    },
    {
      companyName: 'Zigzag Media Inc',
      role: 'Fullstack PHP Developer',
      started:'Sept 2017',
      ended: 'Jan 2018',
      techStack: 'PHP, MySQL, JS,React Native,Laravel, Shopify, CSS3',
      projects: 'E-Commerce Website, Mobile App'
    },
    {
      companyName: 'Akatek Solutions',
      role: 'Software Developer',
      started:'Jan 2016',
      ended: 'Jul 2017',
      techStack: 'PHP, MySQL, JS,Laravel, CSS3',
      projects: 'Online Games Backend, Online Games Admin Page'
    },
    {
      companyName: 'Ascendant Technologies Inc',
      role: 'Systems Developer',
      started:'Oct 2011',
      ended: 'Dec 2015',
      techStack: 'PHP, MySQL, JS,Symfony, Laravel, CSS3, Samsung SDK, Android(Java), Objective-C(IOS),REST API ',
      projects: 'Medical System,Samsung TV Apps, Android Apps. IOS Apps'
    },
    {
      companyName: 'Topnetworx Solutions Inc',
      role: 'Systems Developer',
      started:'Oct 2008',
      ended: 'Sep 2011',
      techStack: 'PHP, MySQL, JS,Symfony, CSS3, Python',
      projects: 'Dental System,POS Backend, PNP Backend'
    },
  ]

}
