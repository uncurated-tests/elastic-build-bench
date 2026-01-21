'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10881<T> = T extends (infer U)[]
  ? DeepReadonlyArray10881<U>
  : T extends object
  ? DeepReadonlyObject10881<T>
  : T;

interface DeepReadonlyArray10881<T> extends ReadonlyArray<DeepReadonly10881<T>> {}

type DeepReadonlyObject10881<T> = {
  readonly [P in keyof T]: DeepReadonly10881<T[P]>;
};

type UnionToIntersection10881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10881<T> = UnionToIntersection10881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10881<T extends unknown[], V> = [...T, V];

type TuplifyUnion10881<T, L = LastOf10881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10881<TuplifyUnion10881<Exclude<T, L>>, L>;

type DeepPartial10881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10881<T[P]> }
  : T;

type Paths10881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10881<K, Paths10881<T[K], Prev10881[D]>> : never }[keyof T]
  : never;

type Prev10881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10881 {
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

type ConfigPaths10881 = Paths10881<NestedConfig10881>;

interface HeavyProps10881 {
  config: DeepPartial10881<NestedConfig10881>;
  path?: ConfigPaths10881;
}

const HeavyComponent10881 = memo(function HeavyComponent10881({ config }: HeavyProps10881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10881.displayName = 'HeavyComponent10881';
export default HeavyComponent10881;
