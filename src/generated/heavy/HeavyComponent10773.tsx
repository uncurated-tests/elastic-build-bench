'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10773<T> = T extends (infer U)[]
  ? DeepReadonlyArray10773<U>
  : T extends object
  ? DeepReadonlyObject10773<T>
  : T;

interface DeepReadonlyArray10773<T> extends ReadonlyArray<DeepReadonly10773<T>> {}

type DeepReadonlyObject10773<T> = {
  readonly [P in keyof T]: DeepReadonly10773<T[P]>;
};

type UnionToIntersection10773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10773<T> = UnionToIntersection10773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10773<T extends unknown[], V> = [...T, V];

type TuplifyUnion10773<T, L = LastOf10773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10773<TuplifyUnion10773<Exclude<T, L>>, L>;

type DeepPartial10773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10773<T[P]> }
  : T;

type Paths10773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10773<K, Paths10773<T[K], Prev10773[D]>> : never }[keyof T]
  : never;

type Prev10773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10773 {
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

type ConfigPaths10773 = Paths10773<NestedConfig10773>;

interface HeavyProps10773 {
  config: DeepPartial10773<NestedConfig10773>;
  path?: ConfigPaths10773;
}

const HeavyComponent10773 = memo(function HeavyComponent10773({ config }: HeavyProps10773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10773.displayName = 'HeavyComponent10773';
export default HeavyComponent10773;
