'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3028<T> = T extends (infer U)[]
  ? DeepReadonlyArray3028<U>
  : T extends object
  ? DeepReadonlyObject3028<T>
  : T;

interface DeepReadonlyArray3028<T> extends ReadonlyArray<DeepReadonly3028<T>> {}

type DeepReadonlyObject3028<T> = {
  readonly [P in keyof T]: DeepReadonly3028<T[P]>;
};

type UnionToIntersection3028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3028<T> = UnionToIntersection3028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3028<T extends unknown[], V> = [...T, V];

type TuplifyUnion3028<T, L = LastOf3028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3028<TuplifyUnion3028<Exclude<T, L>>, L>;

type DeepPartial3028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3028<T[P]> }
  : T;

type Paths3028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3028<K, Paths3028<T[K], Prev3028[D]>> : never }[keyof T]
  : never;

type Prev3028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3028 {
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

type ConfigPaths3028 = Paths3028<NestedConfig3028>;

interface HeavyProps3028 {
  config: DeepPartial3028<NestedConfig3028>;
  path?: ConfigPaths3028;
}

const HeavyComponent3028 = memo(function HeavyComponent3028({ config }: HeavyProps3028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3028.displayName = 'HeavyComponent3028';
export default HeavyComponent3028;
