'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly514<T> = T extends (infer U)[]
  ? DeepReadonlyArray514<U>
  : T extends object
  ? DeepReadonlyObject514<T>
  : T;

interface DeepReadonlyArray514<T> extends ReadonlyArray<DeepReadonly514<T>> {}

type DeepReadonlyObject514<T> = {
  readonly [P in keyof T]: DeepReadonly514<T[P]>;
};

type UnionToIntersection514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf514<T> = UnionToIntersection514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push514<T extends unknown[], V> = [...T, V];

type TuplifyUnion514<T, L = LastOf514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push514<TuplifyUnion514<Exclude<T, L>>, L>;

type DeepPartial514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial514<T[P]> }
  : T;

type Paths514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join514<K, Paths514<T[K], Prev514[D]>> : never }[keyof T]
  : never;

type Prev514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig514 {
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

type ConfigPaths514 = Paths514<NestedConfig514>;

interface HeavyProps514 {
  config: DeepPartial514<NestedConfig514>;
  path?: ConfigPaths514;
}

const HeavyComponent514 = memo(function HeavyComponent514({ config }: HeavyProps514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent514.displayName = 'HeavyComponent514';
export default HeavyComponent514;
