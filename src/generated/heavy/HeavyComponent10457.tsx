'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10457<T> = T extends (infer U)[]
  ? DeepReadonlyArray10457<U>
  : T extends object
  ? DeepReadonlyObject10457<T>
  : T;

interface DeepReadonlyArray10457<T> extends ReadonlyArray<DeepReadonly10457<T>> {}

type DeepReadonlyObject10457<T> = {
  readonly [P in keyof T]: DeepReadonly10457<T[P]>;
};

type UnionToIntersection10457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10457<T> = UnionToIntersection10457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10457<T extends unknown[], V> = [...T, V];

type TuplifyUnion10457<T, L = LastOf10457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10457<TuplifyUnion10457<Exclude<T, L>>, L>;

type DeepPartial10457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10457<T[P]> }
  : T;

type Paths10457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10457<K, Paths10457<T[K], Prev10457[D]>> : never }[keyof T]
  : never;

type Prev10457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10457 {
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

type ConfigPaths10457 = Paths10457<NestedConfig10457>;

interface HeavyProps10457 {
  config: DeepPartial10457<NestedConfig10457>;
  path?: ConfigPaths10457;
}

const HeavyComponent10457 = memo(function HeavyComponent10457({ config }: HeavyProps10457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10457.displayName = 'HeavyComponent10457';
export default HeavyComponent10457;
