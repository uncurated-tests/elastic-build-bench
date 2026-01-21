'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12306<T> = T extends (infer U)[]
  ? DeepReadonlyArray12306<U>
  : T extends object
  ? DeepReadonlyObject12306<T>
  : T;

interface DeepReadonlyArray12306<T> extends ReadonlyArray<DeepReadonly12306<T>> {}

type DeepReadonlyObject12306<T> = {
  readonly [P in keyof T]: DeepReadonly12306<T[P]>;
};

type UnionToIntersection12306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12306<T> = UnionToIntersection12306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12306<T extends unknown[], V> = [...T, V];

type TuplifyUnion12306<T, L = LastOf12306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12306<TuplifyUnion12306<Exclude<T, L>>, L>;

type DeepPartial12306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12306<T[P]> }
  : T;

type Paths12306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12306<K, Paths12306<T[K], Prev12306[D]>> : never }[keyof T]
  : never;

type Prev12306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12306 {
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

type ConfigPaths12306 = Paths12306<NestedConfig12306>;

interface HeavyProps12306 {
  config: DeepPartial12306<NestedConfig12306>;
  path?: ConfigPaths12306;
}

const HeavyComponent12306 = memo(function HeavyComponent12306({ config }: HeavyProps12306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12306.displayName = 'HeavyComponent12306';
export default HeavyComponent12306;
