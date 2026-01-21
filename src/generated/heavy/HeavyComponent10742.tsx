'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10742<T> = T extends (infer U)[]
  ? DeepReadonlyArray10742<U>
  : T extends object
  ? DeepReadonlyObject10742<T>
  : T;

interface DeepReadonlyArray10742<T> extends ReadonlyArray<DeepReadonly10742<T>> {}

type DeepReadonlyObject10742<T> = {
  readonly [P in keyof T]: DeepReadonly10742<T[P]>;
};

type UnionToIntersection10742<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10742<T> = UnionToIntersection10742<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10742<T extends unknown[], V> = [...T, V];

type TuplifyUnion10742<T, L = LastOf10742<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10742<TuplifyUnion10742<Exclude<T, L>>, L>;

type DeepPartial10742<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10742<T[P]> }
  : T;

type Paths10742<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10742<K, Paths10742<T[K], Prev10742[D]>> : never }[keyof T]
  : never;

type Prev10742 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10742<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10742 {
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

type ConfigPaths10742 = Paths10742<NestedConfig10742>;

interface HeavyProps10742 {
  config: DeepPartial10742<NestedConfig10742>;
  path?: ConfigPaths10742;
}

const HeavyComponent10742 = memo(function HeavyComponent10742({ config }: HeavyProps10742) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10742) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10742 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10742: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10742.displayName = 'HeavyComponent10742';
export default HeavyComponent10742;
