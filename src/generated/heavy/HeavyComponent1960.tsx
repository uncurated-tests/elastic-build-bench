'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1960<T> = T extends (infer U)[]
  ? DeepReadonlyArray1960<U>
  : T extends object
  ? DeepReadonlyObject1960<T>
  : T;

interface DeepReadonlyArray1960<T> extends ReadonlyArray<DeepReadonly1960<T>> {}

type DeepReadonlyObject1960<T> = {
  readonly [P in keyof T]: DeepReadonly1960<T[P]>;
};

type UnionToIntersection1960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1960<T> = UnionToIntersection1960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1960<T extends unknown[], V> = [...T, V];

type TuplifyUnion1960<T, L = LastOf1960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1960<TuplifyUnion1960<Exclude<T, L>>, L>;

type DeepPartial1960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1960<T[P]> }
  : T;

type Paths1960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1960<K, Paths1960<T[K], Prev1960[D]>> : never }[keyof T]
  : never;

type Prev1960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1960 {
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

type ConfigPaths1960 = Paths1960<NestedConfig1960>;

interface HeavyProps1960 {
  config: DeepPartial1960<NestedConfig1960>;
  path?: ConfigPaths1960;
}

const HeavyComponent1960 = memo(function HeavyComponent1960({ config }: HeavyProps1960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1960.displayName = 'HeavyComponent1960';
export default HeavyComponent1960;
