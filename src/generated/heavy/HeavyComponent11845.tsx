'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11845<T> = T extends (infer U)[]
  ? DeepReadonlyArray11845<U>
  : T extends object
  ? DeepReadonlyObject11845<T>
  : T;

interface DeepReadonlyArray11845<T> extends ReadonlyArray<DeepReadonly11845<T>> {}

type DeepReadonlyObject11845<T> = {
  readonly [P in keyof T]: DeepReadonly11845<T[P]>;
};

type UnionToIntersection11845<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11845<T> = UnionToIntersection11845<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11845<T extends unknown[], V> = [...T, V];

type TuplifyUnion11845<T, L = LastOf11845<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11845<TuplifyUnion11845<Exclude<T, L>>, L>;

type DeepPartial11845<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11845<T[P]> }
  : T;

type Paths11845<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11845<K, Paths11845<T[K], Prev11845[D]>> : never }[keyof T]
  : never;

type Prev11845 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11845<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11845 {
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

type ConfigPaths11845 = Paths11845<NestedConfig11845>;

interface HeavyProps11845 {
  config: DeepPartial11845<NestedConfig11845>;
  path?: ConfigPaths11845;
}

const HeavyComponent11845 = memo(function HeavyComponent11845({ config }: HeavyProps11845) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11845) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11845 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11845: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11845.displayName = 'HeavyComponent11845';
export default HeavyComponent11845;
