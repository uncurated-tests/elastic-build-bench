'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10349<T> = T extends (infer U)[]
  ? DeepReadonlyArray10349<U>
  : T extends object
  ? DeepReadonlyObject10349<T>
  : T;

interface DeepReadonlyArray10349<T> extends ReadonlyArray<DeepReadonly10349<T>> {}

type DeepReadonlyObject10349<T> = {
  readonly [P in keyof T]: DeepReadonly10349<T[P]>;
};

type UnionToIntersection10349<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10349<T> = UnionToIntersection10349<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10349<T extends unknown[], V> = [...T, V];

type TuplifyUnion10349<T, L = LastOf10349<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10349<TuplifyUnion10349<Exclude<T, L>>, L>;

type DeepPartial10349<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10349<T[P]> }
  : T;

type Paths10349<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10349<K, Paths10349<T[K], Prev10349[D]>> : never }[keyof T]
  : never;

type Prev10349 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10349<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10349 {
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

type ConfigPaths10349 = Paths10349<NestedConfig10349>;

interface HeavyProps10349 {
  config: DeepPartial10349<NestedConfig10349>;
  path?: ConfigPaths10349;
}

const HeavyComponent10349 = memo(function HeavyComponent10349({ config }: HeavyProps10349) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10349) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10349 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10349: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10349.displayName = 'HeavyComponent10349';
export default HeavyComponent10349;
