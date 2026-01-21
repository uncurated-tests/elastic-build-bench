'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12540<T> = T extends (infer U)[]
  ? DeepReadonlyArray12540<U>
  : T extends object
  ? DeepReadonlyObject12540<T>
  : T;

interface DeepReadonlyArray12540<T> extends ReadonlyArray<DeepReadonly12540<T>> {}

type DeepReadonlyObject12540<T> = {
  readonly [P in keyof T]: DeepReadonly12540<T[P]>;
};

type UnionToIntersection12540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12540<T> = UnionToIntersection12540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12540<T extends unknown[], V> = [...T, V];

type TuplifyUnion12540<T, L = LastOf12540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12540<TuplifyUnion12540<Exclude<T, L>>, L>;

type DeepPartial12540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12540<T[P]> }
  : T;

type Paths12540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12540<K, Paths12540<T[K], Prev12540[D]>> : never }[keyof T]
  : never;

type Prev12540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12540 {
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

type ConfigPaths12540 = Paths12540<NestedConfig12540>;

interface HeavyProps12540 {
  config: DeepPartial12540<NestedConfig12540>;
  path?: ConfigPaths12540;
}

const HeavyComponent12540 = memo(function HeavyComponent12540({ config }: HeavyProps12540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12540.displayName = 'HeavyComponent12540';
export default HeavyComponent12540;
