'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11556<T> = T extends (infer U)[]
  ? DeepReadonlyArray11556<U>
  : T extends object
  ? DeepReadonlyObject11556<T>
  : T;

interface DeepReadonlyArray11556<T> extends ReadonlyArray<DeepReadonly11556<T>> {}

type DeepReadonlyObject11556<T> = {
  readonly [P in keyof T]: DeepReadonly11556<T[P]>;
};

type UnionToIntersection11556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11556<T> = UnionToIntersection11556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11556<T extends unknown[], V> = [...T, V];

type TuplifyUnion11556<T, L = LastOf11556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11556<TuplifyUnion11556<Exclude<T, L>>, L>;

type DeepPartial11556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11556<T[P]> }
  : T;

type Paths11556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11556<K, Paths11556<T[K], Prev11556[D]>> : never }[keyof T]
  : never;

type Prev11556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11556 {
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

type ConfigPaths11556 = Paths11556<NestedConfig11556>;

interface HeavyProps11556 {
  config: DeepPartial11556<NestedConfig11556>;
  path?: ConfigPaths11556;
}

const HeavyComponent11556 = memo(function HeavyComponent11556({ config }: HeavyProps11556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11556.displayName = 'HeavyComponent11556';
export default HeavyComponent11556;
