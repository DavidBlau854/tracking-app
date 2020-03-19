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

export enum TrackingPeriod {
  days,
  weeks,
  months,
  years,
  infinity
}

export enum Units {
  times,
  km,
  calories,
  time
}

export enum Goal {
  avg,
  total
}
