'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1859<T> = T extends (infer U)[]
  ? DeepReadonlyArray1859<U>
  : T extends object
  ? DeepReadonlyObject1859<T>
  : T;

interface DeepReadonlyArray1859<T> extends ReadonlyArray<DeepReadonly1859<T>> {}

type DeepReadonlyObject1859<T> = {
  readonly [P in keyof T]: DeepReadonly1859<T[P]>;
};

type UnionToIntersection1859<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1859<T> = UnionToIntersection1859<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1859<T extends unknown[], V> = [...T, V];

type TuplifyUnion1859<T, L = LastOf1859<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1859<TuplifyUnion1859<Exclude<T, L>>, L>;

type DeepPartial1859<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1859<T[P]> }
  : T;

type Paths1859<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1859<K, Paths1859<T[K], Prev1859[D]>> : never }[keyof T]
  : never;

type Prev1859 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1859<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1859 {
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

type ConfigPaths1859 = Paths1859<NestedConfig1859>;

interface HeavyProps1859 {
  config: DeepPartial1859<NestedConfig1859>;
  path?: ConfigPaths1859;
}

const HeavyComponent1859 = memo(function HeavyComponent1859({ config }: HeavyProps1859) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1859) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1859 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1859: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1859.displayName = 'HeavyComponent1859';
export default HeavyComponent1859;
