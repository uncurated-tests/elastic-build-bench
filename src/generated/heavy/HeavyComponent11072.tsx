'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11072<T> = T extends (infer U)[]
  ? DeepReadonlyArray11072<U>
  : T extends object
  ? DeepReadonlyObject11072<T>
  : T;

interface DeepReadonlyArray11072<T> extends ReadonlyArray<DeepReadonly11072<T>> {}

type DeepReadonlyObject11072<T> = {
  readonly [P in keyof T]: DeepReadonly11072<T[P]>;
};

type UnionToIntersection11072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11072<T> = UnionToIntersection11072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11072<T extends unknown[], V> = [...T, V];

type TuplifyUnion11072<T, L = LastOf11072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11072<TuplifyUnion11072<Exclude<T, L>>, L>;

type DeepPartial11072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11072<T[P]> }
  : T;

type Paths11072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11072<K, Paths11072<T[K], Prev11072[D]>> : never }[keyof T]
  : never;

type Prev11072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11072 {
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

type ConfigPaths11072 = Paths11072<NestedConfig11072>;

interface HeavyProps11072 {
  config: DeepPartial11072<NestedConfig11072>;
  path?: ConfigPaths11072;
}

const HeavyComponent11072 = memo(function HeavyComponent11072({ config }: HeavyProps11072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11072.displayName = 'HeavyComponent11072';
export default HeavyComponent11072;
