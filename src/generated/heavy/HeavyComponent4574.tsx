'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4574<T> = T extends (infer U)[]
  ? DeepReadonlyArray4574<U>
  : T extends object
  ? DeepReadonlyObject4574<T>
  : T;

interface DeepReadonlyArray4574<T> extends ReadonlyArray<DeepReadonly4574<T>> {}

type DeepReadonlyObject4574<T> = {
  readonly [P in keyof T]: DeepReadonly4574<T[P]>;
};

type UnionToIntersection4574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4574<T> = UnionToIntersection4574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4574<T extends unknown[], V> = [...T, V];

type TuplifyUnion4574<T, L = LastOf4574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4574<TuplifyUnion4574<Exclude<T, L>>, L>;

type DeepPartial4574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4574<T[P]> }
  : T;

type Paths4574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4574<K, Paths4574<T[K], Prev4574[D]>> : never }[keyof T]
  : never;

type Prev4574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4574 {
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

type ConfigPaths4574 = Paths4574<NestedConfig4574>;

interface HeavyProps4574 {
  config: DeepPartial4574<NestedConfig4574>;
  path?: ConfigPaths4574;
}

const HeavyComponent4574 = memo(function HeavyComponent4574({ config }: HeavyProps4574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4574.displayName = 'HeavyComponent4574';
export default HeavyComponent4574;
