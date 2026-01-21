'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10949<T> = T extends (infer U)[]
  ? DeepReadonlyArray10949<U>
  : T extends object
  ? DeepReadonlyObject10949<T>
  : T;

interface DeepReadonlyArray10949<T> extends ReadonlyArray<DeepReadonly10949<T>> {}

type DeepReadonlyObject10949<T> = {
  readonly [P in keyof T]: DeepReadonly10949<T[P]>;
};

type UnionToIntersection10949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10949<T> = UnionToIntersection10949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10949<T extends unknown[], V> = [...T, V];

type TuplifyUnion10949<T, L = LastOf10949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10949<TuplifyUnion10949<Exclude<T, L>>, L>;

type DeepPartial10949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10949<T[P]> }
  : T;

type Paths10949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10949<K, Paths10949<T[K], Prev10949[D]>> : never }[keyof T]
  : never;

type Prev10949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10949 {
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

type ConfigPaths10949 = Paths10949<NestedConfig10949>;

interface HeavyProps10949 {
  config: DeepPartial10949<NestedConfig10949>;
  path?: ConfigPaths10949;
}

const HeavyComponent10949 = memo(function HeavyComponent10949({ config }: HeavyProps10949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10949.displayName = 'HeavyComponent10949';
export default HeavyComponent10949;
