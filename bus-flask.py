from flask import Flask, request, jsonify, send_file
from PIL import Image, ImageDraw
from flask_cors import CORS
from PIL import Image
import io
from ultralytics import YOLO

app = Flask(__name__)
CORS(app)
model = YOLO("yolov8n.pt")
class_names = ['person']

@app.route('/detect_objects', methods=['POST'])
def detect_objects():
    image_file = request.files['image']
    if image_file:
        # Guardar la imagen temporalmente
        image_path = "temp.jpg"
        image_file.save(image_path)

        # Realizar la detección de objetos
        results = model(image_path, save=False, conf=0.5, classes=[0])

        person_counter = 0
        detections = []
        image_with_boxes = Image.open(image_path).convert("RGB")
        draw = ImageDraw.Draw(image_with_boxes)

        for result in results:
            boxes = result.boxes
            conf = boxes.conf
            cls = boxes.cls.tolist()
            for i in range(len(cls)):
                class_index = cls[i]
                confidence = conf[i]
                if confidence > 0.5 and class_index == 0:
                    person_counter += 1
                    ymin, xmin, ymax, xmax = boxes.xyxy[i]
                    # Intercambia las coordenadas x e y
                    xmin, ymin, xmax, ymax = ymin, xmin, ymax, xmax
                    draw.rectangle([(xmin, ymin), (xmax, ymax)], outline="red", width=3)
                    detections.append({
                        "class": class_names[int(class_index)],
                        "confidence": round(confidence.item(), 2)
                    })
        
        # Guardar la imagen con las bounding boxes dibujadas
        image_with_boxes.save("temp_with_boxes.jpg")

        # Devolver la imagen con las bounding boxes
        return send_file("temp_with_boxes.jpg", mimetype='image/jpg')
    else:
        return jsonify({"error": "No se proporcionó ninguna imagen"}), 400

if __name__ == '__main__':
    app.run(debug=True)
