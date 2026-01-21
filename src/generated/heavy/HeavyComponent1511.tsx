'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1511<T> = T extends (infer U)[]
  ? DeepReadonlyArray1511<U>
  : T extends object
  ? DeepReadonlyObject1511<T>
  : T;

interface DeepReadonlyArray1511<T> extends ReadonlyArray<DeepReadonly1511<T>> {}

type DeepReadonlyObject1511<T> = {
  readonly [P in keyof T]: DeepReadonly1511<T[P]>;
};

type UnionToIntersection1511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1511<T> = UnionToIntersection1511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1511<T extends unknown[], V> = [...T, V];

type TuplifyUnion1511<T, L = LastOf1511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1511<TuplifyUnion1511<Exclude<T, L>>, L>;

type DeepPartial1511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1511<T[P]> }
  : T;

type Paths1511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1511<K, Paths1511<T[K], Prev1511[D]>> : never }[keyof T]
  : never;

type Prev1511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1511 {
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

type ConfigPaths1511 = Paths1511<NestedConfig1511>;

interface HeavyProps1511 {
  config: DeepPartial1511<NestedConfig1511>;
  path?: ConfigPaths1511;
}

const HeavyComponent1511 = memo(function HeavyComponent1511({ config }: HeavyProps1511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1511.displayName = 'HeavyComponent1511';
export default HeavyComponent1511;
