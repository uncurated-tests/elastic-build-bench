'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly308<T> = T extends (infer U)[]
  ? DeepReadonlyArray308<U>
  : T extends object
  ? DeepReadonlyObject308<T>
  : T;

interface DeepReadonlyArray308<T> extends ReadonlyArray<DeepReadonly308<T>> {}

type DeepReadonlyObject308<T> = {
  readonly [P in keyof T]: DeepReadonly308<T[P]>;
};

type UnionToIntersection308<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf308<T> = UnionToIntersection308<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push308<T extends unknown[], V> = [...T, V];

type TuplifyUnion308<T, L = LastOf308<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push308<TuplifyUnion308<Exclude<T, L>>, L>;

type DeepPartial308<T> = T extends object
  ? { [P in keyof T]?: DeepPartial308<T[P]> }
  : T;

type Paths308<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join308<K, Paths308<T[K], Prev308[D]>> : never }[keyof T]
  : never;

type Prev308 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join308<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig308 {
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

type ConfigPaths308 = Paths308<NestedConfig308>;

interface HeavyProps308 {
  config: DeepPartial308<NestedConfig308>;
  path?: ConfigPaths308;
}

const HeavyComponent308 = memo(function HeavyComponent308({ config }: HeavyProps308) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 308) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-308 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H308: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent308.displayName = 'HeavyComponent308';
export default HeavyComponent308;
