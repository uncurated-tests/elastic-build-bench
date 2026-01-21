'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10260<T> = T extends (infer U)[]
  ? DeepReadonlyArray10260<U>
  : T extends object
  ? DeepReadonlyObject10260<T>
  : T;

interface DeepReadonlyArray10260<T> extends ReadonlyArray<DeepReadonly10260<T>> {}

type DeepReadonlyObject10260<T> = {
  readonly [P in keyof T]: DeepReadonly10260<T[P]>;
};

type UnionToIntersection10260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10260<T> = UnionToIntersection10260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10260<T extends unknown[], V> = [...T, V];

type TuplifyUnion10260<T, L = LastOf10260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10260<TuplifyUnion10260<Exclude<T, L>>, L>;

type DeepPartial10260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10260<T[P]> }
  : T;

type Paths10260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10260<K, Paths10260<T[K], Prev10260[D]>> : never }[keyof T]
  : never;

type Prev10260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10260 {
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

type ConfigPaths10260 = Paths10260<NestedConfig10260>;

interface HeavyProps10260 {
  config: DeepPartial10260<NestedConfig10260>;
  path?: ConfigPaths10260;
}

const HeavyComponent10260 = memo(function HeavyComponent10260({ config }: HeavyProps10260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10260.displayName = 'HeavyComponent10260';
export default HeavyComponent10260;
