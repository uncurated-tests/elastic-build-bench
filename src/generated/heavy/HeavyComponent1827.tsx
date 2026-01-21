'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1827<T> = T extends (infer U)[]
  ? DeepReadonlyArray1827<U>
  : T extends object
  ? DeepReadonlyObject1827<T>
  : T;

interface DeepReadonlyArray1827<T> extends ReadonlyArray<DeepReadonly1827<T>> {}

type DeepReadonlyObject1827<T> = {
  readonly [P in keyof T]: DeepReadonly1827<T[P]>;
};

type UnionToIntersection1827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1827<T> = UnionToIntersection1827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1827<T extends unknown[], V> = [...T, V];

type TuplifyUnion1827<T, L = LastOf1827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1827<TuplifyUnion1827<Exclude<T, L>>, L>;

type DeepPartial1827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1827<T[P]> }
  : T;

type Paths1827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1827<K, Paths1827<T[K], Prev1827[D]>> : never }[keyof T]
  : never;

type Prev1827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1827 {
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

type ConfigPaths1827 = Paths1827<NestedConfig1827>;

interface HeavyProps1827 {
  config: DeepPartial1827<NestedConfig1827>;
  path?: ConfigPaths1827;
}

const HeavyComponent1827 = memo(function HeavyComponent1827({ config }: HeavyProps1827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1827.displayName = 'HeavyComponent1827';
export default HeavyComponent1827;
