'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1454<T> = T extends (infer U)[]
  ? DeepReadonlyArray1454<U>
  : T extends object
  ? DeepReadonlyObject1454<T>
  : T;

interface DeepReadonlyArray1454<T> extends ReadonlyArray<DeepReadonly1454<T>> {}

type DeepReadonlyObject1454<T> = {
  readonly [P in keyof T]: DeepReadonly1454<T[P]>;
};

type UnionToIntersection1454<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1454<T> = UnionToIntersection1454<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1454<T extends unknown[], V> = [...T, V];

type TuplifyUnion1454<T, L = LastOf1454<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1454<TuplifyUnion1454<Exclude<T, L>>, L>;

type DeepPartial1454<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1454<T[P]> }
  : T;

type Paths1454<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1454<K, Paths1454<T[K], Prev1454[D]>> : never }[keyof T]
  : never;

type Prev1454 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1454<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1454 {
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

type ConfigPaths1454 = Paths1454<NestedConfig1454>;

interface HeavyProps1454 {
  config: DeepPartial1454<NestedConfig1454>;
  path?: ConfigPaths1454;
}

const HeavyComponent1454 = memo(function HeavyComponent1454({ config }: HeavyProps1454) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1454) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1454 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1454: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1454.displayName = 'HeavyComponent1454';
export default HeavyComponent1454;
