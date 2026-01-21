'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1526<T> = T extends (infer U)[]
  ? DeepReadonlyArray1526<U>
  : T extends object
  ? DeepReadonlyObject1526<T>
  : T;

interface DeepReadonlyArray1526<T> extends ReadonlyArray<DeepReadonly1526<T>> {}

type DeepReadonlyObject1526<T> = {
  readonly [P in keyof T]: DeepReadonly1526<T[P]>;
};

type UnionToIntersection1526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1526<T> = UnionToIntersection1526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1526<T extends unknown[], V> = [...T, V];

type TuplifyUnion1526<T, L = LastOf1526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1526<TuplifyUnion1526<Exclude<T, L>>, L>;

type DeepPartial1526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1526<T[P]> }
  : T;

type Paths1526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1526<K, Paths1526<T[K], Prev1526[D]>> : never }[keyof T]
  : never;

type Prev1526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1526 {
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

type ConfigPaths1526 = Paths1526<NestedConfig1526>;

interface HeavyProps1526 {
  config: DeepPartial1526<NestedConfig1526>;
  path?: ConfigPaths1526;
}

const HeavyComponent1526 = memo(function HeavyComponent1526({ config }: HeavyProps1526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1526.displayName = 'HeavyComponent1526';
export default HeavyComponent1526;
