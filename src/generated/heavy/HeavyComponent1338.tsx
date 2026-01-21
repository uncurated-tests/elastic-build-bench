'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1338<T> = T extends (infer U)[]
  ? DeepReadonlyArray1338<U>
  : T extends object
  ? DeepReadonlyObject1338<T>
  : T;

interface DeepReadonlyArray1338<T> extends ReadonlyArray<DeepReadonly1338<T>> {}

type DeepReadonlyObject1338<T> = {
  readonly [P in keyof T]: DeepReadonly1338<T[P]>;
};

type UnionToIntersection1338<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1338<T> = UnionToIntersection1338<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1338<T extends unknown[], V> = [...T, V];

type TuplifyUnion1338<T, L = LastOf1338<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1338<TuplifyUnion1338<Exclude<T, L>>, L>;

type DeepPartial1338<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1338<T[P]> }
  : T;

type Paths1338<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1338<K, Paths1338<T[K], Prev1338[D]>> : never }[keyof T]
  : never;

type Prev1338 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1338<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1338 {
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

type ConfigPaths1338 = Paths1338<NestedConfig1338>;

interface HeavyProps1338 {
  config: DeepPartial1338<NestedConfig1338>;
  path?: ConfigPaths1338;
}

const HeavyComponent1338 = memo(function HeavyComponent1338({ config }: HeavyProps1338) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1338) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1338 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1338: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1338.displayName = 'HeavyComponent1338';
export default HeavyComponent1338;
