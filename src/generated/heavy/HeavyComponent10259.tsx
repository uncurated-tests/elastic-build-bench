'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10259<T> = T extends (infer U)[]
  ? DeepReadonlyArray10259<U>
  : T extends object
  ? DeepReadonlyObject10259<T>
  : T;

interface DeepReadonlyArray10259<T> extends ReadonlyArray<DeepReadonly10259<T>> {}

type DeepReadonlyObject10259<T> = {
  readonly [P in keyof T]: DeepReadonly10259<T[P]>;
};

type UnionToIntersection10259<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10259<T> = UnionToIntersection10259<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10259<T extends unknown[], V> = [...T, V];

type TuplifyUnion10259<T, L = LastOf10259<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10259<TuplifyUnion10259<Exclude<T, L>>, L>;

type DeepPartial10259<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10259<T[P]> }
  : T;

type Paths10259<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10259<K, Paths10259<T[K], Prev10259[D]>> : never }[keyof T]
  : never;

type Prev10259 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10259<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10259 {
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

type ConfigPaths10259 = Paths10259<NestedConfig10259>;

interface HeavyProps10259 {
  config: DeepPartial10259<NestedConfig10259>;
  path?: ConfigPaths10259;
}

const HeavyComponent10259 = memo(function HeavyComponent10259({ config }: HeavyProps10259) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10259) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10259 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10259: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10259.displayName = 'HeavyComponent10259';
export default HeavyComponent10259;
