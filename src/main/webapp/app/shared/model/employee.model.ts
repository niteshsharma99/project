import dayjs from 'dayjs';

export interface IEmployee {
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  hireDate?: string | null;
  salary?: number | null;
  commissionPct?: number | null;
}

export const defaultValue: Readonly<IEmployee> = {};
