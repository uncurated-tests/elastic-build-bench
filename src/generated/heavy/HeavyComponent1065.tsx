'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1065<T> = T extends (infer U)[]
  ? DeepReadonlyArray1065<U>
  : T extends object
  ? DeepReadonlyObject1065<T>
  : T;

interface DeepReadonlyArray1065<T> extends ReadonlyArray<DeepReadonly1065<T>> {}

type DeepReadonlyObject1065<T> = {
  readonly [P in keyof T]: DeepReadonly1065<T[P]>;
};

type UnionToIntersection1065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1065<T> = UnionToIntersection1065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1065<T extends unknown[], V> = [...T, V];

type TuplifyUnion1065<T, L = LastOf1065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1065<TuplifyUnion1065<Exclude<T, L>>, L>;

type DeepPartial1065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1065<T[P]> }
  : T;

type Paths1065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1065<K, Paths1065<T[K], Prev1065[D]>> : never }[keyof T]
  : never;

type Prev1065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1065 {
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

type ConfigPaths1065 = Paths1065<NestedConfig1065>;

interface HeavyProps1065 {
  config: DeepPartial1065<NestedConfig1065>;
  path?: ConfigPaths1065;
}

const HeavyComponent1065 = memo(function HeavyComponent1065({ config }: HeavyProps1065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1065.displayName = 'HeavyComponent1065';
export default HeavyComponent1065;
