'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1806<T> = T extends (infer U)[]
  ? DeepReadonlyArray1806<U>
  : T extends object
  ? DeepReadonlyObject1806<T>
  : T;

interface DeepReadonlyArray1806<T> extends ReadonlyArray<DeepReadonly1806<T>> {}

type DeepReadonlyObject1806<T> = {
  readonly [P in keyof T]: DeepReadonly1806<T[P]>;
};

type UnionToIntersection1806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1806<T> = UnionToIntersection1806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1806<T extends unknown[], V> = [...T, V];

type TuplifyUnion1806<T, L = LastOf1806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1806<TuplifyUnion1806<Exclude<T, L>>, L>;

type DeepPartial1806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1806<T[P]> }
  : T;

type Paths1806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1806<K, Paths1806<T[K], Prev1806[D]>> : never }[keyof T]
  : never;

type Prev1806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1806 {
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

type ConfigPaths1806 = Paths1806<NestedConfig1806>;

interface HeavyProps1806 {
  config: DeepPartial1806<NestedConfig1806>;
  path?: ConfigPaths1806;
}

const HeavyComponent1806 = memo(function HeavyComponent1806({ config }: HeavyProps1806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1806.displayName = 'HeavyComponent1806';
export default HeavyComponent1806;
