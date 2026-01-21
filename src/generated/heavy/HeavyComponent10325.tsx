'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10325<T> = T extends (infer U)[]
  ? DeepReadonlyArray10325<U>
  : T extends object
  ? DeepReadonlyObject10325<T>
  : T;

interface DeepReadonlyArray10325<T> extends ReadonlyArray<DeepReadonly10325<T>> {}

type DeepReadonlyObject10325<T> = {
  readonly [P in keyof T]: DeepReadonly10325<T[P]>;
};

type UnionToIntersection10325<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10325<T> = UnionToIntersection10325<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10325<T extends unknown[], V> = [...T, V];

type TuplifyUnion10325<T, L = LastOf10325<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10325<TuplifyUnion10325<Exclude<T, L>>, L>;

type DeepPartial10325<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10325<T[P]> }
  : T;

type Paths10325<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10325<K, Paths10325<T[K], Prev10325[D]>> : never }[keyof T]
  : never;

type Prev10325 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10325<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10325 {
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

type ConfigPaths10325 = Paths10325<NestedConfig10325>;

interface HeavyProps10325 {
  config: DeepPartial10325<NestedConfig10325>;
  path?: ConfigPaths10325;
}

const HeavyComponent10325 = memo(function HeavyComponent10325({ config }: HeavyProps10325) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10325) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10325 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10325: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10325.displayName = 'HeavyComponent10325';
export default HeavyComponent10325;
