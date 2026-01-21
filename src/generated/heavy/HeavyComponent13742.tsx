'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13742<T> = T extends (infer U)[]
  ? DeepReadonlyArray13742<U>
  : T extends object
  ? DeepReadonlyObject13742<T>
  : T;

interface DeepReadonlyArray13742<T> extends ReadonlyArray<DeepReadonly13742<T>> {}

type DeepReadonlyObject13742<T> = {
  readonly [P in keyof T]: DeepReadonly13742<T[P]>;
};

type UnionToIntersection13742<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13742<T> = UnionToIntersection13742<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13742<T extends unknown[], V> = [...T, V];

type TuplifyUnion13742<T, L = LastOf13742<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13742<TuplifyUnion13742<Exclude<T, L>>, L>;

type DeepPartial13742<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13742<T[P]> }
  : T;

type Paths13742<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13742<K, Paths13742<T[K], Prev13742[D]>> : never }[keyof T]
  : never;

type Prev13742 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13742<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13742 {
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

type ConfigPaths13742 = Paths13742<NestedConfig13742>;

interface HeavyProps13742 {
  config: DeepPartial13742<NestedConfig13742>;
  path?: ConfigPaths13742;
}

const HeavyComponent13742 = memo(function HeavyComponent13742({ config }: HeavyProps13742) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13742) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13742 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13742: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13742.displayName = 'HeavyComponent13742';
export default HeavyComponent13742;
