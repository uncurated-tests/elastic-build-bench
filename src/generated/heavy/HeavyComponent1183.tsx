'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1183<T> = T extends (infer U)[]
  ? DeepReadonlyArray1183<U>
  : T extends object
  ? DeepReadonlyObject1183<T>
  : T;

interface DeepReadonlyArray1183<T> extends ReadonlyArray<DeepReadonly1183<T>> {}

type DeepReadonlyObject1183<T> = {
  readonly [P in keyof T]: DeepReadonly1183<T[P]>;
};

type UnionToIntersection1183<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1183<T> = UnionToIntersection1183<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1183<T extends unknown[], V> = [...T, V];

type TuplifyUnion1183<T, L = LastOf1183<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1183<TuplifyUnion1183<Exclude<T, L>>, L>;

type DeepPartial1183<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1183<T[P]> }
  : T;

type Paths1183<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1183<K, Paths1183<T[K], Prev1183[D]>> : never }[keyof T]
  : never;

type Prev1183 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1183<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1183 {
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

type ConfigPaths1183 = Paths1183<NestedConfig1183>;

interface HeavyProps1183 {
  config: DeepPartial1183<NestedConfig1183>;
  path?: ConfigPaths1183;
}

const HeavyComponent1183 = memo(function HeavyComponent1183({ config }: HeavyProps1183) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1183) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1183 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1183: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1183.displayName = 'HeavyComponent1183';
export default HeavyComponent1183;
