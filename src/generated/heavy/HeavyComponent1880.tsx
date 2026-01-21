'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1880<T> = T extends (infer U)[]
  ? DeepReadonlyArray1880<U>
  : T extends object
  ? DeepReadonlyObject1880<T>
  : T;

interface DeepReadonlyArray1880<T> extends ReadonlyArray<DeepReadonly1880<T>> {}

type DeepReadonlyObject1880<T> = {
  readonly [P in keyof T]: DeepReadonly1880<T[P]>;
};

type UnionToIntersection1880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1880<T> = UnionToIntersection1880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1880<T extends unknown[], V> = [...T, V];

type TuplifyUnion1880<T, L = LastOf1880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1880<TuplifyUnion1880<Exclude<T, L>>, L>;

type DeepPartial1880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1880<T[P]> }
  : T;

type Paths1880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1880<K, Paths1880<T[K], Prev1880[D]>> : never }[keyof T]
  : never;

type Prev1880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1880 {
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

type ConfigPaths1880 = Paths1880<NestedConfig1880>;

interface HeavyProps1880 {
  config: DeepPartial1880<NestedConfig1880>;
  path?: ConfigPaths1880;
}

const HeavyComponent1880 = memo(function HeavyComponent1880({ config }: HeavyProps1880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1880.displayName = 'HeavyComponent1880';
export default HeavyComponent1880;
