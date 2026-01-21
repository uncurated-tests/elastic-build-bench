'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13775<T> = T extends (infer U)[]
  ? DeepReadonlyArray13775<U>
  : T extends object
  ? DeepReadonlyObject13775<T>
  : T;

interface DeepReadonlyArray13775<T> extends ReadonlyArray<DeepReadonly13775<T>> {}

type DeepReadonlyObject13775<T> = {
  readonly [P in keyof T]: DeepReadonly13775<T[P]>;
};

type UnionToIntersection13775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13775<T> = UnionToIntersection13775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13775<T extends unknown[], V> = [...T, V];

type TuplifyUnion13775<T, L = LastOf13775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13775<TuplifyUnion13775<Exclude<T, L>>, L>;

type DeepPartial13775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13775<T[P]> }
  : T;

type Paths13775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13775<K, Paths13775<T[K], Prev13775[D]>> : never }[keyof T]
  : never;

type Prev13775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13775 {
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

type ConfigPaths13775 = Paths13775<NestedConfig13775>;

interface HeavyProps13775 {
  config: DeepPartial13775<NestedConfig13775>;
  path?: ConfigPaths13775;
}

const HeavyComponent13775 = memo(function HeavyComponent13775({ config }: HeavyProps13775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13775.displayName = 'HeavyComponent13775';
export default HeavyComponent13775;
