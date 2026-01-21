'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10743<T> = T extends (infer U)[]
  ? DeepReadonlyArray10743<U>
  : T extends object
  ? DeepReadonlyObject10743<T>
  : T;

interface DeepReadonlyArray10743<T> extends ReadonlyArray<DeepReadonly10743<T>> {}

type DeepReadonlyObject10743<T> = {
  readonly [P in keyof T]: DeepReadonly10743<T[P]>;
};

type UnionToIntersection10743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10743<T> = UnionToIntersection10743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10743<T extends unknown[], V> = [...T, V];

type TuplifyUnion10743<T, L = LastOf10743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10743<TuplifyUnion10743<Exclude<T, L>>, L>;

type DeepPartial10743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10743<T[P]> }
  : T;

type Paths10743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10743<K, Paths10743<T[K], Prev10743[D]>> : never }[keyof T]
  : never;

type Prev10743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10743 {
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

type ConfigPaths10743 = Paths10743<NestedConfig10743>;

interface HeavyProps10743 {
  config: DeepPartial10743<NestedConfig10743>;
  path?: ConfigPaths10743;
}

const HeavyComponent10743 = memo(function HeavyComponent10743({ config }: HeavyProps10743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10743.displayName = 'HeavyComponent10743';
export default HeavyComponent10743;
