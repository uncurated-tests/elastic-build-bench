'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13981<T> = T extends (infer U)[]
  ? DeepReadonlyArray13981<U>
  : T extends object
  ? DeepReadonlyObject13981<T>
  : T;

interface DeepReadonlyArray13981<T> extends ReadonlyArray<DeepReadonly13981<T>> {}

type DeepReadonlyObject13981<T> = {
  readonly [P in keyof T]: DeepReadonly13981<T[P]>;
};

type UnionToIntersection13981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13981<T> = UnionToIntersection13981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13981<T extends unknown[], V> = [...T, V];

type TuplifyUnion13981<T, L = LastOf13981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13981<TuplifyUnion13981<Exclude<T, L>>, L>;

type DeepPartial13981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13981<T[P]> }
  : T;

type Paths13981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13981<K, Paths13981<T[K], Prev13981[D]>> : never }[keyof T]
  : never;

type Prev13981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13981 {
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

type ConfigPaths13981 = Paths13981<NestedConfig13981>;

interface HeavyProps13981 {
  config: DeepPartial13981<NestedConfig13981>;
  path?: ConfigPaths13981;
}

const HeavyComponent13981 = memo(function HeavyComponent13981({ config }: HeavyProps13981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13981.displayName = 'HeavyComponent13981';
export default HeavyComponent13981;
