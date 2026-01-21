'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10479<T> = T extends (infer U)[]
  ? DeepReadonlyArray10479<U>
  : T extends object
  ? DeepReadonlyObject10479<T>
  : T;

interface DeepReadonlyArray10479<T> extends ReadonlyArray<DeepReadonly10479<T>> {}

type DeepReadonlyObject10479<T> = {
  readonly [P in keyof T]: DeepReadonly10479<T[P]>;
};

type UnionToIntersection10479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10479<T> = UnionToIntersection10479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10479<T extends unknown[], V> = [...T, V];

type TuplifyUnion10479<T, L = LastOf10479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10479<TuplifyUnion10479<Exclude<T, L>>, L>;

type DeepPartial10479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10479<T[P]> }
  : T;

type Paths10479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10479<K, Paths10479<T[K], Prev10479[D]>> : never }[keyof T]
  : never;

type Prev10479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10479 {
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

type ConfigPaths10479 = Paths10479<NestedConfig10479>;

interface HeavyProps10479 {
  config: DeepPartial10479<NestedConfig10479>;
  path?: ConfigPaths10479;
}

const HeavyComponent10479 = memo(function HeavyComponent10479({ config }: HeavyProps10479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10479.displayName = 'HeavyComponent10479';
export default HeavyComponent10479;
