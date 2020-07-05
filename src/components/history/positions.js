const positions = [{

    startDate: '2016-05-01',
    isCurrent: true,
    title: 'Senior Full Stack Software Developer / Team Lead',
    company: 'windeln.de',

    assignments: [{
        client: null,
        name: 'PIM',
        description: ``,
        summary: `The company uses it’s own product information management system. It featured excel-like views of different product projections mapping tree-like data to excel rows, and back. Any product attribute combination was available as search criteria.
This old PIM application has a few issues: it’s badly implemented (initially 3 years worth of technical debt according to SonarQube), brittle, unscalable, ugly, untested, generated lots of data issues and proved very costly to maintain.
Soon it became clear that a new PIM system was needed.`,
        skills: ['Java', 'Spring Boot', 'activemq', 'javascript', 'jQuery', 'groovy', 'hands-on-table', 'Junit', 'mockito', 'MongoDB', 'Elasticsearch', 'maven', 'jenkins', 'nomad', 'git']
    }, {
        client: null,
        name: 'PIM-ng',
        description: ``,
        summary: `The new PIM system which, beyond fixing the old one's issues, also added a few goodies: nightly batch processes (automatic publishing of products, automatic data corrections, automatic archiving of old data, automatic product validation), improved query builder, much faster handling of product updates received through different channels, new and improved workflows`,
        skills: ['Java', 'Spring Boot', 'activemq', 'javascript', 'typescript', 'Angular 5', 'hands-on-table', 'high-charts', 'Junit', 'mockito', 'MongoDB', 'maven', 'jenkins', 'nomad', 'git']
    }, {
        client: null,
        name: 'KIM',
        description: ``,
        summary: `The company has it’s own customer care application used by on/off-site employees to quickly solve customer issues regarding orders, products, vouchers, coupons, personal information, loyalty points, transactions and invoices, all during phone conversations.
        It also features a report of blocked orders to help customer care agent fix the issues bore the clients are aware of them.`,
        skills: ['Java', 'Spring Boot', 'activemq', 'javascript', 'typescript', 'angular 1.5', 'Junit', 'mockito', 'MongoDB', 'maven', 'jenkins', 'nomad', 'git']
    }, {
        client: null,
        name: 'Attribute Manager',
        description: `Base service for the new PIM and the shop systems. It allows product data agents to define product properties, values, their translations and different sets of classifications. These are automatically imported by PIM-ng and made available for change and also visible on the shop.`,
        summary: `  `,
        skills: ['Java', 'Spring Boot', 'activemq', 'typescript', 'Angular 5', 'Junit', 'mockito', 'MongoDB', 'maven', 'jenkins', 'nomad', 'git']
    }, {
        client: null,
        name: 'PIM-Rules',
        description: `Validation system for product data consisting in a set of ~150 rules with varying degrees of complexity`,
        summary: `It was previously written in groovy in a very hard-to-maintain fashion, compiled on the spot and deployed only on the one machine the old PIM2 system ran. It was completely redone using the data model from pim-ng, and deployed on a 3 machines. The validation per product was reduced to half (compared to the old system) and overall the whole validation process was sped up by 600%.`,
        skills: ['Java', 'Spring Boot', 'activemq', 'Junit', 'mockito', 'MongoDB', 'maven', 'jenkins', 'nomad', 'git']
    }, {
        client: null,
        name: 'PIM-index',
        description: ``,
        summary: `Before, the old PIM system relied on Elastisearch plugins (rivers) to move data from MongoDB to Elasticsearch. The solution was hacky, unreliable and slow. It also became useless after such plugin support was removed from Elasticsearch 2+, so a new approach was needed.
This little service shovels data from the DB to the ES cluster, reliably. It also does it a lot faster: 9 minutes compared to the original 4h it would take to index the whole database.`,
        skills: ['Java', 'Spring Boot', 'javascript', 'typescript', 'angular 5', 'MongoDB', 'maven', 'jenkins', 'nomad', 'git']
    }],
}, {
    startDate: '2014-05-01',
    isCurrent: false,
    title: 'Senior Full Stack Software Developer / Team Lead',
    company: 'Ropardo',
    assignments: [{
        client: 'IBM',
        name: 'JRA (Job Role Advisor)',
        description: null,
        summary: `Development on an internal application that would allow IBM managers to set possible career paths and job roles to employees based on their skill sets.
It enabled managers in a company that has around 350.000 employees to more easily check skill availability, allocate those skills to correct job roles and guide employees on their career paths thus saving about 80% of the managers’ time spent on such activities.`,
        skills: ['Java', 'EJB', 'JaxRs', 'Javascript', 'Dojo', 'WebSphere', 'mybatis', 'DB2', 'ant', 'IBM “Rational” tool suite']
    }, {
        client: 'Fernbach',
        name: 'FlexFinance',
        description: ``,
        summary: `The client had an old, complex report generation suite heavily used in the banking sector. It was built on old, deprecated and proprietary technology, so the client wanted to migrate it to a newer technology stack`,
        skills: ['Java', 'JSF', 'PrimeFaces', 'Wildfly', 'JPA', 'Hibernate', 'OracleDB', 'proprietary technology', 'ant', 'maven', 'SVN']
    }],
}, {
    startDate: '2012-04-01',
    endDate: '2014-08-31',
    isCurrent: false,
    title: 'Senior Full Stack Software Developer',
    company: 'Mindmatics',
    assignments: [{
        client: null,
        name: 'MCC (Mopay Configuration Center)',
        description: null,
        summary: `A web application that handles all office processes (user management, contract definitions, banking data management, package filtering, etc) through one unified interface that simulates a desktop environment (multiple windows, taskbar, start menu, control panel and notifications). 
I implemented the user management, contract  wizard, and package filtering modules. Defined and created the wizard mechanism for all processes, improved the data mappings and queries to increase application response time, built some core services, utilities and ui components.`,
        skills: ['Java', 'Spring', 'JPA', 'Hibernate', 'SQL', 'OracleDB', 'tomcat', 'ExtJs', 'HTML', 'CSS3', 'junit', 'gradle', 'SVN', 'jenkins']
    }, {
        client: null,
        name: 'Mopay Cockpit',
        description: null,
        summary: `This cash-flow and KPI monitoring web app was used exclusively by company clients. It was very responsive and professional looking and meant to build trust in the company for those clients.`,
        skills: ['Java', 'Spring', 'tomcat', 'SQL', 'OracleDB', 'ExasolDB', 'JDBC', 'JavaScript', 'ExtJs', 'HTML', 'CSS3', 'junit', 'gradle', 'SVN', 'jenkins']
    }]
}, {
    startDate: '2011-09-01',
    endDate: '2012-03-31',
    isCurrent: false,
    title: 'Full Stack Software Developer',
    company: 'Polisano',
    assignments: [{
        client: null,
        name: 'Reports',
        description: null,
        summary: 'A reimplementation of a very old, unstable, insecure and unappealing reporting application consisting of 170 pages. This new version provided additional basic features such as security, content restrictions based on user roles and permissions, better response time, better looks, connection pooling and most of all, stability. ',
        skills: ['Java', 'JSF', 'Primefaces', 'HTML', 'CSS', 'Wildfly', 'MySQL', 'ant', 'SVN']
    }, {
        client: null,
        name: 'Vacations',
        description: null,
        summary: 'The company vacation management system. Initially only maintenance was requested, but the application was very buggy and needed constant care and analysis. Did massive refactoring, reduced the code-base by 60% and saved 5% of my time and 15% of the users’ time by eliminating some of the recurring issues`',
        skills: ['Java', 'servlets', 'JSP', 'tomcat', 'MySQL', 'HTML', 'CSS', 'javascript', 'jQuery', 'ant', 'SVN']
    }, {
        client: null,
        name: 'Agents',
        description: null,
        summary: `A time/action/route/offers tracking system for the company's travel agents. Initially only maintenance was requested, but the application was very buggy and needed constant care and analysis. Did massive refactoring, reduced the code-base by 50% and saved 5% of my time and 15% of the users’ time by eliminating some of the recurring issues`,
        skills: ['Java', 'servlets', 'JSP', 'tomcat', 'MySQL', 'HTML', 'CSS', 'javascript', 'jQuery', 'ant', 'SVN']
    }, {
        client: null,
        name: 'Campaigns',
        description: null,
        summary: 'A small desktop application written in Java with Swing. It allowed data agents to more easily bundle products as promotional items during marketing campaigns.',
        skills: ['Java', 'Swing', 'MySql', 'ant']
    }]
}, {
    startDate: '2008-08-01',
    endDate: '2011-08-31',
    isCurrent: false,
    title: 'Software Developer',
    company: 'Oce / Canon',
    description: 'Fastest document printer manufacturer',
    assignments: [{
        client: null,
        name: 'JPUI',
        description: null,
        summary: 'The client wanted a full rewrite of a wide-format printer panel UI because of some library licensing issues on the current version. The project was estimated for 9 months for 3 developers (and was viewed as doomed to fail as the initial implementation lasted 2.5 years with 5 developers). I oversaw every part of this migration/refactoring process and provided guidelines that saved a lot of time in some crucial areas. In the process I supervised and mentored my 2 colleagues, junior developers.',
        skills: ['Java', 'Swing', 'Junit', 'mockito', 'XML']
    }, {
        client: null,
        name: 'Chinook',
        description: null,
        summary: 'This is the UI for a high volume document printer series. I was part of a larger team (+10 developers) tasked to develop it. Besides the standard bug-fixing and occasional small feature implementation, I also volunteered to develop: a build-time translation processor that would save 1 day of work every month for the product owner, the key operator wizard which also saved 20% of an operator’s workload, the OTTK library (a Swing LoogAndFeel based on Metal) would become the standard component library for chinook and subsequent printer UIs in the company.',
        skills: ['Java', 'Swing', 'XML', 'DTD', 'XSLT', 'XSD', 'Xpath', 'Jaxb', 'Junit']
    }]
}, {
    startDate: '2006-12-01',
    endDate: '2008-07-31',
    isCurrent: false,
    title: 'Software Developer',
    company: 'Siemens VDO / Continental AG',
    description: '',
    assignments: [{
        client: 'Volkswagen, Skoda, Seat',
        name: 'OPS & RVC (Optical Parking System and Rear View Camera)',
        description: null,
        summary: 'Provided help fixing issues on the Optical Parking System and Rear View Camera control modules for the Radio Navigation System that was to be installed in Volkswagen, Seat and Skoda cars, starting 2009.',
        skills: ['Java', 'OSGI', 'jMock']
    }, {
        client: null,
        name: 'TAE (Test Automation Environment)',
        description: null,
        summary: 'Test Automation Environment is a test runner/debugger capable of interpreting DSL instructions to command a car engine HIL device. The client wanted to assist engineers in writing the tests, so I created an Eclipse plugin with editor support for syntax highlighting, code suggestions and completion, project management, outline view and debugger integration with TAE. This boosted test writer productivity by 30%.',
        skills: ['Java', 'Eclipse RCP', 'python', 'wxPython', 'SVN']
    }]
}];


export default positions;
