'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11927<T> = T extends (infer U)[]
  ? DeepReadonlyArray11927<U>
  : T extends object
  ? DeepReadonlyObject11927<T>
  : T;

interface DeepReadonlyArray11927<T> extends ReadonlyArray<DeepReadonly11927<T>> {}

type DeepReadonlyObject11927<T> = {
  readonly [P in keyof T]: DeepReadonly11927<T[P]>;
};

type UnionToIntersection11927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11927<T> = UnionToIntersection11927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11927<T extends unknown[], V> = [...T, V];

type TuplifyUnion11927<T, L = LastOf11927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11927<TuplifyUnion11927<Exclude<T, L>>, L>;

type DeepPartial11927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11927<T[P]> }
  : T;

type Paths11927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11927<K, Paths11927<T[K], Prev11927[D]>> : never }[keyof T]
  : never;

type Prev11927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11927 {
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

type ConfigPaths11927 = Paths11927<NestedConfig11927>;

interface HeavyProps11927 {
  config: DeepPartial11927<NestedConfig11927>;
  path?: ConfigPaths11927;
}

const HeavyComponent11927 = memo(function HeavyComponent11927({ config }: HeavyProps11927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11927.displayName = 'HeavyComponent11927';
export default HeavyComponent11927;
