'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12985<T> = T extends (infer U)[]
  ? DeepReadonlyArray12985<U>
  : T extends object
  ? DeepReadonlyObject12985<T>
  : T;

interface DeepReadonlyArray12985<T> extends ReadonlyArray<DeepReadonly12985<T>> {}

type DeepReadonlyObject12985<T> = {
  readonly [P in keyof T]: DeepReadonly12985<T[P]>;
};

type UnionToIntersection12985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12985<T> = UnionToIntersection12985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12985<T extends unknown[], V> = [...T, V];

type TuplifyUnion12985<T, L = LastOf12985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12985<TuplifyUnion12985<Exclude<T, L>>, L>;

type DeepPartial12985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12985<T[P]> }
  : T;

type Paths12985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12985<K, Paths12985<T[K], Prev12985[D]>> : never }[keyof T]
  : never;

type Prev12985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12985 {
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

type ConfigPaths12985 = Paths12985<NestedConfig12985>;

interface HeavyProps12985 {
  config: DeepPartial12985<NestedConfig12985>;
  path?: ConfigPaths12985;
}

const HeavyComponent12985 = memo(function HeavyComponent12985({ config }: HeavyProps12985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12985.displayName = 'HeavyComponent12985';
export default HeavyComponent12985;
