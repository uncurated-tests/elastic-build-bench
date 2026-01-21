'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12133<T> = T extends (infer U)[]
  ? DeepReadonlyArray12133<U>
  : T extends object
  ? DeepReadonlyObject12133<T>
  : T;

interface DeepReadonlyArray12133<T> extends ReadonlyArray<DeepReadonly12133<T>> {}

type DeepReadonlyObject12133<T> = {
  readonly [P in keyof T]: DeepReadonly12133<T[P]>;
};

type UnionToIntersection12133<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12133<T> = UnionToIntersection12133<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12133<T extends unknown[], V> = [...T, V];

type TuplifyUnion12133<T, L = LastOf12133<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12133<TuplifyUnion12133<Exclude<T, L>>, L>;

type DeepPartial12133<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12133<T[P]> }
  : T;

type Paths12133<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12133<K, Paths12133<T[K], Prev12133[D]>> : never }[keyof T]
  : never;

type Prev12133 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12133<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12133 {
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

type ConfigPaths12133 = Paths12133<NestedConfig12133>;

interface HeavyProps12133 {
  config: DeepPartial12133<NestedConfig12133>;
  path?: ConfigPaths12133;
}

const HeavyComponent12133 = memo(function HeavyComponent12133({ config }: HeavyProps12133) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12133) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12133 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12133: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12133.displayName = 'HeavyComponent12133';
export default HeavyComponent12133;
