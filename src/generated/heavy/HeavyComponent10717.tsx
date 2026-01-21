'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10717<T> = T extends (infer U)[]
  ? DeepReadonlyArray10717<U>
  : T extends object
  ? DeepReadonlyObject10717<T>
  : T;

interface DeepReadonlyArray10717<T> extends ReadonlyArray<DeepReadonly10717<T>> {}

type DeepReadonlyObject10717<T> = {
  readonly [P in keyof T]: DeepReadonly10717<T[P]>;
};

type UnionToIntersection10717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10717<T> = UnionToIntersection10717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10717<T extends unknown[], V> = [...T, V];

type TuplifyUnion10717<T, L = LastOf10717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10717<TuplifyUnion10717<Exclude<T, L>>, L>;

type DeepPartial10717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10717<T[P]> }
  : T;

type Paths10717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10717<K, Paths10717<T[K], Prev10717[D]>> : never }[keyof T]
  : never;

type Prev10717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10717 {
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

type ConfigPaths10717 = Paths10717<NestedConfig10717>;

interface HeavyProps10717 {
  config: DeepPartial10717<NestedConfig10717>;
  path?: ConfigPaths10717;
}

const HeavyComponent10717 = memo(function HeavyComponent10717({ config }: HeavyProps10717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10717.displayName = 'HeavyComponent10717';
export default HeavyComponent10717;
