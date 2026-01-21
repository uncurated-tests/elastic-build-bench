'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10543<T> = T extends (infer U)[]
  ? DeepReadonlyArray10543<U>
  : T extends object
  ? DeepReadonlyObject10543<T>
  : T;

interface DeepReadonlyArray10543<T> extends ReadonlyArray<DeepReadonly10543<T>> {}

type DeepReadonlyObject10543<T> = {
  readonly [P in keyof T]: DeepReadonly10543<T[P]>;
};

type UnionToIntersection10543<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10543<T> = UnionToIntersection10543<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10543<T extends unknown[], V> = [...T, V];

type TuplifyUnion10543<T, L = LastOf10543<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10543<TuplifyUnion10543<Exclude<T, L>>, L>;

type DeepPartial10543<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10543<T[P]> }
  : T;

type Paths10543<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10543<K, Paths10543<T[K], Prev10543[D]>> : never }[keyof T]
  : never;

type Prev10543 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10543<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10543 {
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

type ConfigPaths10543 = Paths10543<NestedConfig10543>;

interface HeavyProps10543 {
  config: DeepPartial10543<NestedConfig10543>;
  path?: ConfigPaths10543;
}

const HeavyComponent10543 = memo(function HeavyComponent10543({ config }: HeavyProps10543) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10543) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10543 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10543: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10543.displayName = 'HeavyComponent10543';
export default HeavyComponent10543;
