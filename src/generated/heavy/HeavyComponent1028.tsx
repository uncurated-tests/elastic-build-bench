'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1028<T> = T extends (infer U)[]
  ? DeepReadonlyArray1028<U>
  : T extends object
  ? DeepReadonlyObject1028<T>
  : T;

interface DeepReadonlyArray1028<T> extends ReadonlyArray<DeepReadonly1028<T>> {}

type DeepReadonlyObject1028<T> = {
  readonly [P in keyof T]: DeepReadonly1028<T[P]>;
};

type UnionToIntersection1028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1028<T> = UnionToIntersection1028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1028<T extends unknown[], V> = [...T, V];

type TuplifyUnion1028<T, L = LastOf1028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1028<TuplifyUnion1028<Exclude<T, L>>, L>;

type DeepPartial1028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1028<T[P]> }
  : T;

type Paths1028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1028<K, Paths1028<T[K], Prev1028[D]>> : never }[keyof T]
  : never;

type Prev1028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1028 {
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

type ConfigPaths1028 = Paths1028<NestedConfig1028>;

interface HeavyProps1028 {
  config: DeepPartial1028<NestedConfig1028>;
  path?: ConfigPaths1028;
}

const HeavyComponent1028 = memo(function HeavyComponent1028({ config }: HeavyProps1028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1028.displayName = 'HeavyComponent1028';
export default HeavyComponent1028;
