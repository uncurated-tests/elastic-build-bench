'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly381<T> = T extends (infer U)[]
  ? DeepReadonlyArray381<U>
  : T extends object
  ? DeepReadonlyObject381<T>
  : T;

interface DeepReadonlyArray381<T> extends ReadonlyArray<DeepReadonly381<T>> {}

type DeepReadonlyObject381<T> = {
  readonly [P in keyof T]: DeepReadonly381<T[P]>;
};

type UnionToIntersection381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf381<T> = UnionToIntersection381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push381<T extends unknown[], V> = [...T, V];

type TuplifyUnion381<T, L = LastOf381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push381<TuplifyUnion381<Exclude<T, L>>, L>;

type DeepPartial381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial381<T[P]> }
  : T;

type Paths381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join381<K, Paths381<T[K], Prev381[D]>> : never }[keyof T]
  : never;

type Prev381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig381 {
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

type ConfigPaths381 = Paths381<NestedConfig381>;

interface HeavyProps381 {
  config: DeepPartial381<NestedConfig381>;
  path?: ConfigPaths381;
}

const HeavyComponent381 = memo(function HeavyComponent381({ config }: HeavyProps381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent381.displayName = 'HeavyComponent381';
export default HeavyComponent381;
