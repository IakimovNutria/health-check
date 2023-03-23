import Appetite from "./Appetite";
import Body from "./Body";
import Dream from "./Dream";
import Emotional from "./Emotional";
import Heart from "./Heart";
import Menstrual from "./Menstrual";
import Training from "./Training";

export const FormsHeaders = {
    DREAM: "КАЧЕСТВО СНА",
    HEART: "УТРЕННЯЯ ЧСС",
    BODY: "ОБЩЕЕ СОСТОЯНИЕ ТЕЛА",
    EMOTIONAL: "ЭМОЦИОНАЛЬНОЕ СОСТОЯНИЕ",
    APPETITE: "АППЕТИТ",
    TRAINING: "ТРЕНИРОВКА",
    MENSTRUAL: "МЕНСТРУАЛЬНЫЙ ЦИКЛ"
}

export const Forms = {
    DREAM: "DREAM",
    HEART: "HEART",
    BODY: "BODY",
    EMOTIONAL: "EMOTIONAL",
    APPETITE: "APPETITE",
    TRAINING: "TRAINING",
    MENSTRUAL: "MENSTRUAL"
}

export const Pagination = {
    [Forms.MENSTRUAL]: Menstrual,
    [Forms.DREAM]: Dream,
    [Forms.BODY]: Body,
    [Forms.EMOTIONAL]: Emotional,
    [Forms.TRAINING]: Training,
    [Forms.HEART]: Heart,
    [Forms.APPETITE]: Appetite
};

