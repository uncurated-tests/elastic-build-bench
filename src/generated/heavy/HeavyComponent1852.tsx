'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1852<T> = T extends (infer U)[]
  ? DeepReadonlyArray1852<U>
  : T extends object
  ? DeepReadonlyObject1852<T>
  : T;

interface DeepReadonlyArray1852<T> extends ReadonlyArray<DeepReadonly1852<T>> {}

type DeepReadonlyObject1852<T> = {
  readonly [P in keyof T]: DeepReadonly1852<T[P]>;
};

type UnionToIntersection1852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1852<T> = UnionToIntersection1852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1852<T extends unknown[], V> = [...T, V];

type TuplifyUnion1852<T, L = LastOf1852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1852<TuplifyUnion1852<Exclude<T, L>>, L>;

type DeepPartial1852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1852<T[P]> }
  : T;

type Paths1852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1852<K, Paths1852<T[K], Prev1852[D]>> : never }[keyof T]
  : never;

type Prev1852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1852 {
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

type ConfigPaths1852 = Paths1852<NestedConfig1852>;

interface HeavyProps1852 {
  config: DeepPartial1852<NestedConfig1852>;
  path?: ConfigPaths1852;
}

const HeavyComponent1852 = memo(function HeavyComponent1852({ config }: HeavyProps1852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1852.displayName = 'HeavyComponent1852';
export default HeavyComponent1852;
