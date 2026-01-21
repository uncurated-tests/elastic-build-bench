'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10411<T> = T extends (infer U)[]
  ? DeepReadonlyArray10411<U>
  : T extends object
  ? DeepReadonlyObject10411<T>
  : T;

interface DeepReadonlyArray10411<T> extends ReadonlyArray<DeepReadonly10411<T>> {}

type DeepReadonlyObject10411<T> = {
  readonly [P in keyof T]: DeepReadonly10411<T[P]>;
};

type UnionToIntersection10411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10411<T> = UnionToIntersection10411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10411<T extends unknown[], V> = [...T, V];

type TuplifyUnion10411<T, L = LastOf10411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10411<TuplifyUnion10411<Exclude<T, L>>, L>;

type DeepPartial10411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10411<T[P]> }
  : T;

type Paths10411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10411<K, Paths10411<T[K], Prev10411[D]>> : never }[keyof T]
  : never;

type Prev10411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10411 {
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

type ConfigPaths10411 = Paths10411<NestedConfig10411>;

interface HeavyProps10411 {
  config: DeepPartial10411<NestedConfig10411>;
  path?: ConfigPaths10411;
}

const HeavyComponent10411 = memo(function HeavyComponent10411({ config }: HeavyProps10411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10411.displayName = 'HeavyComponent10411';
export default HeavyComponent10411;
