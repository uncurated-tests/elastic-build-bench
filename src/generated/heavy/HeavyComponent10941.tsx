'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10941<T> = T extends (infer U)[]
  ? DeepReadonlyArray10941<U>
  : T extends object
  ? DeepReadonlyObject10941<T>
  : T;

interface DeepReadonlyArray10941<T> extends ReadonlyArray<DeepReadonly10941<T>> {}

type DeepReadonlyObject10941<T> = {
  readonly [P in keyof T]: DeepReadonly10941<T[P]>;
};

type UnionToIntersection10941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10941<T> = UnionToIntersection10941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10941<T extends unknown[], V> = [...T, V];

type TuplifyUnion10941<T, L = LastOf10941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10941<TuplifyUnion10941<Exclude<T, L>>, L>;

type DeepPartial10941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10941<T[P]> }
  : T;

type Paths10941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10941<K, Paths10941<T[K], Prev10941[D]>> : never }[keyof T]
  : never;

type Prev10941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10941 {
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

type ConfigPaths10941 = Paths10941<NestedConfig10941>;

interface HeavyProps10941 {
  config: DeepPartial10941<NestedConfig10941>;
  path?: ConfigPaths10941;
}

const HeavyComponent10941 = memo(function HeavyComponent10941({ config }: HeavyProps10941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10941.displayName = 'HeavyComponent10941';
export default HeavyComponent10941;
