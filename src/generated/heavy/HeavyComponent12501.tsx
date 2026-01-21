'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12501<T> = T extends (infer U)[]
  ? DeepReadonlyArray12501<U>
  : T extends object
  ? DeepReadonlyObject12501<T>
  : T;

interface DeepReadonlyArray12501<T> extends ReadonlyArray<DeepReadonly12501<T>> {}

type DeepReadonlyObject12501<T> = {
  readonly [P in keyof T]: DeepReadonly12501<T[P]>;
};

type UnionToIntersection12501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12501<T> = UnionToIntersection12501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12501<T extends unknown[], V> = [...T, V];

type TuplifyUnion12501<T, L = LastOf12501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12501<TuplifyUnion12501<Exclude<T, L>>, L>;

type DeepPartial12501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12501<T[P]> }
  : T;

type Paths12501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12501<K, Paths12501<T[K], Prev12501[D]>> : never }[keyof T]
  : never;

type Prev12501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12501 {
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

type ConfigPaths12501 = Paths12501<NestedConfig12501>;

interface HeavyProps12501 {
  config: DeepPartial12501<NestedConfig12501>;
  path?: ConfigPaths12501;
}

const HeavyComponent12501 = memo(function HeavyComponent12501({ config }: HeavyProps12501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12501.displayName = 'HeavyComponent12501';
export default HeavyComponent12501;
