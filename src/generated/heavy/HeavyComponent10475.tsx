'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10475<T> = T extends (infer U)[]
  ? DeepReadonlyArray10475<U>
  : T extends object
  ? DeepReadonlyObject10475<T>
  : T;

interface DeepReadonlyArray10475<T> extends ReadonlyArray<DeepReadonly10475<T>> {}

type DeepReadonlyObject10475<T> = {
  readonly [P in keyof T]: DeepReadonly10475<T[P]>;
};

type UnionToIntersection10475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10475<T> = UnionToIntersection10475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10475<T extends unknown[], V> = [...T, V];

type TuplifyUnion10475<T, L = LastOf10475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10475<TuplifyUnion10475<Exclude<T, L>>, L>;

type DeepPartial10475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10475<T[P]> }
  : T;

type Paths10475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10475<K, Paths10475<T[K], Prev10475[D]>> : never }[keyof T]
  : never;

type Prev10475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10475 {
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

type ConfigPaths10475 = Paths10475<NestedConfig10475>;

interface HeavyProps10475 {
  config: DeepPartial10475<NestedConfig10475>;
  path?: ConfigPaths10475;
}

const HeavyComponent10475 = memo(function HeavyComponent10475({ config }: HeavyProps10475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10475.displayName = 'HeavyComponent10475';
export default HeavyComponent10475;
