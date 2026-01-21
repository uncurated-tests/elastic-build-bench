'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10367<T> = T extends (infer U)[]
  ? DeepReadonlyArray10367<U>
  : T extends object
  ? DeepReadonlyObject10367<T>
  : T;

interface DeepReadonlyArray10367<T> extends ReadonlyArray<DeepReadonly10367<T>> {}

type DeepReadonlyObject10367<T> = {
  readonly [P in keyof T]: DeepReadonly10367<T[P]>;
};

type UnionToIntersection10367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10367<T> = UnionToIntersection10367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10367<T extends unknown[], V> = [...T, V];

type TuplifyUnion10367<T, L = LastOf10367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10367<TuplifyUnion10367<Exclude<T, L>>, L>;

type DeepPartial10367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10367<T[P]> }
  : T;

type Paths10367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10367<K, Paths10367<T[K], Prev10367[D]>> : never }[keyof T]
  : never;

type Prev10367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10367 {
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

type ConfigPaths10367 = Paths10367<NestedConfig10367>;

interface HeavyProps10367 {
  config: DeepPartial10367<NestedConfig10367>;
  path?: ConfigPaths10367;
}

const HeavyComponent10367 = memo(function HeavyComponent10367({ config }: HeavyProps10367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10367.displayName = 'HeavyComponent10367';
export default HeavyComponent10367;
