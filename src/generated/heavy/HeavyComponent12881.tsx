'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12881<T> = T extends (infer U)[]
  ? DeepReadonlyArray12881<U>
  : T extends object
  ? DeepReadonlyObject12881<T>
  : T;

interface DeepReadonlyArray12881<T> extends ReadonlyArray<DeepReadonly12881<T>> {}

type DeepReadonlyObject12881<T> = {
  readonly [P in keyof T]: DeepReadonly12881<T[P]>;
};

type UnionToIntersection12881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12881<T> = UnionToIntersection12881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12881<T extends unknown[], V> = [...T, V];

type TuplifyUnion12881<T, L = LastOf12881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12881<TuplifyUnion12881<Exclude<T, L>>, L>;

type DeepPartial12881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12881<T[P]> }
  : T;

type Paths12881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12881<K, Paths12881<T[K], Prev12881[D]>> : never }[keyof T]
  : never;

type Prev12881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12881 {
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

type ConfigPaths12881 = Paths12881<NestedConfig12881>;

interface HeavyProps12881 {
  config: DeepPartial12881<NestedConfig12881>;
  path?: ConfigPaths12881;
}

const HeavyComponent12881 = memo(function HeavyComponent12881({ config }: HeavyProps12881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12881.displayName = 'HeavyComponent12881';
export default HeavyComponent12881;
