'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11677<T> = T extends (infer U)[]
  ? DeepReadonlyArray11677<U>
  : T extends object
  ? DeepReadonlyObject11677<T>
  : T;

interface DeepReadonlyArray11677<T> extends ReadonlyArray<DeepReadonly11677<T>> {}

type DeepReadonlyObject11677<T> = {
  readonly [P in keyof T]: DeepReadonly11677<T[P]>;
};

type UnionToIntersection11677<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11677<T> = UnionToIntersection11677<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11677<T extends unknown[], V> = [...T, V];

type TuplifyUnion11677<T, L = LastOf11677<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11677<TuplifyUnion11677<Exclude<T, L>>, L>;

type DeepPartial11677<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11677<T[P]> }
  : T;

type Paths11677<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11677<K, Paths11677<T[K], Prev11677[D]>> : never }[keyof T]
  : never;

type Prev11677 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11677<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11677 {
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

type ConfigPaths11677 = Paths11677<NestedConfig11677>;

interface HeavyProps11677 {
  config: DeepPartial11677<NestedConfig11677>;
  path?: ConfigPaths11677;
}

const HeavyComponent11677 = memo(function HeavyComponent11677({ config }: HeavyProps11677) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11677) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11677 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11677: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11677.displayName = 'HeavyComponent11677';
export default HeavyComponent11677;
