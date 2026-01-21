'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10137<T> = T extends (infer U)[]
  ? DeepReadonlyArray10137<U>
  : T extends object
  ? DeepReadonlyObject10137<T>
  : T;

interface DeepReadonlyArray10137<T> extends ReadonlyArray<DeepReadonly10137<T>> {}

type DeepReadonlyObject10137<T> = {
  readonly [P in keyof T]: DeepReadonly10137<T[P]>;
};

type UnionToIntersection10137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10137<T> = UnionToIntersection10137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10137<T extends unknown[], V> = [...T, V];

type TuplifyUnion10137<T, L = LastOf10137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10137<TuplifyUnion10137<Exclude<T, L>>, L>;

type DeepPartial10137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10137<T[P]> }
  : T;

type Paths10137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10137<K, Paths10137<T[K], Prev10137[D]>> : never }[keyof T]
  : never;

type Prev10137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10137 {
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

type ConfigPaths10137 = Paths10137<NestedConfig10137>;

interface HeavyProps10137 {
  config: DeepPartial10137<NestedConfig10137>;
  path?: ConfigPaths10137;
}

const HeavyComponent10137 = memo(function HeavyComponent10137({ config }: HeavyProps10137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10137.displayName = 'HeavyComponent10137';
export default HeavyComponent10137;
