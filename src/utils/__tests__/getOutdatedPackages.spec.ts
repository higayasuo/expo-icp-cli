import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getOutdatedPackages } from '../getOutdatedPackages';
import { execCommand } from '../execCommand';

vi.mock('../execCommand', () => ({
  execCommand: vi.fn(),
}));

describe('getOutdatedPackages', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return array of outdated package names', () => {
    const targetPackages = ['package-a', 'package-b'];
    const mockOutput = JSON.stringify({
      'package-a': {
        current: '1.2.3',
        latest: '2.0.0',
      },
      'package-b': {
        current: '3.4.5',
        latest: '4.0.0',
      },
    });

    vi.mocked(execCommand).mockReturnValue(mockOutput);

    const result = getOutdatedPackages(targetPackages);

    expect(execCommand).toHaveBeenCalledWith(
      'npm outdated --json package-a package-b',
    );
    expect(result).toEqual(['package-a', 'package-b']);
  });

  it('should return empty array when no packages are outdated', () => {
    const targetPackages = ['package-a', 'package-b'];
    const mockOutput = JSON.stringify({});

    vi.mocked(execCommand).mockReturnValue(mockOutput);

    const result = getOutdatedPackages(targetPackages);

    expect(execCommand).toHaveBeenCalledWith(
      'npm outdated --json package-a package-b',
    );
    expect(result).toEqual([]);
  });

  it('should throw error for invalid JSON output', () => {
    const targetPackages = ['package-a', 'package-b'];
    vi.mocked(execCommand).mockReturnValue('invalid json');

    expect(() => getOutdatedPackages(targetPackages)).toThrow();
  });
});
