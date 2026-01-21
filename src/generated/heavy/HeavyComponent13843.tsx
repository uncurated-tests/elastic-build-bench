'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13843<T> = T extends (infer U)[]
  ? DeepReadonlyArray13843<U>
  : T extends object
  ? DeepReadonlyObject13843<T>
  : T;

interface DeepReadonlyArray13843<T> extends ReadonlyArray<DeepReadonly13843<T>> {}

type DeepReadonlyObject13843<T> = {
  readonly [P in keyof T]: DeepReadonly13843<T[P]>;
};

type UnionToIntersection13843<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13843<T> = UnionToIntersection13843<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13843<T extends unknown[], V> = [...T, V];

type TuplifyUnion13843<T, L = LastOf13843<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13843<TuplifyUnion13843<Exclude<T, L>>, L>;

type DeepPartial13843<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13843<T[P]> }
  : T;

type Paths13843<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13843<K, Paths13843<T[K], Prev13843[D]>> : never }[keyof T]
  : never;

type Prev13843 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13843<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13843 {
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

type ConfigPaths13843 = Paths13843<NestedConfig13843>;

interface HeavyProps13843 {
  config: DeepPartial13843<NestedConfig13843>;
  path?: ConfigPaths13843;
}

const HeavyComponent13843 = memo(function HeavyComponent13843({ config }: HeavyProps13843) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13843) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13843 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13843: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13843.displayName = 'HeavyComponent13843';
export default HeavyComponent13843;
