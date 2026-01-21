'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10131<T> = T extends (infer U)[]
  ? DeepReadonlyArray10131<U>
  : T extends object
  ? DeepReadonlyObject10131<T>
  : T;

interface DeepReadonlyArray10131<T> extends ReadonlyArray<DeepReadonly10131<T>> {}

type DeepReadonlyObject10131<T> = {
  readonly [P in keyof T]: DeepReadonly10131<T[P]>;
};

type UnionToIntersection10131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10131<T> = UnionToIntersection10131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10131<T extends unknown[], V> = [...T, V];

type TuplifyUnion10131<T, L = LastOf10131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10131<TuplifyUnion10131<Exclude<T, L>>, L>;

type DeepPartial10131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10131<T[P]> }
  : T;

type Paths10131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10131<K, Paths10131<T[K], Prev10131[D]>> : never }[keyof T]
  : never;

type Prev10131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10131 {
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

type ConfigPaths10131 = Paths10131<NestedConfig10131>;

interface HeavyProps10131 {
  config: DeepPartial10131<NestedConfig10131>;
  path?: ConfigPaths10131;
}

const HeavyComponent10131 = memo(function HeavyComponent10131({ config }: HeavyProps10131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10131.displayName = 'HeavyComponent10131';
export default HeavyComponent10131;
