// BookingStatus enum values from Square API
export const BookingStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  CANCELLED_BY_CUSTOMER: 'CANCELLED_BY_CUSTOMER',
  CANCELLED_BY_SELLER: 'CANCELLED_BY_SELLER',
  NO_SHOW: 'NO_SHOW'
} as const;

export type BookingStatusType = typeof BookingStatus[keyof typeof BookingStatus];

// Admin component types
export interface Booking {
  id: string;
  customerId: string;
  customerName?: string;
  customer: {
    givenName?: string;
    familyName?: string;
    email?: string;
    phone?: string;
  }
  startAt: string;
  locationId: string;
  customerNote?: string;
  status: BookingStatusType;
  appointmentSegments?: Array<{
    durationMinutes: number;
    serviceVariationId: string;
  }>;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleColor?: string;
  serviceType?: string;
  vehicleType?: string;
}

export type FilterType = 'all' | 'today' | 'pending' | 'confirmed';