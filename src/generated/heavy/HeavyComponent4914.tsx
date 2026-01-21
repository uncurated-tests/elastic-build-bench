'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4914<T> = T extends (infer U)[]
  ? DeepReadonlyArray4914<U>
  : T extends object
  ? DeepReadonlyObject4914<T>
  : T;

interface DeepReadonlyArray4914<T> extends ReadonlyArray<DeepReadonly4914<T>> {}

type DeepReadonlyObject4914<T> = {
  readonly [P in keyof T]: DeepReadonly4914<T[P]>;
};

type UnionToIntersection4914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4914<T> = UnionToIntersection4914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4914<T extends unknown[], V> = [...T, V];

type TuplifyUnion4914<T, L = LastOf4914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4914<TuplifyUnion4914<Exclude<T, L>>, L>;

type DeepPartial4914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4914<T[P]> }
  : T;

type Paths4914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4914<K, Paths4914<T[K], Prev4914[D]>> : never }[keyof T]
  : never;

type Prev4914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4914 {
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

type ConfigPaths4914 = Paths4914<NestedConfig4914>;

interface HeavyProps4914 {
  config: DeepPartial4914<NestedConfig4914>;
  path?: ConfigPaths4914;
}

const HeavyComponent4914 = memo(function HeavyComponent4914({ config }: HeavyProps4914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4914.displayName = 'HeavyComponent4914';
export default HeavyComponent4914;
