'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10297<T> = T extends (infer U)[]
  ? DeepReadonlyArray10297<U>
  : T extends object
  ? DeepReadonlyObject10297<T>
  : T;

interface DeepReadonlyArray10297<T> extends ReadonlyArray<DeepReadonly10297<T>> {}

type DeepReadonlyObject10297<T> = {
  readonly [P in keyof T]: DeepReadonly10297<T[P]>;
};

type UnionToIntersection10297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10297<T> = UnionToIntersection10297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10297<T extends unknown[], V> = [...T, V];

type TuplifyUnion10297<T, L = LastOf10297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10297<TuplifyUnion10297<Exclude<T, L>>, L>;

type DeepPartial10297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10297<T[P]> }
  : T;

type Paths10297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10297<K, Paths10297<T[K], Prev10297[D]>> : never }[keyof T]
  : never;

type Prev10297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10297 {
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

type ConfigPaths10297 = Paths10297<NestedConfig10297>;

interface HeavyProps10297 {
  config: DeepPartial10297<NestedConfig10297>;
  path?: ConfigPaths10297;
}

const HeavyComponent10297 = memo(function HeavyComponent10297({ config }: HeavyProps10297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10297.displayName = 'HeavyComponent10297';
export default HeavyComponent10297;
