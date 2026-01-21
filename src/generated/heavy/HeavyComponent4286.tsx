'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4286<T> = T extends (infer U)[]
  ? DeepReadonlyArray4286<U>
  : T extends object
  ? DeepReadonlyObject4286<T>
  : T;

interface DeepReadonlyArray4286<T> extends ReadonlyArray<DeepReadonly4286<T>> {}

type DeepReadonlyObject4286<T> = {
  readonly [P in keyof T]: DeepReadonly4286<T[P]>;
};

type UnionToIntersection4286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4286<T> = UnionToIntersection4286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4286<T extends unknown[], V> = [...T, V];

type TuplifyUnion4286<T, L = LastOf4286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4286<TuplifyUnion4286<Exclude<T, L>>, L>;

type DeepPartial4286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4286<T[P]> }
  : T;

type Paths4286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4286<K, Paths4286<T[K], Prev4286[D]>> : never }[keyof T]
  : never;

type Prev4286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4286 {
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

type ConfigPaths4286 = Paths4286<NestedConfig4286>;

interface HeavyProps4286 {
  config: DeepPartial4286<NestedConfig4286>;
  path?: ConfigPaths4286;
}

const HeavyComponent4286 = memo(function HeavyComponent4286({ config }: HeavyProps4286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4286.displayName = 'HeavyComponent4286';
export default HeavyComponent4286;
