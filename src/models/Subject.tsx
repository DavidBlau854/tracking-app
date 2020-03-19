export interface ISubject {
  id: string;
  title: string;
  creationDate: Date;
  archived: boolean;
  TrackingPeriod: TrackingPeriod;
  unit: Units;
  unitInputType: UnitInputType;
  unitDesc: string;
  subjectDesc: string;
  goal: Goal;
  eventsArray: any[];
  endDate: Date | null;
  backgroundPic: null;
}

export enum TrackingPeriod {
  Day = "day",
  Week = "week",
  Months = "months",
  Years = "years",
  Infinity = "not ending"
}

export enum Units {
  Times = "times",
  KM = "km",
  Calories = "kal",
  Time = "time"
}

export enum Goal {
  avg,
  total
}

export enum UnitInputType {
  number = "number",
  time = "time"
}
