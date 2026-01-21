'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly793<T> = T extends (infer U)[]
  ? DeepReadonlyArray793<U>
  : T extends object
  ? DeepReadonlyObject793<T>
  : T;

interface DeepReadonlyArray793<T> extends ReadonlyArray<DeepReadonly793<T>> {}

type DeepReadonlyObject793<T> = {
  readonly [P in keyof T]: DeepReadonly793<T[P]>;
};

type UnionToIntersection793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf793<T> = UnionToIntersection793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push793<T extends unknown[], V> = [...T, V];

type TuplifyUnion793<T, L = LastOf793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push793<TuplifyUnion793<Exclude<T, L>>, L>;

type DeepPartial793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial793<T[P]> }
  : T;

type Paths793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join793<K, Paths793<T[K], Prev793[D]>> : never }[keyof T]
  : never;

type Prev793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig793 {
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

type ConfigPaths793 = Paths793<NestedConfig793>;

interface HeavyProps793 {
  config: DeepPartial793<NestedConfig793>;
  path?: ConfigPaths793;
}

const HeavyComponent793 = memo(function HeavyComponent793({ config }: HeavyProps793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent793.displayName = 'HeavyComponent793';
export default HeavyComponent793;
