'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3597<T> = T extends (infer U)[]
  ? DeepReadonlyArray3597<U>
  : T extends object
  ? DeepReadonlyObject3597<T>
  : T;

interface DeepReadonlyArray3597<T> extends ReadonlyArray<DeepReadonly3597<T>> {}

type DeepReadonlyObject3597<T> = {
  readonly [P in keyof T]: DeepReadonly3597<T[P]>;
};

type UnionToIntersection3597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3597<T> = UnionToIntersection3597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3597<T extends unknown[], V> = [...T, V];

type TuplifyUnion3597<T, L = LastOf3597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3597<TuplifyUnion3597<Exclude<T, L>>, L>;

type DeepPartial3597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3597<T[P]> }
  : T;

type Paths3597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3597<K, Paths3597<T[K], Prev3597[D]>> : never }[keyof T]
  : never;

type Prev3597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3597 {
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

type ConfigPaths3597 = Paths3597<NestedConfig3597>;

interface HeavyProps3597 {
  config: DeepPartial3597<NestedConfig3597>;
  path?: ConfigPaths3597;
}

const HeavyComponent3597 = memo(function HeavyComponent3597({ config }: HeavyProps3597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3597.displayName = 'HeavyComponent3597';
export default HeavyComponent3597;
