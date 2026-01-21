'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1115<T> = T extends (infer U)[]
  ? DeepReadonlyArray1115<U>
  : T extends object
  ? DeepReadonlyObject1115<T>
  : T;

interface DeepReadonlyArray1115<T> extends ReadonlyArray<DeepReadonly1115<T>> {}

type DeepReadonlyObject1115<T> = {
  readonly [P in keyof T]: DeepReadonly1115<T[P]>;
};

type UnionToIntersection1115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1115<T> = UnionToIntersection1115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1115<T extends unknown[], V> = [...T, V];

type TuplifyUnion1115<T, L = LastOf1115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1115<TuplifyUnion1115<Exclude<T, L>>, L>;

type DeepPartial1115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1115<T[P]> }
  : T;

type Paths1115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1115<K, Paths1115<T[K], Prev1115[D]>> : never }[keyof T]
  : never;

type Prev1115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1115 {
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

type ConfigPaths1115 = Paths1115<NestedConfig1115>;

interface HeavyProps1115 {
  config: DeepPartial1115<NestedConfig1115>;
  path?: ConfigPaths1115;
}

const HeavyComponent1115 = memo(function HeavyComponent1115({ config }: HeavyProps1115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1115.displayName = 'HeavyComponent1115';
export default HeavyComponent1115;
