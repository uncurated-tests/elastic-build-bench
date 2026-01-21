'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3864<T> = T extends (infer U)[]
  ? DeepReadonlyArray3864<U>
  : T extends object
  ? DeepReadonlyObject3864<T>
  : T;

interface DeepReadonlyArray3864<T> extends ReadonlyArray<DeepReadonly3864<T>> {}

type DeepReadonlyObject3864<T> = {
  readonly [P in keyof T]: DeepReadonly3864<T[P]>;
};

type UnionToIntersection3864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3864<T> = UnionToIntersection3864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3864<T extends unknown[], V> = [...T, V];

type TuplifyUnion3864<T, L = LastOf3864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3864<TuplifyUnion3864<Exclude<T, L>>, L>;

type DeepPartial3864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3864<T[P]> }
  : T;

type Paths3864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3864<K, Paths3864<T[K], Prev3864[D]>> : never }[keyof T]
  : never;

type Prev3864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3864 {
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

type ConfigPaths3864 = Paths3864<NestedConfig3864>;

interface HeavyProps3864 {
  config: DeepPartial3864<NestedConfig3864>;
  path?: ConfigPaths3864;
}

const HeavyComponent3864 = memo(function HeavyComponent3864({ config }: HeavyProps3864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3864.displayName = 'HeavyComponent3864';
export default HeavyComponent3864;
