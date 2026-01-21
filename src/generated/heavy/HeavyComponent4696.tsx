'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4696<T> = T extends (infer U)[]
  ? DeepReadonlyArray4696<U>
  : T extends object
  ? DeepReadonlyObject4696<T>
  : T;

interface DeepReadonlyArray4696<T> extends ReadonlyArray<DeepReadonly4696<T>> {}

type DeepReadonlyObject4696<T> = {
  readonly [P in keyof T]: DeepReadonly4696<T[P]>;
};

type UnionToIntersection4696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4696<T> = UnionToIntersection4696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4696<T extends unknown[], V> = [...T, V];

type TuplifyUnion4696<T, L = LastOf4696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4696<TuplifyUnion4696<Exclude<T, L>>, L>;

type DeepPartial4696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4696<T[P]> }
  : T;

type Paths4696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4696<K, Paths4696<T[K], Prev4696[D]>> : never }[keyof T]
  : never;

type Prev4696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4696 {
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

type ConfigPaths4696 = Paths4696<NestedConfig4696>;

interface HeavyProps4696 {
  config: DeepPartial4696<NestedConfig4696>;
  path?: ConfigPaths4696;
}

const HeavyComponent4696 = memo(function HeavyComponent4696({ config }: HeavyProps4696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4696.displayName = 'HeavyComponent4696';
export default HeavyComponent4696;
