# 11012196


## 1. processArray function
Objective- To take an array of numbers as input and return a new array where each even number is squared, and each odd number is tripled.
Approach- Iterate through the input array, check if each number is even or odd, and perform the required operation accordingly. Store the processed numbers in a new array and return it.

## 2. formatArrayStrings function
Objective- To modify each string in an array based on its corresponding number from another array.
Approach-  Iterate through the array of strings along with the array of corresponding numbers. For each string, check if the corresponding number is even or odd. If it's even, capitalize the entire string; if it's odd, convert the string to lowercase. Store the modified strings in a new array and return it.

## 3. createUserProfiles function
Objective- The function aims to take two arrays: one containing original names and the other containing modified names, and then return an array of objects representing user profiles, each containing the original name, modified name, and an auto-incremented id starting from 1.
Approach;
   - It initializes an empty array to store the user profiles.
   - Utilizes a variable id to auto-increment starting from 1 for each user profile.
   - Iterates through the arrays of original names and modified names simultaneously.
   - For each pair of names, creates a user profile object with the original name, modified name, and id.
   - Pushes the user profile object to the profiles array.
   - Finally, returns the array of user profiles.
