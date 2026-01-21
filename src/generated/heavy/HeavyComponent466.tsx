'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly466<T> = T extends (infer U)[]
  ? DeepReadonlyArray466<U>
  : T extends object
  ? DeepReadonlyObject466<T>
  : T;

interface DeepReadonlyArray466<T> extends ReadonlyArray<DeepReadonly466<T>> {}

type DeepReadonlyObject466<T> = {
  readonly [P in keyof T]: DeepReadonly466<T[P]>;
};

type UnionToIntersection466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf466<T> = UnionToIntersection466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push466<T extends unknown[], V> = [...T, V];

type TuplifyUnion466<T, L = LastOf466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push466<TuplifyUnion466<Exclude<T, L>>, L>;

type DeepPartial466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial466<T[P]> }
  : T;

type Paths466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join466<K, Paths466<T[K], Prev466[D]>> : never }[keyof T]
  : never;

type Prev466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig466 {
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

type ConfigPaths466 = Paths466<NestedConfig466>;

interface HeavyProps466 {
  config: DeepPartial466<NestedConfig466>;
  path?: ConfigPaths466;
}

const HeavyComponent466 = memo(function HeavyComponent466({ config }: HeavyProps466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent466.displayName = 'HeavyComponent466';
export default HeavyComponent466;
