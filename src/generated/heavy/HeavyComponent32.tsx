'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly32<T> = T extends (infer U)[]
  ? DeepReadonlyArray32<U>
  : T extends object
  ? DeepReadonlyObject32<T>
  : T;

interface DeepReadonlyArray32<T> extends ReadonlyArray<DeepReadonly32<T>> {}

type DeepReadonlyObject32<T> = {
  readonly [P in keyof T]: DeepReadonly32<T[P]>;
};

type UnionToIntersection32<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf32<T> = UnionToIntersection32<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push32<T extends unknown[], V> = [...T, V];

type TuplifyUnion32<T, L = LastOf32<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push32<TuplifyUnion32<Exclude<T, L>>, L>;

type DeepPartial32<T> = T extends object
  ? { [P in keyof T]?: DeepPartial32<T[P]> }
  : T;

type Paths32<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join32<K, Paths32<T[K], Prev32[D]>> : never }[keyof T]
  : never;

type Prev32 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join32<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig32 {
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

type ConfigPaths32 = Paths32<NestedConfig32>;

interface HeavyProps32 {
  config: DeepPartial32<NestedConfig32>;
  path?: ConfigPaths32;
}

const HeavyComponent32 = memo(function HeavyComponent32({ config }: HeavyProps32) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 32) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-32 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H32: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent32.displayName = 'HeavyComponent32';
export default HeavyComponent32;
