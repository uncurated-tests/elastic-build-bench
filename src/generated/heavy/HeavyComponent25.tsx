'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly25<T> = T extends (infer U)[]
  ? DeepReadonlyArray25<U>
  : T extends object
  ? DeepReadonlyObject25<T>
  : T;

interface DeepReadonlyArray25<T> extends ReadonlyArray<DeepReadonly25<T>> {}

type DeepReadonlyObject25<T> = {
  readonly [P in keyof T]: DeepReadonly25<T[P]>;
};

type UnionToIntersection25<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf25<T> = UnionToIntersection25<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push25<T extends unknown[], V> = [...T, V];

type TuplifyUnion25<T, L = LastOf25<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push25<TuplifyUnion25<Exclude<T, L>>, L>;

type DeepPartial25<T> = T extends object
  ? { [P in keyof T]?: DeepPartial25<T[P]> }
  : T;

type Paths25<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join25<K, Paths25<T[K], Prev25[D]>> : never }[keyof T]
  : never;

type Prev25 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join25<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig25 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths25 = Paths25<NestedConfig25>;

interface HeavyProps25 {
  config: DeepPartial25<NestedConfig25>;
  path?: ConfigPaths25;
}

const HeavyComponent25 = memo(function HeavyComponent25({ config }: HeavyProps25) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 25) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-25 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H25: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent25.displayName = 'HeavyComponent25';
export default HeavyComponent25;
