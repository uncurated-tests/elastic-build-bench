'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3782<T> = T extends (infer U)[]
  ? DeepReadonlyArray3782<U>
  : T extends object
  ? DeepReadonlyObject3782<T>
  : T;

interface DeepReadonlyArray3782<T> extends ReadonlyArray<DeepReadonly3782<T>> {}

type DeepReadonlyObject3782<T> = {
  readonly [P in keyof T]: DeepReadonly3782<T[P]>;
};

type UnionToIntersection3782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3782<T> = UnionToIntersection3782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3782<T extends unknown[], V> = [...T, V];

type TuplifyUnion3782<T, L = LastOf3782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3782<TuplifyUnion3782<Exclude<T, L>>, L>;

type DeepPartial3782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3782<T[P]> }
  : T;

type Paths3782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3782<K, Paths3782<T[K], Prev3782[D]>> : never }[keyof T]
  : never;

type Prev3782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3782 {
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

type ConfigPaths3782 = Paths3782<NestedConfig3782>;

interface HeavyProps3782 {
  config: DeepPartial3782<NestedConfig3782>;
  path?: ConfigPaths3782;
}

const HeavyComponent3782 = memo(function HeavyComponent3782({ config }: HeavyProps3782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3782.displayName = 'HeavyComponent3782';
export default HeavyComponent3782;
