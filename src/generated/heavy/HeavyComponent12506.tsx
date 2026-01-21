'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12506<T> = T extends (infer U)[]
  ? DeepReadonlyArray12506<U>
  : T extends object
  ? DeepReadonlyObject12506<T>
  : T;

interface DeepReadonlyArray12506<T> extends ReadonlyArray<DeepReadonly12506<T>> {}

type DeepReadonlyObject12506<T> = {
  readonly [P in keyof T]: DeepReadonly12506<T[P]>;
};

type UnionToIntersection12506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12506<T> = UnionToIntersection12506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12506<T extends unknown[], V> = [...T, V];

type TuplifyUnion12506<T, L = LastOf12506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12506<TuplifyUnion12506<Exclude<T, L>>, L>;

type DeepPartial12506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12506<T[P]> }
  : T;

type Paths12506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12506<K, Paths12506<T[K], Prev12506[D]>> : never }[keyof T]
  : never;

type Prev12506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12506 {
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

type ConfigPaths12506 = Paths12506<NestedConfig12506>;

interface HeavyProps12506 {
  config: DeepPartial12506<NestedConfig12506>;
  path?: ConfigPaths12506;
}

const HeavyComponent12506 = memo(function HeavyComponent12506({ config }: HeavyProps12506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12506.displayName = 'HeavyComponent12506';
export default HeavyComponent12506;
