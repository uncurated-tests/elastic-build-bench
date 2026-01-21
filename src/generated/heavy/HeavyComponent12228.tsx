'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12228<T> = T extends (infer U)[]
  ? DeepReadonlyArray12228<U>
  : T extends object
  ? DeepReadonlyObject12228<T>
  : T;

interface DeepReadonlyArray12228<T> extends ReadonlyArray<DeepReadonly12228<T>> {}

type DeepReadonlyObject12228<T> = {
  readonly [P in keyof T]: DeepReadonly12228<T[P]>;
};

type UnionToIntersection12228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12228<T> = UnionToIntersection12228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12228<T extends unknown[], V> = [...T, V];

type TuplifyUnion12228<T, L = LastOf12228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12228<TuplifyUnion12228<Exclude<T, L>>, L>;

type DeepPartial12228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12228<T[P]> }
  : T;

type Paths12228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12228<K, Paths12228<T[K], Prev12228[D]>> : never }[keyof T]
  : never;

type Prev12228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12228 {
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

type ConfigPaths12228 = Paths12228<NestedConfig12228>;

interface HeavyProps12228 {
  config: DeepPartial12228<NestedConfig12228>;
  path?: ConfigPaths12228;
}

const HeavyComponent12228 = memo(function HeavyComponent12228({ config }: HeavyProps12228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12228.displayName = 'HeavyComponent12228';
export default HeavyComponent12228;
