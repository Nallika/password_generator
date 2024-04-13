# Password Generator

This is a React app that generates passwords based on certain criteria.

## How to run

Install dependencies via `npm install`.
Execute `npm run start`.

## Components Descriptions

The application is composed of several components, each with a specific role:

- [`criteriasList`](src/components/criteriaList/CriteriaList.tsx): This component displays a list of criteria that the user can select for the password generation.
- [`criterionSelector`](src/components/criterionSelector/CriterionSelector.tsx): This component allows the user to select a specific criterion for the password generation.
- [`generateButton`](src/components/generateButton/GenerateButton.tsx): This component is a button that, when clicked, triggers the password generation process.
- [`generatorContext`](src/components/generatorContext/GeneratorContext.tsx): This component provides the context for the password generation, including the selected criteria and the generated password.
- [`lengthRange`](src/components/lengthRange/LengthRange.tsx): This component allows the user to specify the length of the password to be generated.
- [`passwordField`](src/components/passwordField/PasswordField.tsx): This component displays the generated password.
- [`passwordGenerator`](src/components/passwordGenerator/passwordGenerator.ts): This component orchestrates the password generation process, using the selected criteria and length.
- [`shell`](src/components/shell/Shell.tsx): This component provides the overall layout for the application.