'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1249<T> = T extends (infer U)[]
  ? DeepReadonlyArray1249<U>
  : T extends object
  ? DeepReadonlyObject1249<T>
  : T;

interface DeepReadonlyArray1249<T> extends ReadonlyArray<DeepReadonly1249<T>> {}

type DeepReadonlyObject1249<T> = {
  readonly [P in keyof T]: DeepReadonly1249<T[P]>;
};

type UnionToIntersection1249<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1249<T> = UnionToIntersection1249<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1249<T extends unknown[], V> = [...T, V];

type TuplifyUnion1249<T, L = LastOf1249<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1249<TuplifyUnion1249<Exclude<T, L>>, L>;

type DeepPartial1249<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1249<T[P]> }
  : T;

type Paths1249<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1249<K, Paths1249<T[K], Prev1249[D]>> : never }[keyof T]
  : never;

type Prev1249 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1249<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1249 {
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

type ConfigPaths1249 = Paths1249<NestedConfig1249>;

interface HeavyProps1249 {
  config: DeepPartial1249<NestedConfig1249>;
  path?: ConfigPaths1249;
}

const HeavyComponent1249 = memo(function HeavyComponent1249({ config }: HeavyProps1249) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1249) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1249 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1249: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1249.displayName = 'HeavyComponent1249';
export default HeavyComponent1249;
