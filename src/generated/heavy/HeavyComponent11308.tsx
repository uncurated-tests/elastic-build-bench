'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11308<T> = T extends (infer U)[]
  ? DeepReadonlyArray11308<U>
  : T extends object
  ? DeepReadonlyObject11308<T>
  : T;

interface DeepReadonlyArray11308<T> extends ReadonlyArray<DeepReadonly11308<T>> {}

type DeepReadonlyObject11308<T> = {
  readonly [P in keyof T]: DeepReadonly11308<T[P]>;
};

type UnionToIntersection11308<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11308<T> = UnionToIntersection11308<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11308<T extends unknown[], V> = [...T, V];

type TuplifyUnion11308<T, L = LastOf11308<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11308<TuplifyUnion11308<Exclude<T, L>>, L>;

type DeepPartial11308<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11308<T[P]> }
  : T;

type Paths11308<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11308<K, Paths11308<T[K], Prev11308[D]>> : never }[keyof T]
  : never;

type Prev11308 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11308<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11308 {
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

type ConfigPaths11308 = Paths11308<NestedConfig11308>;

interface HeavyProps11308 {
  config: DeepPartial11308<NestedConfig11308>;
  path?: ConfigPaths11308;
}

const HeavyComponent11308 = memo(function HeavyComponent11308({ config }: HeavyProps11308) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11308) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11308 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11308: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11308.displayName = 'HeavyComponent11308';
export default HeavyComponent11308;
