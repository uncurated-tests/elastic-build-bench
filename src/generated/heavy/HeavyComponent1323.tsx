'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1323<T> = T extends (infer U)[]
  ? DeepReadonlyArray1323<U>
  : T extends object
  ? DeepReadonlyObject1323<T>
  : T;

interface DeepReadonlyArray1323<T> extends ReadonlyArray<DeepReadonly1323<T>> {}

type DeepReadonlyObject1323<T> = {
  readonly [P in keyof T]: DeepReadonly1323<T[P]>;
};

type UnionToIntersection1323<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1323<T> = UnionToIntersection1323<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1323<T extends unknown[], V> = [...T, V];

type TuplifyUnion1323<T, L = LastOf1323<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1323<TuplifyUnion1323<Exclude<T, L>>, L>;

type DeepPartial1323<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1323<T[P]> }
  : T;

type Paths1323<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1323<K, Paths1323<T[K], Prev1323[D]>> : never }[keyof T]
  : never;

type Prev1323 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1323<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1323 {
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

type ConfigPaths1323 = Paths1323<NestedConfig1323>;

interface HeavyProps1323 {
  config: DeepPartial1323<NestedConfig1323>;
  path?: ConfigPaths1323;
}

const HeavyComponent1323 = memo(function HeavyComponent1323({ config }: HeavyProps1323) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1323) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1323 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1323: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1323.displayName = 'HeavyComponent1323';
export default HeavyComponent1323;
