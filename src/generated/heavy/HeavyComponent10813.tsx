'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10813<T> = T extends (infer U)[]
  ? DeepReadonlyArray10813<U>
  : T extends object
  ? DeepReadonlyObject10813<T>
  : T;

interface DeepReadonlyArray10813<T> extends ReadonlyArray<DeepReadonly10813<T>> {}

type DeepReadonlyObject10813<T> = {
  readonly [P in keyof T]: DeepReadonly10813<T[P]>;
};

type UnionToIntersection10813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10813<T> = UnionToIntersection10813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10813<T extends unknown[], V> = [...T, V];

type TuplifyUnion10813<T, L = LastOf10813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10813<TuplifyUnion10813<Exclude<T, L>>, L>;

type DeepPartial10813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10813<T[P]> }
  : T;

type Paths10813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10813<K, Paths10813<T[K], Prev10813[D]>> : never }[keyof T]
  : never;

type Prev10813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10813 {
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

type ConfigPaths10813 = Paths10813<NestedConfig10813>;

interface HeavyProps10813 {
  config: DeepPartial10813<NestedConfig10813>;
  path?: ConfigPaths10813;
}

const HeavyComponent10813 = memo(function HeavyComponent10813({ config }: HeavyProps10813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10813.displayName = 'HeavyComponent10813';
export default HeavyComponent10813;
