'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10469<T> = T extends (infer U)[]
  ? DeepReadonlyArray10469<U>
  : T extends object
  ? DeepReadonlyObject10469<T>
  : T;

interface DeepReadonlyArray10469<T> extends ReadonlyArray<DeepReadonly10469<T>> {}

type DeepReadonlyObject10469<T> = {
  readonly [P in keyof T]: DeepReadonly10469<T[P]>;
};

type UnionToIntersection10469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10469<T> = UnionToIntersection10469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10469<T extends unknown[], V> = [...T, V];

type TuplifyUnion10469<T, L = LastOf10469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10469<TuplifyUnion10469<Exclude<T, L>>, L>;

type DeepPartial10469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10469<T[P]> }
  : T;

type Paths10469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10469<K, Paths10469<T[K], Prev10469[D]>> : never }[keyof T]
  : never;

type Prev10469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10469 {
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

type ConfigPaths10469 = Paths10469<NestedConfig10469>;

interface HeavyProps10469 {
  config: DeepPartial10469<NestedConfig10469>;
  path?: ConfigPaths10469;
}

const HeavyComponent10469 = memo(function HeavyComponent10469({ config }: HeavyProps10469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10469.displayName = 'HeavyComponent10469';
export default HeavyComponent10469;
