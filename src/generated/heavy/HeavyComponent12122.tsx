'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12122<T> = T extends (infer U)[]
  ? DeepReadonlyArray12122<U>
  : T extends object
  ? DeepReadonlyObject12122<T>
  : T;

interface DeepReadonlyArray12122<T> extends ReadonlyArray<DeepReadonly12122<T>> {}

type DeepReadonlyObject12122<T> = {
  readonly [P in keyof T]: DeepReadonly12122<T[P]>;
};

type UnionToIntersection12122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12122<T> = UnionToIntersection12122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12122<T extends unknown[], V> = [...T, V];

type TuplifyUnion12122<T, L = LastOf12122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12122<TuplifyUnion12122<Exclude<T, L>>, L>;

type DeepPartial12122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12122<T[P]> }
  : T;

type Paths12122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12122<K, Paths12122<T[K], Prev12122[D]>> : never }[keyof T]
  : never;

type Prev12122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12122 {
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

type ConfigPaths12122 = Paths12122<NestedConfig12122>;

interface HeavyProps12122 {
  config: DeepPartial12122<NestedConfig12122>;
  path?: ConfigPaths12122;
}

const HeavyComponent12122 = memo(function HeavyComponent12122({ config }: HeavyProps12122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12122.displayName = 'HeavyComponent12122';
export default HeavyComponent12122;
