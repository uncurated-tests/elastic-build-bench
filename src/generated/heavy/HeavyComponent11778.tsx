'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11778<T> = T extends (infer U)[]
  ? DeepReadonlyArray11778<U>
  : T extends object
  ? DeepReadonlyObject11778<T>
  : T;

interface DeepReadonlyArray11778<T> extends ReadonlyArray<DeepReadonly11778<T>> {}

type DeepReadonlyObject11778<T> = {
  readonly [P in keyof T]: DeepReadonly11778<T[P]>;
};

type UnionToIntersection11778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11778<T> = UnionToIntersection11778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11778<T extends unknown[], V> = [...T, V];

type TuplifyUnion11778<T, L = LastOf11778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11778<TuplifyUnion11778<Exclude<T, L>>, L>;

type DeepPartial11778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11778<T[P]> }
  : T;

type Paths11778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11778<K, Paths11778<T[K], Prev11778[D]>> : never }[keyof T]
  : never;

type Prev11778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11778 {
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

type ConfigPaths11778 = Paths11778<NestedConfig11778>;

interface HeavyProps11778 {
  config: DeepPartial11778<NestedConfig11778>;
  path?: ConfigPaths11778;
}

const HeavyComponent11778 = memo(function HeavyComponent11778({ config }: HeavyProps11778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11778.displayName = 'HeavyComponent11778';
export default HeavyComponent11778;
