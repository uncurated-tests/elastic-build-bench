'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11293<T> = T extends (infer U)[]
  ? DeepReadonlyArray11293<U>
  : T extends object
  ? DeepReadonlyObject11293<T>
  : T;

interface DeepReadonlyArray11293<T> extends ReadonlyArray<DeepReadonly11293<T>> {}

type DeepReadonlyObject11293<T> = {
  readonly [P in keyof T]: DeepReadonly11293<T[P]>;
};

type UnionToIntersection11293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11293<T> = UnionToIntersection11293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11293<T extends unknown[], V> = [...T, V];

type TuplifyUnion11293<T, L = LastOf11293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11293<TuplifyUnion11293<Exclude<T, L>>, L>;

type DeepPartial11293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11293<T[P]> }
  : T;

type Paths11293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11293<K, Paths11293<T[K], Prev11293[D]>> : never }[keyof T]
  : never;

type Prev11293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11293 {
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

type ConfigPaths11293 = Paths11293<NestedConfig11293>;

interface HeavyProps11293 {
  config: DeepPartial11293<NestedConfig11293>;
  path?: ConfigPaths11293;
}

const HeavyComponent11293 = memo(function HeavyComponent11293({ config }: HeavyProps11293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11293.displayName = 'HeavyComponent11293';
export default HeavyComponent11293;
