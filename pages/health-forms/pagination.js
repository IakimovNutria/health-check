import Appetite from "./Appetite";
import Body from "./Body";
import Dream from "./Dream";
import Emotional from "./Emotional";
import Heart from "./Heart";
import Menstrual from "./Menstrual";
import Training from "./Training";
import {Inputs} from "../../constants/constants";

export const Pagination = {
    [Inputs.MENSTRUAL]: Menstrual,
    [Inputs.DREAM]: Dream,
    [Inputs.BODY]: Body,
    [Inputs.EMOTIONAL]: Emotional,
    [Inputs.TRAINING]: Training,
    [Inputs.HEART]: Heart,
    [Inputs.APPETITE]: Appetite
};
