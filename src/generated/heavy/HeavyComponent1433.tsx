'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1433<T> = T extends (infer U)[]
  ? DeepReadonlyArray1433<U>
  : T extends object
  ? DeepReadonlyObject1433<T>
  : T;

interface DeepReadonlyArray1433<T> extends ReadonlyArray<DeepReadonly1433<T>> {}

type DeepReadonlyObject1433<T> = {
  readonly [P in keyof T]: DeepReadonly1433<T[P]>;
};

type UnionToIntersection1433<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1433<T> = UnionToIntersection1433<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1433<T extends unknown[], V> = [...T, V];

type TuplifyUnion1433<T, L = LastOf1433<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1433<TuplifyUnion1433<Exclude<T, L>>, L>;

type DeepPartial1433<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1433<T[P]> }
  : T;

type Paths1433<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1433<K, Paths1433<T[K], Prev1433[D]>> : never }[keyof T]
  : never;

type Prev1433 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1433<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1433 {
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

type ConfigPaths1433 = Paths1433<NestedConfig1433>;

interface HeavyProps1433 {
  config: DeepPartial1433<NestedConfig1433>;
  path?: ConfigPaths1433;
}

const HeavyComponent1433 = memo(function HeavyComponent1433({ config }: HeavyProps1433) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1433) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1433 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1433: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1433.displayName = 'HeavyComponent1433';
export default HeavyComponent1433;
