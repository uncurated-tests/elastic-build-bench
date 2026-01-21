'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3398<T> = T extends (infer U)[]
  ? DeepReadonlyArray3398<U>
  : T extends object
  ? DeepReadonlyObject3398<T>
  : T;

interface DeepReadonlyArray3398<T> extends ReadonlyArray<DeepReadonly3398<T>> {}

type DeepReadonlyObject3398<T> = {
  readonly [P in keyof T]: DeepReadonly3398<T[P]>;
};

type UnionToIntersection3398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3398<T> = UnionToIntersection3398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3398<T extends unknown[], V> = [...T, V];

type TuplifyUnion3398<T, L = LastOf3398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3398<TuplifyUnion3398<Exclude<T, L>>, L>;

type DeepPartial3398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3398<T[P]> }
  : T;

type Paths3398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3398<K, Paths3398<T[K], Prev3398[D]>> : never }[keyof T]
  : never;

type Prev3398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3398 {
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

type ConfigPaths3398 = Paths3398<NestedConfig3398>;

interface HeavyProps3398 {
  config: DeepPartial3398<NestedConfig3398>;
  path?: ConfigPaths3398;
}

const HeavyComponent3398 = memo(function HeavyComponent3398({ config }: HeavyProps3398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3398.displayName = 'HeavyComponent3398';
export default HeavyComponent3398;
