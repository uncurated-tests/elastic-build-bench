'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10011<T> = T extends (infer U)[]
  ? DeepReadonlyArray10011<U>
  : T extends object
  ? DeepReadonlyObject10011<T>
  : T;

interface DeepReadonlyArray10011<T> extends ReadonlyArray<DeepReadonly10011<T>> {}

type DeepReadonlyObject10011<T> = {
  readonly [P in keyof T]: DeepReadonly10011<T[P]>;
};

type UnionToIntersection10011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10011<T> = UnionToIntersection10011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10011<T extends unknown[], V> = [...T, V];

type TuplifyUnion10011<T, L = LastOf10011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10011<TuplifyUnion10011<Exclude<T, L>>, L>;

type DeepPartial10011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10011<T[P]> }
  : T;

type Paths10011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10011<K, Paths10011<T[K], Prev10011[D]>> : never }[keyof T]
  : never;

type Prev10011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10011 {
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

type ConfigPaths10011 = Paths10011<NestedConfig10011>;

interface HeavyProps10011 {
  config: DeepPartial10011<NestedConfig10011>;
  path?: ConfigPaths10011;
}

const HeavyComponent10011 = memo(function HeavyComponent10011({ config }: HeavyProps10011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10011.displayName = 'HeavyComponent10011';
export default HeavyComponent10011;
