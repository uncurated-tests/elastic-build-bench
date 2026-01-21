'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1453<T> = T extends (infer U)[]
  ? DeepReadonlyArray1453<U>
  : T extends object
  ? DeepReadonlyObject1453<T>
  : T;

interface DeepReadonlyArray1453<T> extends ReadonlyArray<DeepReadonly1453<T>> {}

type DeepReadonlyObject1453<T> = {
  readonly [P in keyof T]: DeepReadonly1453<T[P]>;
};

type UnionToIntersection1453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1453<T> = UnionToIntersection1453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1453<T extends unknown[], V> = [...T, V];

type TuplifyUnion1453<T, L = LastOf1453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1453<TuplifyUnion1453<Exclude<T, L>>, L>;

type DeepPartial1453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1453<T[P]> }
  : T;

type Paths1453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1453<K, Paths1453<T[K], Prev1453[D]>> : never }[keyof T]
  : never;

type Prev1453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1453 {
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

type ConfigPaths1453 = Paths1453<NestedConfig1453>;

interface HeavyProps1453 {
  config: DeepPartial1453<NestedConfig1453>;
  path?: ConfigPaths1453;
}

const HeavyComponent1453 = memo(function HeavyComponent1453({ config }: HeavyProps1453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1453.displayName = 'HeavyComponent1453';
export default HeavyComponent1453;
