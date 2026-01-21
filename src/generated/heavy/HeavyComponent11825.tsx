'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11825<T> = T extends (infer U)[]
  ? DeepReadonlyArray11825<U>
  : T extends object
  ? DeepReadonlyObject11825<T>
  : T;

interface DeepReadonlyArray11825<T> extends ReadonlyArray<DeepReadonly11825<T>> {}

type DeepReadonlyObject11825<T> = {
  readonly [P in keyof T]: DeepReadonly11825<T[P]>;
};

type UnionToIntersection11825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11825<T> = UnionToIntersection11825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11825<T extends unknown[], V> = [...T, V];

type TuplifyUnion11825<T, L = LastOf11825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11825<TuplifyUnion11825<Exclude<T, L>>, L>;

type DeepPartial11825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11825<T[P]> }
  : T;

type Paths11825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11825<K, Paths11825<T[K], Prev11825[D]>> : never }[keyof T]
  : never;

type Prev11825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11825 {
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

type ConfigPaths11825 = Paths11825<NestedConfig11825>;

interface HeavyProps11825 {
  config: DeepPartial11825<NestedConfig11825>;
  path?: ConfigPaths11825;
}

const HeavyComponent11825 = memo(function HeavyComponent11825({ config }: HeavyProps11825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11825.displayName = 'HeavyComponent11825';
export default HeavyComponent11825;
