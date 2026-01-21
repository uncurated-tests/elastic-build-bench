'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10501<T> = T extends (infer U)[]
  ? DeepReadonlyArray10501<U>
  : T extends object
  ? DeepReadonlyObject10501<T>
  : T;

interface DeepReadonlyArray10501<T> extends ReadonlyArray<DeepReadonly10501<T>> {}

type DeepReadonlyObject10501<T> = {
  readonly [P in keyof T]: DeepReadonly10501<T[P]>;
};

type UnionToIntersection10501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10501<T> = UnionToIntersection10501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10501<T extends unknown[], V> = [...T, V];

type TuplifyUnion10501<T, L = LastOf10501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10501<TuplifyUnion10501<Exclude<T, L>>, L>;

type DeepPartial10501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10501<T[P]> }
  : T;

type Paths10501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10501<K, Paths10501<T[K], Prev10501[D]>> : never }[keyof T]
  : never;

type Prev10501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10501 {
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

type ConfigPaths10501 = Paths10501<NestedConfig10501>;

interface HeavyProps10501 {
  config: DeepPartial10501<NestedConfig10501>;
  path?: ConfigPaths10501;
}

const HeavyComponent10501 = memo(function HeavyComponent10501({ config }: HeavyProps10501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10501.displayName = 'HeavyComponent10501';
export default HeavyComponent10501;
