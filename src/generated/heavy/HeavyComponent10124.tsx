'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10124<T> = T extends (infer U)[]
  ? DeepReadonlyArray10124<U>
  : T extends object
  ? DeepReadonlyObject10124<T>
  : T;

interface DeepReadonlyArray10124<T> extends ReadonlyArray<DeepReadonly10124<T>> {}

type DeepReadonlyObject10124<T> = {
  readonly [P in keyof T]: DeepReadonly10124<T[P]>;
};

type UnionToIntersection10124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10124<T> = UnionToIntersection10124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10124<T extends unknown[], V> = [...T, V];

type TuplifyUnion10124<T, L = LastOf10124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10124<TuplifyUnion10124<Exclude<T, L>>, L>;

type DeepPartial10124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10124<T[P]> }
  : T;

type Paths10124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10124<K, Paths10124<T[K], Prev10124[D]>> : never }[keyof T]
  : never;

type Prev10124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10124 {
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

type ConfigPaths10124 = Paths10124<NestedConfig10124>;

interface HeavyProps10124 {
  config: DeepPartial10124<NestedConfig10124>;
  path?: ConfigPaths10124;
}

const HeavyComponent10124 = memo(function HeavyComponent10124({ config }: HeavyProps10124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10124.displayName = 'HeavyComponent10124';
export default HeavyComponent10124;
