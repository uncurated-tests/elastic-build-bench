'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11545<T> = T extends (infer U)[]
  ? DeepReadonlyArray11545<U>
  : T extends object
  ? DeepReadonlyObject11545<T>
  : T;

interface DeepReadonlyArray11545<T> extends ReadonlyArray<DeepReadonly11545<T>> {}

type DeepReadonlyObject11545<T> = {
  readonly [P in keyof T]: DeepReadonly11545<T[P]>;
};

type UnionToIntersection11545<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11545<T> = UnionToIntersection11545<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11545<T extends unknown[], V> = [...T, V];

type TuplifyUnion11545<T, L = LastOf11545<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11545<TuplifyUnion11545<Exclude<T, L>>, L>;

type DeepPartial11545<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11545<T[P]> }
  : T;

type Paths11545<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11545<K, Paths11545<T[K], Prev11545[D]>> : never }[keyof T]
  : never;

type Prev11545 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11545<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11545 {
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

type ConfigPaths11545 = Paths11545<NestedConfig11545>;

interface HeavyProps11545 {
  config: DeepPartial11545<NestedConfig11545>;
  path?: ConfigPaths11545;
}

const HeavyComponent11545 = memo(function HeavyComponent11545({ config }: HeavyProps11545) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11545) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11545 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11545: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11545.displayName = 'HeavyComponent11545';
export default HeavyComponent11545;
