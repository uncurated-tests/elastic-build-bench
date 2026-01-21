'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10207<T> = T extends (infer U)[]
  ? DeepReadonlyArray10207<U>
  : T extends object
  ? DeepReadonlyObject10207<T>
  : T;

interface DeepReadonlyArray10207<T> extends ReadonlyArray<DeepReadonly10207<T>> {}

type DeepReadonlyObject10207<T> = {
  readonly [P in keyof T]: DeepReadonly10207<T[P]>;
};

type UnionToIntersection10207<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10207<T> = UnionToIntersection10207<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10207<T extends unknown[], V> = [...T, V];

type TuplifyUnion10207<T, L = LastOf10207<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10207<TuplifyUnion10207<Exclude<T, L>>, L>;

type DeepPartial10207<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10207<T[P]> }
  : T;

type Paths10207<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10207<K, Paths10207<T[K], Prev10207[D]>> : never }[keyof T]
  : never;

type Prev10207 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10207<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10207 {
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

type ConfigPaths10207 = Paths10207<NestedConfig10207>;

interface HeavyProps10207 {
  config: DeepPartial10207<NestedConfig10207>;
  path?: ConfigPaths10207;
}

const HeavyComponent10207 = memo(function HeavyComponent10207({ config }: HeavyProps10207) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10207) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10207 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10207: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10207.displayName = 'HeavyComponent10207';
export default HeavyComponent10207;
