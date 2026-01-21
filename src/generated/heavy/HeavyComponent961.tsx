'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly961<T> = T extends (infer U)[]
  ? DeepReadonlyArray961<U>
  : T extends object
  ? DeepReadonlyObject961<T>
  : T;

interface DeepReadonlyArray961<T> extends ReadonlyArray<DeepReadonly961<T>> {}

type DeepReadonlyObject961<T> = {
  readonly [P in keyof T]: DeepReadonly961<T[P]>;
};

type UnionToIntersection961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf961<T> = UnionToIntersection961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push961<T extends unknown[], V> = [...T, V];

type TuplifyUnion961<T, L = LastOf961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push961<TuplifyUnion961<Exclude<T, L>>, L>;

type DeepPartial961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial961<T[P]> }
  : T;

type Paths961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join961<K, Paths961<T[K], Prev961[D]>> : never }[keyof T]
  : never;

type Prev961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig961 {
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

type ConfigPaths961 = Paths961<NestedConfig961>;

interface HeavyProps961 {
  config: DeepPartial961<NestedConfig961>;
  path?: ConfigPaths961;
}

const HeavyComponent961 = memo(function HeavyComponent961({ config }: HeavyProps961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent961.displayName = 'HeavyComponent961';
export default HeavyComponent961;
