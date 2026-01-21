'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10055<T> = T extends (infer U)[]
  ? DeepReadonlyArray10055<U>
  : T extends object
  ? DeepReadonlyObject10055<T>
  : T;

interface DeepReadonlyArray10055<T> extends ReadonlyArray<DeepReadonly10055<T>> {}

type DeepReadonlyObject10055<T> = {
  readonly [P in keyof T]: DeepReadonly10055<T[P]>;
};

type UnionToIntersection10055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10055<T> = UnionToIntersection10055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10055<T extends unknown[], V> = [...T, V];

type TuplifyUnion10055<T, L = LastOf10055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10055<TuplifyUnion10055<Exclude<T, L>>, L>;

type DeepPartial10055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10055<T[P]> }
  : T;

type Paths10055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10055<K, Paths10055<T[K], Prev10055[D]>> : never }[keyof T]
  : never;

type Prev10055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10055 {
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

type ConfigPaths10055 = Paths10055<NestedConfig10055>;

interface HeavyProps10055 {
  config: DeepPartial10055<NestedConfig10055>;
  path?: ConfigPaths10055;
}

const HeavyComponent10055 = memo(function HeavyComponent10055({ config }: HeavyProps10055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10055.displayName = 'HeavyComponent10055';
export default HeavyComponent10055;
