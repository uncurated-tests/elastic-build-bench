'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11196<T> = T extends (infer U)[]
  ? DeepReadonlyArray11196<U>
  : T extends object
  ? DeepReadonlyObject11196<T>
  : T;

interface DeepReadonlyArray11196<T> extends ReadonlyArray<DeepReadonly11196<T>> {}

type DeepReadonlyObject11196<T> = {
  readonly [P in keyof T]: DeepReadonly11196<T[P]>;
};

type UnionToIntersection11196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11196<T> = UnionToIntersection11196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11196<T extends unknown[], V> = [...T, V];

type TuplifyUnion11196<T, L = LastOf11196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11196<TuplifyUnion11196<Exclude<T, L>>, L>;

type DeepPartial11196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11196<T[P]> }
  : T;

type Paths11196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11196<K, Paths11196<T[K], Prev11196[D]>> : never }[keyof T]
  : never;

type Prev11196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11196 {
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

type ConfigPaths11196 = Paths11196<NestedConfig11196>;

interface HeavyProps11196 {
  config: DeepPartial11196<NestedConfig11196>;
  path?: ConfigPaths11196;
}

const HeavyComponent11196 = memo(function HeavyComponent11196({ config }: HeavyProps11196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11196.displayName = 'HeavyComponent11196';
export default HeavyComponent11196;
