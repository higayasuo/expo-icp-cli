import { describe, it, expect } from 'vitest';
import { getPackages } from '../installCommon';
import {
  defaultPackages,
  iiIntegrationHelpersPackages,
  expoIcpHelpersPackages,
} from '../packages';

describe('installCommon', () => {
  describe('getPackages', () => {
    it('should return default packages when no options are provided', () => {
      const packages = getPackages({});
      expect(packages).toEqual(defaultPackages);
    });

    it('should return II integration helper packages when iiIntegrationHelpers is true', () => {
      const packages = getPackages({ iiIntegrationHelpers: true });
      expect(packages).toEqual(iiIntegrationHelpersPackages);
    });

    it('should return Expo ICP helper packages when expoIcpHelpers is true', () => {
      const packages = getPackages({ expoIcpHelpers: true });
      expect(packages).toEqual(expoIcpHelpersPackages);
    });

    it('should prioritize iiIntegrationHelpers over expoIcpHelpers', () => {
      const packages = getPackages({
        iiIntegrationHelpers: true,
        expoIcpHelpers: true,
      });
      expect(packages).toEqual(iiIntegrationHelpersPackages);
    });
  });
});
