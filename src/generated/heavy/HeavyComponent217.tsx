'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly217<T> = T extends (infer U)[]
  ? DeepReadonlyArray217<U>
  : T extends object
  ? DeepReadonlyObject217<T>
  : T;

interface DeepReadonlyArray217<T> extends ReadonlyArray<DeepReadonly217<T>> {}

type DeepReadonlyObject217<T> = {
  readonly [P in keyof T]: DeepReadonly217<T[P]>;
};

type UnionToIntersection217<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf217<T> = UnionToIntersection217<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push217<T extends unknown[], V> = [...T, V];

type TuplifyUnion217<T, L = LastOf217<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push217<TuplifyUnion217<Exclude<T, L>>, L>;

type DeepPartial217<T> = T extends object
  ? { [P in keyof T]?: DeepPartial217<T[P]> }
  : T;

type Paths217<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join217<K, Paths217<T[K], Prev217[D]>> : never }[keyof T]
  : never;

type Prev217 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join217<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig217 {
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

type ConfigPaths217 = Paths217<NestedConfig217>;

interface HeavyProps217 {
  config: DeepPartial217<NestedConfig217>;
  path?: ConfigPaths217;
}

const HeavyComponent217 = memo(function HeavyComponent217({ config }: HeavyProps217) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 217) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-217 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H217: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent217.displayName = 'HeavyComponent217';
export default HeavyComponent217;
