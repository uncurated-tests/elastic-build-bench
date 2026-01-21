'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1789<T> = T extends (infer U)[]
  ? DeepReadonlyArray1789<U>
  : T extends object
  ? DeepReadonlyObject1789<T>
  : T;

interface DeepReadonlyArray1789<T> extends ReadonlyArray<DeepReadonly1789<T>> {}

type DeepReadonlyObject1789<T> = {
  readonly [P in keyof T]: DeepReadonly1789<T[P]>;
};

type UnionToIntersection1789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1789<T> = UnionToIntersection1789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1789<T extends unknown[], V> = [...T, V];

type TuplifyUnion1789<T, L = LastOf1789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1789<TuplifyUnion1789<Exclude<T, L>>, L>;

type DeepPartial1789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1789<T[P]> }
  : T;

type Paths1789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1789<K, Paths1789<T[K], Prev1789[D]>> : never }[keyof T]
  : never;

type Prev1789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1789 {
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

type ConfigPaths1789 = Paths1789<NestedConfig1789>;

interface HeavyProps1789 {
  config: DeepPartial1789<NestedConfig1789>;
  path?: ConfigPaths1789;
}

const HeavyComponent1789 = memo(function HeavyComponent1789({ config }: HeavyProps1789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1789.displayName = 'HeavyComponent1789';
export default HeavyComponent1789;
