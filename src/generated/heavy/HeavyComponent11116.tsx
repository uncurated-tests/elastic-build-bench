'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11116<T> = T extends (infer U)[]
  ? DeepReadonlyArray11116<U>
  : T extends object
  ? DeepReadonlyObject11116<T>
  : T;

interface DeepReadonlyArray11116<T> extends ReadonlyArray<DeepReadonly11116<T>> {}

type DeepReadonlyObject11116<T> = {
  readonly [P in keyof T]: DeepReadonly11116<T[P]>;
};

type UnionToIntersection11116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11116<T> = UnionToIntersection11116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11116<T extends unknown[], V> = [...T, V];

type TuplifyUnion11116<T, L = LastOf11116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11116<TuplifyUnion11116<Exclude<T, L>>, L>;

type DeepPartial11116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11116<T[P]> }
  : T;

type Paths11116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11116<K, Paths11116<T[K], Prev11116[D]>> : never }[keyof T]
  : never;

type Prev11116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11116 {
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

type ConfigPaths11116 = Paths11116<NestedConfig11116>;

interface HeavyProps11116 {
  config: DeepPartial11116<NestedConfig11116>;
  path?: ConfigPaths11116;
}

const HeavyComponent11116 = memo(function HeavyComponent11116({ config }: HeavyProps11116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11116.displayName = 'HeavyComponent11116';
export default HeavyComponent11116;
