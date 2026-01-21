'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10572<T> = T extends (infer U)[]
  ? DeepReadonlyArray10572<U>
  : T extends object
  ? DeepReadonlyObject10572<T>
  : T;

interface DeepReadonlyArray10572<T> extends ReadonlyArray<DeepReadonly10572<T>> {}

type DeepReadonlyObject10572<T> = {
  readonly [P in keyof T]: DeepReadonly10572<T[P]>;
};

type UnionToIntersection10572<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10572<T> = UnionToIntersection10572<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10572<T extends unknown[], V> = [...T, V];

type TuplifyUnion10572<T, L = LastOf10572<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10572<TuplifyUnion10572<Exclude<T, L>>, L>;

type DeepPartial10572<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10572<T[P]> }
  : T;

type Paths10572<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10572<K, Paths10572<T[K], Prev10572[D]>> : never }[keyof T]
  : never;

type Prev10572 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10572<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10572 {
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

type ConfigPaths10572 = Paths10572<NestedConfig10572>;

interface HeavyProps10572 {
  config: DeepPartial10572<NestedConfig10572>;
  path?: ConfigPaths10572;
}

const HeavyComponent10572 = memo(function HeavyComponent10572({ config }: HeavyProps10572) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10572) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10572 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10572: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10572.displayName = 'HeavyComponent10572';
export default HeavyComponent10572;
