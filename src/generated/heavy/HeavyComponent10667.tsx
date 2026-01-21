'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10667<T> = T extends (infer U)[]
  ? DeepReadonlyArray10667<U>
  : T extends object
  ? DeepReadonlyObject10667<T>
  : T;

interface DeepReadonlyArray10667<T> extends ReadonlyArray<DeepReadonly10667<T>> {}

type DeepReadonlyObject10667<T> = {
  readonly [P in keyof T]: DeepReadonly10667<T[P]>;
};

type UnionToIntersection10667<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10667<T> = UnionToIntersection10667<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10667<T extends unknown[], V> = [...T, V];

type TuplifyUnion10667<T, L = LastOf10667<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10667<TuplifyUnion10667<Exclude<T, L>>, L>;

type DeepPartial10667<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10667<T[P]> }
  : T;

type Paths10667<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10667<K, Paths10667<T[K], Prev10667[D]>> : never }[keyof T]
  : never;

type Prev10667 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10667<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10667 {
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

type ConfigPaths10667 = Paths10667<NestedConfig10667>;

interface HeavyProps10667 {
  config: DeepPartial10667<NestedConfig10667>;
  path?: ConfigPaths10667;
}

const HeavyComponent10667 = memo(function HeavyComponent10667({ config }: HeavyProps10667) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10667) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10667 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10667: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10667.displayName = 'HeavyComponent10667';
export default HeavyComponent10667;
