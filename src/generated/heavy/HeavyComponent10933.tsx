'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10933<T> = T extends (infer U)[]
  ? DeepReadonlyArray10933<U>
  : T extends object
  ? DeepReadonlyObject10933<T>
  : T;

interface DeepReadonlyArray10933<T> extends ReadonlyArray<DeepReadonly10933<T>> {}

type DeepReadonlyObject10933<T> = {
  readonly [P in keyof T]: DeepReadonly10933<T[P]>;
};

type UnionToIntersection10933<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10933<T> = UnionToIntersection10933<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10933<T extends unknown[], V> = [...T, V];

type TuplifyUnion10933<T, L = LastOf10933<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10933<TuplifyUnion10933<Exclude<T, L>>, L>;

type DeepPartial10933<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10933<T[P]> }
  : T;

type Paths10933<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10933<K, Paths10933<T[K], Prev10933[D]>> : never }[keyof T]
  : never;

type Prev10933 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10933<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10933 {
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

type ConfigPaths10933 = Paths10933<NestedConfig10933>;

interface HeavyProps10933 {
  config: DeepPartial10933<NestedConfig10933>;
  path?: ConfigPaths10933;
}

const HeavyComponent10933 = memo(function HeavyComponent10933({ config }: HeavyProps10933) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10933) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10933 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10933: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10933.displayName = 'HeavyComponent10933';
export default HeavyComponent10933;
