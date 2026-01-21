'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4915<T> = T extends (infer U)[]
  ? DeepReadonlyArray4915<U>
  : T extends object
  ? DeepReadonlyObject4915<T>
  : T;

interface DeepReadonlyArray4915<T> extends ReadonlyArray<DeepReadonly4915<T>> {}

type DeepReadonlyObject4915<T> = {
  readonly [P in keyof T]: DeepReadonly4915<T[P]>;
};

type UnionToIntersection4915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4915<T> = UnionToIntersection4915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4915<T extends unknown[], V> = [...T, V];

type TuplifyUnion4915<T, L = LastOf4915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4915<TuplifyUnion4915<Exclude<T, L>>, L>;

type DeepPartial4915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4915<T[P]> }
  : T;

type Paths4915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4915<K, Paths4915<T[K], Prev4915[D]>> : never }[keyof T]
  : never;

type Prev4915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4915 {
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

type ConfigPaths4915 = Paths4915<NestedConfig4915>;

interface HeavyProps4915 {
  config: DeepPartial4915<NestedConfig4915>;
  path?: ConfigPaths4915;
}

const HeavyComponent4915 = memo(function HeavyComponent4915({ config }: HeavyProps4915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4915.displayName = 'HeavyComponent4915';
export default HeavyComponent4915;
