'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3133<T> = T extends (infer U)[]
  ? DeepReadonlyArray3133<U>
  : T extends object
  ? DeepReadonlyObject3133<T>
  : T;

interface DeepReadonlyArray3133<T> extends ReadonlyArray<DeepReadonly3133<T>> {}

type DeepReadonlyObject3133<T> = {
  readonly [P in keyof T]: DeepReadonly3133<T[P]>;
};

type UnionToIntersection3133<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3133<T> = UnionToIntersection3133<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3133<T extends unknown[], V> = [...T, V];

type TuplifyUnion3133<T, L = LastOf3133<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3133<TuplifyUnion3133<Exclude<T, L>>, L>;

type DeepPartial3133<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3133<T[P]> }
  : T;

type Paths3133<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3133<K, Paths3133<T[K], Prev3133[D]>> : never }[keyof T]
  : never;

type Prev3133 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3133<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3133 {
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

type ConfigPaths3133 = Paths3133<NestedConfig3133>;

interface HeavyProps3133 {
  config: DeepPartial3133<NestedConfig3133>;
  path?: ConfigPaths3133;
}

const HeavyComponent3133 = memo(function HeavyComponent3133({ config }: HeavyProps3133) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3133) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3133 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3133: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3133.displayName = 'HeavyComponent3133';
export default HeavyComponent3133;
