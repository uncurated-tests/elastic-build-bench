'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10555<T> = T extends (infer U)[]
  ? DeepReadonlyArray10555<U>
  : T extends object
  ? DeepReadonlyObject10555<T>
  : T;

interface DeepReadonlyArray10555<T> extends ReadonlyArray<DeepReadonly10555<T>> {}

type DeepReadonlyObject10555<T> = {
  readonly [P in keyof T]: DeepReadonly10555<T[P]>;
};

type UnionToIntersection10555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10555<T> = UnionToIntersection10555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10555<T extends unknown[], V> = [...T, V];

type TuplifyUnion10555<T, L = LastOf10555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10555<TuplifyUnion10555<Exclude<T, L>>, L>;

type DeepPartial10555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10555<T[P]> }
  : T;

type Paths10555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10555<K, Paths10555<T[K], Prev10555[D]>> : never }[keyof T]
  : never;

type Prev10555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10555 {
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

type ConfigPaths10555 = Paths10555<NestedConfig10555>;

interface HeavyProps10555 {
  config: DeepPartial10555<NestedConfig10555>;
  path?: ConfigPaths10555;
}

const HeavyComponent10555 = memo(function HeavyComponent10555({ config }: HeavyProps10555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10555.displayName = 'HeavyComponent10555';
export default HeavyComponent10555;
