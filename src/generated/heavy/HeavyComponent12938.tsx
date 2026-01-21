'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12938<T> = T extends (infer U)[]
  ? DeepReadonlyArray12938<U>
  : T extends object
  ? DeepReadonlyObject12938<T>
  : T;

interface DeepReadonlyArray12938<T> extends ReadonlyArray<DeepReadonly12938<T>> {}

type DeepReadonlyObject12938<T> = {
  readonly [P in keyof T]: DeepReadonly12938<T[P]>;
};

type UnionToIntersection12938<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12938<T> = UnionToIntersection12938<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12938<T extends unknown[], V> = [...T, V];

type TuplifyUnion12938<T, L = LastOf12938<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12938<TuplifyUnion12938<Exclude<T, L>>, L>;

type DeepPartial12938<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12938<T[P]> }
  : T;

type Paths12938<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12938<K, Paths12938<T[K], Prev12938[D]>> : never }[keyof T]
  : never;

type Prev12938 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12938<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12938 {
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

type ConfigPaths12938 = Paths12938<NestedConfig12938>;

interface HeavyProps12938 {
  config: DeepPartial12938<NestedConfig12938>;
  path?: ConfigPaths12938;
}

const HeavyComponent12938 = memo(function HeavyComponent12938({ config }: HeavyProps12938) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12938) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12938 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12938: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12938.displayName = 'HeavyComponent12938';
export default HeavyComponent12938;
