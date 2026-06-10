import tensorflow as tf

def preprocess_data():
    data_dir = "data"
    IMG_SIZE = (224, 224)
    BATCH_SIZE = 128


    train_ds = tf.keras.utils.image_dataset_from_directory(
        data_dir,
        validation_split = 0.2,
        subset = "training",
        seed=42,
        image_size = IMG_SIZE,
        batch_size = BATCH_SIZE,
        shuffle = True,
        verbose = False
    )

    val_and_test_ds = tf.keras.utils.image_dataset_from_directory(
        data_dir,
        validation_split = 0.2,
        subset = "validation",
        seed=42,
        image_size = IMG_SIZE,
        batch_size = BATCH_SIZE,
        shuffle = True,
        verbose = False
    )

    val_batches = int(len(val_and_test_ds) / 2)
    val_ds = val_and_test_ds.take(val_batches)
    test_ds = val_and_test_ds.skip(val_batches)

    # AUTOTUNE = tf.data.AUTOTUNE
    # train_ds = train_ds.cache().prefetch(buffer_size=AUTOTUNE)
    # val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)
    # test_ds = test_ds.cache().prefetch(buffer_size=AUTOTUNE)

    return train_ds, val_ds, test_ds