'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1750<T> = T extends (infer U)[]
  ? DeepReadonlyArray1750<U>
  : T extends object
  ? DeepReadonlyObject1750<T>
  : T;

interface DeepReadonlyArray1750<T> extends ReadonlyArray<DeepReadonly1750<T>> {}

type DeepReadonlyObject1750<T> = {
  readonly [P in keyof T]: DeepReadonly1750<T[P]>;
};

type UnionToIntersection1750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1750<T> = UnionToIntersection1750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1750<T extends unknown[], V> = [...T, V];

type TuplifyUnion1750<T, L = LastOf1750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1750<TuplifyUnion1750<Exclude<T, L>>, L>;

type DeepPartial1750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1750<T[P]> }
  : T;

type Paths1750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1750<K, Paths1750<T[K], Prev1750[D]>> : never }[keyof T]
  : never;

type Prev1750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1750 {
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

type ConfigPaths1750 = Paths1750<NestedConfig1750>;

interface HeavyProps1750 {
  config: DeepPartial1750<NestedConfig1750>;
  path?: ConfigPaths1750;
}

const HeavyComponent1750 = memo(function HeavyComponent1750({ config }: HeavyProps1750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1750.displayName = 'HeavyComponent1750';
export default HeavyComponent1750;
