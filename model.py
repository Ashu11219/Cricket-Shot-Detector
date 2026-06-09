from preprocess import preprocess_data
import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.applications import MobileNetV2

train_ds, val_ds, test_ds = preprocess_data()
# --- Augmentation layer (add this to your data pipeline) ---
data_augmentation = tf.keras.Sequential([
    layers.RandomFlip("horizontal"),
    layers.RandomRotation(0.1),
    layers.RandomZoom(0.1),
    layers.RandomBrightness(0.2),
    layers.RandomContrast(0.2),
])


# --- Build the model ---
def build_model(num_classes=4):
    # Load MobileNetV2 pretrained on ImageNet
    # include_top=False means "give me the feature extractor, not the classifier"
    # input_shape must match your IMG_SIZE
    base_model = MobileNetV2(
        input_shape=(224, 224, 3),
        include_top=False,
        weights="imagenet"
    )

    # Phase 1: freeze the entire base
    base_model.trainable = False

    # Build the full model
    inputs = tf.keras.Input(shape=(224, 224, 3))
    x = data_augmentation(inputs)  # augment only during training
    x = tf.keras.applications.mobilenet_v2.preprocess_input(x)  # normalize to [-1, 1]
    x = base_model(x, training=False)  # training=False keeps BN layers frozen
    x = layers.GlobalAveragePooling2D()(x)  # flatten feature maps to a vector
    x = layers.Dropout(0.3)(x)  # regularization

    outputs = layers.Dense(num_classes, activation = "softmax")(x)
    return tf.keras.Model(inputs, outputs)

model = build_model()

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()