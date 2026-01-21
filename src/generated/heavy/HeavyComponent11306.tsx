'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11306<T> = T extends (infer U)[]
  ? DeepReadonlyArray11306<U>
  : T extends object
  ? DeepReadonlyObject11306<T>
  : T;

interface DeepReadonlyArray11306<T> extends ReadonlyArray<DeepReadonly11306<T>> {}

type DeepReadonlyObject11306<T> = {
  readonly [P in keyof T]: DeepReadonly11306<T[P]>;
};

type UnionToIntersection11306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11306<T> = UnionToIntersection11306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11306<T extends unknown[], V> = [...T, V];

type TuplifyUnion11306<T, L = LastOf11306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11306<TuplifyUnion11306<Exclude<T, L>>, L>;

type DeepPartial11306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11306<T[P]> }
  : T;

type Paths11306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11306<K, Paths11306<T[K], Prev11306[D]>> : never }[keyof T]
  : never;

type Prev11306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11306 {
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

type ConfigPaths11306 = Paths11306<NestedConfig11306>;

interface HeavyProps11306 {
  config: DeepPartial11306<NestedConfig11306>;
  path?: ConfigPaths11306;
}

const HeavyComponent11306 = memo(function HeavyComponent11306({ config }: HeavyProps11306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11306.displayName = 'HeavyComponent11306';
export default HeavyComponent11306;
