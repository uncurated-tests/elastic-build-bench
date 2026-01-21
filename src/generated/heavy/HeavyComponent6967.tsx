'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6967<T> = T extends (infer U)[]
  ? DeepReadonlyArray6967<U>
  : T extends object
  ? DeepReadonlyObject6967<T>
  : T;

interface DeepReadonlyArray6967<T> extends ReadonlyArray<DeepReadonly6967<T>> {}

type DeepReadonlyObject6967<T> = {
  readonly [P in keyof T]: DeepReadonly6967<T[P]>;
};

type UnionToIntersection6967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6967<T> = UnionToIntersection6967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6967<T extends unknown[], V> = [...T, V];

type TuplifyUnion6967<T, L = LastOf6967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6967<TuplifyUnion6967<Exclude<T, L>>, L>;

type DeepPartial6967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6967<T[P]> }
  : T;

type Paths6967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6967<K, Paths6967<T[K], Prev6967[D]>> : never }[keyof T]
  : never;

type Prev6967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6967 {
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

type ConfigPaths6967 = Paths6967<NestedConfig6967>;

interface HeavyProps6967 {
  config: DeepPartial6967<NestedConfig6967>;
  path?: ConfigPaths6967;
}

const HeavyComponent6967 = memo(function HeavyComponent6967({ config }: HeavyProps6967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6967.displayName = 'HeavyComponent6967';
export default HeavyComponent6967;
