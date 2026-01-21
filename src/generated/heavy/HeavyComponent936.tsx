'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly936<T> = T extends (infer U)[]
  ? DeepReadonlyArray936<U>
  : T extends object
  ? DeepReadonlyObject936<T>
  : T;

interface DeepReadonlyArray936<T> extends ReadonlyArray<DeepReadonly936<T>> {}

type DeepReadonlyObject936<T> = {
  readonly [P in keyof T]: DeepReadonly936<T[P]>;
};

type UnionToIntersection936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf936<T> = UnionToIntersection936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push936<T extends unknown[], V> = [...T, V];

type TuplifyUnion936<T, L = LastOf936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push936<TuplifyUnion936<Exclude<T, L>>, L>;

type DeepPartial936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial936<T[P]> }
  : T;

type Paths936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join936<K, Paths936<T[K], Prev936[D]>> : never }[keyof T]
  : never;

type Prev936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig936 {
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

type ConfigPaths936 = Paths936<NestedConfig936>;

interface HeavyProps936 {
  config: DeepPartial936<NestedConfig936>;
  path?: ConfigPaths936;
}

const HeavyComponent936 = memo(function HeavyComponent936({ config }: HeavyProps936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent936.displayName = 'HeavyComponent936';
export default HeavyComponent936;
