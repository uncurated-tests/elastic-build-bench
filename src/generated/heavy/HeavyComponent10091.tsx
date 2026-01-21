'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10091<T> = T extends (infer U)[]
  ? DeepReadonlyArray10091<U>
  : T extends object
  ? DeepReadonlyObject10091<T>
  : T;

interface DeepReadonlyArray10091<T> extends ReadonlyArray<DeepReadonly10091<T>> {}

type DeepReadonlyObject10091<T> = {
  readonly [P in keyof T]: DeepReadonly10091<T[P]>;
};

type UnionToIntersection10091<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10091<T> = UnionToIntersection10091<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10091<T extends unknown[], V> = [...T, V];

type TuplifyUnion10091<T, L = LastOf10091<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10091<TuplifyUnion10091<Exclude<T, L>>, L>;

type DeepPartial10091<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10091<T[P]> }
  : T;

type Paths10091<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10091<K, Paths10091<T[K], Prev10091[D]>> : never }[keyof T]
  : never;

type Prev10091 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10091<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10091 {
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

type ConfigPaths10091 = Paths10091<NestedConfig10091>;

interface HeavyProps10091 {
  config: DeepPartial10091<NestedConfig10091>;
  path?: ConfigPaths10091;
}

const HeavyComponent10091 = memo(function HeavyComponent10091({ config }: HeavyProps10091) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10091) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10091 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10091: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10091.displayName = 'HeavyComponent10091';
export default HeavyComponent10091;
