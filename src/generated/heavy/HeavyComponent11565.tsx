'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11565<T> = T extends (infer U)[]
  ? DeepReadonlyArray11565<U>
  : T extends object
  ? DeepReadonlyObject11565<T>
  : T;

interface DeepReadonlyArray11565<T> extends ReadonlyArray<DeepReadonly11565<T>> {}

type DeepReadonlyObject11565<T> = {
  readonly [P in keyof T]: DeepReadonly11565<T[P]>;
};

type UnionToIntersection11565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11565<T> = UnionToIntersection11565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11565<T extends unknown[], V> = [...T, V];

type TuplifyUnion11565<T, L = LastOf11565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11565<TuplifyUnion11565<Exclude<T, L>>, L>;

type DeepPartial11565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11565<T[P]> }
  : T;

type Paths11565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11565<K, Paths11565<T[K], Prev11565[D]>> : never }[keyof T]
  : never;

type Prev11565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11565 {
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

type ConfigPaths11565 = Paths11565<NestedConfig11565>;

interface HeavyProps11565 {
  config: DeepPartial11565<NestedConfig11565>;
  path?: ConfigPaths11565;
}

const HeavyComponent11565 = memo(function HeavyComponent11565({ config }: HeavyProps11565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11565.displayName = 'HeavyComponent11565';
export default HeavyComponent11565;
