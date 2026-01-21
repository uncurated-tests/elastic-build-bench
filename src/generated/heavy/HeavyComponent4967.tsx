'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4967<T> = T extends (infer U)[]
  ? DeepReadonlyArray4967<U>
  : T extends object
  ? DeepReadonlyObject4967<T>
  : T;

interface DeepReadonlyArray4967<T> extends ReadonlyArray<DeepReadonly4967<T>> {}

type DeepReadonlyObject4967<T> = {
  readonly [P in keyof T]: DeepReadonly4967<T[P]>;
};

type UnionToIntersection4967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4967<T> = UnionToIntersection4967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4967<T extends unknown[], V> = [...T, V];

type TuplifyUnion4967<T, L = LastOf4967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4967<TuplifyUnion4967<Exclude<T, L>>, L>;

type DeepPartial4967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4967<T[P]> }
  : T;

type Paths4967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4967<K, Paths4967<T[K], Prev4967[D]>> : never }[keyof T]
  : never;

type Prev4967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4967 {
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

type ConfigPaths4967 = Paths4967<NestedConfig4967>;

interface HeavyProps4967 {
  config: DeepPartial4967<NestedConfig4967>;
  path?: ConfigPaths4967;
}

const HeavyComponent4967 = memo(function HeavyComponent4967({ config }: HeavyProps4967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4967.displayName = 'HeavyComponent4967';
export default HeavyComponent4967;
