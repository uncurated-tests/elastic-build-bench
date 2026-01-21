'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3962<T> = T extends (infer U)[]
  ? DeepReadonlyArray3962<U>
  : T extends object
  ? DeepReadonlyObject3962<T>
  : T;

interface DeepReadonlyArray3962<T> extends ReadonlyArray<DeepReadonly3962<T>> {}

type DeepReadonlyObject3962<T> = {
  readonly [P in keyof T]: DeepReadonly3962<T[P]>;
};

type UnionToIntersection3962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3962<T> = UnionToIntersection3962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3962<T extends unknown[], V> = [...T, V];

type TuplifyUnion3962<T, L = LastOf3962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3962<TuplifyUnion3962<Exclude<T, L>>, L>;

type DeepPartial3962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3962<T[P]> }
  : T;

type Paths3962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3962<K, Paths3962<T[K], Prev3962[D]>> : never }[keyof T]
  : never;

type Prev3962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3962 {
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

type ConfigPaths3962 = Paths3962<NestedConfig3962>;

interface HeavyProps3962 {
  config: DeepPartial3962<NestedConfig3962>;
  path?: ConfigPaths3962;
}

const HeavyComponent3962 = memo(function HeavyComponent3962({ config }: HeavyProps3962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3962.displayName = 'HeavyComponent3962';
export default HeavyComponent3962;
