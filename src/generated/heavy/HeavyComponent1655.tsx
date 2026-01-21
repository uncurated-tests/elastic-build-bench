'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1655<T> = T extends (infer U)[]
  ? DeepReadonlyArray1655<U>
  : T extends object
  ? DeepReadonlyObject1655<T>
  : T;

interface DeepReadonlyArray1655<T> extends ReadonlyArray<DeepReadonly1655<T>> {}

type DeepReadonlyObject1655<T> = {
  readonly [P in keyof T]: DeepReadonly1655<T[P]>;
};

type UnionToIntersection1655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1655<T> = UnionToIntersection1655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1655<T extends unknown[], V> = [...T, V];

type TuplifyUnion1655<T, L = LastOf1655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1655<TuplifyUnion1655<Exclude<T, L>>, L>;

type DeepPartial1655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1655<T[P]> }
  : T;

type Paths1655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1655<K, Paths1655<T[K], Prev1655[D]>> : never }[keyof T]
  : never;

type Prev1655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1655 {
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

type ConfigPaths1655 = Paths1655<NestedConfig1655>;

interface HeavyProps1655 {
  config: DeepPartial1655<NestedConfig1655>;
  path?: ConfigPaths1655;
}

const HeavyComponent1655 = memo(function HeavyComponent1655({ config }: HeavyProps1655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1655.displayName = 'HeavyComponent1655';
export default HeavyComponent1655;
