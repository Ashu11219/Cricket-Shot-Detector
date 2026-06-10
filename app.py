from fastapi import FastAPI, UploadFile, File
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import tensorflow as tf
import numpy as np
from io import BytesIO
from PIL import Image

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")


model = tf.keras.models.load_model("Cricket_Shot_Detection_model.keras")

@app.get("/")
def home():
    return FileResponse("static/index.html")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    img = Image.open(BytesIO(contents)).convert("RGB").resize((224,224))
    img_array = np.expand_dims(np.array(img, dtype= np.float32), axis = 0)

    pred = model.predict(img_array)[0]
    idx = int(np.argmax(pred))

    CLASS_NAMES = ["drive", "legglance-flick", "pullshot", "sweep"]
    DISPLAY_NAMES = {
        "drive": "Drive",
        "legglance-flick": "Flick",
        "pullshot": "Pull",
        "sweep": "Sweep"
    }

    return {
        "shot": DISPLAY_NAMES[CLASS_NAMES[idx]],
        "confidence": round(float(pred[idx]) * 100, 2),
        "all_probabilities": {
            DISPLAY_NAMES[name]: round(float(p) * 100, 2)
            for name, p in zip(CLASS_NAMES, pred)
        }

    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host= "0.0.0.0", port= 8000)
