'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10974<T> = T extends (infer U)[]
  ? DeepReadonlyArray10974<U>
  : T extends object
  ? DeepReadonlyObject10974<T>
  : T;

interface DeepReadonlyArray10974<T> extends ReadonlyArray<DeepReadonly10974<T>> {}

type DeepReadonlyObject10974<T> = {
  readonly [P in keyof T]: DeepReadonly10974<T[P]>;
};

type UnionToIntersection10974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10974<T> = UnionToIntersection10974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10974<T extends unknown[], V> = [...T, V];

type TuplifyUnion10974<T, L = LastOf10974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10974<TuplifyUnion10974<Exclude<T, L>>, L>;

type DeepPartial10974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10974<T[P]> }
  : T;

type Paths10974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10974<K, Paths10974<T[K], Prev10974[D]>> : never }[keyof T]
  : never;

type Prev10974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10974 {
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

type ConfigPaths10974 = Paths10974<NestedConfig10974>;

interface HeavyProps10974 {
  config: DeepPartial10974<NestedConfig10974>;
  path?: ConfigPaths10974;
}

const HeavyComponent10974 = memo(function HeavyComponent10974({ config }: HeavyProps10974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10974.displayName = 'HeavyComponent10974';
export default HeavyComponent10974;
