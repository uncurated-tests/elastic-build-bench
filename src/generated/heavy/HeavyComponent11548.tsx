'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11548<T> = T extends (infer U)[]
  ? DeepReadonlyArray11548<U>
  : T extends object
  ? DeepReadonlyObject11548<T>
  : T;

interface DeepReadonlyArray11548<T> extends ReadonlyArray<DeepReadonly11548<T>> {}

type DeepReadonlyObject11548<T> = {
  readonly [P in keyof T]: DeepReadonly11548<T[P]>;
};

type UnionToIntersection11548<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11548<T> = UnionToIntersection11548<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11548<T extends unknown[], V> = [...T, V];

type TuplifyUnion11548<T, L = LastOf11548<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11548<TuplifyUnion11548<Exclude<T, L>>, L>;

type DeepPartial11548<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11548<T[P]> }
  : T;

type Paths11548<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11548<K, Paths11548<T[K], Prev11548[D]>> : never }[keyof T]
  : never;

type Prev11548 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11548<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11548 {
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

type ConfigPaths11548 = Paths11548<NestedConfig11548>;

interface HeavyProps11548 {
  config: DeepPartial11548<NestedConfig11548>;
  path?: ConfigPaths11548;
}

const HeavyComponent11548 = memo(function HeavyComponent11548({ config }: HeavyProps11548) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11548) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11548 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11548: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11548.displayName = 'HeavyComponent11548';
export default HeavyComponent11548;
