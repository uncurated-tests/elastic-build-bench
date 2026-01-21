'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11946<T> = T extends (infer U)[]
  ? DeepReadonlyArray11946<U>
  : T extends object
  ? DeepReadonlyObject11946<T>
  : T;

interface DeepReadonlyArray11946<T> extends ReadonlyArray<DeepReadonly11946<T>> {}

type DeepReadonlyObject11946<T> = {
  readonly [P in keyof T]: DeepReadonly11946<T[P]>;
};

type UnionToIntersection11946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11946<T> = UnionToIntersection11946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11946<T extends unknown[], V> = [...T, V];

type TuplifyUnion11946<T, L = LastOf11946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11946<TuplifyUnion11946<Exclude<T, L>>, L>;

type DeepPartial11946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11946<T[P]> }
  : T;

type Paths11946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11946<K, Paths11946<T[K], Prev11946[D]>> : never }[keyof T]
  : never;

type Prev11946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11946 {
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

type ConfigPaths11946 = Paths11946<NestedConfig11946>;

interface HeavyProps11946 {
  config: DeepPartial11946<NestedConfig11946>;
  path?: ConfigPaths11946;
}

const HeavyComponent11946 = memo(function HeavyComponent11946({ config }: HeavyProps11946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11946.displayName = 'HeavyComponent11946';
export default HeavyComponent11946;
