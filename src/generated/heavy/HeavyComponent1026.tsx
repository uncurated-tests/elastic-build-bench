'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1026<T> = T extends (infer U)[]
  ? DeepReadonlyArray1026<U>
  : T extends object
  ? DeepReadonlyObject1026<T>
  : T;

interface DeepReadonlyArray1026<T> extends ReadonlyArray<DeepReadonly1026<T>> {}

type DeepReadonlyObject1026<T> = {
  readonly [P in keyof T]: DeepReadonly1026<T[P]>;
};

type UnionToIntersection1026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1026<T> = UnionToIntersection1026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1026<T extends unknown[], V> = [...T, V];

type TuplifyUnion1026<T, L = LastOf1026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1026<TuplifyUnion1026<Exclude<T, L>>, L>;

type DeepPartial1026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1026<T[P]> }
  : T;

type Paths1026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1026<K, Paths1026<T[K], Prev1026[D]>> : never }[keyof T]
  : never;

type Prev1026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1026 {
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

type ConfigPaths1026 = Paths1026<NestedConfig1026>;

interface HeavyProps1026 {
  config: DeepPartial1026<NestedConfig1026>;
  path?: ConfigPaths1026;
}

const HeavyComponent1026 = memo(function HeavyComponent1026({ config }: HeavyProps1026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1026.displayName = 'HeavyComponent1026';
export default HeavyComponent1026;
