'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10646<T> = T extends (infer U)[]
  ? DeepReadonlyArray10646<U>
  : T extends object
  ? DeepReadonlyObject10646<T>
  : T;

interface DeepReadonlyArray10646<T> extends ReadonlyArray<DeepReadonly10646<T>> {}

type DeepReadonlyObject10646<T> = {
  readonly [P in keyof T]: DeepReadonly10646<T[P]>;
};

type UnionToIntersection10646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10646<T> = UnionToIntersection10646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10646<T extends unknown[], V> = [...T, V];

type TuplifyUnion10646<T, L = LastOf10646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10646<TuplifyUnion10646<Exclude<T, L>>, L>;

type DeepPartial10646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10646<T[P]> }
  : T;

type Paths10646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10646<K, Paths10646<T[K], Prev10646[D]>> : never }[keyof T]
  : never;

type Prev10646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10646 {
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

type ConfigPaths10646 = Paths10646<NestedConfig10646>;

interface HeavyProps10646 {
  config: DeepPartial10646<NestedConfig10646>;
  path?: ConfigPaths10646;
}

const HeavyComponent10646 = memo(function HeavyComponent10646({ config }: HeavyProps10646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10646.displayName = 'HeavyComponent10646';
export default HeavyComponent10646;
