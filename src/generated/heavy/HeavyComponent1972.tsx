'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1972<T> = T extends (infer U)[]
  ? DeepReadonlyArray1972<U>
  : T extends object
  ? DeepReadonlyObject1972<T>
  : T;

interface DeepReadonlyArray1972<T> extends ReadonlyArray<DeepReadonly1972<T>> {}

type DeepReadonlyObject1972<T> = {
  readonly [P in keyof T]: DeepReadonly1972<T[P]>;
};

type UnionToIntersection1972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1972<T> = UnionToIntersection1972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1972<T extends unknown[], V> = [...T, V];

type TuplifyUnion1972<T, L = LastOf1972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1972<TuplifyUnion1972<Exclude<T, L>>, L>;

type DeepPartial1972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1972<T[P]> }
  : T;

type Paths1972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1972<K, Paths1972<T[K], Prev1972[D]>> : never }[keyof T]
  : never;

type Prev1972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1972 {
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

type ConfigPaths1972 = Paths1972<NestedConfig1972>;

interface HeavyProps1972 {
  config: DeepPartial1972<NestedConfig1972>;
  path?: ConfigPaths1972;
}

const HeavyComponent1972 = memo(function HeavyComponent1972({ config }: HeavyProps1972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1972.displayName = 'HeavyComponent1972';
export default HeavyComponent1972;
