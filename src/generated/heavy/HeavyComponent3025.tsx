'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3025<T> = T extends (infer U)[]
  ? DeepReadonlyArray3025<U>
  : T extends object
  ? DeepReadonlyObject3025<T>
  : T;

interface DeepReadonlyArray3025<T> extends ReadonlyArray<DeepReadonly3025<T>> {}

type DeepReadonlyObject3025<T> = {
  readonly [P in keyof T]: DeepReadonly3025<T[P]>;
};

type UnionToIntersection3025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3025<T> = UnionToIntersection3025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3025<T extends unknown[], V> = [...T, V];

type TuplifyUnion3025<T, L = LastOf3025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3025<TuplifyUnion3025<Exclude<T, L>>, L>;

type DeepPartial3025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3025<T[P]> }
  : T;

type Paths3025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3025<K, Paths3025<T[K], Prev3025[D]>> : never }[keyof T]
  : never;

type Prev3025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3025 {
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

type ConfigPaths3025 = Paths3025<NestedConfig3025>;

interface HeavyProps3025 {
  config: DeepPartial3025<NestedConfig3025>;
  path?: ConfigPaths3025;
}

const HeavyComponent3025 = memo(function HeavyComponent3025({ config }: HeavyProps3025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3025.displayName = 'HeavyComponent3025';
export default HeavyComponent3025;
