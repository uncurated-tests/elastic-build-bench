'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13479<T> = T extends (infer U)[]
  ? DeepReadonlyArray13479<U>
  : T extends object
  ? DeepReadonlyObject13479<T>
  : T;

interface DeepReadonlyArray13479<T> extends ReadonlyArray<DeepReadonly13479<T>> {}

type DeepReadonlyObject13479<T> = {
  readonly [P in keyof T]: DeepReadonly13479<T[P]>;
};

type UnionToIntersection13479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13479<T> = UnionToIntersection13479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13479<T extends unknown[], V> = [...T, V];

type TuplifyUnion13479<T, L = LastOf13479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13479<TuplifyUnion13479<Exclude<T, L>>, L>;

type DeepPartial13479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13479<T[P]> }
  : T;

type Paths13479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13479<K, Paths13479<T[K], Prev13479[D]>> : never }[keyof T]
  : never;

type Prev13479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13479 {
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

type ConfigPaths13479 = Paths13479<NestedConfig13479>;

interface HeavyProps13479 {
  config: DeepPartial13479<NestedConfig13479>;
  path?: ConfigPaths13479;
}

const HeavyComponent13479 = memo(function HeavyComponent13479({ config }: HeavyProps13479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13479.displayName = 'HeavyComponent13479';
export default HeavyComponent13479;
