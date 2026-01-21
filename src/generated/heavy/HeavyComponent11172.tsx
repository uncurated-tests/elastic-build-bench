'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11172<T> = T extends (infer U)[]
  ? DeepReadonlyArray11172<U>
  : T extends object
  ? DeepReadonlyObject11172<T>
  : T;

interface DeepReadonlyArray11172<T> extends ReadonlyArray<DeepReadonly11172<T>> {}

type DeepReadonlyObject11172<T> = {
  readonly [P in keyof T]: DeepReadonly11172<T[P]>;
};

type UnionToIntersection11172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11172<T> = UnionToIntersection11172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11172<T extends unknown[], V> = [...T, V];

type TuplifyUnion11172<T, L = LastOf11172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11172<TuplifyUnion11172<Exclude<T, L>>, L>;

type DeepPartial11172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11172<T[P]> }
  : T;

type Paths11172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11172<K, Paths11172<T[K], Prev11172[D]>> : never }[keyof T]
  : never;

type Prev11172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11172 {
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

type ConfigPaths11172 = Paths11172<NestedConfig11172>;

interface HeavyProps11172 {
  config: DeepPartial11172<NestedConfig11172>;
  path?: ConfigPaths11172;
}

const HeavyComponent11172 = memo(function HeavyComponent11172({ config }: HeavyProps11172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11172.displayName = 'HeavyComponent11172';
export default HeavyComponent11172;
