'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10944<T> = T extends (infer U)[]
  ? DeepReadonlyArray10944<U>
  : T extends object
  ? DeepReadonlyObject10944<T>
  : T;

interface DeepReadonlyArray10944<T> extends ReadonlyArray<DeepReadonly10944<T>> {}

type DeepReadonlyObject10944<T> = {
  readonly [P in keyof T]: DeepReadonly10944<T[P]>;
};

type UnionToIntersection10944<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10944<T> = UnionToIntersection10944<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10944<T extends unknown[], V> = [...T, V];

type TuplifyUnion10944<T, L = LastOf10944<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10944<TuplifyUnion10944<Exclude<T, L>>, L>;

type DeepPartial10944<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10944<T[P]> }
  : T;

type Paths10944<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10944<K, Paths10944<T[K], Prev10944[D]>> : never }[keyof T]
  : never;

type Prev10944 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10944<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10944 {
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

type ConfigPaths10944 = Paths10944<NestedConfig10944>;

interface HeavyProps10944 {
  config: DeepPartial10944<NestedConfig10944>;
  path?: ConfigPaths10944;
}

const HeavyComponent10944 = memo(function HeavyComponent10944({ config }: HeavyProps10944) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10944) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10944 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10944: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10944.displayName = 'HeavyComponent10944';
export default HeavyComponent10944;
