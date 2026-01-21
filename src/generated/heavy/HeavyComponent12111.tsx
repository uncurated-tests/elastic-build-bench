'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12111<T> = T extends (infer U)[]
  ? DeepReadonlyArray12111<U>
  : T extends object
  ? DeepReadonlyObject12111<T>
  : T;

interface DeepReadonlyArray12111<T> extends ReadonlyArray<DeepReadonly12111<T>> {}

type DeepReadonlyObject12111<T> = {
  readonly [P in keyof T]: DeepReadonly12111<T[P]>;
};

type UnionToIntersection12111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12111<T> = UnionToIntersection12111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12111<T extends unknown[], V> = [...T, V];

type TuplifyUnion12111<T, L = LastOf12111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12111<TuplifyUnion12111<Exclude<T, L>>, L>;

type DeepPartial12111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12111<T[P]> }
  : T;

type Paths12111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12111<K, Paths12111<T[K], Prev12111[D]>> : never }[keyof T]
  : never;

type Prev12111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12111 {
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

type ConfigPaths12111 = Paths12111<NestedConfig12111>;

interface HeavyProps12111 {
  config: DeepPartial12111<NestedConfig12111>;
  path?: ConfigPaths12111;
}

const HeavyComponent12111 = memo(function HeavyComponent12111({ config }: HeavyProps12111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12111.displayName = 'HeavyComponent12111';
export default HeavyComponent12111;
