'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1093<T> = T extends (infer U)[]
  ? DeepReadonlyArray1093<U>
  : T extends object
  ? DeepReadonlyObject1093<T>
  : T;

interface DeepReadonlyArray1093<T> extends ReadonlyArray<DeepReadonly1093<T>> {}

type DeepReadonlyObject1093<T> = {
  readonly [P in keyof T]: DeepReadonly1093<T[P]>;
};

type UnionToIntersection1093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1093<T> = UnionToIntersection1093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1093<T extends unknown[], V> = [...T, V];

type TuplifyUnion1093<T, L = LastOf1093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1093<TuplifyUnion1093<Exclude<T, L>>, L>;

type DeepPartial1093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1093<T[P]> }
  : T;

type Paths1093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1093<K, Paths1093<T[K], Prev1093[D]>> : never }[keyof T]
  : never;

type Prev1093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1093 {
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

type ConfigPaths1093 = Paths1093<NestedConfig1093>;

interface HeavyProps1093 {
  config: DeepPartial1093<NestedConfig1093>;
  path?: ConfigPaths1093;
}

const HeavyComponent1093 = memo(function HeavyComponent1093({ config }: HeavyProps1093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1093.displayName = 'HeavyComponent1093';
export default HeavyComponent1093;
