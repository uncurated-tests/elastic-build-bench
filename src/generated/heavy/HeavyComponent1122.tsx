'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1122<T> = T extends (infer U)[]
  ? DeepReadonlyArray1122<U>
  : T extends object
  ? DeepReadonlyObject1122<T>
  : T;

interface DeepReadonlyArray1122<T> extends ReadonlyArray<DeepReadonly1122<T>> {}

type DeepReadonlyObject1122<T> = {
  readonly [P in keyof T]: DeepReadonly1122<T[P]>;
};

type UnionToIntersection1122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1122<T> = UnionToIntersection1122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1122<T extends unknown[], V> = [...T, V];

type TuplifyUnion1122<T, L = LastOf1122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1122<TuplifyUnion1122<Exclude<T, L>>, L>;

type DeepPartial1122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1122<T[P]> }
  : T;

type Paths1122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1122<K, Paths1122<T[K], Prev1122[D]>> : never }[keyof T]
  : never;

type Prev1122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1122 {
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

type ConfigPaths1122 = Paths1122<NestedConfig1122>;

interface HeavyProps1122 {
  config: DeepPartial1122<NestedConfig1122>;
  path?: ConfigPaths1122;
}

const HeavyComponent1122 = memo(function HeavyComponent1122({ config }: HeavyProps1122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1122.displayName = 'HeavyComponent1122';
export default HeavyComponent1122;
