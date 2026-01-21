'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1333<T> = T extends (infer U)[]
  ? DeepReadonlyArray1333<U>
  : T extends object
  ? DeepReadonlyObject1333<T>
  : T;

interface DeepReadonlyArray1333<T> extends ReadonlyArray<DeepReadonly1333<T>> {}

type DeepReadonlyObject1333<T> = {
  readonly [P in keyof T]: DeepReadonly1333<T[P]>;
};

type UnionToIntersection1333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1333<T> = UnionToIntersection1333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1333<T extends unknown[], V> = [...T, V];

type TuplifyUnion1333<T, L = LastOf1333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1333<TuplifyUnion1333<Exclude<T, L>>, L>;

type DeepPartial1333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1333<T[P]> }
  : T;

type Paths1333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1333<K, Paths1333<T[K], Prev1333[D]>> : never }[keyof T]
  : never;

type Prev1333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1333 {
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

type ConfigPaths1333 = Paths1333<NestedConfig1333>;

interface HeavyProps1333 {
  config: DeepPartial1333<NestedConfig1333>;
  path?: ConfigPaths1333;
}

const HeavyComponent1333 = memo(function HeavyComponent1333({ config }: HeavyProps1333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1333.displayName = 'HeavyComponent1333';
export default HeavyComponent1333;
