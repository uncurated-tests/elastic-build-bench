'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13635<T> = T extends (infer U)[]
  ? DeepReadonlyArray13635<U>
  : T extends object
  ? DeepReadonlyObject13635<T>
  : T;

interface DeepReadonlyArray13635<T> extends ReadonlyArray<DeepReadonly13635<T>> {}

type DeepReadonlyObject13635<T> = {
  readonly [P in keyof T]: DeepReadonly13635<T[P]>;
};

type UnionToIntersection13635<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13635<T> = UnionToIntersection13635<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13635<T extends unknown[], V> = [...T, V];

type TuplifyUnion13635<T, L = LastOf13635<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13635<TuplifyUnion13635<Exclude<T, L>>, L>;

type DeepPartial13635<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13635<T[P]> }
  : T;

type Paths13635<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13635<K, Paths13635<T[K], Prev13635[D]>> : never }[keyof T]
  : never;

type Prev13635 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13635<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13635 {
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

type ConfigPaths13635 = Paths13635<NestedConfig13635>;

interface HeavyProps13635 {
  config: DeepPartial13635<NestedConfig13635>;
  path?: ConfigPaths13635;
}

const HeavyComponent13635 = memo(function HeavyComponent13635({ config }: HeavyProps13635) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13635) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13635 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13635: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13635.displayName = 'HeavyComponent13635';
export default HeavyComponent13635;
