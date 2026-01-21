'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3574<T> = T extends (infer U)[]
  ? DeepReadonlyArray3574<U>
  : T extends object
  ? DeepReadonlyObject3574<T>
  : T;

interface DeepReadonlyArray3574<T> extends ReadonlyArray<DeepReadonly3574<T>> {}

type DeepReadonlyObject3574<T> = {
  readonly [P in keyof T]: DeepReadonly3574<T[P]>;
};

type UnionToIntersection3574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3574<T> = UnionToIntersection3574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3574<T extends unknown[], V> = [...T, V];

type TuplifyUnion3574<T, L = LastOf3574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3574<TuplifyUnion3574<Exclude<T, L>>, L>;

type DeepPartial3574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3574<T[P]> }
  : T;

type Paths3574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3574<K, Paths3574<T[K], Prev3574[D]>> : never }[keyof T]
  : never;

type Prev3574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3574 {
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

type ConfigPaths3574 = Paths3574<NestedConfig3574>;

interface HeavyProps3574 {
  config: DeepPartial3574<NestedConfig3574>;
  path?: ConfigPaths3574;
}

const HeavyComponent3574 = memo(function HeavyComponent3574({ config }: HeavyProps3574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3574.displayName = 'HeavyComponent3574';
export default HeavyComponent3574;
