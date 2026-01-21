'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1740<T> = T extends (infer U)[]
  ? DeepReadonlyArray1740<U>
  : T extends object
  ? DeepReadonlyObject1740<T>
  : T;

interface DeepReadonlyArray1740<T> extends ReadonlyArray<DeepReadonly1740<T>> {}

type DeepReadonlyObject1740<T> = {
  readonly [P in keyof T]: DeepReadonly1740<T[P]>;
};

type UnionToIntersection1740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1740<T> = UnionToIntersection1740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1740<T extends unknown[], V> = [...T, V];

type TuplifyUnion1740<T, L = LastOf1740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1740<TuplifyUnion1740<Exclude<T, L>>, L>;

type DeepPartial1740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1740<T[P]> }
  : T;

type Paths1740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1740<K, Paths1740<T[K], Prev1740[D]>> : never }[keyof T]
  : never;

type Prev1740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1740 {
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

type ConfigPaths1740 = Paths1740<NestedConfig1740>;

interface HeavyProps1740 {
  config: DeepPartial1740<NestedConfig1740>;
  path?: ConfigPaths1740;
}

const HeavyComponent1740 = memo(function HeavyComponent1740({ config }: HeavyProps1740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1740.displayName = 'HeavyComponent1740';
export default HeavyComponent1740;
