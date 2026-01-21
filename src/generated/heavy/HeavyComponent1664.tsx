'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1664<T> = T extends (infer U)[]
  ? DeepReadonlyArray1664<U>
  : T extends object
  ? DeepReadonlyObject1664<T>
  : T;

interface DeepReadonlyArray1664<T> extends ReadonlyArray<DeepReadonly1664<T>> {}

type DeepReadonlyObject1664<T> = {
  readonly [P in keyof T]: DeepReadonly1664<T[P]>;
};

type UnionToIntersection1664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1664<T> = UnionToIntersection1664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1664<T extends unknown[], V> = [...T, V];

type TuplifyUnion1664<T, L = LastOf1664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1664<TuplifyUnion1664<Exclude<T, L>>, L>;

type DeepPartial1664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1664<T[P]> }
  : T;

type Paths1664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1664<K, Paths1664<T[K], Prev1664[D]>> : never }[keyof T]
  : never;

type Prev1664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1664 {
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

type ConfigPaths1664 = Paths1664<NestedConfig1664>;

interface HeavyProps1664 {
  config: DeepPartial1664<NestedConfig1664>;
  path?: ConfigPaths1664;
}

const HeavyComponent1664 = memo(function HeavyComponent1664({ config }: HeavyProps1664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1664.displayName = 'HeavyComponent1664';
export default HeavyComponent1664;
