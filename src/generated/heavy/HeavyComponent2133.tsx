'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2133<T> = T extends (infer U)[]
  ? DeepReadonlyArray2133<U>
  : T extends object
  ? DeepReadonlyObject2133<T>
  : T;

interface DeepReadonlyArray2133<T> extends ReadonlyArray<DeepReadonly2133<T>> {}

type DeepReadonlyObject2133<T> = {
  readonly [P in keyof T]: DeepReadonly2133<T[P]>;
};

type UnionToIntersection2133<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2133<T> = UnionToIntersection2133<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2133<T extends unknown[], V> = [...T, V];

type TuplifyUnion2133<T, L = LastOf2133<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2133<TuplifyUnion2133<Exclude<T, L>>, L>;

type DeepPartial2133<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2133<T[P]> }
  : T;

type Paths2133<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2133<K, Paths2133<T[K], Prev2133[D]>> : never }[keyof T]
  : never;

type Prev2133 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2133<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2133 {
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

type ConfigPaths2133 = Paths2133<NestedConfig2133>;

interface HeavyProps2133 {
  config: DeepPartial2133<NestedConfig2133>;
  path?: ConfigPaths2133;
}

const HeavyComponent2133 = memo(function HeavyComponent2133({ config }: HeavyProps2133) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2133) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2133 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2133: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2133.displayName = 'HeavyComponent2133';
export default HeavyComponent2133;
