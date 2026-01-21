'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10156<T> = T extends (infer U)[]
  ? DeepReadonlyArray10156<U>
  : T extends object
  ? DeepReadonlyObject10156<T>
  : T;

interface DeepReadonlyArray10156<T> extends ReadonlyArray<DeepReadonly10156<T>> {}

type DeepReadonlyObject10156<T> = {
  readonly [P in keyof T]: DeepReadonly10156<T[P]>;
};

type UnionToIntersection10156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10156<T> = UnionToIntersection10156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10156<T extends unknown[], V> = [...T, V];

type TuplifyUnion10156<T, L = LastOf10156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10156<TuplifyUnion10156<Exclude<T, L>>, L>;

type DeepPartial10156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10156<T[P]> }
  : T;

type Paths10156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10156<K, Paths10156<T[K], Prev10156[D]>> : never }[keyof T]
  : never;

type Prev10156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10156 {
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

type ConfigPaths10156 = Paths10156<NestedConfig10156>;

interface HeavyProps10156 {
  config: DeepPartial10156<NestedConfig10156>;
  path?: ConfigPaths10156;
}

const HeavyComponent10156 = memo(function HeavyComponent10156({ config }: HeavyProps10156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10156.displayName = 'HeavyComponent10156';
export default HeavyComponent10156;
