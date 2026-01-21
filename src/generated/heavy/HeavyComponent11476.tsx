'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11476<T> = T extends (infer U)[]
  ? DeepReadonlyArray11476<U>
  : T extends object
  ? DeepReadonlyObject11476<T>
  : T;

interface DeepReadonlyArray11476<T> extends ReadonlyArray<DeepReadonly11476<T>> {}

type DeepReadonlyObject11476<T> = {
  readonly [P in keyof T]: DeepReadonly11476<T[P]>;
};

type UnionToIntersection11476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11476<T> = UnionToIntersection11476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11476<T extends unknown[], V> = [...T, V];

type TuplifyUnion11476<T, L = LastOf11476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11476<TuplifyUnion11476<Exclude<T, L>>, L>;

type DeepPartial11476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11476<T[P]> }
  : T;

type Paths11476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11476<K, Paths11476<T[K], Prev11476[D]>> : never }[keyof T]
  : never;

type Prev11476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11476 {
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

type ConfigPaths11476 = Paths11476<NestedConfig11476>;

interface HeavyProps11476 {
  config: DeepPartial11476<NestedConfig11476>;
  path?: ConfigPaths11476;
}

const HeavyComponent11476 = memo(function HeavyComponent11476({ config }: HeavyProps11476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11476.displayName = 'HeavyComponent11476';
export default HeavyComponent11476;
