'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11290<T> = T extends (infer U)[]
  ? DeepReadonlyArray11290<U>
  : T extends object
  ? DeepReadonlyObject11290<T>
  : T;

interface DeepReadonlyArray11290<T> extends ReadonlyArray<DeepReadonly11290<T>> {}

type DeepReadonlyObject11290<T> = {
  readonly [P in keyof T]: DeepReadonly11290<T[P]>;
};

type UnionToIntersection11290<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11290<T> = UnionToIntersection11290<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11290<T extends unknown[], V> = [...T, V];

type TuplifyUnion11290<T, L = LastOf11290<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11290<TuplifyUnion11290<Exclude<T, L>>, L>;

type DeepPartial11290<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11290<T[P]> }
  : T;

type Paths11290<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11290<K, Paths11290<T[K], Prev11290[D]>> : never }[keyof T]
  : never;

type Prev11290 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11290<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11290 {
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

type ConfigPaths11290 = Paths11290<NestedConfig11290>;

interface HeavyProps11290 {
  config: DeepPartial11290<NestedConfig11290>;
  path?: ConfigPaths11290;
}

const HeavyComponent11290 = memo(function HeavyComponent11290({ config }: HeavyProps11290) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11290) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11290 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11290: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11290.displayName = 'HeavyComponent11290';
export default HeavyComponent11290;
