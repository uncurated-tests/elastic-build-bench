'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1170<T> = T extends (infer U)[]
  ? DeepReadonlyArray1170<U>
  : T extends object
  ? DeepReadonlyObject1170<T>
  : T;

interface DeepReadonlyArray1170<T> extends ReadonlyArray<DeepReadonly1170<T>> {}

type DeepReadonlyObject1170<T> = {
  readonly [P in keyof T]: DeepReadonly1170<T[P]>;
};

type UnionToIntersection1170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1170<T> = UnionToIntersection1170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1170<T extends unknown[], V> = [...T, V];

type TuplifyUnion1170<T, L = LastOf1170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1170<TuplifyUnion1170<Exclude<T, L>>, L>;

type DeepPartial1170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1170<T[P]> }
  : T;

type Paths1170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1170<K, Paths1170<T[K], Prev1170[D]>> : never }[keyof T]
  : never;

type Prev1170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1170 {
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

type ConfigPaths1170 = Paths1170<NestedConfig1170>;

interface HeavyProps1170 {
  config: DeepPartial1170<NestedConfig1170>;
  path?: ConfigPaths1170;
}

const HeavyComponent1170 = memo(function HeavyComponent1170({ config }: HeavyProps1170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1170.displayName = 'HeavyComponent1170';
export default HeavyComponent1170;
