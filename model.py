from preprocess import preprocess_data
import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.applications import MobileNetV2

data_augmentation = tf.keras.Sequential([
    layers.RandomFlip("horizontal"),
    layers.RandomRotation(0.1),
    layers.RandomZoom(0.1),
    layers.RandomBrightness(0.2),
    layers.RandomContrast(0.2),
])

def build_model(base_model, num_classes=4):
    base_model.trainable = False

    # Build the full model
    inputs = tf.keras.Input(shape=(224, 224, 3))
    x = data_augmentation(inputs)  # augment only during training
    x = tf.keras.applications.mobilenet_v2.preprocess_input(x)  # normalize to [-1, 1]
    x = base_model(x, training=False)  # training=False keeps BN layers frozen
    x = layers.GlobalAveragePooling2D()(x)  # flatten feature maps to a vector
    x = layers.Dropout(0.3)(x)  # regularization

    outputs = layers.Dense(num_classes, activation = "softmax")(x)
    return tf.keras.Model(inputs, outputs), base_model


if __name__ == "__main__":
    base_model = MobileNetV2(
        input_shape=(224, 224, 3),
        include_top=False,
        weights="imagenet"
    )

    train_ds, val_ds, test_ds = preprocess_data()
    model, base_model = build_model(base_model)

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
        loss='sparse_categorical_crossentropy',
        metrics=['accuracy']
    )

    model.summary()

    history = model.fit(
        train_ds,
        validation_data = val_ds,
        epochs=10
    )

    base_model.trainable = True
    layer_len = len(base_model.layers)
    print(f"Total layers: {layer_len}")

    fine_tune_at = int(layer_len * 0.7)
    for layer in base_model.layers[:fine_tune_at]:
        layer.trainable = False

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-5),
        loss='sparse_categorical_crossentropy',
        metrics=['accuracy']
    )

    model.summary()

    history_fine = model.fit(
        train_ds,
        validation_data = val_ds,
        epochs = 30,
        initial_epoch = 10
    )

    model.save("Cricket_Shot_Detection_model.keras")
    print("Model saved.")
