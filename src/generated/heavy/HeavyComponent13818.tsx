'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13818<T> = T extends (infer U)[]
  ? DeepReadonlyArray13818<U>
  : T extends object
  ? DeepReadonlyObject13818<T>
  : T;

interface DeepReadonlyArray13818<T> extends ReadonlyArray<DeepReadonly13818<T>> {}

type DeepReadonlyObject13818<T> = {
  readonly [P in keyof T]: DeepReadonly13818<T[P]>;
};

type UnionToIntersection13818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13818<T> = UnionToIntersection13818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13818<T extends unknown[], V> = [...T, V];

type TuplifyUnion13818<T, L = LastOf13818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13818<TuplifyUnion13818<Exclude<T, L>>, L>;

type DeepPartial13818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13818<T[P]> }
  : T;

type Paths13818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13818<K, Paths13818<T[K], Prev13818[D]>> : never }[keyof T]
  : never;

type Prev13818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13818 {
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

type ConfigPaths13818 = Paths13818<NestedConfig13818>;

interface HeavyProps13818 {
  config: DeepPartial13818<NestedConfig13818>;
  path?: ConfigPaths13818;
}

const HeavyComponent13818 = memo(function HeavyComponent13818({ config }: HeavyProps13818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13818.displayName = 'HeavyComponent13818';
export default HeavyComponent13818;
