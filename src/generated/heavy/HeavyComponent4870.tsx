'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4870<T> = T extends (infer U)[]
  ? DeepReadonlyArray4870<U>
  : T extends object
  ? DeepReadonlyObject4870<T>
  : T;

interface DeepReadonlyArray4870<T> extends ReadonlyArray<DeepReadonly4870<T>> {}

type DeepReadonlyObject4870<T> = {
  readonly [P in keyof T]: DeepReadonly4870<T[P]>;
};

type UnionToIntersection4870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4870<T> = UnionToIntersection4870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4870<T extends unknown[], V> = [...T, V];

type TuplifyUnion4870<T, L = LastOf4870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4870<TuplifyUnion4870<Exclude<T, L>>, L>;

type DeepPartial4870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4870<T[P]> }
  : T;

type Paths4870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4870<K, Paths4870<T[K], Prev4870[D]>> : never }[keyof T]
  : never;

type Prev4870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4870 {
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

type ConfigPaths4870 = Paths4870<NestedConfig4870>;

interface HeavyProps4870 {
  config: DeepPartial4870<NestedConfig4870>;
  path?: ConfigPaths4870;
}

const HeavyComponent4870 = memo(function HeavyComponent4870({ config }: HeavyProps4870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4870.displayName = 'HeavyComponent4870';
export default HeavyComponent4870;
