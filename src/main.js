import FilterView from './view/filter-view.js';
import {render} from './framework/render.js';
import BoardPresenter from './presenter/board-presenter.js';
import TripPointModel from './model/trip-point-model.js';
import {mockInit} from './mock/utils.js';
import {offersByType} from './mock/const.js';

const pageContainer = document.querySelector('.trip-events');
const siteFilterElement = document.querySelector('.trip-controls__filters');

const [tripPoints, destinations] = mockInit(5, 10);
const tripPointsModel = new TripPointModel(tripPoints, destinations, offersByType);

const boardPresenter = new BoardPresenter({boardContainer: pageContainer, tripPointsModel});
render(new FilterView(), siteFilterElement);

boardPresenter.init();
//жоска модуль 8.2
