'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10971<T> = T extends (infer U)[]
  ? DeepReadonlyArray10971<U>
  : T extends object
  ? DeepReadonlyObject10971<T>
  : T;

interface DeepReadonlyArray10971<T> extends ReadonlyArray<DeepReadonly10971<T>> {}

type DeepReadonlyObject10971<T> = {
  readonly [P in keyof T]: DeepReadonly10971<T[P]>;
};

type UnionToIntersection10971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10971<T> = UnionToIntersection10971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10971<T extends unknown[], V> = [...T, V];

type TuplifyUnion10971<T, L = LastOf10971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10971<TuplifyUnion10971<Exclude<T, L>>, L>;

type DeepPartial10971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10971<T[P]> }
  : T;

type Paths10971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10971<K, Paths10971<T[K], Prev10971[D]>> : never }[keyof T]
  : never;

type Prev10971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10971 {
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

type ConfigPaths10971 = Paths10971<NestedConfig10971>;

interface HeavyProps10971 {
  config: DeepPartial10971<NestedConfig10971>;
  path?: ConfigPaths10971;
}

const HeavyComponent10971 = memo(function HeavyComponent10971({ config }: HeavyProps10971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10971.displayName = 'HeavyComponent10971';
export default HeavyComponent10971;
