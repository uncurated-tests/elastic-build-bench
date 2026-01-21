'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12637<T> = T extends (infer U)[]
  ? DeepReadonlyArray12637<U>
  : T extends object
  ? DeepReadonlyObject12637<T>
  : T;

interface DeepReadonlyArray12637<T> extends ReadonlyArray<DeepReadonly12637<T>> {}

type DeepReadonlyObject12637<T> = {
  readonly [P in keyof T]: DeepReadonly12637<T[P]>;
};

type UnionToIntersection12637<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12637<T> = UnionToIntersection12637<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12637<T extends unknown[], V> = [...T, V];

type TuplifyUnion12637<T, L = LastOf12637<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12637<TuplifyUnion12637<Exclude<T, L>>, L>;

type DeepPartial12637<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12637<T[P]> }
  : T;

type Paths12637<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12637<K, Paths12637<T[K], Prev12637[D]>> : never }[keyof T]
  : never;

type Prev12637 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12637<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12637 {
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

type ConfigPaths12637 = Paths12637<NestedConfig12637>;

interface HeavyProps12637 {
  config: DeepPartial12637<NestedConfig12637>;
  path?: ConfigPaths12637;
}

const HeavyComponent12637 = memo(function HeavyComponent12637({ config }: HeavyProps12637) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12637) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12637 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12637: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12637.displayName = 'HeavyComponent12637';
export default HeavyComponent12637;
