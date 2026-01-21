'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1273<T> = T extends (infer U)[]
  ? DeepReadonlyArray1273<U>
  : T extends object
  ? DeepReadonlyObject1273<T>
  : T;

interface DeepReadonlyArray1273<T> extends ReadonlyArray<DeepReadonly1273<T>> {}

type DeepReadonlyObject1273<T> = {
  readonly [P in keyof T]: DeepReadonly1273<T[P]>;
};

type UnionToIntersection1273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1273<T> = UnionToIntersection1273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1273<T extends unknown[], V> = [...T, V];

type TuplifyUnion1273<T, L = LastOf1273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1273<TuplifyUnion1273<Exclude<T, L>>, L>;

type DeepPartial1273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1273<T[P]> }
  : T;

type Paths1273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1273<K, Paths1273<T[K], Prev1273[D]>> : never }[keyof T]
  : never;

type Prev1273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1273 {
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

type ConfigPaths1273 = Paths1273<NestedConfig1273>;

interface HeavyProps1273 {
  config: DeepPartial1273<NestedConfig1273>;
  path?: ConfigPaths1273;
}

const HeavyComponent1273 = memo(function HeavyComponent1273({ config }: HeavyProps1273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1273.displayName = 'HeavyComponent1273';
export default HeavyComponent1273;
