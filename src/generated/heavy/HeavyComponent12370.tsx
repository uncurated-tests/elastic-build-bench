'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12370<T> = T extends (infer U)[]
  ? DeepReadonlyArray12370<U>
  : T extends object
  ? DeepReadonlyObject12370<T>
  : T;

interface DeepReadonlyArray12370<T> extends ReadonlyArray<DeepReadonly12370<T>> {}

type DeepReadonlyObject12370<T> = {
  readonly [P in keyof T]: DeepReadonly12370<T[P]>;
};

type UnionToIntersection12370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12370<T> = UnionToIntersection12370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12370<T extends unknown[], V> = [...T, V];

type TuplifyUnion12370<T, L = LastOf12370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12370<TuplifyUnion12370<Exclude<T, L>>, L>;

type DeepPartial12370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12370<T[P]> }
  : T;

type Paths12370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12370<K, Paths12370<T[K], Prev12370[D]>> : never }[keyof T]
  : never;

type Prev12370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12370 {
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

type ConfigPaths12370 = Paths12370<NestedConfig12370>;

interface HeavyProps12370 {
  config: DeepPartial12370<NestedConfig12370>;
  path?: ConfigPaths12370;
}

const HeavyComponent12370 = memo(function HeavyComponent12370({ config }: HeavyProps12370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12370.displayName = 'HeavyComponent12370';
export default HeavyComponent12370;
