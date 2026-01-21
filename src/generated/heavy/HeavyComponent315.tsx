'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly315<T> = T extends (infer U)[]
  ? DeepReadonlyArray315<U>
  : T extends object
  ? DeepReadonlyObject315<T>
  : T;

interface DeepReadonlyArray315<T> extends ReadonlyArray<DeepReadonly315<T>> {}

type DeepReadonlyObject315<T> = {
  readonly [P in keyof T]: DeepReadonly315<T[P]>;
};

type UnionToIntersection315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf315<T> = UnionToIntersection315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push315<T extends unknown[], V> = [...T, V];

type TuplifyUnion315<T, L = LastOf315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push315<TuplifyUnion315<Exclude<T, L>>, L>;

type DeepPartial315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial315<T[P]> }
  : T;

type Paths315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join315<K, Paths315<T[K], Prev315[D]>> : never }[keyof T]
  : never;

type Prev315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig315 {
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

type ConfigPaths315 = Paths315<NestedConfig315>;

interface HeavyProps315 {
  config: DeepPartial315<NestedConfig315>;
  path?: ConfigPaths315;
}

const HeavyComponent315 = memo(function HeavyComponent315({ config }: HeavyProps315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent315.displayName = 'HeavyComponent315';
export default HeavyComponent315;
