'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10302<T> = T extends (infer U)[]
  ? DeepReadonlyArray10302<U>
  : T extends object
  ? DeepReadonlyObject10302<T>
  : T;

interface DeepReadonlyArray10302<T> extends ReadonlyArray<DeepReadonly10302<T>> {}

type DeepReadonlyObject10302<T> = {
  readonly [P in keyof T]: DeepReadonly10302<T[P]>;
};

type UnionToIntersection10302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10302<T> = UnionToIntersection10302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10302<T extends unknown[], V> = [...T, V];

type TuplifyUnion10302<T, L = LastOf10302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10302<TuplifyUnion10302<Exclude<T, L>>, L>;

type DeepPartial10302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10302<T[P]> }
  : T;

type Paths10302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10302<K, Paths10302<T[K], Prev10302[D]>> : never }[keyof T]
  : never;

type Prev10302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10302 {
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

type ConfigPaths10302 = Paths10302<NestedConfig10302>;

interface HeavyProps10302 {
  config: DeepPartial10302<NestedConfig10302>;
  path?: ConfigPaths10302;
}

const HeavyComponent10302 = memo(function HeavyComponent10302({ config }: HeavyProps10302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10302.displayName = 'HeavyComponent10302';
export default HeavyComponent10302;
