'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10121<T> = T extends (infer U)[]
  ? DeepReadonlyArray10121<U>
  : T extends object
  ? DeepReadonlyObject10121<T>
  : T;

interface DeepReadonlyArray10121<T> extends ReadonlyArray<DeepReadonly10121<T>> {}

type DeepReadonlyObject10121<T> = {
  readonly [P in keyof T]: DeepReadonly10121<T[P]>;
};

type UnionToIntersection10121<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10121<T> = UnionToIntersection10121<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10121<T extends unknown[], V> = [...T, V];

type TuplifyUnion10121<T, L = LastOf10121<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10121<TuplifyUnion10121<Exclude<T, L>>, L>;

type DeepPartial10121<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10121<T[P]> }
  : T;

type Paths10121<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10121<K, Paths10121<T[K], Prev10121[D]>> : never }[keyof T]
  : never;

type Prev10121 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10121<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10121 {
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

type ConfigPaths10121 = Paths10121<NestedConfig10121>;

interface HeavyProps10121 {
  config: DeepPartial10121<NestedConfig10121>;
  path?: ConfigPaths10121;
}

const HeavyComponent10121 = memo(function HeavyComponent10121({ config }: HeavyProps10121) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10121) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10121 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10121: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10121.displayName = 'HeavyComponent10121';
export default HeavyComponent10121;
