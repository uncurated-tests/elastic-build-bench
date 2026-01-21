'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10307<T> = T extends (infer U)[]
  ? DeepReadonlyArray10307<U>
  : T extends object
  ? DeepReadonlyObject10307<T>
  : T;

interface DeepReadonlyArray10307<T> extends ReadonlyArray<DeepReadonly10307<T>> {}

type DeepReadonlyObject10307<T> = {
  readonly [P in keyof T]: DeepReadonly10307<T[P]>;
};

type UnionToIntersection10307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10307<T> = UnionToIntersection10307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10307<T extends unknown[], V> = [...T, V];

type TuplifyUnion10307<T, L = LastOf10307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10307<TuplifyUnion10307<Exclude<T, L>>, L>;

type DeepPartial10307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10307<T[P]> }
  : T;

type Paths10307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10307<K, Paths10307<T[K], Prev10307[D]>> : never }[keyof T]
  : never;

type Prev10307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10307 {
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

type ConfigPaths10307 = Paths10307<NestedConfig10307>;

interface HeavyProps10307 {
  config: DeepPartial10307<NestedConfig10307>;
  path?: ConfigPaths10307;
}

const HeavyComponent10307 = memo(function HeavyComponent10307({ config }: HeavyProps10307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10307.displayName = 'HeavyComponent10307';
export default HeavyComponent10307;
