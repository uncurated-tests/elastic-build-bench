'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10857<T> = T extends (infer U)[]
  ? DeepReadonlyArray10857<U>
  : T extends object
  ? DeepReadonlyObject10857<T>
  : T;

interface DeepReadonlyArray10857<T> extends ReadonlyArray<DeepReadonly10857<T>> {}

type DeepReadonlyObject10857<T> = {
  readonly [P in keyof T]: DeepReadonly10857<T[P]>;
};

type UnionToIntersection10857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10857<T> = UnionToIntersection10857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10857<T extends unknown[], V> = [...T, V];

type TuplifyUnion10857<T, L = LastOf10857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10857<TuplifyUnion10857<Exclude<T, L>>, L>;

type DeepPartial10857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10857<T[P]> }
  : T;

type Paths10857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10857<K, Paths10857<T[K], Prev10857[D]>> : never }[keyof T]
  : never;

type Prev10857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10857 {
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

type ConfigPaths10857 = Paths10857<NestedConfig10857>;

interface HeavyProps10857 {
  config: DeepPartial10857<NestedConfig10857>;
  path?: ConfigPaths10857;
}

const HeavyComponent10857 = memo(function HeavyComponent10857({ config }: HeavyProps10857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10857.displayName = 'HeavyComponent10857';
export default HeavyComponent10857;
