'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12894<T> = T extends (infer U)[]
  ? DeepReadonlyArray12894<U>
  : T extends object
  ? DeepReadonlyObject12894<T>
  : T;

interface DeepReadonlyArray12894<T> extends ReadonlyArray<DeepReadonly12894<T>> {}

type DeepReadonlyObject12894<T> = {
  readonly [P in keyof T]: DeepReadonly12894<T[P]>;
};

type UnionToIntersection12894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12894<T> = UnionToIntersection12894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12894<T extends unknown[], V> = [...T, V];

type TuplifyUnion12894<T, L = LastOf12894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12894<TuplifyUnion12894<Exclude<T, L>>, L>;

type DeepPartial12894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12894<T[P]> }
  : T;

type Paths12894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12894<K, Paths12894<T[K], Prev12894[D]>> : never }[keyof T]
  : never;

type Prev12894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12894 {
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

type ConfigPaths12894 = Paths12894<NestedConfig12894>;

interface HeavyProps12894 {
  config: DeepPartial12894<NestedConfig12894>;
  path?: ConfigPaths12894;
}

const HeavyComponent12894 = memo(function HeavyComponent12894({ config }: HeavyProps12894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12894.displayName = 'HeavyComponent12894';
export default HeavyComponent12894;
