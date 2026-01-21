'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12975<T> = T extends (infer U)[]
  ? DeepReadonlyArray12975<U>
  : T extends object
  ? DeepReadonlyObject12975<T>
  : T;

interface DeepReadonlyArray12975<T> extends ReadonlyArray<DeepReadonly12975<T>> {}

type DeepReadonlyObject12975<T> = {
  readonly [P in keyof T]: DeepReadonly12975<T[P]>;
};

type UnionToIntersection12975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12975<T> = UnionToIntersection12975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12975<T extends unknown[], V> = [...T, V];

type TuplifyUnion12975<T, L = LastOf12975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12975<TuplifyUnion12975<Exclude<T, L>>, L>;

type DeepPartial12975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12975<T[P]> }
  : T;

type Paths12975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12975<K, Paths12975<T[K], Prev12975[D]>> : never }[keyof T]
  : never;

type Prev12975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12975 {
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

type ConfigPaths12975 = Paths12975<NestedConfig12975>;

interface HeavyProps12975 {
  config: DeepPartial12975<NestedConfig12975>;
  path?: ConfigPaths12975;
}

const HeavyComponent12975 = memo(function HeavyComponent12975({ config }: HeavyProps12975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12975.displayName = 'HeavyComponent12975';
export default HeavyComponent12975;
