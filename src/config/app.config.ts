interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Teacher', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'tuitionhouse',
  addOns: ['chat', 'notifications', 'file'],
};
