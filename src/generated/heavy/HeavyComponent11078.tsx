'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11078<T> = T extends (infer U)[]
  ? DeepReadonlyArray11078<U>
  : T extends object
  ? DeepReadonlyObject11078<T>
  : T;

interface DeepReadonlyArray11078<T> extends ReadonlyArray<DeepReadonly11078<T>> {}

type DeepReadonlyObject11078<T> = {
  readonly [P in keyof T]: DeepReadonly11078<T[P]>;
};

type UnionToIntersection11078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11078<T> = UnionToIntersection11078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11078<T extends unknown[], V> = [...T, V];

type TuplifyUnion11078<T, L = LastOf11078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11078<TuplifyUnion11078<Exclude<T, L>>, L>;

type DeepPartial11078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11078<T[P]> }
  : T;

type Paths11078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11078<K, Paths11078<T[K], Prev11078[D]>> : never }[keyof T]
  : never;

type Prev11078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11078 {
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

type ConfigPaths11078 = Paths11078<NestedConfig11078>;

interface HeavyProps11078 {
  config: DeepPartial11078<NestedConfig11078>;
  path?: ConfigPaths11078;
}

const HeavyComponent11078 = memo(function HeavyComponent11078({ config }: HeavyProps11078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11078.displayName = 'HeavyComponent11078';
export default HeavyComponent11078;
