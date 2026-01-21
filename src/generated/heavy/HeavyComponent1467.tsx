'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1467<T> = T extends (infer U)[]
  ? DeepReadonlyArray1467<U>
  : T extends object
  ? DeepReadonlyObject1467<T>
  : T;

interface DeepReadonlyArray1467<T> extends ReadonlyArray<DeepReadonly1467<T>> {}

type DeepReadonlyObject1467<T> = {
  readonly [P in keyof T]: DeepReadonly1467<T[P]>;
};

type UnionToIntersection1467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1467<T> = UnionToIntersection1467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1467<T extends unknown[], V> = [...T, V];

type TuplifyUnion1467<T, L = LastOf1467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1467<TuplifyUnion1467<Exclude<T, L>>, L>;

type DeepPartial1467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1467<T[P]> }
  : T;

type Paths1467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1467<K, Paths1467<T[K], Prev1467[D]>> : never }[keyof T]
  : never;

type Prev1467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1467 {
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

type ConfigPaths1467 = Paths1467<NestedConfig1467>;

interface HeavyProps1467 {
  config: DeepPartial1467<NestedConfig1467>;
  path?: ConfigPaths1467;
}

const HeavyComponent1467 = memo(function HeavyComponent1467({ config }: HeavyProps1467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1467.displayName = 'HeavyComponent1467';
export default HeavyComponent1467;
