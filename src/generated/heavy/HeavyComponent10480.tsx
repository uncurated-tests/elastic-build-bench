'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10480<T> = T extends (infer U)[]
  ? DeepReadonlyArray10480<U>
  : T extends object
  ? DeepReadonlyObject10480<T>
  : T;

interface DeepReadonlyArray10480<T> extends ReadonlyArray<DeepReadonly10480<T>> {}

type DeepReadonlyObject10480<T> = {
  readonly [P in keyof T]: DeepReadonly10480<T[P]>;
};

type UnionToIntersection10480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10480<T> = UnionToIntersection10480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10480<T extends unknown[], V> = [...T, V];

type TuplifyUnion10480<T, L = LastOf10480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10480<TuplifyUnion10480<Exclude<T, L>>, L>;

type DeepPartial10480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10480<T[P]> }
  : T;

type Paths10480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10480<K, Paths10480<T[K], Prev10480[D]>> : never }[keyof T]
  : never;

type Prev10480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10480 {
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

type ConfigPaths10480 = Paths10480<NestedConfig10480>;

interface HeavyProps10480 {
  config: DeepPartial10480<NestedConfig10480>;
  path?: ConfigPaths10480;
}

const HeavyComponent10480 = memo(function HeavyComponent10480({ config }: HeavyProps10480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10480.displayName = 'HeavyComponent10480';
export default HeavyComponent10480;
