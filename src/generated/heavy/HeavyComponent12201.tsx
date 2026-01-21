'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12201<T> = T extends (infer U)[]
  ? DeepReadonlyArray12201<U>
  : T extends object
  ? DeepReadonlyObject12201<T>
  : T;

interface DeepReadonlyArray12201<T> extends ReadonlyArray<DeepReadonly12201<T>> {}

type DeepReadonlyObject12201<T> = {
  readonly [P in keyof T]: DeepReadonly12201<T[P]>;
};

type UnionToIntersection12201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12201<T> = UnionToIntersection12201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12201<T extends unknown[], V> = [...T, V];

type TuplifyUnion12201<T, L = LastOf12201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12201<TuplifyUnion12201<Exclude<T, L>>, L>;

type DeepPartial12201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12201<T[P]> }
  : T;

type Paths12201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12201<K, Paths12201<T[K], Prev12201[D]>> : never }[keyof T]
  : never;

type Prev12201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12201 {
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

type ConfigPaths12201 = Paths12201<NestedConfig12201>;

interface HeavyProps12201 {
  config: DeepPartial12201<NestedConfig12201>;
  path?: ConfigPaths12201;
}

const HeavyComponent12201 = memo(function HeavyComponent12201({ config }: HeavyProps12201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12201.displayName = 'HeavyComponent12201';
export default HeavyComponent12201;
