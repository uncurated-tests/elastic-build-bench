'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1478<T> = T extends (infer U)[]
  ? DeepReadonlyArray1478<U>
  : T extends object
  ? DeepReadonlyObject1478<T>
  : T;

interface DeepReadonlyArray1478<T> extends ReadonlyArray<DeepReadonly1478<T>> {}

type DeepReadonlyObject1478<T> = {
  readonly [P in keyof T]: DeepReadonly1478<T[P]>;
};

type UnionToIntersection1478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1478<T> = UnionToIntersection1478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1478<T extends unknown[], V> = [...T, V];

type TuplifyUnion1478<T, L = LastOf1478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1478<TuplifyUnion1478<Exclude<T, L>>, L>;

type DeepPartial1478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1478<T[P]> }
  : T;

type Paths1478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1478<K, Paths1478<T[K], Prev1478[D]>> : never }[keyof T]
  : never;

type Prev1478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1478 {
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

type ConfigPaths1478 = Paths1478<NestedConfig1478>;

interface HeavyProps1478 {
  config: DeepPartial1478<NestedConfig1478>;
  path?: ConfigPaths1478;
}

const HeavyComponent1478 = memo(function HeavyComponent1478({ config }: HeavyProps1478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1478.displayName = 'HeavyComponent1478';
export default HeavyComponent1478;
