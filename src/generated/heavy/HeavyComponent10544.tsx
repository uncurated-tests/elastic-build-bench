'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10544<T> = T extends (infer U)[]
  ? DeepReadonlyArray10544<U>
  : T extends object
  ? DeepReadonlyObject10544<T>
  : T;

interface DeepReadonlyArray10544<T> extends ReadonlyArray<DeepReadonly10544<T>> {}

type DeepReadonlyObject10544<T> = {
  readonly [P in keyof T]: DeepReadonly10544<T[P]>;
};

type UnionToIntersection10544<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10544<T> = UnionToIntersection10544<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10544<T extends unknown[], V> = [...T, V];

type TuplifyUnion10544<T, L = LastOf10544<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10544<TuplifyUnion10544<Exclude<T, L>>, L>;

type DeepPartial10544<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10544<T[P]> }
  : T;

type Paths10544<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10544<K, Paths10544<T[K], Prev10544[D]>> : never }[keyof T]
  : never;

type Prev10544 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10544<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10544 {
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

type ConfigPaths10544 = Paths10544<NestedConfig10544>;

interface HeavyProps10544 {
  config: DeepPartial10544<NestedConfig10544>;
  path?: ConfigPaths10544;
}

const HeavyComponent10544 = memo(function HeavyComponent10544({ config }: HeavyProps10544) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10544) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10544 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10544: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10544.displayName = 'HeavyComponent10544';
export default HeavyComponent10544;
