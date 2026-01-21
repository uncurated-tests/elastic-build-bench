'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11698<T> = T extends (infer U)[]
  ? DeepReadonlyArray11698<U>
  : T extends object
  ? DeepReadonlyObject11698<T>
  : T;

interface DeepReadonlyArray11698<T> extends ReadonlyArray<DeepReadonly11698<T>> {}

type DeepReadonlyObject11698<T> = {
  readonly [P in keyof T]: DeepReadonly11698<T[P]>;
};

type UnionToIntersection11698<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11698<T> = UnionToIntersection11698<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11698<T extends unknown[], V> = [...T, V];

type TuplifyUnion11698<T, L = LastOf11698<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11698<TuplifyUnion11698<Exclude<T, L>>, L>;

type DeepPartial11698<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11698<T[P]> }
  : T;

type Paths11698<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11698<K, Paths11698<T[K], Prev11698[D]>> : never }[keyof T]
  : never;

type Prev11698 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11698<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11698 {
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

type ConfigPaths11698 = Paths11698<NestedConfig11698>;

interface HeavyProps11698 {
  config: DeepPartial11698<NestedConfig11698>;
  path?: ConfigPaths11698;
}

const HeavyComponent11698 = memo(function HeavyComponent11698({ config }: HeavyProps11698) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11698) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11698 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11698: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11698.displayName = 'HeavyComponent11698';
export default HeavyComponent11698;
