'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12697<T> = T extends (infer U)[]
  ? DeepReadonlyArray12697<U>
  : T extends object
  ? DeepReadonlyObject12697<T>
  : T;

interface DeepReadonlyArray12697<T> extends ReadonlyArray<DeepReadonly12697<T>> {}

type DeepReadonlyObject12697<T> = {
  readonly [P in keyof T]: DeepReadonly12697<T[P]>;
};

type UnionToIntersection12697<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12697<T> = UnionToIntersection12697<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12697<T extends unknown[], V> = [...T, V];

type TuplifyUnion12697<T, L = LastOf12697<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12697<TuplifyUnion12697<Exclude<T, L>>, L>;

type DeepPartial12697<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12697<T[P]> }
  : T;

type Paths12697<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12697<K, Paths12697<T[K], Prev12697[D]>> : never }[keyof T]
  : never;

type Prev12697 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12697<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12697 {
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

type ConfigPaths12697 = Paths12697<NestedConfig12697>;

interface HeavyProps12697 {
  config: DeepPartial12697<NestedConfig12697>;
  path?: ConfigPaths12697;
}

const HeavyComponent12697 = memo(function HeavyComponent12697({ config }: HeavyProps12697) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12697) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12697 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12697: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12697.displayName = 'HeavyComponent12697';
export default HeavyComponent12697;
