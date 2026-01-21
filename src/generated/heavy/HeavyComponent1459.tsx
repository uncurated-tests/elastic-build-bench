'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1459<T> = T extends (infer U)[]
  ? DeepReadonlyArray1459<U>
  : T extends object
  ? DeepReadonlyObject1459<T>
  : T;

interface DeepReadonlyArray1459<T> extends ReadonlyArray<DeepReadonly1459<T>> {}

type DeepReadonlyObject1459<T> = {
  readonly [P in keyof T]: DeepReadonly1459<T[P]>;
};

type UnionToIntersection1459<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1459<T> = UnionToIntersection1459<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1459<T extends unknown[], V> = [...T, V];

type TuplifyUnion1459<T, L = LastOf1459<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1459<TuplifyUnion1459<Exclude<T, L>>, L>;

type DeepPartial1459<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1459<T[P]> }
  : T;

type Paths1459<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1459<K, Paths1459<T[K], Prev1459[D]>> : never }[keyof T]
  : never;

type Prev1459 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1459<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1459 {
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

type ConfigPaths1459 = Paths1459<NestedConfig1459>;

interface HeavyProps1459 {
  config: DeepPartial1459<NestedConfig1459>;
  path?: ConfigPaths1459;
}

const HeavyComponent1459 = memo(function HeavyComponent1459({ config }: HeavyProps1459) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1459) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1459 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1459: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1459.displayName = 'HeavyComponent1459';
export default HeavyComponent1459;
