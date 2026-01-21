'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10177<T> = T extends (infer U)[]
  ? DeepReadonlyArray10177<U>
  : T extends object
  ? DeepReadonlyObject10177<T>
  : T;

interface DeepReadonlyArray10177<T> extends ReadonlyArray<DeepReadonly10177<T>> {}

type DeepReadonlyObject10177<T> = {
  readonly [P in keyof T]: DeepReadonly10177<T[P]>;
};

type UnionToIntersection10177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10177<T> = UnionToIntersection10177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10177<T extends unknown[], V> = [...T, V];

type TuplifyUnion10177<T, L = LastOf10177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10177<TuplifyUnion10177<Exclude<T, L>>, L>;

type DeepPartial10177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10177<T[P]> }
  : T;

type Paths10177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10177<K, Paths10177<T[K], Prev10177[D]>> : never }[keyof T]
  : never;

type Prev10177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10177 {
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

type ConfigPaths10177 = Paths10177<NestedConfig10177>;

interface HeavyProps10177 {
  config: DeepPartial10177<NestedConfig10177>;
  path?: ConfigPaths10177;
}

const HeavyComponent10177 = memo(function HeavyComponent10177({ config }: HeavyProps10177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10177.displayName = 'HeavyComponent10177';
export default HeavyComponent10177;
