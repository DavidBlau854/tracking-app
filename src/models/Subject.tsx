export interface ISubject {
  id: string;
  title: string;
  creationDate: Date;
  archived: boolean;
  TrackingPeriod: TrackingPeriod;
  unit: Units;
  unitDesc: string;
  subjectDesc: string;
  goal: Goal;
  eventsArray: [];
  endDate: Date | null;
  backgroundPic: null;
}

enum TrackingPeriod {
  days,
  weeks,
  months,
  years,
  infinity
}

enum Units {
  numbers,
  km,
  calories,
  time
}

enum Goal {
  avg,
  total
}
