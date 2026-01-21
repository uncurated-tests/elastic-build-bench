'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10388<T> = T extends (infer U)[]
  ? DeepReadonlyArray10388<U>
  : T extends object
  ? DeepReadonlyObject10388<T>
  : T;

interface DeepReadonlyArray10388<T> extends ReadonlyArray<DeepReadonly10388<T>> {}

type DeepReadonlyObject10388<T> = {
  readonly [P in keyof T]: DeepReadonly10388<T[P]>;
};

type UnionToIntersection10388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10388<T> = UnionToIntersection10388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10388<T extends unknown[], V> = [...T, V];

type TuplifyUnion10388<T, L = LastOf10388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10388<TuplifyUnion10388<Exclude<T, L>>, L>;

type DeepPartial10388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10388<T[P]> }
  : T;

type Paths10388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10388<K, Paths10388<T[K], Prev10388[D]>> : never }[keyof T]
  : never;

type Prev10388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10388 {
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

type ConfigPaths10388 = Paths10388<NestedConfig10388>;

interface HeavyProps10388 {
  config: DeepPartial10388<NestedConfig10388>;
  path?: ConfigPaths10388;
}

const HeavyComponent10388 = memo(function HeavyComponent10388({ config }: HeavyProps10388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10388.displayName = 'HeavyComponent10388';
export default HeavyComponent10388;
