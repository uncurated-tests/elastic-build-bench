'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10142<T> = T extends (infer U)[]
  ? DeepReadonlyArray10142<U>
  : T extends object
  ? DeepReadonlyObject10142<T>
  : T;

interface DeepReadonlyArray10142<T> extends ReadonlyArray<DeepReadonly10142<T>> {}

type DeepReadonlyObject10142<T> = {
  readonly [P in keyof T]: DeepReadonly10142<T[P]>;
};

type UnionToIntersection10142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10142<T> = UnionToIntersection10142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10142<T extends unknown[], V> = [...T, V];

type TuplifyUnion10142<T, L = LastOf10142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10142<TuplifyUnion10142<Exclude<T, L>>, L>;

type DeepPartial10142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10142<T[P]> }
  : T;

type Paths10142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10142<K, Paths10142<T[K], Prev10142[D]>> : never }[keyof T]
  : never;

type Prev10142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10142 {
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

type ConfigPaths10142 = Paths10142<NestedConfig10142>;

interface HeavyProps10142 {
  config: DeepPartial10142<NestedConfig10142>;
  path?: ConfigPaths10142;
}

const HeavyComponent10142 = memo(function HeavyComponent10142({ config }: HeavyProps10142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10142.displayName = 'HeavyComponent10142';
export default HeavyComponent10142;
