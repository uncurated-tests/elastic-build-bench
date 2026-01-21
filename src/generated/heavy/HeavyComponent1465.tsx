'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1465<T> = T extends (infer U)[]
  ? DeepReadonlyArray1465<U>
  : T extends object
  ? DeepReadonlyObject1465<T>
  : T;

interface DeepReadonlyArray1465<T> extends ReadonlyArray<DeepReadonly1465<T>> {}

type DeepReadonlyObject1465<T> = {
  readonly [P in keyof T]: DeepReadonly1465<T[P]>;
};

type UnionToIntersection1465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1465<T> = UnionToIntersection1465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1465<T extends unknown[], V> = [...T, V];

type TuplifyUnion1465<T, L = LastOf1465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1465<TuplifyUnion1465<Exclude<T, L>>, L>;

type DeepPartial1465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1465<T[P]> }
  : T;

type Paths1465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1465<K, Paths1465<T[K], Prev1465[D]>> : never }[keyof T]
  : never;

type Prev1465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1465 {
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

type ConfigPaths1465 = Paths1465<NestedConfig1465>;

interface HeavyProps1465 {
  config: DeepPartial1465<NestedConfig1465>;
  path?: ConfigPaths1465;
}

const HeavyComponent1465 = memo(function HeavyComponent1465({ config }: HeavyProps1465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1465.displayName = 'HeavyComponent1465';
export default HeavyComponent1465;
