from api import utils
from api.nlp.load import MdLoader
from api.nlp.preprocessing import Preprocessing
from api.nlp.representation import MergedMatrixRepresentation
from api.nlp.classifier import ClassificationProcessor, NaiveBayseTfIdfClassifier


def build_model():
    preprocessor = Preprocessing(
        MdLoader('./training.md'))
    data_repr = MergedMatrixRepresentation(preprocessor.data)
    classifier_processor = ClassificationProcessor(
        NaiveBayseTfIdfClassifier(), data_repr.data)
    classifier_processor.train()

    def predict(text):
        return classifier_processor.predict(
            data_repr.process_new_data(
                preprocessor.process_sentence(text)))

    return predict
