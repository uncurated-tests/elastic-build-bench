'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11645<T> = T extends (infer U)[]
  ? DeepReadonlyArray11645<U>
  : T extends object
  ? DeepReadonlyObject11645<T>
  : T;

interface DeepReadonlyArray11645<T> extends ReadonlyArray<DeepReadonly11645<T>> {}

type DeepReadonlyObject11645<T> = {
  readonly [P in keyof T]: DeepReadonly11645<T[P]>;
};

type UnionToIntersection11645<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11645<T> = UnionToIntersection11645<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11645<T extends unknown[], V> = [...T, V];

type TuplifyUnion11645<T, L = LastOf11645<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11645<TuplifyUnion11645<Exclude<T, L>>, L>;

type DeepPartial11645<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11645<T[P]> }
  : T;

type Paths11645<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11645<K, Paths11645<T[K], Prev11645[D]>> : never }[keyof T]
  : never;

type Prev11645 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11645<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11645 {
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

type ConfigPaths11645 = Paths11645<NestedConfig11645>;

interface HeavyProps11645 {
  config: DeepPartial11645<NestedConfig11645>;
  path?: ConfigPaths11645;
}

const HeavyComponent11645 = memo(function HeavyComponent11645({ config }: HeavyProps11645) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11645) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11645 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11645: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11645.displayName = 'HeavyComponent11645';
export default HeavyComponent11645;
