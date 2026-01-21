'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11966<T> = T extends (infer U)[]
  ? DeepReadonlyArray11966<U>
  : T extends object
  ? DeepReadonlyObject11966<T>
  : T;

interface DeepReadonlyArray11966<T> extends ReadonlyArray<DeepReadonly11966<T>> {}

type DeepReadonlyObject11966<T> = {
  readonly [P in keyof T]: DeepReadonly11966<T[P]>;
};

type UnionToIntersection11966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11966<T> = UnionToIntersection11966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11966<T extends unknown[], V> = [...T, V];

type TuplifyUnion11966<T, L = LastOf11966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11966<TuplifyUnion11966<Exclude<T, L>>, L>;

type DeepPartial11966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11966<T[P]> }
  : T;

type Paths11966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11966<K, Paths11966<T[K], Prev11966[D]>> : never }[keyof T]
  : never;

type Prev11966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11966 {
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

type ConfigPaths11966 = Paths11966<NestedConfig11966>;

interface HeavyProps11966 {
  config: DeepPartial11966<NestedConfig11966>;
  path?: ConfigPaths11966;
}

const HeavyComponent11966 = memo(function HeavyComponent11966({ config }: HeavyProps11966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11966.displayName = 'HeavyComponent11966';
export default HeavyComponent11966;
