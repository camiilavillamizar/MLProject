from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model
model = tf.keras.models.load_model("../best_model.keras")

# Define class names based on your dataset
CLASS_NAMES = [
    "Allergies",
    "Autoimmune",
    "Healthy",
    "Infectious",
    "Parasites",
]  # Replace with your actual class names


def preprocess_image(image):
    # Resize and preprocess image same as training
    img = image.resize((244, 244))
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)
    img_array = img_array / 255.0
    return img_array


@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    try:
        image = Image.open(file)
        processed_image = preprocess_image(image)
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
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
