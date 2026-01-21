'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12939<T> = T extends (infer U)[]
  ? DeepReadonlyArray12939<U>
  : T extends object
  ? DeepReadonlyObject12939<T>
  : T;

interface DeepReadonlyArray12939<T> extends ReadonlyArray<DeepReadonly12939<T>> {}

type DeepReadonlyObject12939<T> = {
  readonly [P in keyof T]: DeepReadonly12939<T[P]>;
};

type UnionToIntersection12939<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12939<T> = UnionToIntersection12939<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12939<T extends unknown[], V> = [...T, V];

type TuplifyUnion12939<T, L = LastOf12939<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12939<TuplifyUnion12939<Exclude<T, L>>, L>;

type DeepPartial12939<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12939<T[P]> }
  : T;

type Paths12939<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12939<K, Paths12939<T[K], Prev12939[D]>> : never }[keyof T]
  : never;

type Prev12939 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12939<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12939 {
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

type ConfigPaths12939 = Paths12939<NestedConfig12939>;

interface HeavyProps12939 {
  config: DeepPartial12939<NestedConfig12939>;
  path?: ConfigPaths12939;
}

const HeavyComponent12939 = memo(function HeavyComponent12939({ config }: HeavyProps12939) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12939) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12939 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12939: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12939.displayName = 'HeavyComponent12939';
export default HeavyComponent12939;
