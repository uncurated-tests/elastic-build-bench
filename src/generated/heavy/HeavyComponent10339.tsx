'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10339<T> = T extends (infer U)[]
  ? DeepReadonlyArray10339<U>
  : T extends object
  ? DeepReadonlyObject10339<T>
  : T;

interface DeepReadonlyArray10339<T> extends ReadonlyArray<DeepReadonly10339<T>> {}

type DeepReadonlyObject10339<T> = {
  readonly [P in keyof T]: DeepReadonly10339<T[P]>;
};

type UnionToIntersection10339<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10339<T> = UnionToIntersection10339<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10339<T extends unknown[], V> = [...T, V];

type TuplifyUnion10339<T, L = LastOf10339<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10339<TuplifyUnion10339<Exclude<T, L>>, L>;

type DeepPartial10339<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10339<T[P]> }
  : T;

type Paths10339<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10339<K, Paths10339<T[K], Prev10339[D]>> : never }[keyof T]
  : never;

type Prev10339 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10339<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10339 {
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

type ConfigPaths10339 = Paths10339<NestedConfig10339>;

interface HeavyProps10339 {
  config: DeepPartial10339<NestedConfig10339>;
  path?: ConfigPaths10339;
}

const HeavyComponent10339 = memo(function HeavyComponent10339({ config }: HeavyProps10339) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10339) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10339 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10339: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10339.displayName = 'HeavyComponent10339';
export default HeavyComponent10339;
