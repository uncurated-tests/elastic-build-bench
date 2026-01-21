'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12782<T> = T extends (infer U)[]
  ? DeepReadonlyArray12782<U>
  : T extends object
  ? DeepReadonlyObject12782<T>
  : T;

interface DeepReadonlyArray12782<T> extends ReadonlyArray<DeepReadonly12782<T>> {}

type DeepReadonlyObject12782<T> = {
  readonly [P in keyof T]: DeepReadonly12782<T[P]>;
};

type UnionToIntersection12782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12782<T> = UnionToIntersection12782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12782<T extends unknown[], V> = [...T, V];

type TuplifyUnion12782<T, L = LastOf12782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12782<TuplifyUnion12782<Exclude<T, L>>, L>;

type DeepPartial12782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12782<T[P]> }
  : T;

type Paths12782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12782<K, Paths12782<T[K], Prev12782[D]>> : never }[keyof T]
  : never;

type Prev12782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12782 {
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

type ConfigPaths12782 = Paths12782<NestedConfig12782>;

interface HeavyProps12782 {
  config: DeepPartial12782<NestedConfig12782>;
  path?: ConfigPaths12782;
}

const HeavyComponent12782 = memo(function HeavyComponent12782({ config }: HeavyProps12782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12782.displayName = 'HeavyComponent12782';
export default HeavyComponent12782;
