# Deep Learning with MobileNetV2 for Classifying Skin Diseases in Dogs

This project aims to create a deep learning model using **MobileNetV2** for classifying various skin diseases in dogs. The model was trained with a custom dataset, which includes images of dogs with different skin conditions, such as parasites, infections, allergies, autoimmune diseases, and healthy dogs. The objective is to build an efficient and accurate system to help veterinarians and pet owners identify these skin conditions based on images of their dogs.

The project consists of two main parts: a **backend**, which handles the model and API, and a **frontend**, which provides a user-friendly interface for uploading images and receiving predictions.

---

## Technical Overview

This project is built using **Angular** for the frontend and **Flask** for the backend. The model was developed in **Jupyter Notebook**, where different iterations were tested. The best-performing model was saved in the **Keras** file called `best_model_tunned`, which is used to make predictions. The backend serves as an API that processes the input images and returns the predicted disease based on the trained model.

---

## How to Run the Project

### 1. Setting Up the Environment

To run this project, follow the steps below to set up a Python environment and install the necessary dependencies:

- First, create and activate a new Python environment:

```bash
python -m venv myenv
source myenv/bin/activate  # On Windows, use `myenv\Scripts\activate`
```

Next, install the required packages
```bash
pip install -r requirements.txt
```

### 2. Running the backend
Once the environment is set up, go to the backend directory and run the following command to start the Flask server:
```bash
cd backend
python app.py
```
### 3. Running the frontend
In a separate terminal, navigate to the frontend directory and run the following command to start the Angular development server:
```bash
cd frontend
ng serve
```
The frontend will now be accessible at localhost:4200. You can upload images of dogs to get predictions on their skin condition.