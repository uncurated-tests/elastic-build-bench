'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10536<T> = T extends (infer U)[]
  ? DeepReadonlyArray10536<U>
  : T extends object
  ? DeepReadonlyObject10536<T>
  : T;

interface DeepReadonlyArray10536<T> extends ReadonlyArray<DeepReadonly10536<T>> {}

type DeepReadonlyObject10536<T> = {
  readonly [P in keyof T]: DeepReadonly10536<T[P]>;
};

type UnionToIntersection10536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10536<T> = UnionToIntersection10536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10536<T extends unknown[], V> = [...T, V];

type TuplifyUnion10536<T, L = LastOf10536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10536<TuplifyUnion10536<Exclude<T, L>>, L>;

type DeepPartial10536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10536<T[P]> }
  : T;

type Paths10536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10536<K, Paths10536<T[K], Prev10536[D]>> : never }[keyof T]
  : never;

type Prev10536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10536 {
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

type ConfigPaths10536 = Paths10536<NestedConfig10536>;

interface HeavyProps10536 {
  config: DeepPartial10536<NestedConfig10536>;
  path?: ConfigPaths10536;
}

const HeavyComponent10536 = memo(function HeavyComponent10536({ config }: HeavyProps10536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10536.displayName = 'HeavyComponent10536';
export default HeavyComponent10536;
