import { appServices } from './appServices';
import { faturaServices } from './faturaServices';
import { sigortaServices } from './sigortaServices';
import { vergiServices } from './vergiServices';
import { digerServices } from './digerServices';
import { tasitServices } from './tasitServices';
import { borcServices } from './borcServices';
import { internetServices } from './internetServices';
import { tvServices } from './tvServices';
import { kodServices } from './kodServices';
import { tamirServices } from './tamirServices';
import { calculationServices } from './CalculationServices';

export const allServices = [
  ...appServices,
  ...faturaServices,
  ...sigortaServices,
  ...vergiServices,
  ...digerServices,
  ...tasitServices,
  ...borcServices,
  ...internetServices,
  ...tvServices,
  ...kodServices,
  ...tamirServices,
  ...calculationServices
];