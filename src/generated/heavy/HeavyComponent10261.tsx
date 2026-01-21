'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10261<T> = T extends (infer U)[]
  ? DeepReadonlyArray10261<U>
  : T extends object
  ? DeepReadonlyObject10261<T>
  : T;

interface DeepReadonlyArray10261<T> extends ReadonlyArray<DeepReadonly10261<T>> {}

type DeepReadonlyObject10261<T> = {
  readonly [P in keyof T]: DeepReadonly10261<T[P]>;
};

type UnionToIntersection10261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10261<T> = UnionToIntersection10261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10261<T extends unknown[], V> = [...T, V];

type TuplifyUnion10261<T, L = LastOf10261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10261<TuplifyUnion10261<Exclude<T, L>>, L>;

type DeepPartial10261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10261<T[P]> }
  : T;

type Paths10261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10261<K, Paths10261<T[K], Prev10261[D]>> : never }[keyof T]
  : never;

type Prev10261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10261 {
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

type ConfigPaths10261 = Paths10261<NestedConfig10261>;

interface HeavyProps10261 {
  config: DeepPartial10261<NestedConfig10261>;
  path?: ConfigPaths10261;
}

const HeavyComponent10261 = memo(function HeavyComponent10261({ config }: HeavyProps10261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10261.displayName = 'HeavyComponent10261';
export default HeavyComponent10261;
