'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1883<T> = T extends (infer U)[]
  ? DeepReadonlyArray1883<U>
  : T extends object
  ? DeepReadonlyObject1883<T>
  : T;

interface DeepReadonlyArray1883<T> extends ReadonlyArray<DeepReadonly1883<T>> {}

type DeepReadonlyObject1883<T> = {
  readonly [P in keyof T]: DeepReadonly1883<T[P]>;
};

type UnionToIntersection1883<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1883<T> = UnionToIntersection1883<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1883<T extends unknown[], V> = [...T, V];

type TuplifyUnion1883<T, L = LastOf1883<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1883<TuplifyUnion1883<Exclude<T, L>>, L>;

type DeepPartial1883<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1883<T[P]> }
  : T;

type Paths1883<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1883<K, Paths1883<T[K], Prev1883[D]>> : never }[keyof T]
  : never;

type Prev1883 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1883<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1883 {
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

type ConfigPaths1883 = Paths1883<NestedConfig1883>;

interface HeavyProps1883 {
  config: DeepPartial1883<NestedConfig1883>;
  path?: ConfigPaths1883;
}

const HeavyComponent1883 = memo(function HeavyComponent1883({ config }: HeavyProps1883) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1883) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1883 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1883: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1883.displayName = 'HeavyComponent1883';
export default HeavyComponent1883;
