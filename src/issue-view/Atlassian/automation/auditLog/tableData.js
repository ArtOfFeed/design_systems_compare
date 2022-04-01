
 export const head = {
    cells: [
      {
        key: 'date',
        content: 'Date',
        width: 20 ,
      },
      {
        key: 'rule',
        content: 'Rule',
        width:  30,
      },
      {
        key: 'projects',
        content: 'Projects',
        width: 20,
      },
      {
        key: 'status',
        content: 'Status',
        with:15,
      },
      {
          key: 'duration',
          content: 'Duration',
          with:3,
      },
      {
          key: 'operations',
          content: 'Operations',
          with:7,
      },
    ],
  };


export const rowsData = [
    {
        id: 1,
        date: '28/03/22 11:23:47 am (7167271982)',
        rule: 'When all stories are completed → then close epic',
        projects: 'Business Systems development',
        status: 'CONFIG CHANGE',
        duration: '2 weeks',
        operations: 'Show More'
    },
    {
        id: 2,
        date: '28/03/22 11:23:47 am (7167271982)',
        rule: 'When epic is completed → then close all the stories present',
        projects: 'Business Systems development',
        status: 'CONFIG CHANGE',
        duration: '2 weeks',
        operations: 'Show More'
    },
    {
        id: 3,
        date: '28/03/22 11:23:47 am (7167271982)',
        rule: 'When an issue is transitioned → then automatically assign',
        projects: 'Business Systems development',
        status: 'CONFIG CHANGE',
        duration: '2 weeks',
        operations: 'Show More'
    },
]
