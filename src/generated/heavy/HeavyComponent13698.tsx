'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13698<T> = T extends (infer U)[]
  ? DeepReadonlyArray13698<U>
  : T extends object
  ? DeepReadonlyObject13698<T>
  : T;

interface DeepReadonlyArray13698<T> extends ReadonlyArray<DeepReadonly13698<T>> {}

type DeepReadonlyObject13698<T> = {
  readonly [P in keyof T]: DeepReadonly13698<T[P]>;
};

type UnionToIntersection13698<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13698<T> = UnionToIntersection13698<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13698<T extends unknown[], V> = [...T, V];

type TuplifyUnion13698<T, L = LastOf13698<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13698<TuplifyUnion13698<Exclude<T, L>>, L>;

type DeepPartial13698<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13698<T[P]> }
  : T;

type Paths13698<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13698<K, Paths13698<T[K], Prev13698[D]>> : never }[keyof T]
  : never;

type Prev13698 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13698<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13698 {
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

type ConfigPaths13698 = Paths13698<NestedConfig13698>;

interface HeavyProps13698 {
  config: DeepPartial13698<NestedConfig13698>;
  path?: ConfigPaths13698;
}

const HeavyComponent13698 = memo(function HeavyComponent13698({ config }: HeavyProps13698) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13698) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13698 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13698: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13698.displayName = 'HeavyComponent13698';
export default HeavyComponent13698;
