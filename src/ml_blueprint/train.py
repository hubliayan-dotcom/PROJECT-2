from src.ml_blueprint.model import build_model
from src.ml_blueprint.data_loader import get_data_generators
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint

def run_training(data_dir):
    """
    Modular training loop.
    """
    train_gen = get_data_generators(data_dir)
    model = build_model()
    
    model.compile(
        optimizer='adam',
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    
    callbacks = [
        EarlyStopping(patience=5, restore_best_weights=True),
        ModelCheckpoint('models/best_model.h5', save_best_only=True)
    ]
    
    history = model.fit(
        train_gen,
        epochs=20,
        callbacks=callbacks
    )
    return history
