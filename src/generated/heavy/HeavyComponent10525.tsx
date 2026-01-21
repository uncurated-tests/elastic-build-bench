'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10525<T> = T extends (infer U)[]
  ? DeepReadonlyArray10525<U>
  : T extends object
  ? DeepReadonlyObject10525<T>
  : T;

interface DeepReadonlyArray10525<T> extends ReadonlyArray<DeepReadonly10525<T>> {}

type DeepReadonlyObject10525<T> = {
  readonly [P in keyof T]: DeepReadonly10525<T[P]>;
};

type UnionToIntersection10525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10525<T> = UnionToIntersection10525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10525<T extends unknown[], V> = [...T, V];

type TuplifyUnion10525<T, L = LastOf10525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10525<TuplifyUnion10525<Exclude<T, L>>, L>;

type DeepPartial10525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10525<T[P]> }
  : T;

type Paths10525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10525<K, Paths10525<T[K], Prev10525[D]>> : never }[keyof T]
  : never;

type Prev10525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10525 {
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

type ConfigPaths10525 = Paths10525<NestedConfig10525>;

interface HeavyProps10525 {
  config: DeepPartial10525<NestedConfig10525>;
  path?: ConfigPaths10525;
}

const HeavyComponent10525 = memo(function HeavyComponent10525({ config }: HeavyProps10525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10525.displayName = 'HeavyComponent10525';
export default HeavyComponent10525;
