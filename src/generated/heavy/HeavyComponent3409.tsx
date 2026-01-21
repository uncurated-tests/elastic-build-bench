'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3409<T> = T extends (infer U)[]
  ? DeepReadonlyArray3409<U>
  : T extends object
  ? DeepReadonlyObject3409<T>
  : T;

interface DeepReadonlyArray3409<T> extends ReadonlyArray<DeepReadonly3409<T>> {}

type DeepReadonlyObject3409<T> = {
  readonly [P in keyof T]: DeepReadonly3409<T[P]>;
};

type UnionToIntersection3409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3409<T> = UnionToIntersection3409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3409<T extends unknown[], V> = [...T, V];

type TuplifyUnion3409<T, L = LastOf3409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3409<TuplifyUnion3409<Exclude<T, L>>, L>;

type DeepPartial3409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3409<T[P]> }
  : T;

type Paths3409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3409<K, Paths3409<T[K], Prev3409[D]>> : never }[keyof T]
  : never;

type Prev3409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3409 {
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

type ConfigPaths3409 = Paths3409<NestedConfig3409>;

interface HeavyProps3409 {
  config: DeepPartial3409<NestedConfig3409>;
  path?: ConfigPaths3409;
}

const HeavyComponent3409 = memo(function HeavyComponent3409({ config }: HeavyProps3409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3409.displayName = 'HeavyComponent3409';
export default HeavyComponent3409;
