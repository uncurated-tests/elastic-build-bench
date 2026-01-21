'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10635<T> = T extends (infer U)[]
  ? DeepReadonlyArray10635<U>
  : T extends object
  ? DeepReadonlyObject10635<T>
  : T;

interface DeepReadonlyArray10635<T> extends ReadonlyArray<DeepReadonly10635<T>> {}

type DeepReadonlyObject10635<T> = {
  readonly [P in keyof T]: DeepReadonly10635<T[P]>;
};

type UnionToIntersection10635<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10635<T> = UnionToIntersection10635<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10635<T extends unknown[], V> = [...T, V];

type TuplifyUnion10635<T, L = LastOf10635<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10635<TuplifyUnion10635<Exclude<T, L>>, L>;

type DeepPartial10635<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10635<T[P]> }
  : T;

type Paths10635<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10635<K, Paths10635<T[K], Prev10635[D]>> : never }[keyof T]
  : never;

type Prev10635 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10635<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10635 {
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

type ConfigPaths10635 = Paths10635<NestedConfig10635>;

interface HeavyProps10635 {
  config: DeepPartial10635<NestedConfig10635>;
  path?: ConfigPaths10635;
}

const HeavyComponent10635 = memo(function HeavyComponent10635({ config }: HeavyProps10635) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10635) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10635 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10635: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10635.displayName = 'HeavyComponent10635';
export default HeavyComponent10635;
