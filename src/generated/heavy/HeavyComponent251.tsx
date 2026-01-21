'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly251<T> = T extends (infer U)[]
  ? DeepReadonlyArray251<U>
  : T extends object
  ? DeepReadonlyObject251<T>
  : T;

interface DeepReadonlyArray251<T> extends ReadonlyArray<DeepReadonly251<T>> {}

type DeepReadonlyObject251<T> = {
  readonly [P in keyof T]: DeepReadonly251<T[P]>;
};

type UnionToIntersection251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf251<T> = UnionToIntersection251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push251<T extends unknown[], V> = [...T, V];

type TuplifyUnion251<T, L = LastOf251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push251<TuplifyUnion251<Exclude<T, L>>, L>;

type DeepPartial251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial251<T[P]> }
  : T;

type Paths251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join251<K, Paths251<T[K], Prev251[D]>> : never }[keyof T]
  : never;

type Prev251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig251 {
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

type ConfigPaths251 = Paths251<NestedConfig251>;

interface HeavyProps251 {
  config: DeepPartial251<NestedConfig251>;
  path?: ConfigPaths251;
}

const HeavyComponent251 = memo(function HeavyComponent251({ config }: HeavyProps251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent251.displayName = 'HeavyComponent251';
export default HeavyComponent251;
