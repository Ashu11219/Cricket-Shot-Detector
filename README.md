# Cricket Shot Classifier

Classifies cricket batting shots from images using MobileNetV2 transfer learning.
Built with TensorFlow/Keras, deployed with FastAPI.

## Classes
- Drive
- Legglance-Flick  
- Pullshot
- Sweep

## Results

| Metric | Value |
|---|---|
| Test Accuracy | 94.21% |
| Best Class | Pullshot (100% recall) |
| Hardest Class | Legglance-Flick (83% recall) |

## Confusion Matrix
![Confusion Matrix](outputs/confusion_matrix.png)

## Model Architecture
- Base: MobileNetV2 pretrained on ImageNet
- Phase 1: Feature extraction (10 epochs, frozen base)
- Phase 2: Fine-tuning top 30% layers (20 epochs, lr=1e-5)

## Setup
pip install -r requirements.txt

## Run
python app.py

## Project Structure
model.py        - Training script (run once)
preprocess.py   - Data pipeline
evaluate.py     - Metrics and diagnostics
app.py          - FastAPI inference server