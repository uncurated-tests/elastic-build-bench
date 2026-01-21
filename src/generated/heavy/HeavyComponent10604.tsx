'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10604<T> = T extends (infer U)[]
  ? DeepReadonlyArray10604<U>
  : T extends object
  ? DeepReadonlyObject10604<T>
  : T;

interface DeepReadonlyArray10604<T> extends ReadonlyArray<DeepReadonly10604<T>> {}

type DeepReadonlyObject10604<T> = {
  readonly [P in keyof T]: DeepReadonly10604<T[P]>;
};

type UnionToIntersection10604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10604<T> = UnionToIntersection10604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10604<T extends unknown[], V> = [...T, V];

type TuplifyUnion10604<T, L = LastOf10604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10604<TuplifyUnion10604<Exclude<T, L>>, L>;

type DeepPartial10604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10604<T[P]> }
  : T;

type Paths10604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10604<K, Paths10604<T[K], Prev10604[D]>> : never }[keyof T]
  : never;

type Prev10604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10604 {
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

type ConfigPaths10604 = Paths10604<NestedConfig10604>;

interface HeavyProps10604 {
  config: DeepPartial10604<NestedConfig10604>;
  path?: ConfigPaths10604;
}

const HeavyComponent10604 = memo(function HeavyComponent10604({ config }: HeavyProps10604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10604.displayName = 'HeavyComponent10604';
export default HeavyComponent10604;
