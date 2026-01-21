'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10766<T> = T extends (infer U)[]
  ? DeepReadonlyArray10766<U>
  : T extends object
  ? DeepReadonlyObject10766<T>
  : T;

interface DeepReadonlyArray10766<T> extends ReadonlyArray<DeepReadonly10766<T>> {}

type DeepReadonlyObject10766<T> = {
  readonly [P in keyof T]: DeepReadonly10766<T[P]>;
};

type UnionToIntersection10766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10766<T> = UnionToIntersection10766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10766<T extends unknown[], V> = [...T, V];

type TuplifyUnion10766<T, L = LastOf10766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10766<TuplifyUnion10766<Exclude<T, L>>, L>;

type DeepPartial10766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10766<T[P]> }
  : T;

type Paths10766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10766<K, Paths10766<T[K], Prev10766[D]>> : never }[keyof T]
  : never;

type Prev10766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10766 {
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

type ConfigPaths10766 = Paths10766<NestedConfig10766>;

interface HeavyProps10766 {
  config: DeepPartial10766<NestedConfig10766>;
  path?: ConfigPaths10766;
}

const HeavyComponent10766 = memo(function HeavyComponent10766({ config }: HeavyProps10766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10766.displayName = 'HeavyComponent10766';
export default HeavyComponent10766;
