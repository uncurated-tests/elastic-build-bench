'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12923<T> = T extends (infer U)[]
  ? DeepReadonlyArray12923<U>
  : T extends object
  ? DeepReadonlyObject12923<T>
  : T;

interface DeepReadonlyArray12923<T> extends ReadonlyArray<DeepReadonly12923<T>> {}

type DeepReadonlyObject12923<T> = {
  readonly [P in keyof T]: DeepReadonly12923<T[P]>;
};

type UnionToIntersection12923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12923<T> = UnionToIntersection12923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12923<T extends unknown[], V> = [...T, V];

type TuplifyUnion12923<T, L = LastOf12923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12923<TuplifyUnion12923<Exclude<T, L>>, L>;

type DeepPartial12923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12923<T[P]> }
  : T;

type Paths12923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12923<K, Paths12923<T[K], Prev12923[D]>> : never }[keyof T]
  : never;

type Prev12923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12923 {
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

type ConfigPaths12923 = Paths12923<NestedConfig12923>;

interface HeavyProps12923 {
  config: DeepPartial12923<NestedConfig12923>;
  path?: ConfigPaths12923;
}

const HeavyComponent12923 = memo(function HeavyComponent12923({ config }: HeavyProps12923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12923.displayName = 'HeavyComponent12923';
export default HeavyComponent12923;
