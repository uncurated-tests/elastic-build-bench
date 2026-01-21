'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3793<T> = T extends (infer U)[]
  ? DeepReadonlyArray3793<U>
  : T extends object
  ? DeepReadonlyObject3793<T>
  : T;

interface DeepReadonlyArray3793<T> extends ReadonlyArray<DeepReadonly3793<T>> {}

type DeepReadonlyObject3793<T> = {
  readonly [P in keyof T]: DeepReadonly3793<T[P]>;
};

type UnionToIntersection3793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3793<T> = UnionToIntersection3793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3793<T extends unknown[], V> = [...T, V];

type TuplifyUnion3793<T, L = LastOf3793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3793<TuplifyUnion3793<Exclude<T, L>>, L>;

type DeepPartial3793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3793<T[P]> }
  : T;

type Paths3793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3793<K, Paths3793<T[K], Prev3793[D]>> : never }[keyof T]
  : never;

type Prev3793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3793 {
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

type ConfigPaths3793 = Paths3793<NestedConfig3793>;

interface HeavyProps3793 {
  config: DeepPartial3793<NestedConfig3793>;
  path?: ConfigPaths3793;
}

const HeavyComponent3793 = memo(function HeavyComponent3793({ config }: HeavyProps3793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3793.displayName = 'HeavyComponent3793';
export default HeavyComponent3793;
