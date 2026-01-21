'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11508<T> = T extends (infer U)[]
  ? DeepReadonlyArray11508<U>
  : T extends object
  ? DeepReadonlyObject11508<T>
  : T;

interface DeepReadonlyArray11508<T> extends ReadonlyArray<DeepReadonly11508<T>> {}

type DeepReadonlyObject11508<T> = {
  readonly [P in keyof T]: DeepReadonly11508<T[P]>;
};

type UnionToIntersection11508<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11508<T> = UnionToIntersection11508<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11508<T extends unknown[], V> = [...T, V];

type TuplifyUnion11508<T, L = LastOf11508<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11508<TuplifyUnion11508<Exclude<T, L>>, L>;

type DeepPartial11508<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11508<T[P]> }
  : T;

type Paths11508<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11508<K, Paths11508<T[K], Prev11508[D]>> : never }[keyof T]
  : never;

type Prev11508 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11508<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11508 {
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

type ConfigPaths11508 = Paths11508<NestedConfig11508>;

interface HeavyProps11508 {
  config: DeepPartial11508<NestedConfig11508>;
  path?: ConfigPaths11508;
}

const HeavyComponent11508 = memo(function HeavyComponent11508({ config }: HeavyProps11508) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11508) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11508 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11508: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11508.displayName = 'HeavyComponent11508';
export default HeavyComponent11508;
