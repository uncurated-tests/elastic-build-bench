'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10970<T> = T extends (infer U)[]
  ? DeepReadonlyArray10970<U>
  : T extends object
  ? DeepReadonlyObject10970<T>
  : T;

interface DeepReadonlyArray10970<T> extends ReadonlyArray<DeepReadonly10970<T>> {}

type DeepReadonlyObject10970<T> = {
  readonly [P in keyof T]: DeepReadonly10970<T[P]>;
};

type UnionToIntersection10970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10970<T> = UnionToIntersection10970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10970<T extends unknown[], V> = [...T, V];

type TuplifyUnion10970<T, L = LastOf10970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10970<TuplifyUnion10970<Exclude<T, L>>, L>;

type DeepPartial10970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10970<T[P]> }
  : T;

type Paths10970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10970<K, Paths10970<T[K], Prev10970[D]>> : never }[keyof T]
  : never;

type Prev10970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10970 {
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

type ConfigPaths10970 = Paths10970<NestedConfig10970>;

interface HeavyProps10970 {
  config: DeepPartial10970<NestedConfig10970>;
  path?: ConfigPaths10970;
}

const HeavyComponent10970 = memo(function HeavyComponent10970({ config }: HeavyProps10970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10970.displayName = 'HeavyComponent10970';
export default HeavyComponent10970;
