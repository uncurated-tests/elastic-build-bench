'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10587<T> = T extends (infer U)[]
  ? DeepReadonlyArray10587<U>
  : T extends object
  ? DeepReadonlyObject10587<T>
  : T;

interface DeepReadonlyArray10587<T> extends ReadonlyArray<DeepReadonly10587<T>> {}

type DeepReadonlyObject10587<T> = {
  readonly [P in keyof T]: DeepReadonly10587<T[P]>;
};

type UnionToIntersection10587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10587<T> = UnionToIntersection10587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10587<T extends unknown[], V> = [...T, V];

type TuplifyUnion10587<T, L = LastOf10587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10587<TuplifyUnion10587<Exclude<T, L>>, L>;

type DeepPartial10587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10587<T[P]> }
  : T;

type Paths10587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10587<K, Paths10587<T[K], Prev10587[D]>> : never }[keyof T]
  : never;

type Prev10587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10587 {
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

type ConfigPaths10587 = Paths10587<NestedConfig10587>;

interface HeavyProps10587 {
  config: DeepPartial10587<NestedConfig10587>;
  path?: ConfigPaths10587;
}

const HeavyComponent10587 = memo(function HeavyComponent10587({ config }: HeavyProps10587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10587.displayName = 'HeavyComponent10587';
export default HeavyComponent10587;
