'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12626<T> = T extends (infer U)[]
  ? DeepReadonlyArray12626<U>
  : T extends object
  ? DeepReadonlyObject12626<T>
  : T;

interface DeepReadonlyArray12626<T> extends ReadonlyArray<DeepReadonly12626<T>> {}

type DeepReadonlyObject12626<T> = {
  readonly [P in keyof T]: DeepReadonly12626<T[P]>;
};

type UnionToIntersection12626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12626<T> = UnionToIntersection12626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12626<T extends unknown[], V> = [...T, V];

type TuplifyUnion12626<T, L = LastOf12626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12626<TuplifyUnion12626<Exclude<T, L>>, L>;

type DeepPartial12626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12626<T[P]> }
  : T;

type Paths12626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12626<K, Paths12626<T[K], Prev12626[D]>> : never }[keyof T]
  : never;

type Prev12626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12626 {
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

type ConfigPaths12626 = Paths12626<NestedConfig12626>;

interface HeavyProps12626 {
  config: DeepPartial12626<NestedConfig12626>;
  path?: ConfigPaths12626;
}

const HeavyComponent12626 = memo(function HeavyComponent12626({ config }: HeavyProps12626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12626.displayName = 'HeavyComponent12626';
export default HeavyComponent12626;
