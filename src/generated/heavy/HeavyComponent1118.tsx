'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1118<T> = T extends (infer U)[]
  ? DeepReadonlyArray1118<U>
  : T extends object
  ? DeepReadonlyObject1118<T>
  : T;

interface DeepReadonlyArray1118<T> extends ReadonlyArray<DeepReadonly1118<T>> {}

type DeepReadonlyObject1118<T> = {
  readonly [P in keyof T]: DeepReadonly1118<T[P]>;
};

type UnionToIntersection1118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1118<T> = UnionToIntersection1118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1118<T extends unknown[], V> = [...T, V];

type TuplifyUnion1118<T, L = LastOf1118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1118<TuplifyUnion1118<Exclude<T, L>>, L>;

type DeepPartial1118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1118<T[P]> }
  : T;

type Paths1118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1118<K, Paths1118<T[K], Prev1118[D]>> : never }[keyof T]
  : never;

type Prev1118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1118 {
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

type ConfigPaths1118 = Paths1118<NestedConfig1118>;

interface HeavyProps1118 {
  config: DeepPartial1118<NestedConfig1118>;
  path?: ConfigPaths1118;
}

const HeavyComponent1118 = memo(function HeavyComponent1118({ config }: HeavyProps1118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1118.displayName = 'HeavyComponent1118';
export default HeavyComponent1118;
