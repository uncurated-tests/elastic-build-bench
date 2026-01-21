'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10540<T> = T extends (infer U)[]
  ? DeepReadonlyArray10540<U>
  : T extends object
  ? DeepReadonlyObject10540<T>
  : T;

interface DeepReadonlyArray10540<T> extends ReadonlyArray<DeepReadonly10540<T>> {}

type DeepReadonlyObject10540<T> = {
  readonly [P in keyof T]: DeepReadonly10540<T[P]>;
};

type UnionToIntersection10540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10540<T> = UnionToIntersection10540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10540<T extends unknown[], V> = [...T, V];

type TuplifyUnion10540<T, L = LastOf10540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10540<TuplifyUnion10540<Exclude<T, L>>, L>;

type DeepPartial10540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10540<T[P]> }
  : T;

type Paths10540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10540<K, Paths10540<T[K], Prev10540[D]>> : never }[keyof T]
  : never;

type Prev10540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10540 {
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

type ConfigPaths10540 = Paths10540<NestedConfig10540>;

interface HeavyProps10540 {
  config: DeepPartial10540<NestedConfig10540>;
  path?: ConfigPaths10540;
}

const HeavyComponent10540 = memo(function HeavyComponent10540({ config }: HeavyProps10540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10540.displayName = 'HeavyComponent10540';
export default HeavyComponent10540;
