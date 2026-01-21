'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11482<T> = T extends (infer U)[]
  ? DeepReadonlyArray11482<U>
  : T extends object
  ? DeepReadonlyObject11482<T>
  : T;

interface DeepReadonlyArray11482<T> extends ReadonlyArray<DeepReadonly11482<T>> {}

type DeepReadonlyObject11482<T> = {
  readonly [P in keyof T]: DeepReadonly11482<T[P]>;
};

type UnionToIntersection11482<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11482<T> = UnionToIntersection11482<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11482<T extends unknown[], V> = [...T, V];

type TuplifyUnion11482<T, L = LastOf11482<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11482<TuplifyUnion11482<Exclude<T, L>>, L>;

type DeepPartial11482<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11482<T[P]> }
  : T;

type Paths11482<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11482<K, Paths11482<T[K], Prev11482[D]>> : never }[keyof T]
  : never;

type Prev11482 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11482<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11482 {
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

type ConfigPaths11482 = Paths11482<NestedConfig11482>;

interface HeavyProps11482 {
  config: DeepPartial11482<NestedConfig11482>;
  path?: ConfigPaths11482;
}

const HeavyComponent11482 = memo(function HeavyComponent11482({ config }: HeavyProps11482) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11482) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11482 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11482: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11482.displayName = 'HeavyComponent11482';
export default HeavyComponent11482;
