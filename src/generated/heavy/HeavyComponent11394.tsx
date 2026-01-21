'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11394<T> = T extends (infer U)[]
  ? DeepReadonlyArray11394<U>
  : T extends object
  ? DeepReadonlyObject11394<T>
  : T;

interface DeepReadonlyArray11394<T> extends ReadonlyArray<DeepReadonly11394<T>> {}

type DeepReadonlyObject11394<T> = {
  readonly [P in keyof T]: DeepReadonly11394<T[P]>;
};

type UnionToIntersection11394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11394<T> = UnionToIntersection11394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11394<T extends unknown[], V> = [...T, V];

type TuplifyUnion11394<T, L = LastOf11394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11394<TuplifyUnion11394<Exclude<T, L>>, L>;

type DeepPartial11394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11394<T[P]> }
  : T;

type Paths11394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11394<K, Paths11394<T[K], Prev11394[D]>> : never }[keyof T]
  : never;

type Prev11394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11394 {
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

type ConfigPaths11394 = Paths11394<NestedConfig11394>;

interface HeavyProps11394 {
  config: DeepPartial11394<NestedConfig11394>;
  path?: ConfigPaths11394;
}

const HeavyComponent11394 = memo(function HeavyComponent11394({ config }: HeavyProps11394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11394.displayName = 'HeavyComponent11394';
export default HeavyComponent11394;
