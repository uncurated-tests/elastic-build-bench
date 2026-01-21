'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10373<T> = T extends (infer U)[]
  ? DeepReadonlyArray10373<U>
  : T extends object
  ? DeepReadonlyObject10373<T>
  : T;

interface DeepReadonlyArray10373<T> extends ReadonlyArray<DeepReadonly10373<T>> {}

type DeepReadonlyObject10373<T> = {
  readonly [P in keyof T]: DeepReadonly10373<T[P]>;
};

type UnionToIntersection10373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10373<T> = UnionToIntersection10373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10373<T extends unknown[], V> = [...T, V];

type TuplifyUnion10373<T, L = LastOf10373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10373<TuplifyUnion10373<Exclude<T, L>>, L>;

type DeepPartial10373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10373<T[P]> }
  : T;

type Paths10373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10373<K, Paths10373<T[K], Prev10373[D]>> : never }[keyof T]
  : never;

type Prev10373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10373 {
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

type ConfigPaths10373 = Paths10373<NestedConfig10373>;

interface HeavyProps10373 {
  config: DeepPartial10373<NestedConfig10373>;
  path?: ConfigPaths10373;
}

const HeavyComponent10373 = memo(function HeavyComponent10373({ config }: HeavyProps10373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10373.displayName = 'HeavyComponent10373';
export default HeavyComponent10373;
