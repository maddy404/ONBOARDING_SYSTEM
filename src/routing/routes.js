import { LANDING, HOME, SLOT_BOOKING, ONBOARDING } from "./paths";
import { Home, SlotBooking } from "../pages/index";

const LANDING_ONE = {
  component: Home,
  path: LANDING,
};

const HOME_TWO = {
  component: Home,
  path: HOME,
};

const SLOT_BOOKING_THREE = {
  component: SlotBooking,
  path: SLOT_BOOKING,
};

const ONBOARDING_FOUR = {
  component: Home,
  path: ONBOARDING,
};

const routes = [LANDING_ONE, HOME_TWO, SLOT_BOOKING_THREE, ONBOARDING_FOUR];

export default routes;
