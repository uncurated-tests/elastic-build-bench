'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12775<T> = T extends (infer U)[]
  ? DeepReadonlyArray12775<U>
  : T extends object
  ? DeepReadonlyObject12775<T>
  : T;

interface DeepReadonlyArray12775<T> extends ReadonlyArray<DeepReadonly12775<T>> {}

type DeepReadonlyObject12775<T> = {
  readonly [P in keyof T]: DeepReadonly12775<T[P]>;
};

type UnionToIntersection12775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12775<T> = UnionToIntersection12775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12775<T extends unknown[], V> = [...T, V];

type TuplifyUnion12775<T, L = LastOf12775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12775<TuplifyUnion12775<Exclude<T, L>>, L>;

type DeepPartial12775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12775<T[P]> }
  : T;

type Paths12775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12775<K, Paths12775<T[K], Prev12775[D]>> : never }[keyof T]
  : never;

type Prev12775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12775 {
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

type ConfigPaths12775 = Paths12775<NestedConfig12775>;

interface HeavyProps12775 {
  config: DeepPartial12775<NestedConfig12775>;
  path?: ConfigPaths12775;
}

const HeavyComponent12775 = memo(function HeavyComponent12775({ config }: HeavyProps12775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12775.displayName = 'HeavyComponent12775';
export default HeavyComponent12775;
