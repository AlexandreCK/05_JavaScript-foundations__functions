# JS Functions Challenge

Welcome to the **JavaScript Functions Challenge**! Your task is to implement various JavaScript functions as described in the exercises below. Each exercise is located in its respective folder, and you should write your code in the provided `.js` files.

## Instructions

1. **Navigate to the exercise folder**.

   - Each exercise is located in a folder named `exercise_XX` where `XX` is the exercise number.

2. **Implement the function**.

   - Each exercise folder contains a `.js` file with the function signature and a description of the task.
   - Implement the function according to the provided instructions.

3. **Test your function**.

   - Each exercise folder contains an `index.js` file where you should import and execute your function to test it.

## Challenge Steps

The following exercises must be completed in their respective `.js` files. Each exercise is explained as a comment, and your code should be written beneath the comment to fulfill the task.

## 1. Control Version

To ensure your project follows proper version control practices, you will need to create a repository, manage branches, and follow the pull request workflow.

### Steps to Setup Version Control

1. **Create a repository** from the provided template.

   - The repository name should be `01_dom-manipulation`.
   - Follow the template’s instructions to get started.

2. **Create a new branch** called `develop`.

   - All development work for the exercises must be done in this branch.

3. **Commit your changes** as you progress through the exercises.

   - Each exercise solution should be committed with descriptive commit messages.

4. **Push the `develop` branch** to the repository.

## 2. CI/CD Workflow

We’ll be using a CI/CD workflow for this project to ensure a smooth development and deployment process. Below are the steps for setting up the branching strategy and deployment process:

### Branching Strategy

- **Main Branch**: This branch will represent the **production** environment. Only the teacher will approve and merge changes into the `main` branch.
- **Develop Branch**: All exercises must be developed in the `develop` branch.

### Workflow

1. **Develop in the `develop` branch**:

   - As mentioned above, all DOM manipulation exercises should be coded in the `develop` branch.
   - Conventional commits should be made for each completed exercise. (`CONVENTIONAL_COMMITS` documentation [[↗]](./CONVENTIONAL_COMMITS.md))

2. **Create a Pull Request (PR)**:

   - Once all exercises are completed, create a pull request to merge `develop` into the `main` branch.
   - The pull request should include a brief description of the changes and why they should be merged.
   - Only the teacher can review and approve the pull request. Ensure that you request the teacher as a reviewer.

3. **Teacher Approval**:

   - The teacher will review the pull request. Feedback may be provided for any necessary adjustments.
   - Once approved by the teacher, the pull request can be merged into the `main` branch.

4. **Deployment**:
   - Upon merging into the `main` branch, the solution must be deployed into production.
   - The deployment process can be automated using CI/CD tools, or the teacher will guide on how to deploy the final solution.

## How to Submit

1. Ensure your `index.js` files are linked correctly to the `index.html`.
2. Complete all the exercises within the `index.js` file, ensuring they meet the requirements.
3. Push your changes to the `develop` branch.
4. Create a pull request to merge your `develop` branch into `main`.
5. Await teacher approval and feedback.

## Tips

- Use `console.log()` to debug and verify if elements are being selected or modified correctly.
- Make sure the `index.js` files are linked correctly to the `index.html`.

Good luck, and follow the workflow to ensure a smooth development process!

---

## Deadline

- ⏰ December 01, 2024
