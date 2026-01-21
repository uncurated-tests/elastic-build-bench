'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12387<T> = T extends (infer U)[]
  ? DeepReadonlyArray12387<U>
  : T extends object
  ? DeepReadonlyObject12387<T>
  : T;

interface DeepReadonlyArray12387<T> extends ReadonlyArray<DeepReadonly12387<T>> {}

type DeepReadonlyObject12387<T> = {
  readonly [P in keyof T]: DeepReadonly12387<T[P]>;
};

type UnionToIntersection12387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12387<T> = UnionToIntersection12387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12387<T extends unknown[], V> = [...T, V];

type TuplifyUnion12387<T, L = LastOf12387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12387<TuplifyUnion12387<Exclude<T, L>>, L>;

type DeepPartial12387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12387<T[P]> }
  : T;

type Paths12387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12387<K, Paths12387<T[K], Prev12387[D]>> : never }[keyof T]
  : never;

type Prev12387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12387 {
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

type ConfigPaths12387 = Paths12387<NestedConfig12387>;

interface HeavyProps12387 {
  config: DeepPartial12387<NestedConfig12387>;
  path?: ConfigPaths12387;
}

const HeavyComponent12387 = memo(function HeavyComponent12387({ config }: HeavyProps12387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12387.displayName = 'HeavyComponent12387';
export default HeavyComponent12387;
