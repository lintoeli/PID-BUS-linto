from flask import Flask, request, send_file, jsonify
import cv2
from flask_cors import CORS

from ultralytics import YOLO

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return  "Hello World!"

@app.route('/detect_objects', methods=['POST'])
def detect_objects():
    if 'image' not in request.files:
        return "No se proporcionó ninguna imagen", 400

    image = request.files['image']
    image_path = "temp_image.jpg"
    image.save(image_path)

    try:
        model = YOLO('best.pt')
        img = cv2.imread(image_path)
        pred = model.predict(img)[0]

        if len(pred.boxes) == 0:
            return jsonify({"error": True, "message": "No objects detected in the image."}), 202
        
        pred = pred.plot()
        cv2.imwrite("processed_image.jpg", pred)
        return send_file("processed_image.jpg", mimetype='image/jpg')

    except Exception as e:
        return jsonify({"error": True, "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
