'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10866<T> = T extends (infer U)[]
  ? DeepReadonlyArray10866<U>
  : T extends object
  ? DeepReadonlyObject10866<T>
  : T;

interface DeepReadonlyArray10866<T> extends ReadonlyArray<DeepReadonly10866<T>> {}

type DeepReadonlyObject10866<T> = {
  readonly [P in keyof T]: DeepReadonly10866<T[P]>;
};

type UnionToIntersection10866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10866<T> = UnionToIntersection10866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10866<T extends unknown[], V> = [...T, V];

type TuplifyUnion10866<T, L = LastOf10866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10866<TuplifyUnion10866<Exclude<T, L>>, L>;

type DeepPartial10866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10866<T[P]> }
  : T;

type Paths10866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10866<K, Paths10866<T[K], Prev10866[D]>> : never }[keyof T]
  : never;

type Prev10866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10866 {
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

type ConfigPaths10866 = Paths10866<NestedConfig10866>;

interface HeavyProps10866 {
  config: DeepPartial10866<NestedConfig10866>;
  path?: ConfigPaths10866;
}

const HeavyComponent10866 = memo(function HeavyComponent10866({ config }: HeavyProps10866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10866.displayName = 'HeavyComponent10866';
export default HeavyComponent10866;
