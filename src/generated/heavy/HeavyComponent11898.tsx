'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11898<T> = T extends (infer U)[]
  ? DeepReadonlyArray11898<U>
  : T extends object
  ? DeepReadonlyObject11898<T>
  : T;

interface DeepReadonlyArray11898<T> extends ReadonlyArray<DeepReadonly11898<T>> {}

type DeepReadonlyObject11898<T> = {
  readonly [P in keyof T]: DeepReadonly11898<T[P]>;
};

type UnionToIntersection11898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11898<T> = UnionToIntersection11898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11898<T extends unknown[], V> = [...T, V];

type TuplifyUnion11898<T, L = LastOf11898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11898<TuplifyUnion11898<Exclude<T, L>>, L>;

type DeepPartial11898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11898<T[P]> }
  : T;

type Paths11898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11898<K, Paths11898<T[K], Prev11898[D]>> : never }[keyof T]
  : never;

type Prev11898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11898 {
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

type ConfigPaths11898 = Paths11898<NestedConfig11898>;

interface HeavyProps11898 {
  config: DeepPartial11898<NestedConfig11898>;
  path?: ConfigPaths11898;
}

const HeavyComponent11898 = memo(function HeavyComponent11898({ config }: HeavyProps11898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11898.displayName = 'HeavyComponent11898';
export default HeavyComponent11898;
