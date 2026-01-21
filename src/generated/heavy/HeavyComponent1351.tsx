'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1351<T> = T extends (infer U)[]
  ? DeepReadonlyArray1351<U>
  : T extends object
  ? DeepReadonlyObject1351<T>
  : T;

interface DeepReadonlyArray1351<T> extends ReadonlyArray<DeepReadonly1351<T>> {}

type DeepReadonlyObject1351<T> = {
  readonly [P in keyof T]: DeepReadonly1351<T[P]>;
};

type UnionToIntersection1351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1351<T> = UnionToIntersection1351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1351<T extends unknown[], V> = [...T, V];

type TuplifyUnion1351<T, L = LastOf1351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1351<TuplifyUnion1351<Exclude<T, L>>, L>;

type DeepPartial1351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1351<T[P]> }
  : T;

type Paths1351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1351<K, Paths1351<T[K], Prev1351[D]>> : never }[keyof T]
  : never;

type Prev1351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1351 {
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

type ConfigPaths1351 = Paths1351<NestedConfig1351>;

interface HeavyProps1351 {
  config: DeepPartial1351<NestedConfig1351>;
  path?: ConfigPaths1351;
}

const HeavyComponent1351 = memo(function HeavyComponent1351({ config }: HeavyProps1351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1351.displayName = 'HeavyComponent1351';
export default HeavyComponent1351;
