'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11865<T> = T extends (infer U)[]
  ? DeepReadonlyArray11865<U>
  : T extends object
  ? DeepReadonlyObject11865<T>
  : T;

interface DeepReadonlyArray11865<T> extends ReadonlyArray<DeepReadonly11865<T>> {}

type DeepReadonlyObject11865<T> = {
  readonly [P in keyof T]: DeepReadonly11865<T[P]>;
};

type UnionToIntersection11865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11865<T> = UnionToIntersection11865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11865<T extends unknown[], V> = [...T, V];

type TuplifyUnion11865<T, L = LastOf11865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11865<TuplifyUnion11865<Exclude<T, L>>, L>;

type DeepPartial11865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11865<T[P]> }
  : T;

type Paths11865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11865<K, Paths11865<T[K], Prev11865[D]>> : never }[keyof T]
  : never;

type Prev11865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11865 {
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

type ConfigPaths11865 = Paths11865<NestedConfig11865>;

interface HeavyProps11865 {
  config: DeepPartial11865<NestedConfig11865>;
  path?: ConfigPaths11865;
}

const HeavyComponent11865 = memo(function HeavyComponent11865({ config }: HeavyProps11865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11865.displayName = 'HeavyComponent11865';
export default HeavyComponent11865;
