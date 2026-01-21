'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11061<T> = T extends (infer U)[]
  ? DeepReadonlyArray11061<U>
  : T extends object
  ? DeepReadonlyObject11061<T>
  : T;

interface DeepReadonlyArray11061<T> extends ReadonlyArray<DeepReadonly11061<T>> {}

type DeepReadonlyObject11061<T> = {
  readonly [P in keyof T]: DeepReadonly11061<T[P]>;
};

type UnionToIntersection11061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11061<T> = UnionToIntersection11061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11061<T extends unknown[], V> = [...T, V];

type TuplifyUnion11061<T, L = LastOf11061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11061<TuplifyUnion11061<Exclude<T, L>>, L>;

type DeepPartial11061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11061<T[P]> }
  : T;

type Paths11061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11061<K, Paths11061<T[K], Prev11061[D]>> : never }[keyof T]
  : never;

type Prev11061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11061 {
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

type ConfigPaths11061 = Paths11061<NestedConfig11061>;

interface HeavyProps11061 {
  config: DeepPartial11061<NestedConfig11061>;
  path?: ConfigPaths11061;
}

const HeavyComponent11061 = memo(function HeavyComponent11061({ config }: HeavyProps11061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11061.displayName = 'HeavyComponent11061';
export default HeavyComponent11061;
