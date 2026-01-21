'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12818<T> = T extends (infer U)[]
  ? DeepReadonlyArray12818<U>
  : T extends object
  ? DeepReadonlyObject12818<T>
  : T;

interface DeepReadonlyArray12818<T> extends ReadonlyArray<DeepReadonly12818<T>> {}

type DeepReadonlyObject12818<T> = {
  readonly [P in keyof T]: DeepReadonly12818<T[P]>;
};

type UnionToIntersection12818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12818<T> = UnionToIntersection12818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12818<T extends unknown[], V> = [...T, V];

type TuplifyUnion12818<T, L = LastOf12818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12818<TuplifyUnion12818<Exclude<T, L>>, L>;

type DeepPartial12818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12818<T[P]> }
  : T;

type Paths12818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12818<K, Paths12818<T[K], Prev12818[D]>> : never }[keyof T]
  : never;

type Prev12818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12818 {
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

type ConfigPaths12818 = Paths12818<NestedConfig12818>;

interface HeavyProps12818 {
  config: DeepPartial12818<NestedConfig12818>;
  path?: ConfigPaths12818;
}

const HeavyComponent12818 = memo(function HeavyComponent12818({ config }: HeavyProps12818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12818.displayName = 'HeavyComponent12818';
export default HeavyComponent12818;
