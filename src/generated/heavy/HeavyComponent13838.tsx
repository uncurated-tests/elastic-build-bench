'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13838<T> = T extends (infer U)[]
  ? DeepReadonlyArray13838<U>
  : T extends object
  ? DeepReadonlyObject13838<T>
  : T;

interface DeepReadonlyArray13838<T> extends ReadonlyArray<DeepReadonly13838<T>> {}

type DeepReadonlyObject13838<T> = {
  readonly [P in keyof T]: DeepReadonly13838<T[P]>;
};

type UnionToIntersection13838<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13838<T> = UnionToIntersection13838<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13838<T extends unknown[], V> = [...T, V];

type TuplifyUnion13838<T, L = LastOf13838<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13838<TuplifyUnion13838<Exclude<T, L>>, L>;

type DeepPartial13838<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13838<T[P]> }
  : T;

type Paths13838<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13838<K, Paths13838<T[K], Prev13838[D]>> : never }[keyof T]
  : never;

type Prev13838 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13838<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13838 {
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

type ConfigPaths13838 = Paths13838<NestedConfig13838>;

interface HeavyProps13838 {
  config: DeepPartial13838<NestedConfig13838>;
  path?: ConfigPaths13838;
}

const HeavyComponent13838 = memo(function HeavyComponent13838({ config }: HeavyProps13838) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13838) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13838 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13838: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13838.displayName = 'HeavyComponent13838';
export default HeavyComponent13838;
