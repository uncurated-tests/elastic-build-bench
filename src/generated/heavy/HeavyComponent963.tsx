'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly963<T> = T extends (infer U)[]
  ? DeepReadonlyArray963<U>
  : T extends object
  ? DeepReadonlyObject963<T>
  : T;

interface DeepReadonlyArray963<T> extends ReadonlyArray<DeepReadonly963<T>> {}

type DeepReadonlyObject963<T> = {
  readonly [P in keyof T]: DeepReadonly963<T[P]>;
};

type UnionToIntersection963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf963<T> = UnionToIntersection963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push963<T extends unknown[], V> = [...T, V];

type TuplifyUnion963<T, L = LastOf963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push963<TuplifyUnion963<Exclude<T, L>>, L>;

type DeepPartial963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial963<T[P]> }
  : T;

type Paths963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join963<K, Paths963<T[K], Prev963[D]>> : never }[keyof T]
  : never;

type Prev963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig963 {
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

type ConfigPaths963 = Paths963<NestedConfig963>;

interface HeavyProps963 {
  config: DeepPartial963<NestedConfig963>;
  path?: ConfigPaths963;
}

const HeavyComponent963 = memo(function HeavyComponent963({ config }: HeavyProps963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent963.displayName = 'HeavyComponent963';
export default HeavyComponent963;
