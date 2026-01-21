'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3419<T> = T extends (infer U)[]
  ? DeepReadonlyArray3419<U>
  : T extends object
  ? DeepReadonlyObject3419<T>
  : T;

interface DeepReadonlyArray3419<T> extends ReadonlyArray<DeepReadonly3419<T>> {}

type DeepReadonlyObject3419<T> = {
  readonly [P in keyof T]: DeepReadonly3419<T[P]>;
};

type UnionToIntersection3419<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3419<T> = UnionToIntersection3419<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3419<T extends unknown[], V> = [...T, V];

type TuplifyUnion3419<T, L = LastOf3419<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3419<TuplifyUnion3419<Exclude<T, L>>, L>;

type DeepPartial3419<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3419<T[P]> }
  : T;

type Paths3419<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3419<K, Paths3419<T[K], Prev3419[D]>> : never }[keyof T]
  : never;

type Prev3419 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3419<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3419 {
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

type ConfigPaths3419 = Paths3419<NestedConfig3419>;

interface HeavyProps3419 {
  config: DeepPartial3419<NestedConfig3419>;
  path?: ConfigPaths3419;
}

const HeavyComponent3419 = memo(function HeavyComponent3419({ config }: HeavyProps3419) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3419) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3419 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3419: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3419.displayName = 'HeavyComponent3419';
export default HeavyComponent3419;
