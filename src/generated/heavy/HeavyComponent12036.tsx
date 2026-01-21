'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12036<T> = T extends (infer U)[]
  ? DeepReadonlyArray12036<U>
  : T extends object
  ? DeepReadonlyObject12036<T>
  : T;

interface DeepReadonlyArray12036<T> extends ReadonlyArray<DeepReadonly12036<T>> {}

type DeepReadonlyObject12036<T> = {
  readonly [P in keyof T]: DeepReadonly12036<T[P]>;
};

type UnionToIntersection12036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12036<T> = UnionToIntersection12036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12036<T extends unknown[], V> = [...T, V];

type TuplifyUnion12036<T, L = LastOf12036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12036<TuplifyUnion12036<Exclude<T, L>>, L>;

type DeepPartial12036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12036<T[P]> }
  : T;

type Paths12036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12036<K, Paths12036<T[K], Prev12036[D]>> : never }[keyof T]
  : never;

type Prev12036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12036 {
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

type ConfigPaths12036 = Paths12036<NestedConfig12036>;

interface HeavyProps12036 {
  config: DeepPartial12036<NestedConfig12036>;
  path?: ConfigPaths12036;
}

const HeavyComponent12036 = memo(function HeavyComponent12036({ config }: HeavyProps12036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12036.displayName = 'HeavyComponent12036';
export default HeavyComponent12036;
