'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11111<T> = T extends (infer U)[]
  ? DeepReadonlyArray11111<U>
  : T extends object
  ? DeepReadonlyObject11111<T>
  : T;

interface DeepReadonlyArray11111<T> extends ReadonlyArray<DeepReadonly11111<T>> {}

type DeepReadonlyObject11111<T> = {
  readonly [P in keyof T]: DeepReadonly11111<T[P]>;
};

type UnionToIntersection11111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11111<T> = UnionToIntersection11111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11111<T extends unknown[], V> = [...T, V];

type TuplifyUnion11111<T, L = LastOf11111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11111<TuplifyUnion11111<Exclude<T, L>>, L>;

type DeepPartial11111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11111<T[P]> }
  : T;

type Paths11111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11111<K, Paths11111<T[K], Prev11111[D]>> : never }[keyof T]
  : never;

type Prev11111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11111 {
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

type ConfigPaths11111 = Paths11111<NestedConfig11111>;

interface HeavyProps11111 {
  config: DeepPartial11111<NestedConfig11111>;
  path?: ConfigPaths11111;
}

const HeavyComponent11111 = memo(function HeavyComponent11111({ config }: HeavyProps11111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11111.displayName = 'HeavyComponent11111';
export default HeavyComponent11111;
