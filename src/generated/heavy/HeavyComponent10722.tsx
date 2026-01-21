'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10722<T> = T extends (infer U)[]
  ? DeepReadonlyArray10722<U>
  : T extends object
  ? DeepReadonlyObject10722<T>
  : T;

interface DeepReadonlyArray10722<T> extends ReadonlyArray<DeepReadonly10722<T>> {}

type DeepReadonlyObject10722<T> = {
  readonly [P in keyof T]: DeepReadonly10722<T[P]>;
};

type UnionToIntersection10722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10722<T> = UnionToIntersection10722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10722<T extends unknown[], V> = [...T, V];

type TuplifyUnion10722<T, L = LastOf10722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10722<TuplifyUnion10722<Exclude<T, L>>, L>;

type DeepPartial10722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10722<T[P]> }
  : T;

type Paths10722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10722<K, Paths10722<T[K], Prev10722[D]>> : never }[keyof T]
  : never;

type Prev10722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10722 {
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

type ConfigPaths10722 = Paths10722<NestedConfig10722>;

interface HeavyProps10722 {
  config: DeepPartial10722<NestedConfig10722>;
  path?: ConfigPaths10722;
}

const HeavyComponent10722 = memo(function HeavyComponent10722({ config }: HeavyProps10722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10722.displayName = 'HeavyComponent10722';
export default HeavyComponent10722;
