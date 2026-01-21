'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1977<T> = T extends (infer U)[]
  ? DeepReadonlyArray1977<U>
  : T extends object
  ? DeepReadonlyObject1977<T>
  : T;

interface DeepReadonlyArray1977<T> extends ReadonlyArray<DeepReadonly1977<T>> {}

type DeepReadonlyObject1977<T> = {
  readonly [P in keyof T]: DeepReadonly1977<T[P]>;
};

type UnionToIntersection1977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1977<T> = UnionToIntersection1977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1977<T extends unknown[], V> = [...T, V];

type TuplifyUnion1977<T, L = LastOf1977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1977<TuplifyUnion1977<Exclude<T, L>>, L>;

type DeepPartial1977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1977<T[P]> }
  : T;

type Paths1977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1977<K, Paths1977<T[K], Prev1977[D]>> : never }[keyof T]
  : never;

type Prev1977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1977 {
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

type ConfigPaths1977 = Paths1977<NestedConfig1977>;

interface HeavyProps1977 {
  config: DeepPartial1977<NestedConfig1977>;
  path?: ConfigPaths1977;
}

const HeavyComponent1977 = memo(function HeavyComponent1977({ config }: HeavyProps1977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1977.displayName = 'HeavyComponent1977';
export default HeavyComponent1977;
