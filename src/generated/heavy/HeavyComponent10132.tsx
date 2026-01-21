'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10132<T> = T extends (infer U)[]
  ? DeepReadonlyArray10132<U>
  : T extends object
  ? DeepReadonlyObject10132<T>
  : T;

interface DeepReadonlyArray10132<T> extends ReadonlyArray<DeepReadonly10132<T>> {}

type DeepReadonlyObject10132<T> = {
  readonly [P in keyof T]: DeepReadonly10132<T[P]>;
};

type UnionToIntersection10132<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10132<T> = UnionToIntersection10132<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10132<T extends unknown[], V> = [...T, V];

type TuplifyUnion10132<T, L = LastOf10132<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10132<TuplifyUnion10132<Exclude<T, L>>, L>;

type DeepPartial10132<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10132<T[P]> }
  : T;

type Paths10132<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10132<K, Paths10132<T[K], Prev10132[D]>> : never }[keyof T]
  : never;

type Prev10132 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10132<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10132 {
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

type ConfigPaths10132 = Paths10132<NestedConfig10132>;

interface HeavyProps10132 {
  config: DeepPartial10132<NestedConfig10132>;
  path?: ConfigPaths10132;
}

const HeavyComponent10132 = memo(function HeavyComponent10132({ config }: HeavyProps10132) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10132) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10132 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10132: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10132.displayName = 'HeavyComponent10132';
export default HeavyComponent10132;
