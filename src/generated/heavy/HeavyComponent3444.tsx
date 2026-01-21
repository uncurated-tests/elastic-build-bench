'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3444<T> = T extends (infer U)[]
  ? DeepReadonlyArray3444<U>
  : T extends object
  ? DeepReadonlyObject3444<T>
  : T;

interface DeepReadonlyArray3444<T> extends ReadonlyArray<DeepReadonly3444<T>> {}

type DeepReadonlyObject3444<T> = {
  readonly [P in keyof T]: DeepReadonly3444<T[P]>;
};

type UnionToIntersection3444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3444<T> = UnionToIntersection3444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3444<T extends unknown[], V> = [...T, V];

type TuplifyUnion3444<T, L = LastOf3444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3444<TuplifyUnion3444<Exclude<T, L>>, L>;

type DeepPartial3444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3444<T[P]> }
  : T;

type Paths3444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3444<K, Paths3444<T[K], Prev3444[D]>> : never }[keyof T]
  : never;

type Prev3444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3444 {
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

type ConfigPaths3444 = Paths3444<NestedConfig3444>;

interface HeavyProps3444 {
  config: DeepPartial3444<NestedConfig3444>;
  path?: ConfigPaths3444;
}

const HeavyComponent3444 = memo(function HeavyComponent3444({ config }: HeavyProps3444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3444.displayName = 'HeavyComponent3444';
export default HeavyComponent3444;
