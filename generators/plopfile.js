module.exports = plop => {
  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your screen name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/screen/screen.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/screen/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/screen/test.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/components/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/components/stories.ts.hbs',
      },
    ],
  });
};
