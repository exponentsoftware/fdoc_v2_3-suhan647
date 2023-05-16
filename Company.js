

const companies = [
    {
      name: 'Company 1',
      employees: [
        { name: 'Alice', role: 'Developer', department: 'Engineering' },
        { name: 'Bob', role: 'Manager', department: 'Engineering' },
        { name: 'Charlie', role: 'Designer', department: 'Design' },
      ],
    },
   
   {
      name: 'Company 2',
      employees: [
        { name: 'Micheal', role: 'ui Developer', department: 'Engineering' },
        { name: 'john', role: 'project Manager', department: 'Engineering' },
        { name: 'cena', role: 'website Designer', department: 'Design' },
        
        { name: 'cena', role: 'website Designer', department: 'Design' },
      ],
    },
    
    {
      name: 'Company 3',
      employees: [
        { name: 'shawn', role: 'ceo', department: 'Engineering' },
        { name: 'dean', role: 'business development associate', department: 'Engineering' },
        { name: 'ambrose', role: 'technical recruitor', department: 'Design' },
        
         { name: 'ambrose', role: 'technical recruitor', department: 'Design' },
          { name: 'ambrose', role: 'technical recruitor', department: 'Design' },
           { name: 'ambrose', role: 'technical recruitor', department: 'Design' },
      ],
    },
    
  ];
  
  
  function processCompanies(companies) {
    return companies.map(company => {
      const numEmployees = company.employees.length;
      const departments = {};
  
      company.employees.forEach(employee => {
        const { department } = employee;
        departments[department] = (departments[department] || 0) + 1;
      });
  
      return {
        ...company,
        numEmployees,
        departments,
      };
    });
  }
  
  
  
  console.log(processCompanies(companies, "Company 3"))
  
  
  