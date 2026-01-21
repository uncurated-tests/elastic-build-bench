'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11868<T> = T extends (infer U)[]
  ? DeepReadonlyArray11868<U>
  : T extends object
  ? DeepReadonlyObject11868<T>
  : T;

interface DeepReadonlyArray11868<T> extends ReadonlyArray<DeepReadonly11868<T>> {}

type DeepReadonlyObject11868<T> = {
  readonly [P in keyof T]: DeepReadonly11868<T[P]>;
};

type UnionToIntersection11868<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11868<T> = UnionToIntersection11868<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11868<T extends unknown[], V> = [...T, V];

type TuplifyUnion11868<T, L = LastOf11868<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11868<TuplifyUnion11868<Exclude<T, L>>, L>;

type DeepPartial11868<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11868<T[P]> }
  : T;

type Paths11868<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11868<K, Paths11868<T[K], Prev11868[D]>> : never }[keyof T]
  : never;

type Prev11868 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11868<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11868 {
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

type ConfigPaths11868 = Paths11868<NestedConfig11868>;

interface HeavyProps11868 {
  config: DeepPartial11868<NestedConfig11868>;
  path?: ConfigPaths11868;
}

const HeavyComponent11868 = memo(function HeavyComponent11868({ config }: HeavyProps11868) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11868) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11868 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11868: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11868.displayName = 'HeavyComponent11868';
export default HeavyComponent11868;
