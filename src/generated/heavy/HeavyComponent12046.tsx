'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12046<T> = T extends (infer U)[]
  ? DeepReadonlyArray12046<U>
  : T extends object
  ? DeepReadonlyObject12046<T>
  : T;

interface DeepReadonlyArray12046<T> extends ReadonlyArray<DeepReadonly12046<T>> {}

type DeepReadonlyObject12046<T> = {
  readonly [P in keyof T]: DeepReadonly12046<T[P]>;
};

type UnionToIntersection12046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12046<T> = UnionToIntersection12046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12046<T extends unknown[], V> = [...T, V];

type TuplifyUnion12046<T, L = LastOf12046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12046<TuplifyUnion12046<Exclude<T, L>>, L>;

type DeepPartial12046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12046<T[P]> }
  : T;

type Paths12046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12046<K, Paths12046<T[K], Prev12046[D]>> : never }[keyof T]
  : never;

type Prev12046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12046 {
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

type ConfigPaths12046 = Paths12046<NestedConfig12046>;

interface HeavyProps12046 {
  config: DeepPartial12046<NestedConfig12046>;
  path?: ConfigPaths12046;
}

const HeavyComponent12046 = memo(function HeavyComponent12046({ config }: HeavyProps12046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12046.displayName = 'HeavyComponent12046';
export default HeavyComponent12046;
