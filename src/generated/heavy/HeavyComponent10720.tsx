'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10720<T> = T extends (infer U)[]
  ? DeepReadonlyArray10720<U>
  : T extends object
  ? DeepReadonlyObject10720<T>
  : T;

interface DeepReadonlyArray10720<T> extends ReadonlyArray<DeepReadonly10720<T>> {}

type DeepReadonlyObject10720<T> = {
  readonly [P in keyof T]: DeepReadonly10720<T[P]>;
};

type UnionToIntersection10720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10720<T> = UnionToIntersection10720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10720<T extends unknown[], V> = [...T, V];

type TuplifyUnion10720<T, L = LastOf10720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10720<TuplifyUnion10720<Exclude<T, L>>, L>;

type DeepPartial10720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10720<T[P]> }
  : T;

type Paths10720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10720<K, Paths10720<T[K], Prev10720[D]>> : never }[keyof T]
  : never;

type Prev10720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10720 {
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

type ConfigPaths10720 = Paths10720<NestedConfig10720>;

interface HeavyProps10720 {
  config: DeepPartial10720<NestedConfig10720>;
  path?: ConfigPaths10720;
}

const HeavyComponent10720 = memo(function HeavyComponent10720({ config }: HeavyProps10720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10720.displayName = 'HeavyComponent10720';
export default HeavyComponent10720;
