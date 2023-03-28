export class Roller {
    private distribution: Record<number, number>;
    private lastRoll: number;
    readonly faces: number;
  
    constructor(faces: number = 6) {
      if (!Number.isInteger(faces) || faces < 2) {
        throw new Error('Invalid number of faces.');
      }
      this.faces = faces;
      this.lastRoll = 0;
      this.distribution = Array.from({ length: faces }, (_, i) => [i + 1, 0])
        .reduce((acc, [face, count]) => {
          acc[face] = count;
          return acc;
        }, {} as Record<number, number>);
    }
  
    roll(value: number): number {
      if (!Number.isInteger(value) || value < 1 || value > this.faces) {
        return 0;
      }
      this.lastRoll = value;
      this.distribution[value]++;
      return value;
    }
  
    getLastRoll(): number {
      return this.lastRoll;
    }
  
    getDistribution(): Record<number, number> {
      return { ...this.distribution };
    }
  }