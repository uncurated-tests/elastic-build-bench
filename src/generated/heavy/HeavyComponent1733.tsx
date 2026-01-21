'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1733<T> = T extends (infer U)[]
  ? DeepReadonlyArray1733<U>
  : T extends object
  ? DeepReadonlyObject1733<T>
  : T;

interface DeepReadonlyArray1733<T> extends ReadonlyArray<DeepReadonly1733<T>> {}

type DeepReadonlyObject1733<T> = {
  readonly [P in keyof T]: DeepReadonly1733<T[P]>;
};

type UnionToIntersection1733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1733<T> = UnionToIntersection1733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1733<T extends unknown[], V> = [...T, V];

type TuplifyUnion1733<T, L = LastOf1733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1733<TuplifyUnion1733<Exclude<T, L>>, L>;

type DeepPartial1733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1733<T[P]> }
  : T;

type Paths1733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1733<K, Paths1733<T[K], Prev1733[D]>> : never }[keyof T]
  : never;

type Prev1733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1733 {
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

type ConfigPaths1733 = Paths1733<NestedConfig1733>;

interface HeavyProps1733 {
  config: DeepPartial1733<NestedConfig1733>;
  path?: ConfigPaths1733;
}

const HeavyComponent1733 = memo(function HeavyComponent1733({ config }: HeavyProps1733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1733.displayName = 'HeavyComponent1733';
export default HeavyComponent1733;
