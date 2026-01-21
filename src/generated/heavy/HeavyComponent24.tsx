'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly24<T> = T extends (infer U)[]
  ? DeepReadonlyArray24<U>
  : T extends object
  ? DeepReadonlyObject24<T>
  : T;

interface DeepReadonlyArray24<T> extends ReadonlyArray<DeepReadonly24<T>> {}

type DeepReadonlyObject24<T> = {
  readonly [P in keyof T]: DeepReadonly24<T[P]>;
};

type UnionToIntersection24<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf24<T> = UnionToIntersection24<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push24<T extends unknown[], V> = [...T, V];

type TuplifyUnion24<T, L = LastOf24<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push24<TuplifyUnion24<Exclude<T, L>>, L>;

type DeepPartial24<T> = T extends object
  ? { [P in keyof T]?: DeepPartial24<T[P]> }
  : T;

type Paths24<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join24<K, Paths24<T[K], Prev24[D]>> : never }[keyof T]
  : never;

type Prev24 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join24<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig24 {
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

type ConfigPaths24 = Paths24<NestedConfig24>;

interface HeavyProps24 {
  config: DeepPartial24<NestedConfig24>;
  path?: ConfigPaths24;
}

const HeavyComponent24 = memo(function HeavyComponent24({ config }: HeavyProps24) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 24) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-24 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H24: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent24.displayName = 'HeavyComponent24';
export default HeavyComponent24;
