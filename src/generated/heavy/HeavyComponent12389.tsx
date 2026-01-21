'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12389<T> = T extends (infer U)[]
  ? DeepReadonlyArray12389<U>
  : T extends object
  ? DeepReadonlyObject12389<T>
  : T;

interface DeepReadonlyArray12389<T> extends ReadonlyArray<DeepReadonly12389<T>> {}

type DeepReadonlyObject12389<T> = {
  readonly [P in keyof T]: DeepReadonly12389<T[P]>;
};

type UnionToIntersection12389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12389<T> = UnionToIntersection12389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12389<T extends unknown[], V> = [...T, V];

type TuplifyUnion12389<T, L = LastOf12389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12389<TuplifyUnion12389<Exclude<T, L>>, L>;

type DeepPartial12389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12389<T[P]> }
  : T;

type Paths12389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12389<K, Paths12389<T[K], Prev12389[D]>> : never }[keyof T]
  : never;

type Prev12389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12389 {
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

type ConfigPaths12389 = Paths12389<NestedConfig12389>;

interface HeavyProps12389 {
  config: DeepPartial12389<NestedConfig12389>;
  path?: ConfigPaths12389;
}

const HeavyComponent12389 = memo(function HeavyComponent12389({ config }: HeavyProps12389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12389.displayName = 'HeavyComponent12389';
export default HeavyComponent12389;
