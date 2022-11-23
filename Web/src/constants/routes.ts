const paths = {
  index: "/",
  home: "/home",
  services: "/services",
  portal: "/portal",
  contact: "/contact",
  about: "/about",
  invalid: "/invalid",
  events: "/events",
  event_invites: "/events/invites/:id",

  /** ADMIN PATHS */
  login: "/admin/login",
  adminDashboard: "/admin/dashboard",
  adminInquiries: "/admin/inquiries",
  adminCalendar: "/admin/calendar",
  adminServices: "/admin/services",
  adminAccounts: "/admin/admin-accounts",
  adminEvents: "/admin/events",
  adminGraphs: "/admin/graphs",
  adminContacts: "/admin/contacts",
  adminEventInvites: "/admin/event-invites",
} as const;

export default paths;
