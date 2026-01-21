'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10130<T> = T extends (infer U)[]
  ? DeepReadonlyArray10130<U>
  : T extends object
  ? DeepReadonlyObject10130<T>
  : T;

interface DeepReadonlyArray10130<T> extends ReadonlyArray<DeepReadonly10130<T>> {}

type DeepReadonlyObject10130<T> = {
  readonly [P in keyof T]: DeepReadonly10130<T[P]>;
};

type UnionToIntersection10130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10130<T> = UnionToIntersection10130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10130<T extends unknown[], V> = [...T, V];

type TuplifyUnion10130<T, L = LastOf10130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10130<TuplifyUnion10130<Exclude<T, L>>, L>;

type DeepPartial10130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10130<T[P]> }
  : T;

type Paths10130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10130<K, Paths10130<T[K], Prev10130[D]>> : never }[keyof T]
  : never;

type Prev10130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10130 {
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

type ConfigPaths10130 = Paths10130<NestedConfig10130>;

interface HeavyProps10130 {
  config: DeepPartial10130<NestedConfig10130>;
  path?: ConfigPaths10130;
}

const HeavyComponent10130 = memo(function HeavyComponent10130({ config }: HeavyProps10130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10130.displayName = 'HeavyComponent10130';
export default HeavyComponent10130;
