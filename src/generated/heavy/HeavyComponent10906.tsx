'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10906<T> = T extends (infer U)[]
  ? DeepReadonlyArray10906<U>
  : T extends object
  ? DeepReadonlyObject10906<T>
  : T;

interface DeepReadonlyArray10906<T> extends ReadonlyArray<DeepReadonly10906<T>> {}

type DeepReadonlyObject10906<T> = {
  readonly [P in keyof T]: DeepReadonly10906<T[P]>;
};

type UnionToIntersection10906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10906<T> = UnionToIntersection10906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10906<T extends unknown[], V> = [...T, V];

type TuplifyUnion10906<T, L = LastOf10906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10906<TuplifyUnion10906<Exclude<T, L>>, L>;

type DeepPartial10906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10906<T[P]> }
  : T;

type Paths10906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10906<K, Paths10906<T[K], Prev10906[D]>> : never }[keyof T]
  : never;

type Prev10906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10906 {
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

type ConfigPaths10906 = Paths10906<NestedConfig10906>;

interface HeavyProps10906 {
  config: DeepPartial10906<NestedConfig10906>;
  path?: ConfigPaths10906;
}

const HeavyComponent10906 = memo(function HeavyComponent10906({ config }: HeavyProps10906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10906.displayName = 'HeavyComponent10906';
export default HeavyComponent10906;
