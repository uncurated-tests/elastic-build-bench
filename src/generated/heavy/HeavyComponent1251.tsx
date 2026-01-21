'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1251<T> = T extends (infer U)[]
  ? DeepReadonlyArray1251<U>
  : T extends object
  ? DeepReadonlyObject1251<T>
  : T;

interface DeepReadonlyArray1251<T> extends ReadonlyArray<DeepReadonly1251<T>> {}

type DeepReadonlyObject1251<T> = {
  readonly [P in keyof T]: DeepReadonly1251<T[P]>;
};

type UnionToIntersection1251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1251<T> = UnionToIntersection1251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1251<T extends unknown[], V> = [...T, V];

type TuplifyUnion1251<T, L = LastOf1251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1251<TuplifyUnion1251<Exclude<T, L>>, L>;

type DeepPartial1251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1251<T[P]> }
  : T;

type Paths1251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1251<K, Paths1251<T[K], Prev1251[D]>> : never }[keyof T]
  : never;

type Prev1251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1251 {
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

type ConfigPaths1251 = Paths1251<NestedConfig1251>;

interface HeavyProps1251 {
  config: DeepPartial1251<NestedConfig1251>;
  path?: ConfigPaths1251;
}

const HeavyComponent1251 = memo(function HeavyComponent1251({ config }: HeavyProps1251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1251.displayName = 'HeavyComponent1251';
export default HeavyComponent1251;
