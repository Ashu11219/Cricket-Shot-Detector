import tensorflow as tf
import numpy as np
from preprocess import preprocess_data
from sklearn.metrics import confusion_matrix, classification_report
import matplotlib.pyplot as plt
import seaborn as sns

model = tf.keras.models.load_model("Cricket_Shot_Detection_model.keras")

train_ds, val_ds, test_ds = preprocess_data()
CLASS_NAMES = train_ds.class_names


print("Test Set Evaluation:- ")
test_loss, test_accuracy = model.evaluate(test_ds)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")

#Confusion Matrix
y_true, y_pred = [], []
for images, labels in test_ds:
    preds = model.predict(images, verbose = 0)
    y_true.extend(labels.numpy())
    y_pred.extend(np.argmax(preds, axis = 1))

cm = confusion_matrix(y_true, y_pred)
plt.figure(figsize = (8, 6))
sns.heatmap(cm, annot= True, fmt= 'd',
            xticklabels= CLASS_NAMES,
            yticklabels= CLASS_NAMES,
            cmap= 'Blues')

plt.xlabel("Predicted")
plt.ylabel("Actual")
plt.title("Confusion Matrix")
plt.savefig("assets/confusion_matrix.png", dpi=150, bbox_inches='tight')

print("Classification report:- ")
print(classification_report(y_true, y_pred, target_names= CLASS_NAMES, labels= [0, 1, 2, 3]))