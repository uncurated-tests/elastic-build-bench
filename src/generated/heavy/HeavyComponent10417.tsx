'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10417<T> = T extends (infer U)[]
  ? DeepReadonlyArray10417<U>
  : T extends object
  ? DeepReadonlyObject10417<T>
  : T;

interface DeepReadonlyArray10417<T> extends ReadonlyArray<DeepReadonly10417<T>> {}

type DeepReadonlyObject10417<T> = {
  readonly [P in keyof T]: DeepReadonly10417<T[P]>;
};

type UnionToIntersection10417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10417<T> = UnionToIntersection10417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10417<T extends unknown[], V> = [...T, V];

type TuplifyUnion10417<T, L = LastOf10417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10417<TuplifyUnion10417<Exclude<T, L>>, L>;

type DeepPartial10417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10417<T[P]> }
  : T;

type Paths10417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10417<K, Paths10417<T[K], Prev10417[D]>> : never }[keyof T]
  : never;

type Prev10417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10417 {
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

type ConfigPaths10417 = Paths10417<NestedConfig10417>;

interface HeavyProps10417 {
  config: DeepPartial10417<NestedConfig10417>;
  path?: ConfigPaths10417;
}

const HeavyComponent10417 = memo(function HeavyComponent10417({ config }: HeavyProps10417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10417.displayName = 'HeavyComponent10417';
export default HeavyComponent10417;
