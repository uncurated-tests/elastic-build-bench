'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly166<T> = T extends (infer U)[]
  ? DeepReadonlyArray166<U>
  : T extends object
  ? DeepReadonlyObject166<T>
  : T;

interface DeepReadonlyArray166<T> extends ReadonlyArray<DeepReadonly166<T>> {}

type DeepReadonlyObject166<T> = {
  readonly [P in keyof T]: DeepReadonly166<T[P]>;
};

type UnionToIntersection166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf166<T> = UnionToIntersection166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push166<T extends unknown[], V> = [...T, V];

type TuplifyUnion166<T, L = LastOf166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push166<TuplifyUnion166<Exclude<T, L>>, L>;

type DeepPartial166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial166<T[P]> }
  : T;

type Paths166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join166<K, Paths166<T[K], Prev166[D]>> : never }[keyof T]
  : never;

type Prev166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig166 {
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

type ConfigPaths166 = Paths166<NestedConfig166>;

interface HeavyProps166 {
  config: DeepPartial166<NestedConfig166>;
  path?: ConfigPaths166;
}

const HeavyComponent166 = memo(function HeavyComponent166({ config }: HeavyProps166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent166.displayName = 'HeavyComponent166';
export default HeavyComponent166;
