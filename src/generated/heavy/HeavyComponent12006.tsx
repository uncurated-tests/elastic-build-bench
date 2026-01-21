'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12006<T> = T extends (infer U)[]
  ? DeepReadonlyArray12006<U>
  : T extends object
  ? DeepReadonlyObject12006<T>
  : T;

interface DeepReadonlyArray12006<T> extends ReadonlyArray<DeepReadonly12006<T>> {}

type DeepReadonlyObject12006<T> = {
  readonly [P in keyof T]: DeepReadonly12006<T[P]>;
};

type UnionToIntersection12006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12006<T> = UnionToIntersection12006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12006<T extends unknown[], V> = [...T, V];

type TuplifyUnion12006<T, L = LastOf12006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12006<TuplifyUnion12006<Exclude<T, L>>, L>;

type DeepPartial12006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12006<T[P]> }
  : T;

type Paths12006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12006<K, Paths12006<T[K], Prev12006[D]>> : never }[keyof T]
  : never;

type Prev12006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12006 {
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

type ConfigPaths12006 = Paths12006<NestedConfig12006>;

interface HeavyProps12006 {
  config: DeepPartial12006<NestedConfig12006>;
  path?: ConfigPaths12006;
}

const HeavyComponent12006 = memo(function HeavyComponent12006({ config }: HeavyProps12006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12006.displayName = 'HeavyComponent12006';
export default HeavyComponent12006;
