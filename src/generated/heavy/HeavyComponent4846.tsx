'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4846<T> = T extends (infer U)[]
  ? DeepReadonlyArray4846<U>
  : T extends object
  ? DeepReadonlyObject4846<T>
  : T;

interface DeepReadonlyArray4846<T> extends ReadonlyArray<DeepReadonly4846<T>> {}

type DeepReadonlyObject4846<T> = {
  readonly [P in keyof T]: DeepReadonly4846<T[P]>;
};

type UnionToIntersection4846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4846<T> = UnionToIntersection4846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4846<T extends unknown[], V> = [...T, V];

type TuplifyUnion4846<T, L = LastOf4846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4846<TuplifyUnion4846<Exclude<T, L>>, L>;

type DeepPartial4846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4846<T[P]> }
  : T;

type Paths4846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4846<K, Paths4846<T[K], Prev4846[D]>> : never }[keyof T]
  : never;

type Prev4846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4846 {
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

type ConfigPaths4846 = Paths4846<NestedConfig4846>;

interface HeavyProps4846 {
  config: DeepPartial4846<NestedConfig4846>;
  path?: ConfigPaths4846;
}

const HeavyComponent4846 = memo(function HeavyComponent4846({ config }: HeavyProps4846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4846.displayName = 'HeavyComponent4846';
export default HeavyComponent4846;
