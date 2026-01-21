'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10996<T> = T extends (infer U)[]
  ? DeepReadonlyArray10996<U>
  : T extends object
  ? DeepReadonlyObject10996<T>
  : T;

interface DeepReadonlyArray10996<T> extends ReadonlyArray<DeepReadonly10996<T>> {}

type DeepReadonlyObject10996<T> = {
  readonly [P in keyof T]: DeepReadonly10996<T[P]>;
};

type UnionToIntersection10996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10996<T> = UnionToIntersection10996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10996<T extends unknown[], V> = [...T, V];

type TuplifyUnion10996<T, L = LastOf10996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10996<TuplifyUnion10996<Exclude<T, L>>, L>;

type DeepPartial10996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10996<T[P]> }
  : T;

type Paths10996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10996<K, Paths10996<T[K], Prev10996[D]>> : never }[keyof T]
  : never;

type Prev10996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10996 {
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

type ConfigPaths10996 = Paths10996<NestedConfig10996>;

interface HeavyProps10996 {
  config: DeepPartial10996<NestedConfig10996>;
  path?: ConfigPaths10996;
}

const HeavyComponent10996 = memo(function HeavyComponent10996({ config }: HeavyProps10996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10996.displayName = 'HeavyComponent10996';
export default HeavyComponent10996;
