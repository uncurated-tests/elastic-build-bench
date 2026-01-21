'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1855<T> = T extends (infer U)[]
  ? DeepReadonlyArray1855<U>
  : T extends object
  ? DeepReadonlyObject1855<T>
  : T;

interface DeepReadonlyArray1855<T> extends ReadonlyArray<DeepReadonly1855<T>> {}

type DeepReadonlyObject1855<T> = {
  readonly [P in keyof T]: DeepReadonly1855<T[P]>;
};

type UnionToIntersection1855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1855<T> = UnionToIntersection1855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1855<T extends unknown[], V> = [...T, V];

type TuplifyUnion1855<T, L = LastOf1855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1855<TuplifyUnion1855<Exclude<T, L>>, L>;

type DeepPartial1855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1855<T[P]> }
  : T;

type Paths1855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1855<K, Paths1855<T[K], Prev1855[D]>> : never }[keyof T]
  : never;

type Prev1855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1855 {
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

type ConfigPaths1855 = Paths1855<NestedConfig1855>;

interface HeavyProps1855 {
  config: DeepPartial1855<NestedConfig1855>;
  path?: ConfigPaths1855;
}

const HeavyComponent1855 = memo(function HeavyComponent1855({ config }: HeavyProps1855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1855.displayName = 'HeavyComponent1855';
export default HeavyComponent1855;
