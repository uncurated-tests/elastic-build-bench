'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11659<T> = T extends (infer U)[]
  ? DeepReadonlyArray11659<U>
  : T extends object
  ? DeepReadonlyObject11659<T>
  : T;

interface DeepReadonlyArray11659<T> extends ReadonlyArray<DeepReadonly11659<T>> {}

type DeepReadonlyObject11659<T> = {
  readonly [P in keyof T]: DeepReadonly11659<T[P]>;
};

type UnionToIntersection11659<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11659<T> = UnionToIntersection11659<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11659<T extends unknown[], V> = [...T, V];

type TuplifyUnion11659<T, L = LastOf11659<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11659<TuplifyUnion11659<Exclude<T, L>>, L>;

type DeepPartial11659<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11659<T[P]> }
  : T;

type Paths11659<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11659<K, Paths11659<T[K], Prev11659[D]>> : never }[keyof T]
  : never;

type Prev11659 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11659<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11659 {
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

type ConfigPaths11659 = Paths11659<NestedConfig11659>;

interface HeavyProps11659 {
  config: DeepPartial11659<NestedConfig11659>;
  path?: ConfigPaths11659;
}

const HeavyComponent11659 = memo(function HeavyComponent11659({ config }: HeavyProps11659) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11659) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11659 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11659: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11659.displayName = 'HeavyComponent11659';
export default HeavyComponent11659;
