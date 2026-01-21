'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11982<T> = T extends (infer U)[]
  ? DeepReadonlyArray11982<U>
  : T extends object
  ? DeepReadonlyObject11982<T>
  : T;

interface DeepReadonlyArray11982<T> extends ReadonlyArray<DeepReadonly11982<T>> {}

type DeepReadonlyObject11982<T> = {
  readonly [P in keyof T]: DeepReadonly11982<T[P]>;
};

type UnionToIntersection11982<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11982<T> = UnionToIntersection11982<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11982<T extends unknown[], V> = [...T, V];

type TuplifyUnion11982<T, L = LastOf11982<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11982<TuplifyUnion11982<Exclude<T, L>>, L>;

type DeepPartial11982<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11982<T[P]> }
  : T;

type Paths11982<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11982<K, Paths11982<T[K], Prev11982[D]>> : never }[keyof T]
  : never;

type Prev11982 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11982<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11982 {
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

type ConfigPaths11982 = Paths11982<NestedConfig11982>;

interface HeavyProps11982 {
  config: DeepPartial11982<NestedConfig11982>;
  path?: ConfigPaths11982;
}

const HeavyComponent11982 = memo(function HeavyComponent11982({ config }: HeavyProps11982) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11982) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11982 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11982: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11982.displayName = 'HeavyComponent11982';
export default HeavyComponent11982;
