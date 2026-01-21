'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12749<T> = T extends (infer U)[]
  ? DeepReadonlyArray12749<U>
  : T extends object
  ? DeepReadonlyObject12749<T>
  : T;

interface DeepReadonlyArray12749<T> extends ReadonlyArray<DeepReadonly12749<T>> {}

type DeepReadonlyObject12749<T> = {
  readonly [P in keyof T]: DeepReadonly12749<T[P]>;
};

type UnionToIntersection12749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12749<T> = UnionToIntersection12749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12749<T extends unknown[], V> = [...T, V];

type TuplifyUnion12749<T, L = LastOf12749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12749<TuplifyUnion12749<Exclude<T, L>>, L>;

type DeepPartial12749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12749<T[P]> }
  : T;

type Paths12749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12749<K, Paths12749<T[K], Prev12749[D]>> : never }[keyof T]
  : never;

type Prev12749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12749 {
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

type ConfigPaths12749 = Paths12749<NestedConfig12749>;

interface HeavyProps12749 {
  config: DeepPartial12749<NestedConfig12749>;
  path?: ConfigPaths12749;
}

const HeavyComponent12749 = memo(function HeavyComponent12749({ config }: HeavyProps12749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12749.displayName = 'HeavyComponent12749';
export default HeavyComponent12749;
