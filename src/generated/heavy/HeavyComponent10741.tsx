'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10741<T> = T extends (infer U)[]
  ? DeepReadonlyArray10741<U>
  : T extends object
  ? DeepReadonlyObject10741<T>
  : T;

interface DeepReadonlyArray10741<T> extends ReadonlyArray<DeepReadonly10741<T>> {}

type DeepReadonlyObject10741<T> = {
  readonly [P in keyof T]: DeepReadonly10741<T[P]>;
};

type UnionToIntersection10741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10741<T> = UnionToIntersection10741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10741<T extends unknown[], V> = [...T, V];

type TuplifyUnion10741<T, L = LastOf10741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10741<TuplifyUnion10741<Exclude<T, L>>, L>;

type DeepPartial10741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10741<T[P]> }
  : T;

type Paths10741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10741<K, Paths10741<T[K], Prev10741[D]>> : never }[keyof T]
  : never;

type Prev10741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10741 {
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

type ConfigPaths10741 = Paths10741<NestedConfig10741>;

interface HeavyProps10741 {
  config: DeepPartial10741<NestedConfig10741>;
  path?: ConfigPaths10741;
}

const HeavyComponent10741 = memo(function HeavyComponent10741({ config }: HeavyProps10741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10741.displayName = 'HeavyComponent10741';
export default HeavyComponent10741;
