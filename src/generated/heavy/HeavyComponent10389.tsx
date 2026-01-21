'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10389<T> = T extends (infer U)[]
  ? DeepReadonlyArray10389<U>
  : T extends object
  ? DeepReadonlyObject10389<T>
  : T;

interface DeepReadonlyArray10389<T> extends ReadonlyArray<DeepReadonly10389<T>> {}

type DeepReadonlyObject10389<T> = {
  readonly [P in keyof T]: DeepReadonly10389<T[P]>;
};

type UnionToIntersection10389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10389<T> = UnionToIntersection10389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10389<T extends unknown[], V> = [...T, V];

type TuplifyUnion10389<T, L = LastOf10389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10389<TuplifyUnion10389<Exclude<T, L>>, L>;

type DeepPartial10389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10389<T[P]> }
  : T;

type Paths10389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10389<K, Paths10389<T[K], Prev10389[D]>> : never }[keyof T]
  : never;

type Prev10389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10389 {
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

type ConfigPaths10389 = Paths10389<NestedConfig10389>;

interface HeavyProps10389 {
  config: DeepPartial10389<NestedConfig10389>;
  path?: ConfigPaths10389;
}

const HeavyComponent10389 = memo(function HeavyComponent10389({ config }: HeavyProps10389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10389.displayName = 'HeavyComponent10389';
export default HeavyComponent10389;
