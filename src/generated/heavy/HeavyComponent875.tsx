'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly875<T> = T extends (infer U)[]
  ? DeepReadonlyArray875<U>
  : T extends object
  ? DeepReadonlyObject875<T>
  : T;

interface DeepReadonlyArray875<T> extends ReadonlyArray<DeepReadonly875<T>> {}

type DeepReadonlyObject875<T> = {
  readonly [P in keyof T]: DeepReadonly875<T[P]>;
};

type UnionToIntersection875<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf875<T> = UnionToIntersection875<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push875<T extends unknown[], V> = [...T, V];

type TuplifyUnion875<T, L = LastOf875<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push875<TuplifyUnion875<Exclude<T, L>>, L>;

type DeepPartial875<T> = T extends object
  ? { [P in keyof T]?: DeepPartial875<T[P]> }
  : T;

type Paths875<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join875<K, Paths875<T[K], Prev875[D]>> : never }[keyof T]
  : never;

type Prev875 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join875<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig875 {
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

type ConfigPaths875 = Paths875<NestedConfig875>;

interface HeavyProps875 {
  config: DeepPartial875<NestedConfig875>;
  path?: ConfigPaths875;
}

const HeavyComponent875 = memo(function HeavyComponent875({ config }: HeavyProps875) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 875) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-875 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H875: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent875.displayName = 'HeavyComponent875';
export default HeavyComponent875;
