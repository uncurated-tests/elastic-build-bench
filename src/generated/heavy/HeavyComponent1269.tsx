'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1269<T> = T extends (infer U)[]
  ? DeepReadonlyArray1269<U>
  : T extends object
  ? DeepReadonlyObject1269<T>
  : T;

interface DeepReadonlyArray1269<T> extends ReadonlyArray<DeepReadonly1269<T>> {}

type DeepReadonlyObject1269<T> = {
  readonly [P in keyof T]: DeepReadonly1269<T[P]>;
};

type UnionToIntersection1269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1269<T> = UnionToIntersection1269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1269<T extends unknown[], V> = [...T, V];

type TuplifyUnion1269<T, L = LastOf1269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1269<TuplifyUnion1269<Exclude<T, L>>, L>;

type DeepPartial1269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1269<T[P]> }
  : T;

type Paths1269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1269<K, Paths1269<T[K], Prev1269[D]>> : never }[keyof T]
  : never;

type Prev1269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1269 {
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

type ConfigPaths1269 = Paths1269<NestedConfig1269>;

interface HeavyProps1269 {
  config: DeepPartial1269<NestedConfig1269>;
  path?: ConfigPaths1269;
}

const HeavyComponent1269 = memo(function HeavyComponent1269({ config }: HeavyProps1269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1269.displayName = 'HeavyComponent1269';
export default HeavyComponent1269;
