'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1663<T> = T extends (infer U)[]
  ? DeepReadonlyArray1663<U>
  : T extends object
  ? DeepReadonlyObject1663<T>
  : T;

interface DeepReadonlyArray1663<T> extends ReadonlyArray<DeepReadonly1663<T>> {}

type DeepReadonlyObject1663<T> = {
  readonly [P in keyof T]: DeepReadonly1663<T[P]>;
};

type UnionToIntersection1663<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1663<T> = UnionToIntersection1663<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1663<T extends unknown[], V> = [...T, V];

type TuplifyUnion1663<T, L = LastOf1663<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1663<TuplifyUnion1663<Exclude<T, L>>, L>;

type DeepPartial1663<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1663<T[P]> }
  : T;

type Paths1663<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1663<K, Paths1663<T[K], Prev1663[D]>> : never }[keyof T]
  : never;

type Prev1663 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1663<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1663 {
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

type ConfigPaths1663 = Paths1663<NestedConfig1663>;

interface HeavyProps1663 {
  config: DeepPartial1663<NestedConfig1663>;
  path?: ConfigPaths1663;
}

const HeavyComponent1663 = memo(function HeavyComponent1663({ config }: HeavyProps1663) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1663) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1663 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1663: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1663.displayName = 'HeavyComponent1663';
export default HeavyComponent1663;
