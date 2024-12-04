from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # Enabling CORS for all routes

#Loading the best model model
MODEL_PATH = os.path.abspath("../best_model_tunned.keras")  
try:
    model = tf.keras.models.load_model(MODEL_PATH)
except Exception as e:
    print(f"Error loading model from {MODEL_PATH}: {e}")
    raise e

#Defining our class names 
CLASS_NAMES = [
    "Allergies",
    "Autoimmune",
    "Healthy",
    "Infectious",
    "Parasites",
]  

def preprocess_image(image):
    try:
        #Resizing and preprocesing image same as training
        img = image.resize((224, 224))  
        img_array = tf.keras.preprocessing.image.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0)
        img_array = img_array / 255.0
        return img_array
    except Exception as e:
        print(f"Error preprocessing image: {e}")
        raise e


@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    try:
        # Open and preprocess the image
        image = Image.open(file)
        processed_image = preprocess_image(image)

        # Make predictions
        predictions = model.predict(processed_image)
        predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
        confidence = float(np.max(predictions[0]))

        return jsonify(
            {
                "prediction": predicted_class,
                "confidence": confidence,
            }
        )
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    # Run Flask app in debug mode
    app.run(debug=True, port=5000)
