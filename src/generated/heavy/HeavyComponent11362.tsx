'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11362<T> = T extends (infer U)[]
  ? DeepReadonlyArray11362<U>
  : T extends object
  ? DeepReadonlyObject11362<T>
  : T;

interface DeepReadonlyArray11362<T> extends ReadonlyArray<DeepReadonly11362<T>> {}

type DeepReadonlyObject11362<T> = {
  readonly [P in keyof T]: DeepReadonly11362<T[P]>;
};

type UnionToIntersection11362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11362<T> = UnionToIntersection11362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11362<T extends unknown[], V> = [...T, V];

type TuplifyUnion11362<T, L = LastOf11362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11362<TuplifyUnion11362<Exclude<T, L>>, L>;

type DeepPartial11362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11362<T[P]> }
  : T;

type Paths11362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11362<K, Paths11362<T[K], Prev11362[D]>> : never }[keyof T]
  : never;

type Prev11362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11362 {
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

type ConfigPaths11362 = Paths11362<NestedConfig11362>;

interface HeavyProps11362 {
  config: DeepPartial11362<NestedConfig11362>;
  path?: ConfigPaths11362;
}

const HeavyComponent11362 = memo(function HeavyComponent11362({ config }: HeavyProps11362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11362.displayName = 'HeavyComponent11362';
export default HeavyComponent11362;
