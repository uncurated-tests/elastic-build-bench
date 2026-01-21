'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10964<T> = T extends (infer U)[]
  ? DeepReadonlyArray10964<U>
  : T extends object
  ? DeepReadonlyObject10964<T>
  : T;

interface DeepReadonlyArray10964<T> extends ReadonlyArray<DeepReadonly10964<T>> {}

type DeepReadonlyObject10964<T> = {
  readonly [P in keyof T]: DeepReadonly10964<T[P]>;
};

type UnionToIntersection10964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10964<T> = UnionToIntersection10964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10964<T extends unknown[], V> = [...T, V];

type TuplifyUnion10964<T, L = LastOf10964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10964<TuplifyUnion10964<Exclude<T, L>>, L>;

type DeepPartial10964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10964<T[P]> }
  : T;

type Paths10964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10964<K, Paths10964<T[K], Prev10964[D]>> : never }[keyof T]
  : never;

type Prev10964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10964 {
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

type ConfigPaths10964 = Paths10964<NestedConfig10964>;

interface HeavyProps10964 {
  config: DeepPartial10964<NestedConfig10964>;
  path?: ConfigPaths10964;
}

const HeavyComponent10964 = memo(function HeavyComponent10964({ config }: HeavyProps10964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10964.displayName = 'HeavyComponent10964';
export default HeavyComponent10964;
