'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1811<T> = T extends (infer U)[]
  ? DeepReadonlyArray1811<U>
  : T extends object
  ? DeepReadonlyObject1811<T>
  : T;

interface DeepReadonlyArray1811<T> extends ReadonlyArray<DeepReadonly1811<T>> {}

type DeepReadonlyObject1811<T> = {
  readonly [P in keyof T]: DeepReadonly1811<T[P]>;
};

type UnionToIntersection1811<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1811<T> = UnionToIntersection1811<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1811<T extends unknown[], V> = [...T, V];

type TuplifyUnion1811<T, L = LastOf1811<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1811<TuplifyUnion1811<Exclude<T, L>>, L>;

type DeepPartial1811<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1811<T[P]> }
  : T;

type Paths1811<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1811<K, Paths1811<T[K], Prev1811[D]>> : never }[keyof T]
  : never;

type Prev1811 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1811<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1811 {
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

type ConfigPaths1811 = Paths1811<NestedConfig1811>;

interface HeavyProps1811 {
  config: DeepPartial1811<NestedConfig1811>;
  path?: ConfigPaths1811;
}

const HeavyComponent1811 = memo(function HeavyComponent1811({ config }: HeavyProps1811) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1811) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1811 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1811: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1811.displayName = 'HeavyComponent1811';
export default HeavyComponent1811;
