export interface Address {
  address_id: string;
  address_line1: string;
  city: string;
  common_place_name: string;
  cross_street1: string;
  cross_street2: string;
  first_due: string;
  geohash: string;
  latitude: number;
  longitude: number;
  name: string;
  number: number;
  postal_code: string;
  prefix_direction: string;
  response_zone: string;
  state: string;
  suffix_direction: string;
  type: string;
}
interface UnitStatus {
  geohash: string;
  latitude: number;
  longitude: number;
  timestamp: string;
}

export interface Apparatus {
  car_id: string;
  extended_data: {
    event_duration: number;
    response_duration: number;
    travel_duration: number;
    turnout_duration: number;
  };
  geohash: string;
  personnel: any[]; // Dont know the type of this yet
  shift: string;
  station: string;
  unit_id: string;
  unit_status: {
    acknowledged: UnitStatus;
    arrived: UnitStatus;
    available: UnitStatus;
    cleared: UnitStatus;
    dispatched: UnitStatus;
    enroute: UnitStatus;
    [status: string]: UnitStatus;
  };
  unit_type: string;
}

interface Description {
  comments: string;
  day_of_week: string;
  event_closed: string;
  event_id: string;
  event_opened: string;
  extended_data: {
    dispatch_duration: number;
    event_duration: number;
    response_time: number;
  };
  first_unit_arrived: string;
  first_unit_dispatched: string;
  first_unit_enroute: string;
  hour_of_day: number;
  incident_number: string;
  loi_search_complete: string;
  subtype: string;
  type: string;
}

export interface Incident {
  id: string;
  address: Address;
  apparatus: Apparatus[];
  description: Description;
  fire_department: {
    fd_id: string;
    firecares_id: string;
    name: string;
    shift: string;
    state: string;
    timezone: string;
  };
  version: string;
}
